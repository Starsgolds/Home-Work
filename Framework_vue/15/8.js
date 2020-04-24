let app = new Vue({
el: '#app',
data: {
date: "2020-04-23",
id: "",
},
filters: {
formatDate: function(date){
return date.replace(/([0-9]{4})\-([0-9]{2})\-([0-9]{2})/, "$3.$2.$1");
},
},
});
