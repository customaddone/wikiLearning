// var vm = new Vue にしなくてもthisはVueインスタンス（グローバルオブジェクトではなく）
// を取る？
new Vue({
   el: '#app',
   data: {
     users: [],
     // 結局のところorigin=*を追加するだけでAccess-Control-Allow-Origin通過するみたい
     // なんで？
     query: {
       format: 'json',
       action: 'query',
       list: "search",
       origin: '*',
       srsearch: "",
     },
     url: "https://en.wikipedia.org/w/api.php"
   },
   methods: {
     wikiapi: function () {
       // usersを空にしないと再度検索できない
       this.users = [];
       axios.get(this.url, {params: this.query})
            .then((response) => {
               for(var i = 0; i < 3; i++) {
               // ３つだけ取って配列に入れる
               this.users.push(response.data.query.search[i]);
             }})
            .catch(response => console.log(response));
       }
    }
})
