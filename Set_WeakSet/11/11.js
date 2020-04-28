let button = document.querySelector('button'); 
let elems = document.querySelectorAll('p'); 
let set = new Set; 
for(let elem of elems){ 
elem.onclick = () => set.add(elem); 
} 
button.onclick = () => { 
set.forEach(elem => elem.innerHTML += '!'); 
set.clear(); 
}
