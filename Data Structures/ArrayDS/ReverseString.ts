"use strict";
 const reverse=(text:string):string=>{
    const data:string[]=text.split('');
    for(let i=0;i<data.length;i++){
        data[i]=Reverser(data[i]);
    }
    return data.join('');
 };
 function Reverser(text:string):string{
    let some:string='';
    for(let i=text.length-1;i>=0;i--){
        some+=text[i];
    }
    return some;
 }
 const simpleReverse=(str:string):string=> str.split('').reverse().join('') ;
 console.log(reverse('murad comes'));
 console.log(simpleReverse('murad have already abandoned us'));
 
 
