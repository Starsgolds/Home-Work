let input = document.querySelector('textarea');
input.onblur = () => {
localStorage.setItem('text', input.value);
}
localStorage['text'] ? input.value = localStorage.getItem('text') : console.log('Локальное хранилище пусто');
