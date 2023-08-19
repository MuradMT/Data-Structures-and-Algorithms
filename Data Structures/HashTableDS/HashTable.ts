class MyHashTable{
    data:any;
    size:number;
    constructor(size:number){
        this.size=size;
        this.data=new Array(this.size)
    }
    private hash(key:string):number{
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash=(hash+key.charCodeAt(i)*i)%this.data.length;
        }
        return hash;
    }
    set(key:string,value:any):void{
        let adress=this.hash(key);
        if(!this.data[adress]){
           this.data[adress]=[];
        }
        this.data[adress].push([key,value])
    }
    get(key:string):any|undefined{
        let adress=this.hash(key);
        const currentBucket=this.data[adress];
        if(currentBucket){
            for(let i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1];
                }
              }
        }
          return undefined;
    }
}
const myTable=new MyHashTable(5);
myTable.set('murad',123);
myTable.set('murad',1232);
myTable.set('murad1',12312);
console.log(myTable.get('murad'));
console.log(myTable.get('murad1'))
