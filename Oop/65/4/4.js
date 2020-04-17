class MySring { 
reverse(str) { 
this.str = str; 
return this.str.split('').reverse().join(''); 
} 
ucFirst(str) { 
this.str = str; 
return this.str.slice(0,1).toUpperCase() + this.str.slice(1); 
} 
ucWords(str) { 
this.str = str; 
let arr = []; 
for (let elem of this.str.split(' ')) { 
arr.push(this.ucFirst(elem)); 
} 
return arr.join(' '); 
} 
} 
let myString = new MySring; 
console.log(myString.reverse('abcde')); 
console.log(myString.ucFirst('abcde')); 
console.log(myString.ucWords('abcde abcde abcde'));
