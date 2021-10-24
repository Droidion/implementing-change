namespace ChangeGameApi.Services;

/// <summary>
/// Business logic for operations with game sessions
/// </summary>
public interface IGameService
{
    /// <summary>
    /// Creates new game
    /// </summary>
    Task CreateGame(int teamCount);
    
    /// <summary>
    /// Stops games.
    /// </summary>
    Task StopGame();
    
    /// <summary>
    /// Resumes latest game.
    /// </summary>
    Task ResumeGame();
}