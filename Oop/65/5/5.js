class Validator { 
isEmail(mail) { 
this.mail = mail; 
return /^[a-zA-z0-9-._]+@[a-z]+\.[a-z]{2,5}$/.test(mail); 
} 

isDomain(domain) { 
this.domain = domain; 
return /^[a-z]+\.[a-z]{2,3}$/.test(domain); 
} 

isDate(date) { 
this.date = date; 
return /^\d{2}\.\d{2}\.\d{4}$/.test(date); 
} 

isPhone(phone) { 
this.phone = phone; 
return /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(phone); 
} 
} 

let validator = new Validator; 

console.log(validator.isEmail('phphtml@mail.ru')); 
console.log(validator.isDomain('phphtml.ru')); 
console.log(validator.isDate('12.05.2020')); 
console.log(validator.isPhone('+7 (123) 123-45-67'));
