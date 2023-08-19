var MyHashTable = /** @class */ (function () {
    function MyHashTable(size) {
        this.size = size;
        this.data = new Array(this.size);
    }
    MyHashTable.prototype.hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    MyHashTable.prototype.set = function (key, value) {
        var adress = this.hash(key);
        if (!this.data[adress]) {
            this.data[adress] = [];
        }
        this.data[adress].push([key, value]);
    };
    MyHashTable.prototype.get = function (key) {
        var adress = this.hash(key);
        var currentBucket = this.data[adress];
        if (currentBucket) {
            for (var i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    };
    return MyHashTable;
}());
var myTable = new MyHashTable(5);
myTable.set('murad', 123);
myTable.set('murad', 1232);
myTable.set('murad1', 12312);
console.log(myTable.get('murad'));
console.log(myTable.get('murad1'));
