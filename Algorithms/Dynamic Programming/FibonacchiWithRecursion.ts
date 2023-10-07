function Fibonacchi(n:number):number{
    if(n<2){
        return n;
    }
    return Fibonacchi(n-1)+Fibonacchi(n-2);
}
console.log(Fibonacchi(7));