arr=[-1]*45
def Fibonacci(n):
    if n<2 and n>0:
        return 1
    if arr[n]!=-1:
        return arr[n]
    arr[n] = Fibonacci(n-1)+Fibonacci(n-2)
    return arr[n]
n=int(input())
print(Fibonacci(n))
#The complexity of recursive function is O(2^n)