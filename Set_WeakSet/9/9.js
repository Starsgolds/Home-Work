let p = document.querySelector('p'); 
let inp = document.querySelector('input'); 
let btn = document.querySelector('button'); 
let set = new Set; 
btn.addEventListener('click', function () { 
set.add(parseInt(inp.value)); 
for(let elem of set){ 
p.innerHTML += elem + ','; 
} 
});
