function containsDublicate(arr) {
    return new Set(arr).size != arr.length;
}
console.log(containsDublicate([1, 2, 3, 4, 5, 1]));
