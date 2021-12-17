
namespace ChangeGameApi.Services;

using Models;

/// <summary>
/// Business logic for working with game progress
/// </summary>
public interface IProgressService
{
    /// <summary>
    /// Inserts new game progress for a player
    /// </summary>
    public Task InsertProgress(Progress progress);
    
    /// <summary>
    /// Returns the list of all game progresses for all players for the currently active game.
    /// </summary>
    public Task<IEnumerable<Progress>> ListProgresses();
}