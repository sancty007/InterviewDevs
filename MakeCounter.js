"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = makeCounter;
function makeCounter(initialValue) {
    if (initialValue === void 0) { initialValue = 0; }
    var count = initialValue--;
    return function () {
        return count++;
    };
}
var counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
var anotherCounter = makeCounter(5); // Custom initial value (5)
console.log(anotherCounter()); // 5
console.log(anotherCounter()); // 6
console.log(anotherCounter()); // 7
