let obj = { 
a: 1, 
b: 2, 
c: 3 
} 
const func = Symbol(); 
obj[func] = function () { 
let sum = 0; 
for (let key in obj) { 
sum += obj[key]; 
} 
return sum 
}; 
console.log(obj[func]());
