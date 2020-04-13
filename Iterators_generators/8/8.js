let mass= [1, 2, 3, 4, 5];
function *createIterator(mass){
let mass1 = [];
for (var i = 0; i < mass.length; i += 2) {
yield mass.slice(i, i + 2);
}
mass1.push(mass)
}
let iterator = createIterator(mass);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
