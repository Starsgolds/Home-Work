let obj = {
a: 1,
b: 2,
c: 3
}
let func = (object) =>{
object[Symbol.iterator] = function *(){
for(let key in object){
yield object[key]
}
}
return console.log([... object])
}
func(obj);
