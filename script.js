const mySet = new Set();
const obj = {a: 1};
mySet.add(1);
mySet.add(5);
mySet.add(5);        // duplicate, ignored
mySet.add("hello");
mySet.add({a: 1});   // different object reference → allowed
mySet.add({a: 1});   // different object reference → allowed
mySet.add({a: 1});   // different object reference → allowed
mySet.add({a: 1});   // different object reference → allowed
mySet.add({a: 1});   // different object reference → allowed
mySet.add({a: 1});   // objects are reference-based

console.log(mySet);