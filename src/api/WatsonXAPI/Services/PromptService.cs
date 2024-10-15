using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Linq.Expressions;
using System.Net.Http.Headers;
using WatsonXAPI.Services.Models;

namespace WatsonXAPI.Services;

public class PromptService : IPromptService
{

    protected const string PROMPT_PLACEHOLDER = "[IBMWATSONXPLACEHOLDER]";
    protected ApiKey APIAccess { get; init; }

    protected Token AccessToken { get; set; }

    public PromptService()
    {
        APIAccess = InitSecrets();
    }

    protected ApiKey InitSecrets()
    {
        ApiKey apiKey = new ApiKey();

        // Replace this with your own secrets json file containing the API Key:  See /secrets/Your-IBM-API-KEY.json for expected format
        // Idealy this would be moved to a secerts manager
        //using (StreamReader r = new StreamReader(@".\secrets\ibmc4capi2024.json"))
        using (StreamReader r = new StreamReader(@".\secrets\Your-IBM-API-KEY.json"))
        {
            string json = r.ReadToEnd();
            apiKey = JsonConvert.DeserializeObject<ApiKey>(json);
        }

        return apiKey;
    }



    protected async Task<bool> GetAccessToken()
    {
        bool tokenAcquired = false;
        if (AccessToken == null || (DateTimeOffset.Now.ToUnixTimeSeconds() > AccessToken.expiration))
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    using (var request = new HttpRequestMessage(new HttpMethod("POST"), "https://iam.cloud.ibm.com/identity/token"))
                    {
                        request.Content = new StringContent($"grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey={APIAccess.apikey}");
                        request.Content.Headers.ContentType = MediaTypeHeaderValue.Parse("application/x-www-form-urlencoded");

                        var response = await httpClient.SendAsync(request);

                        var stringResponse = await response.Content.ReadAsStringAsync();

                        if (response.IsSuccessStatusCode)
                        {
                            AccessToken = JsonConvert.DeserializeObject<Token>(stringResponse);
                            tokenAcquired = true;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                //logging
                tokenAcquired = false;
            }
        }
        else
        {
            tokenAcquired = true;
        }

        return tokenAcquired;
    }

    protected async Task<bool> RefreshAccessToken()
    {
        bool tokenRefreshed = false; ;
        try
        {
            if (AccessToken == null)
            {
                tokenRefreshed = await GetAccessToken();
            }
            else
            {
                if (DateTimeOffset.Now.ToUnixTimeSeconds() + 180 > AccessToken.expiration)//If the token will expire within 3 minutes, refresh to avoid token expiration exception
                {
                    using (var httpClient = new HttpClient())
                    {
                        using (var request = new HttpRequestMessage(new HttpMethod("POST"), "https://iam.cloud.ibm.com/identity/token"))
                        {
                            request.Content = new StringContent($"grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey={APIAccess.apikey}");
                            request.Content.Headers.ContentType = MediaTypeHeaderValue.Parse("application/x-www-form-urlencoded");
                            request.Headers.Add("grant_type", "refresh_token");
                            request.Headers.Add("refresh_token", AccessToken.refresh_token);

                            var response = await httpClient.SendAsync(request);

                            var stringResponse = await response.Content.ReadAsStringAsync();

                            if (response.IsSuccessStatusCode)
                            {
                                AccessToken = JsonConvert.DeserializeObject<Token>(stringResponse);
                            }
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            //logging
            tokenRefreshed = false;
        }
        return tokenRefreshed;
    }

    protected Tuple<ApiModel?, WatsonXRequest?> LoadWatsonXPrompts()
    {
        ApiModel model = new ApiModel();
        WatsonXRequest watson = new WatsonXRequest();

        //Load the json app manifest that will be populated for use by the frontend/react-native app
        using (StreamReader r = new StreamReader(@".\Prompts\Call4CodeProompts.json"))
        {
            string json = r.ReadToEnd();
            model = JsonConvert.DeserializeObject<ApiModel>(json);
        }

        using (StreamReader r = new StreamReader(@".\Prompts\WatsonXInput.json"))
        {
            string json = r.ReadToEnd();
            watson = JsonConvert.DeserializeObject<WatsonXRequest>(json);
        }

        return Tuple.Create(model, watson);
    }


    public async Task<string> GetWatsonXPrompt()
    {
        ApiModel? model = new ApiModel();
        WatsonXRequest? watson;

        try
        {
            await RefreshAccessToken();

            Tuple<ApiModel?, WatsonXRequest?> tuple = LoadWatsonXPrompts();

            model = tuple.Item1;

            watson = tuple.Item2;

            string watsonXInputTemplate = new string(watson!.Input); // save a copy of the input property template so we can reset it after each request to WatsonX API

            foreach (Category category in model!.Categories)
            {
                foreach (Item item in category.Items)
                {
                    if (!string.IsNullOrEmpty(item.Prompt))
                    {
                        using (var httpClient = new HttpClient())
                        {
                            using (var watsonAiRequest = new HttpRequestMessage(new HttpMethod("POST"), "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"))
                            {

                                watsonAiRequest.Headers.TryAddWithoutValidation("Accept", "application/json");
                                watsonAiRequest.Headers.TryAddWithoutValidation("Authorization", $"Bearer {AccessToken.access_token}");

                                //The watson!.Input property contains a Prompt Placeholder that needs to be replaced by the topic we want to generate content about
                                //After calling the Watson X API, we will reset the input before executing the next prompt.

                                watson!.Input = watson!.Input.Replace(PROMPT_PLACEHOLDER, item.Prompt);                                
                                
                                watsonAiRequest.Content = new StringContent(JsonConvert.SerializeObject(watson, Formatting.None));

                                watsonAiRequest.Content.Headers.ContentType = MediaTypeHeaderValue.Parse("application/json");

                                var watsonAPIResponse = await httpClient.SendAsync(watsonAiRequest);

                                // Get the response content.
                                HttpContent responseContent = watsonAPIResponse.Content;

                                // Get the stream of the content.
                                string reader = await responseContent.ReadAsStringAsync();

                                if (!string.IsNullOrEmpty(reader))
                                {
                                    WatsonXResponse response = JsonConvert.DeserializeObject<WatsonXResponse>(reader);

                                    item.Description = response!.Results[0].GeneratedText.Replace("<|start_header_id|>assistant<|end_header_id|>", string.Empty).Replace("=",string.Empty); //Remove the header text and '='
                                }
                                else
                                {
                                    item.Description = "Coming soon...";
                                }

                                //Reset the Input template before the next iteration.
                                watson!.Input = watsonXInputTemplate;
                            }
                        }
                    }
                    else
                    {
                        item.Description = "Coming soon...Missing Proompt";
                    }
                }
            }

            model.GeneratedAt = DateTime.Now.ToString();
        }
        catch (Exception ex)
        {
            int x = 1;
        }

        return JsonConvert.SerializeObject(model);
    }
}