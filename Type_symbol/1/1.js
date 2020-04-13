const obj = { a: 1, b: 2 }; 
const sym = Symbol(); 
obj[sym] = 'privet'; 
for (let elem in obj) { 
console.log(obj[elem]); 
} 
console.log(obj[sym]);
