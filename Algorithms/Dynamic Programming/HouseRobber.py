# Most prominent one dimensional dynamic programming problem
def Res(nums):
    #6 1 2 10 4
    a,b= 0,0
    for n in nums:
        temp=max(n+a,b)
        a=b
        b=temp
    return b
n=int(input())
numbers=[int(i) for i in input().split(" ",n)]
print(Res(numbers))