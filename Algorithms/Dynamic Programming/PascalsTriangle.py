class Solution(object):
    def generate(self, numRows):
        self.arr=[[0]*i for i in range(1,numRows+1)]
        for i in range(numRows):
          self.arr[i][0]=1
        for i in range(1,numRows):
          self.arr[i][i]=1
        for i in range(2,numRows):
           for j in range(1,i):
              self.arr[i][j]=self.arr[i-1][j-1]+self.arr[i-1][j]
        return self.arr
cls=Solution().generate(5)
print(cls)
