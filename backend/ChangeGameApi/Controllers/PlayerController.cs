namespace ChangeGameApi.Controllers;

using Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Controller for operations on players
/// </summary>
[ApiController]
[Route("player")]
[Authorize(Roles = Constants.Admin)]
public class PlayerController : ControllerBase
{
    private readonly ILogger<PlayerController> _logger;
    private readonly IPlayerService _playerService;

    public PlayerController(ILogger<PlayerController> logger, IPlayerService playerService)
    {
        _logger = logger;
        _playerService = playerService;
    }
    
    [HttpGet("list")]
    public async Task<IActionResult> ListPlayers()
    {
        try
        {
            var players = await _playerService.GetPlayers();
            return Ok(players);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Could not retrieve list of players");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}