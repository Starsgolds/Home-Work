let obj = {
a: 1, 
b: 2, 
c: 3,
*[Symbol.iterator](){
for(let key in this) yield this[key];
}
};
for(let elem of obj){
console.log(elem);
}
