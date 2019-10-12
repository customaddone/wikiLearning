// var vm = new Vue にしなくてもthisはVueインスタンス（グローバルオブジェクトではなく）
// を取る？
var vm = new Vue({
   el: '#article',
   data: {
     users: [],
     usersshow: "",

     showquery: {
       format: 'json',
       action: 'parse',
       origin: '*',
       page: "",
     },
     url: "https://en.wikipedia.org/w/api.php"
   },
   mounted: function () {
       var pathname= location.pathname;
       var searchname = pathname.split("/");
       this.showquery.page = (searchname.length == 4) ? searchname[3] : "";

       alert(this.showquery.page)
       this.usersshow = [];
       this.showquery.page = data.title;
       axios.get(this.url, {params: this.showquery})
            .then((response) => {
              // htmlが重すぎる　もう少しスリムに読み込めないか
              this.usersshow = response.data.parse.text["*"];
              // 特に意味のないカウンター　vm.watchに拾ってもらう用
              this.counter += 1;
            })
            .catch(response => console.log(response));
    }
})
