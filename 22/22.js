let str = 'sss site.ru zzz site.com kkk';
let str1 = str.replace(/([a-z]+\.+[a-z]{2,3})/g, '<a href="http://site.ru">site.ru</a>');
console.log(str1);
