let arr= [1,2,3]; 
let sym = Symbol.for('mySymbol'); 
arr[sym] = function () { 
let sum = 0; 
for (let a of arr) { 
sum += a
} 
return sum 
};
console.log(arr[sym]());
