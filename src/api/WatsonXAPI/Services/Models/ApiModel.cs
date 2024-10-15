// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
using Newtonsoft.Json;

namespace WatsonXAPI.Services.Models;
public class Category
{
    [JsonProperty("id")]
    public string Id { get; set; }

    [JsonProperty("name")]
    public string Name { get; set; }

    [JsonProperty("icon")]
    public string Icon { get; set; }

    [JsonProperty("items")]
    public List<Item> Items { get; set; }
}

public class Item
{
    [JsonProperty("id")]
    public string Id { get; set; }

    [JsonProperty("name")]
    public string Name { get; set; }

    [JsonProperty("prompt")]
    public string Prompt { get; set; }

    [JsonProperty("description")]
    public string Description { get; set; }
}

public class ApiModel
{
    [JsonProperty("version")]
    public string Version { get; set; }

    [JsonProperty("generatedAt")]
    public string GeneratedAt { get; set; }

    [JsonProperty("categories")]
    public List<Category> Categories { get; set; }
}

