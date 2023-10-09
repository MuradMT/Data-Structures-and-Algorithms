# Most prominent two dimensional dynamic programming problem
MAX = 1001
MOD = 1000003

dp = [[0] * MAX for _ in range(MAX)]
dp[0][0] = 1

for i in range(1, MAX):
    for j in range(1, MAX):
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1] + dp[i - 1][j - 1]) % MOD

tests = int(input().strip())
for _ in range(tests):
    n = int(input().strip())
    print(dp[n][n])