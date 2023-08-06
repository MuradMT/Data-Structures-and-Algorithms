"use strict";
function TwoSum(arr:number[],target:number):number[]{
      for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j];
            }
        }
      }
    return [-1,-1];
}
console.log(TwoSum([1,2,3,4],7));
