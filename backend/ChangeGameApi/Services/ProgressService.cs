namespace ChangeGameApi.Services;

using Repositories;
using Models;

/// <summary>
/// Business logic for working with game progress
/// </summary>
public class ProgressService : IProgressService
{
    private readonly IProgressRepository _progressRepository;

    public ProgressService(IProgressRepository progressRepository)
    {
        _progressRepository = progressRepository;
    }
    
    public async Task InsertProgress(Progress progress)
    {
        await _progressRepository.InsertProgress(progress);
    }

    public async Task<IEnumerable<Progress>> ListProgresses()
    {
        return await _progressRepository.ListProgressesForActiveGame();
    }
}