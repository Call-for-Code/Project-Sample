using Newtonsoft.Json;

namespace WatsonXAPI.Services.Models;
public class Result
{
    [JsonProperty("generated_text")]
    public string GeneratedText { get; set; }

    [JsonProperty("generated_token_count")]
    public int GeneratedTokenCount { get; set; }

    [JsonProperty("input_token_count")]
    public int InputTokenCount { get; set; }

    [JsonProperty("stop_reason")]
    public string StopReason { get; set; }
}

public class WatsonXResponse
{
    [JsonProperty("model_id")]
    public string ModelId { get; set; }

    [JsonProperty("created_at")]
    public DateTime CreatedAt { get; set; }

    [JsonProperty("results")]
    public List<Result> Results { get; set; }

    [JsonProperty("system")]
    public System System { get; set; }
}

public class System
{
    [JsonProperty("warnings")]
    public List<Warning> Warnings { get; set; }
}

public class Warning
{
    [JsonProperty("message")]
    public string Message { get; set; }

    [JsonProperty("id")]
    public string Id { get; set; }

    [JsonProperty("more_info")]
    public string MoreInfo { get; set; }
}

