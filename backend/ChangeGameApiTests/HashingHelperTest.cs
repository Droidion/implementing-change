namespace ChangeGameApiTests;

using ChangeGameApi.Helpers;
using Shouldly;
using Xunit;

public class HashingHelperTest
{
    [Fact]
    public void CanEncryptAndVerifyPassword()
    {
        const string password = "dummy-password";
        var hash = HashingHelper.HashPassword(password);
        hash.ShouldNotBeNull();
        HashingHelper.VerifyHash(password, hash).ShouldBeTrue();
    }
}