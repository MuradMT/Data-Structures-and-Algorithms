def Fibonacci(n):
    if n==0:
        return 0
    if n==1:
        return 1
    Fib=[0]*(n+1)
    Fib[0]=0
    Fib[1]=1
    for i in range(2,n+1):
        Fib[i]=Fib[i-1]+Fib[i-2]
    return Fib[n]
n=int(input())
print(Fibonacci(n))
#The complexity of recursive function is O(2^n)