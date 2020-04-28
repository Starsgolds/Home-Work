let input = document.querySelector("input"); 
let text = document.querySelector("p"); 
let set = new Set(); 
input.addEventListener("focus", () => input.value = ""); 
document.querySelector("button").addEventListener("click", () => { 
set.add(input.value); 
let res = ""; 
for (let elem of set) { 
res += elem + ", "; 
} 
text.innerHTML = res; 
})
