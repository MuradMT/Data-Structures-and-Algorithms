#Sliding window technique is a problem solving method 
#which helps us to divide array in subarrays and doing some calculations.
#1 2 2 6 6 6 6 7 10
#first subset- [1]
#second subset [2 2]
#third subset [6 6 6 6]
#fourth subset [7]
#fifth subset [10]
#you need expand subset of array until your condition matches your desired result
#otherwise  make smaller of current  subset until it doesnt exist,and then move to another subarray
#the main goal is to find a specific subarray for your condition


from typing import List
class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
      results={}
      start=0
      end=1
      count=1
      while end<len(arr):
        if arr[start]==arr[end]:
           count+=1
           end+=1
        else :
            results[arr[start]]=count
            start=end
            end+=1
            count=1
      results[arr[-1]]=count
      print(results)
      return max(results,key=results.get) if len(results)>1 else arr[0]# return key which it is value is max
      # return max(results) return  max value,not max key
res=Solution()
print(res.findSpecialInteger( [1,2,2,6,6,6,6,7,10]))
print(res.findSpecialInteger( [1,1]))
print(res.findSpecialInteger( [1]))
print(res.findSpecialInteger( [1,2,3,3]))