"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mergeSortedArr = function (arr1, arr2) {
    var arr = [];
    var len = arr1.length + arr2.length;
    var count = 0;
    var con = 0;
    for (var i = 0; i < len; i++) {
        if (count < arr1.length) {
            arr[i] = arr1[count];
            count++;
        }
        else {
            arr[i] = arr2[con];
            con++;
        }
    }
    return arr;
};
var mergeSimple = function (arr1, arr2) {
    for (var _i = 0, arr2_1 = arr2; _i < arr2_1.length; _i++) {
        var item = arr2_1[_i];
        arr1.push(item);
    }
    return arr1;
};
var mergeSimpleSpread = function (arr1, arr2) { return __spreadArray(__spreadArray([], arr1, true), arr2, true); };
console.log(mergeSortedArr([1, 2, 3], [6, 8, 9]));
console.log(mergeSimple([1, 2, 3], [6, 8, 9]));
console.log(mergeSimpleSpread([1, 2, 3], [6, 8, 9]));
