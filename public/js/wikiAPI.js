// var vm = new Vue にしなくてもthisはVueインスタンス（グローバルオブジェクトではなく）
// を取る？
var vm = new Vue({
   el: '#app',
   data: {
     users: [],
     usersshow: "",
     counter: 1,
     // 結局のところorigin=*を追加するだけでAccess-Control-Allow-Origin通過するみたい
     // なんで？
     query: {
       format: 'json',
       action: 'query',
       list: "search",
       origin: '*',
       srsearch: "",
     },
     showquery: {
       format: 'json',
       action: 'parse',
       origin: '*',
       pageid: "",
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
     },
     wikiapishow: function (data) {
       this.usersshow = [];
       this.showquery.pageid = data.pageid;
       axios.get(this.url, {params: this.showquery})
            .then((response) => {
              this.usersshow = response.data.parse.text["*"];
              this.counter += 1;
            })
            .catch(response => console.log(response));
     }
  }
})

vm.$watch(function () {
  return this.counter;
}, function () {
  document.forms.form.submit();
})
