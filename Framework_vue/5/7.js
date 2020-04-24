let app = new Vue({ 
el: '#app', 
data: { 
items: [-3, 0, 25, 96, -10, -8, 47, 14, 5, -9] 
}, 
methods: { 
filterItems: function() { 
this.items = this.items.filter(item => item > 0 && item < 10); 
} 
} 
});
