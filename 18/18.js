//2
let string = 'https://yandex.ru';
console.log(/^https?/.test(string));
//4
let string1='meow.jpeg';
console.log(/\w+\.jpe?g/.test(string1));
//6
let string2='12345';
console.log(/\d{1,2}/.test(string2));
//8 
let string3='02.02.2020';
console.log(/(\d{2}\.){2}\d{4}/.test(string3));
//10 
let string4='meow@mail.ru';
console.log(/^[\w.\-\_]+?@[a-z]+?\.[a-z]+/.test(string4));
