using Microsoft.AspNetCore.Mvc;

namespace fredbelotte.service.controllers;

[ApiController]
[Route("[controller]")]
public class StackController : ControllerBase
{
  public readonly IConfiguration _configuration;

  public StackController(IConfiguration configuration)
  {
    _configuration = configuration;
  }

  [HttpGet]
  public async Task<IActionResult> GetAsync()
  {
    return await Task.FromResult<JsonResult>(new JsonResult(".NET Core, Node.js, Python, React, Swift"));
  }
}
