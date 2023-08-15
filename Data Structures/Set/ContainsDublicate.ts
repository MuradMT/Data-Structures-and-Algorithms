function containsDublicate(arr:number[]):boolean{
     return new Set(arr).size!=arr.length;
}
console.log(containsDublicate([1,2,3,4,5,1]));
