"use strict";
//Array Big O Notation
//Access - O(1)
//Search - O(n)
//Static and Dynamic Array in TypeScript
class MyArr {
  length: number;
  data: any;
  public constructor() {
    this.length = 0;
    this.data = {};
  }
  public get(index: number): any {
    return this.data[index];
  }
  //Js push function returns length of array
  public push(item: any): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  public repeatDel():void{
    delete this.data[this.length - 1];
    this.length--;
  }
  public pop(): any {
    const item = this.data[this.length - 1];
    this.repeatDel();
    return item;
  }
  public delete(index:number):any{
    const item=this.data[index];
    this.shiftItems(index);
    return item;
  }
  public shiftItems(index:number):void{
    for(let i=index;i<this.length-1;i++){
        this.data[i]=this.data[i+1];
    }
    this.repeatDel();
  }
}
const ar = new MyArr();
ar.push(12);
ar.push(89);
ar.push(90);
ar.push(56);
ar.pop();
ar.delete(2);
console.log(ar);
console.log(ar.get(0));



