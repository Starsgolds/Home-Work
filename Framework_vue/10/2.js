let app = new Vue({ 
el: '#app', 
data: { 
text: '', 
words: null, 
}, 
methods: { 
chunkText() { 
this.words = this.text.split(' ') 
}, 
}, 
});
