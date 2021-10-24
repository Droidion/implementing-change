namespace ChangeGameApi.Services;

using Repositories;

/// <summary>
/// Business logic for operations with game sessions
/// </summary>
public class GameService : IGameService
{
    private readonly IGameRepository _gameRepository;
    private readonly IPlayerService _playerService;
    private readonly IPlayerRepository _playerRepository;

    public GameService(IGameRepository gameRepository, IPlayerService playerService, IPlayerRepository playerRepository)
    {
        _gameRepository = gameRepository;
        _playerService = playerService;
        _playerRepository = playerRepository;
    }

    public async Task CreateGame(int teamCount)
    {
        await _gameRepository.SetAllGamesAsInactive();
        var gameId = await _gameRepository.CreateGame();
        if (gameId != null)
        {
            var players = _playerService.GeneratePlayers(teamCount, gameId.GetValueOrDefault());
            await _playerRepository.InsertPlayers(players);
        }
    }
    
    public async Task StopGame()
    {
        await _gameRepository.SetAllGamesAsInactive();
    }

    public async Task ResumeGame()
    {
        await _gameRepository.SetAllGamesAsInactive();
        await _gameRepository.SetLatestGameAsActive();
    }
}