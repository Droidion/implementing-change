namespace ChangeGameApi.Controllers;

using Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

public record CreateGamePayload(int TeamCount);

/// <summary>
/// Controller for operations on game session.
/// </summary>
[ApiController]
[Route("game")]
[Authorize(Roles = Constants.Admin)]
public class GameController : ControllerBase
{
    private readonly ILogger<GameController> _logger;
    private readonly IGameService _gameService;

    public GameController(ILogger<GameController> logger, IGameService gameService)
    {
        _logger = logger;
        _gameService = gameService;
    }
    
    /// <summary>
    /// Creates new game.
    /// </summary>
    [HttpPost("create")]
    public async Task<IActionResult> CreateGame(CreateGamePayload payload)
    {
        try
        {
            await _gameService.CreateGame(payload.TeamCount);
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Could not create new game");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
        
    }
    
    /// <summary>
    /// Stops current game.
    /// </summary>
    [HttpGet("stop")]
    public async Task<IActionResult> StopGame()
    {
        try
        {
            await _gameService.StopGame();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Could not stop game");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
        
    }
    
    /// <summary>
    /// Resumes the latest game.
    /// </summary>
    [HttpGet("resume")]
    public async Task<IActionResult> ResumeGame()
    {
        try
        {
            await _gameService.ResumeGame();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Could not resume game");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}