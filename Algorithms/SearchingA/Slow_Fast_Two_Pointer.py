from typing import List
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n=len(nums)
        if n<2: return
        left,right=0,1
        while right<n:
            if nums[left]!=0:
                left+=1
                right+=1
            elif nums[right]==0:
                right+=1    
            else:
                temp=nums[left]
                nums[left]=nums[right]
                nums[right]=temp
                
        return nums
res=Solution()
print(res.moveZeroes( [0,1,0,3,12]))
