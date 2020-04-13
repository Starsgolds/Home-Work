let str = 'privetiki';
let func = (str, parent) =>{
let par = document.querySelector(parent);
let ul = document.createElement('ul');
par.appendChild(ul);
for(let elem of str){
let li = document.createElement('li');
li.innerHTML = elem;
ul.appendChild(li);
}
}
func(str, 'body');
