using Newtonsoft.Json;

namespace WatsonXAPI.Services.Models;
public class Parameters
{
    [JsonProperty("decoding_method")]
    public string DecodingMethod { get; set; }

    [JsonProperty("max_new_tokens")]
    public int MaxNewTokens { get; set; }

    [JsonProperty("min_new_tokens")]
    public int MinNewTokens { get; set; }

    [JsonProperty("stop_sequences")]
    public List<object> StopSequences { get; set; }

    [JsonProperty("repetition_penalty")]
    public int RepetitionPenalty { get; set; }
}

public class WatsonXRequest
{
    [JsonProperty("input")]
    public string Input { get; set; }

    [JsonProperty("parameters")]
    public Parameters Parameters { get; set; }

    [JsonProperty("model_id")]
    public string ModelId { get; set; }

    [JsonProperty("project_id")]
    public string ProjectId { get; set; }
}

