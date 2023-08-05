"use strict";
var MyArr = /** @class */ (function () {
    function MyArr() {
        this.length = 0;
        this.data = {};
    }
    MyArr.prototype.get = function (index) {
        return this.data[index];
    };
    //Js push function returns length of array
    MyArr.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };
    MyArr.prototype.repeatDel = function () {
        delete this.data[this.length - 1];
        this.length--;
    };
    MyArr.prototype.pop = function () {
        var item = this.data[this.length - 1];
        this.repeatDel();
        return item;
    };
    MyArr.prototype.delete = function (index) {
        var item = this.data[index];
        this.shiftItems(index);
        return item;
    };
    MyArr.prototype.shiftItems = function (index) {
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.repeatDel();
    };
    return MyArr;
}());
var ar = new MyArr();
ar.push(12);
ar.push(89);
ar.push(90);
ar.push(56);
ar.pop();
ar.delete(2);
console.log(ar);
console.log(ar.get(0));
