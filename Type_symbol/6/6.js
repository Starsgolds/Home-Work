let arr1 = getArrayRandomNumbers(1, 20); 
let arr2 = getArrayRandomNumbers(1, 30); 
function getArrayWithSameNumbers(arr1, arr2){ 
let arr = []; 
for (let i = 0; i < arr1.length; i++){ 
for (let j = 0; j < arr2.length; j++){ 
if (arr1[i] == arr2[j]){ 
arr.push(arr1[i]); 
} 
} 
} 
let newarr = [...new Set(arr)]; 
let amount = Symbol.for('amount'); 
newarr['amount'] = function() { 
let sum = 0;
for (let elem of this){ 
sum += elem; 
} 
return sum; 
} 
return newarr; 
} 
function getArrayRandomNumbers(min, max){ 
let arr =[]; 
for (let i = min; i <= max; i++) { 
arr.push(getRandomInt(min, max)); 
} 
let amount = Symbol.for('amount'); 
arr['amount'] = function() { 
let sum = 0;
for (let elem of this){ 
sum += elem; 
} 
return sum; 
} 
return arr; 
} 
function getRandomInt(min, max) { 
return Math.floor(Math.random() * (max - min + 1)) + min; 
} 
console.log(getArrayWithSameNumbers(arr1, arr2)['amount']());
