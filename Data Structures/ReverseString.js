"use strict";
var reverse = function (text) {
    var data = text.split('');
    for (var i = 0; i < data.length; i++) {
        data[i] = Reverser(data[i]);
    }
    return data.join('');
};
function Reverser(text) {
    var some = '';
    for (var i = text.length - 1; i >= 0; i--) {
        some += text[i];
    }
    return some;
}
var simpleReverse = function (str) { return str.split('').reverse().join(''); };
console.log(reverse('murad comes'));
console.log(simpleReverse('murad have already abandoned us'));
