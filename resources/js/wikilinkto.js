// var vm = new Vue にしなくてもthisはVueインスタンス（グローバルオブジェクトではなく）
// を取る？
var vm = new Vue({
   el: '#article',
   data: {
     usersshow: "",

     showquery: {
       format: 'json',
       action: 'parse',
       origin: '*',
       page: "",
     },
     url: "https://en.wikipedia.org/w/api.php",

     selectedText: "",
   },
   mounted: function () {
       var pathname= location.pathname;
       var searchname = pathname.split("/");
       // スペースをアンダーバーに変えてエンコード
       var underVarJoin = searchname[3].split("%20").join('_')
       this.showquery.page = (searchname.length == 4) ? encodeURI(underVarJoin) : "";

       axios.get(this.url, {params: this.showquery})
            .then((response) => {

              　this.usersshow = response.data.parse.text["*"]
              　
                .replace(
                //       wikiの記事で「File」（画像）を含まない
                /<a href="\/wiki\/((?!File:).*?)".*?>(.+?)<\/a>/g,
                // 新しいリンク
                // /ではなく./にしないと/articles/wikishowが反映されない
                '<a href="./$1">$2</a>')
                // editと赤リンク（未編集)のリンクを消す
                .replace(
                /<a href="\/w\/index.*?".*?>(.*?)<\/a>/g,
                '$1'
                )
                // helpのリンクがちゃんと貼れるようにする
                .replace(
                /<a href="((?=Help).*?)".*?>(.*?)<\/a>/g,
                '$2'
                )

                .replace(
                /<div class="mw-parser-output">/,
                '<div @select="selected" @blur="selected" @keyup="selected" @click="selected"><div class="mw-parser-output">'
                );

            })
            .catch(response => console.log(response));
    },
    methods: {
        selected: function() {
          this.selectedText = window.getSelection().toString();
        },
    }
})

// 文字列挿入用
String.prototype.splice = function(idx, rem, s) {
    return (this.slice(0, idx) + s + this.slice(idx + Math.abs(rem)));
};
