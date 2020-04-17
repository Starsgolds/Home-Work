class User { 
constructor (name, surname) { 
this.name = name; 
this.surname = surname; 
} 
getFullName() { 
return this.name + ' ' + this.surname; 
} 
} 
class Student extends User { 
constructor (name, surname, year) { 
super(name, surname); 
this.year = year; 
} 
getCourse() { 
let date = new Date(); 
return (date.getFullYear() - this.year) + ' ' + 'курс'; 
} 
} 
let student = new Student('Иван', 'Иванов', 2020); 
console.log(student.name); 
console.log(student.surname); 
console.log(student.getFullName()); 
console.log(student.getCourse());
