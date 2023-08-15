function rotate(nums, k) {
    while (k--)
        nums.unshift(nums.pop());
}
var arr = [1, 2, 3, 4, 5, 6];
var k = 3;
rotate(arr, k);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
