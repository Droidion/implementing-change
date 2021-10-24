namespace ChangeGameApi.Controllers;

using Services;
using Types;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

public record SubmitProgressPayload(int Day, int Approval, int Period);

/// <summary>
/// Controller for operations on game progress.
/// </summary>
[ApiController]
[Route("progress")]
public class ProgressController : ControllerBase
{
    private readonly ILogger<ProgressController> _logger;
    private readonly IProgressService _progressService;

    public ProgressController(ILogger<ProgressController> logger, IProgressService progressService)
    {
        _logger = logger;
        _progressService = progressService;
    }
    
    /// <summary>
    /// Submits a progress by player.
    /// </summary>
    [HttpPost]
    [Authorize(Roles = Constants.Player)]
    public async Task<IActionResult> SubmitProgress(SubmitProgressPayload payload)
    {
        try
        {
            var tryUserId = int.TryParse(HttpContext.User.FindFirstValue("UserId"), out var userId);
            var tryTeam = int.TryParse(HttpContext.User.FindFirstValue("Team"), out var team);
            if (!tryUserId || !tryTeam)
            {
                return Unauthorized("Incorrect user data in token");
            }

            var progress = new Progress(userId, team, payload.Day, payload.Approval, payload.Period);
            await _progressService.InsertProgress(progress);
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Could not submit game progress");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
        
    }
    
    /// <summary>
    /// Returns the list of all latest progresses for all players for the active game.
    /// </summary>
    [HttpGet]
    [Authorize(Roles = Constants.Admin)]
    public async Task<IActionResult> ListProgress()
    {
        try
        {
            var progresses = await _progressService.ListProgresses();
            return Ok(progresses);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Could not retrieve game progresses for active game");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}