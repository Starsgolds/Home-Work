let arr = [1, 2, 3]; 
const func = Symbol(); 
arr[func] = function () { 
let sum = 0; 
for (let key in arr) { 
sum += arr[key]; 
} 
return sum 
}; 
console.log(arr[func]());
