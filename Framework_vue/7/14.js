let app = new Vue({ 
el: '#app', 
data: { 
isShow: true, 
}, 
methods: { 
showHideEleme() { 
this.isShow = !this.isShow; 
} 
} 
});
