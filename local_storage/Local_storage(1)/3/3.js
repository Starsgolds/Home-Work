let inp = document.querySelector('#inp'),
textArea = document.querySelector('#textarea'),
checkBox = document.querySelector('#checkbox'),
radio = document.querySelector('#radio'),
select = document.querySelector('#select'),
form = document.querySelector('#form');
inp.value = localStorage['inpValue'];
textArea.value = localStorage['textAreaValue'];
checkBox.checked = localStorage['checkBoxChecked'];
radio.checked = localStorage['radioChecked'];
select.selectedIndex = localStorage['selectSelectedIndex'];
form.addEventListener('change', function () {
for (var i = 0; i < form.elements.length; i++) {
let elem = form.elements[i];
switch (elem.name) {
case 'inp':
localStorage.setItem('inpValue', elem.value);
break;
case 'textarea':
localStorage.setItem('textAreaValue', elem.value);
break;
case 'checkbox':
elem.checked ? localStorage.setItem('checkBoxChecked', 1) : localStorage.setItem('checkBoxChecked', 0);
break;
case 'radio':
elem.checked ? localStorage.setItem('radioChecked', 1) : localStorage.setItem('radioChecked', 0);
break;
case 'select':
localStorage.setItem('selectSelectedIndex', elem.selectedIndex);
break;
}
}
});
