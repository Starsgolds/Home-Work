let obj = {a: 1, b: 2, c: 3};
function *createIterator(object){
for(let key in object){
yield object[key];
}
}
let iterator = createIterator(obj);
for(let elem of iterator){
console.log(elem);
}
