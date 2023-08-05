"use strict";
//C# Approach
const mergeSortedArr=(arr1:any[],arr2:any[]):any[]=>{
    const arr:any[]=[];
    let len=arr1.length+arr2.length;
    let count=0;
    let con=0;
    for(let i=0;i<len;i++){
        if(count<arr1.length){
            arr[i]=arr1[count];
            count++;
        }
        else{
            arr[i]=arr2[con];
            con++;
        }
    }
    return arr;
}

const mergeSimple=(arr1:any[],arr2:any[]):any[]=>{
    for(let item of arr2){
        arr1.push(item)
    }
    return arr1;
}
const mergeSimpleSpread=(arr1:any[],arr2:any[]):any[]=>[...arr1,...arr2];
console.log(mergeSortedArr([1,2,3],[6,8,9]));
console.log(mergeSimple([1,2,3],[6,8,9]));
console.log(mergeSimpleSpread([1,2,3],[6,8,9]));

