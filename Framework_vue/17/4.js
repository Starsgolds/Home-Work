let app = new Vue({
el: '#app',
data: {
htmlCode: "",
},
methods: {
getHtmlCode: function(){
if(this.htmlCode == '') this.htmlCode = "<div style='width: 100px; height: 100px; background-color: red;'></div>";
else this.htmlCode = '';
},
},
});
