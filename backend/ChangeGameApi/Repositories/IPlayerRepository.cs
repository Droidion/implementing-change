
namespace ChangeGameApi.Repositories;
using Models;

/// <summary>
/// Persistence management for players
/// </summary>
public interface IPlayerRepository
{
    /// <summary>
    /// Retrieves from database all player for the active game
    /// </summary>
    /// <returns>Players</returns>
    Task<IEnumerable<Player>> GetPlayers();

    /// <summary>
    /// Retrieves from database player by their pin code
    /// </summary>
    /// <param name="pin">Player's pin code</param>
    /// <returns>Player</returns>
    Task<Player?> GetPlayerByPin(string pin);

    /// <summary>
    /// Inserts a collection of players to the database
    /// </summary>
    /// <param name="players">Players to insert</param>
    Task InsertPlayers(IEnumerable<Player> players);
}