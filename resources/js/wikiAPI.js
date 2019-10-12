// var vm = new Vue にしなくてもthisはVueインスタンス（グローバルオブジェクトではなく）
// を取る？
var vm = new Vue({
   el: '#app',
   data: {
     users: [],
     usersshow: "",
     counter: 1,
     searchword: "",
     // 結局のところorigin=*を追加するだけでAccess-Control-Allow-Origin通過するみたい
     // なんで？
     query: {
       format: 'json',
       action: 'query',
       list: "search",
       origin: '*',
       srlimit: 3,
       srsearch: "",
     },
     showquery: {
       format: 'json',
       action: 'parse',
       origin: '*',
       page: "",
     },
     url: "https://en.wikipedia.org/w/api.php"
   },
   watch: {
     searchword: function(newSearch) {
       // usersを空にしないと再度検索できない
       if (newSearch == "") {
         this.users = [];
       }
       this.query.srsearch = newSearch;
       axios.get(this.url, {params: this.query})
            .then((response) => {
               for(var i = 0; i < 3; i++) {
               // ３つだけ取って配列に入れる
               if (this.users.length < 3) {
                 this.users.push(response.data.query.search[i]);
               } else {
                 this.users.shift();
                 this.users.push(response.data.query.search[i]);
               }
             }})
            .catch(response => console.log(response));
     }
   },
})
