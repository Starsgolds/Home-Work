class Rectangle { 
constructor (width, height) { 
this.elem = document.createElement('div'); 
this.setWidth(width); 
this.setHeight(height); 
this.elem.style.border = '1px solid red'; 
document.body.appendChild(this.elem); 
} 
getWidth() { 
return parseInt(this.elem.style.width); 
} 
getHeight() { 
return parseInt(this.elem.style.height); 
} 
setWidth(width) { 
this.elem.style.width = width + 'px'; 
} 
setHeight(height) { 
this.elem.style.height = height + 'px'; 
} 
} 
let rectangle = new Rectangle(200, 300); 
alert(rectangle.getWidth()); 
alert(rectangle.getHeight());
