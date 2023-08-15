function rotate(nums: number[], k: number): void {
       while(k--) nums.unshift(nums.pop() as number);
}
const arr=[1,2,3,4,5,6];
let k=3;
rotate(arr,k);
for(let item of arr){
    console.log(item)
}