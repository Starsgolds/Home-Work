let str = 'a1b c34d x567z';
let arr = str.match(/\d/g);
let sum = 0;
for (let elem of arr) {
sum += +elem;
}
console.log(sum);
