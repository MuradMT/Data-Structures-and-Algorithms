function moveZeroes(nums: number[]): void {
  let writePointer=0;
  for(let readPointer=0;readPointer<nums.length;readPointer++){
      const val=nums[readPointer];
      nums[readPointer]=0;
      if(val!==0){
          nums[writePointer]=val;
          writePointer++;
      }
  }
}
const arr=[0,1,5,7,0,16];
moveZeroes(arr);
for(let item of arr){
    console.log(item);
    
}
//ReadPointer-only replace index with zero
//WritePointer-replaces zeros with current value