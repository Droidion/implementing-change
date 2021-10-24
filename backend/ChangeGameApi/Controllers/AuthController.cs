namespace ChangeGameApi.Controllers;

using Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

public record AuthPlayerPayload(string Pin);

public record AuthAdminPayload(string Login, string Password);

/// <summary>
/// Controller for authenticating users and generating tokens.
/// </summary>
[ApiController]
[Route("auth")]
[AllowAnonymous]
public class AuthController : ControllerBase
{
    private readonly ILogger<AuthController> _logger;
    private readonly IAuthService _authService;

    public AuthController(ILogger<AuthController> logger, IAuthService authService)
    {
        _logger = logger;
        _authService = authService;
    }

    /// <summary>
    /// Authenticates player.
    /// </summary>
    [HttpPost("player")]
    public async Task<IActionResult> AuthPlayer(AuthPlayerPayload payload)
    {
        try
        {
            var authenticatedPlayer = await _authService.AuthenticatePlayer(payload.Pin);
            if (authenticatedPlayer == null) return Unauthorized();
            return Ok(authenticatedPlayer);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Could not authenticate player");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    /// <summary>
    /// Authenticates admin.
    /// </summary>
    [HttpPost("admin")]
    public async Task<IActionResult> AuthAdmin(AuthAdminPayload payload)
    {
        try
        {
            var authenticatedAdmin = await _authService.AuthenticateAdmin(payload.Login, payload.Password);
            if (authenticatedAdmin == null) return Unauthorized();
            return Ok(authenticatedAdmin);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Could not authenticate admin");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}