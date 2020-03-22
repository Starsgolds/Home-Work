let sudak = document.querySelector('#sudak');
let tudak = document.querySelector('#tudak');
let saveButton = document.querySelector('#save');
let input = document.querySelector('textarea');
let id = 'input';
let arr = [];
let count;
if (localStorage.length > 0){
arr = getAll(id);
count = arr.length - 1;
input.value = get(id, count);
}
saveButton.addEventListener('click', () => {
arr.push(input.value);
saveAll(id, arr);
count = arr.length - 1;
});
sudak.addEventListener('click', () => {
if(count >= 0){
count--;
if(count < 0) count = 0;
input.value = get(id, count);
}
});
t.addEventListener('click', () => {
if(count < arr.length){
count++;
if(count == arr.length) count = arr.length - 1;;
input.value = get(id, count);
}
});
function saveAll(id, date){
localStorage.setItem(id, JSON.stringify(date));
}
function getAll(id){
let json = localStorage.getItem(id);
return JSON.parse(json);
}
function get(id, key){
let arr = getAll(id);
if(arr[key] !== undefined){
return arr[key];
} else {
return null;
}
}
