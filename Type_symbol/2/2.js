const obj = { a: 1, b: 2 }; 
const sym = Symbol(); 
obj[sym] = () => alert('!'); 
console.log(obj[sym]);
