
namespace ChangeGameApi.Services;

using Models;
using Repositories;
using Helpers;

/// <summary>
/// Business logic for working with players.
/// </summary>
public class PlayerService : IPlayerService
{
    private readonly IPlayerRepository _playerRepository;

    public PlayerService(IPlayerRepository playerRepository)
    {
        _playerRepository = playerRepository;
    }
    
    public async Task<IEnumerable<Player>> GetPlayers()
    {
        return await _playerRepository.GetPlayers();
    }

    public IEnumerable<Player> GeneratePlayers(int teamCount, int gameId)
    {
        var players = new Player[teamCount];
        for (var i = 0; i < players.Length; i++)
        {
            players[i] = new Player(null, i + 1, HashingHelper.GeneratePin(), gameId);
        }

        return players;
    }
}