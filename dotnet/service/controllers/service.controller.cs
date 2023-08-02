using Microsoft.AspNetCore.Mvc;

namespace fredbelotte.service.controllers;

[ApiController]
[Route("[controller]")]
public class ServiceController : ControllerBase
{
  private readonly IConfiguration _configuration;

  public ServiceController(IConfiguration configuration)
  {
    _configuration = configuration;
  }

  public async Task<IActionResult> GetAsync()
  {
    return await Task.FromResult<JsonResult>(new JsonResult(new { frameworks = new[] { ".NET Core, Node.js, React" } }));
  }
}
