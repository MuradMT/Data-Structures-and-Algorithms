def Fibonacci(n):
    if n<2:
        return n
    return Fibonacci(n-1)+Fibonacci(n-2)
print(Fibonacci(7))