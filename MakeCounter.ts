export default function makeCounter(initialValue: number = 0) {
  let count = initialValue--;

  return function () {
    return count++;
  };
}

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

let anotherCounter = makeCounter(5); // Custom initial value (5)
console.log(anotherCounter()); // 5
console.log(anotherCounter()); // 6
console.log(anotherCounter()); // 7
