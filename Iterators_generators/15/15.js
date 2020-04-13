let arr = [];
let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
let iterator = map.keys();
for(let key of iterator){
arr.push(key);
}
console.log(arr);
