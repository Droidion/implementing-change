namespace ChangeGameApi.Repositories;

using Types;

/// <summary>
/// Persistence management for game progress
/// </summary>
public interface IProgressRepository
{
    /// <summary>
    /// Inserts progress data for a player
    /// </summary>
    public Task InsertProgress(Progress progress);
    
    /// <summary>
    /// Returns a list of game progresses from all players for the currently active game
    /// </summary>
    public Task<IEnumerable<Progress>> ListProgressesForActiveGame();
}