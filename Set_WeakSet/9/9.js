let input = document.querySelector("input"); 
let button = document.querySelector("button"); 
let text = document.querySelector("p"); 
let set = new Set; 
button.addEventListener('click', function(){ 
let newNum = +input.value; 
let str = ''; 
input.value = ''; 
set.add(newNum); 
//манипуляции с массив ради отсутствия запятой после последнего числа. 
str = [...set].join(','); 
text.innerHTML = str; 
});
