var vm = new Vue({
       el: "#selectedWord",
       data: {
           selectedText: ""
       },
       methods: {
           selected: function() {
               this.selectedText = window.getSelection().toString();
           }
       }
   })
