let addIndex = (elements, button) =>{
let elems = document.querySelectorAll(elements);
let btn = document.querySelector(button);
let entries = elems.entries();
btn.addEventListener('click', () =>{
for(let [num, el] of entries){
el.innerHTML += num;
}
})
}
addIndex('p', '#btn')
