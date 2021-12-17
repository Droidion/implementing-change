namespace ChangeGameApi.Services;

using Models;

/// <summary>
/// Business logic for working with players.
/// </summary>
public interface IPlayerService
{
    /// <summary>
    /// Returns all player for the active game.
    /// </summary>
    /// <returns>Players</returns>
    Task<IEnumerable<Player>> GetPlayers();

    /// <summary>
    /// Generates a set of players for a given game
    /// </summary>
    IEnumerable<Player> GeneratePlayers(int teamCount, int gameId);
}