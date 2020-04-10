let textArea1 = document.querySelector('#text1'),
textArea2 = document.querySelector('#text2'),
btn1 = document.querySelector('#save'),
btn2 = document.querySelector('#show'),
valueArray = [],
count;
btn1.addEventListener('click', function (argument) {
valueArray.push(textArea1.value);
localStorage.setItem('text', valueArray);
textArea1.value = '';
});
btn2.addEventListener('click', function () {
let h = localStorage.getItem('text');
textArea2.value = h;
});
