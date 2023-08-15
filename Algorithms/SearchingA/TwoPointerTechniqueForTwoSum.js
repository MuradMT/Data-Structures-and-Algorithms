"use strict";
function twoSum(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var currvalue = arr[start] + arr[end];
        if (currvalue < target) {
            start++;
        }
        else if (currvalue > target) {
            end--;
        }
        else {
            return [arr[start], arr[end]];
        }
    }
    return [-1, -1];
}
console.log(twoSum([1, 2, 3, 4], 7));
