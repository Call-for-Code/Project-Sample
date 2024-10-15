using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using WatsonXAPI.Services;

namespace WatsonXAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class WatsonXController : ControllerBase
{
    private readonly ILogger<WatsonXController> _logger;
    private readonly IPromptService _promptService;
    public WatsonXController(ILogger<WatsonXController> logger, IPromptService promptService)
    {
        _logger = logger;
        _promptService = promptService;
    }

    [HttpGet]
    [Route("GetLatestVersion")]
    public IActionResult GetLatestVersion()
    {
        return Ok("1.0");
    }

    [HttpGet]
    [Route("GetLatestManifest")]
    public async Task<IActionResult> GetLatestManifest()
    {
        var result = await _promptService.GetWatsonXPrompt();
                
        await System.IO.File.WriteAllTextAsync(@$".\apimodel-{DateTime.Now.ToString("mm-dd-yyyy_hh-mm-ss")}.json", result);

        return Ok(result);
    }
}