namespace ChangeGameApi.Repositories;

/// <summary>
/// Persistence management for game sessions.
/// </summary>
public interface IGameRepository
{
    /// <summary>
    /// Creates new game.
    /// </summary>
    /// <returns>Id of the created game</returns>
    Task<int?> CreateGame();
    
    /// <summary>
    /// Marks all games as inactive.
    /// </summary>
    Task SetAllGamesAsInactive();
    
    /// <summary>
    /// Marks the game with the latest creation date as active.
    /// </summary>
    Task SetLatestGameAsActive();
}