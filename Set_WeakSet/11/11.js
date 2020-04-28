let set = new Set; 
let elems = document.querySelectorAll('p'); 
let btn = document.querySelector('button'); 
for(let elem of elems){ 
elem.addEventListener('click', function () { 
set.add(this); 
console.log(set); 
}); 
} 
btn.addEventListener('click', function () { 
for(let elem of set){ 
elem.innerHTML += '!'; 
} 
set.clear(); 
});
