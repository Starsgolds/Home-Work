let app = new Vue({ 
el: '#app', 
data: { 
items: [1, 2, 3], 
}, 
methods: { 
squared(idx) { 
let newItems = this.items.slice();
newItems[idx] = newItems[idx] ** 2;
this.items = newItems;
} 
} 
});
