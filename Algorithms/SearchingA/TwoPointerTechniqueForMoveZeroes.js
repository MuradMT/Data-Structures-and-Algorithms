function moveZeroes(nums) {
    var writePointer = 0;
    for (var readPointer = 0; readPointer < nums.length; readPointer++) {
        var val = nums[readPointer];
        nums[readPointer] = 0;
        if (val !== 0) {
            nums[writePointer] = val;
            writePointer++;
        }
    }
}
var arr = [0, 1, 5, 7, 0, 16];
moveZeroes(arr);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
//ReadPointer-only replace index with zero
//WritePointer-replaces zeros with current value
