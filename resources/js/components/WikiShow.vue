<template>
    <div>

        <div id="textbox" style="position: fixed;  display: flex; z-index: 3;
            top: 0px; left: 120px; width:1;"">
            <div v-if="switchFunctionKey % 3 == 1" class="uk-card uk-card-default uk-margin" style="width: 250px;">
                <div class="uk-card-media-top">
                    <div class="uk-cover-container">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">{{ selectedText }}</h3>
                        <p style="height: 105px; overflow: hidden;">{{ translated }}</p>
                    </div>
                    <div class="uk-card-footer"><a class="uk-text-muted" href="#">READ MORE</a></div>
                </div>
            </div>
        </div>
        <p>右下のボタンでモードを切り替えてください</p>
        <p>単語検索モード：単語１wordを範囲指定して適当な場所を押すと検索結果が右上に出ます</p>
        <p>ハイライトモード：範囲指定して適当な場所を軽くタッチするとハイライトが付きます</p>
        <p>長押ししてハイライトの周りをグリグリするとして小さく指をずらすとハイライトが消えます（割と広範囲
        が消えます）</p>

        <div style="position: fixed; display: flex; z-index: 3; top: 500px;
            opacity: 0.4; left: 250px;">
            <div v-if="switchFunctionKey % 3 == 0">
                <button @click="switchKeyValue" class="uk-button uk-button-primary">単語検索</button>
            </div>
            <div v-else-if="switchFunctionKey % 3 == 1">
                <button @click="switchKeyValue" class="uk-button" style="backgroundColor: yellow;">ライト</button>
            </div>
            <div v-else>
                <button @click="switchKeyValue" class="uk-button uk-button-muted"> 解除 </button>
            </div>
        </div>

        <div @select="selected" @touchstart="switchWordFunction" @touchmove='switchUnhighlight' @blur="selected" @keyup=
            "selected" @click="switchWordFunction">

            <div v-html="article"></div>
        </div>

    </div>
</template>
<script>
export default {
  data:function () {
    return {

      article: "",
      showquery: {
        format: 'json',
        action: 'parse',
        origin: '*',
        page: "",
      },

      url: "https://en.wikipedia.org/w/api.php",

      switchFunctionKey: 0,

      translatedWord: "",
      selectedText: "使い方",
      searchWordId: "",
      translated: "「単語検索」のボタンで表示切り替え、範囲指定＋適当なところをタッチで単語検索",

    }
  },
  mounted: function () {
    var pathname= location.pathname;
    var searchname = pathname.split("/");
    var underVarJoin = searchname[3].split("%20").join('_')
    this.showquery.page = (searchname.length == 4) ? encodeURI(underVarJoin) : "";
    axios.get(this.url, {params: this.showquery})
         .then((response) => {
            this.article = response.data.parse.text["*"]
             .replace(
             /<a href="\/wiki\/((?!File:).*?)".*?>(.+?)<\/a>/g,
             '<a href="./$1">$2</a>')
             .replace(
             /<a href="\/w\/index.*?".*?>(.*?)<\/a>/g,
             '$1'
             )
             .replace(
             /<a href="((?=Help).*?)".*?>(.*?)<\/a>/g,
             '$2'
             );
         })
    .catch(response => console.log(response));
  },

  methods: {

    switchKeyValue: function () {
      this.switchFunctionKey += 1
    },
    switchWordFunction: function () {

      if (this.switchFunctionKey % 3 == 1) {
         this.searchWordFunction();
      } else if (this.switchFunctionKey % 3 == 2) {
         this.selected();
      }

    },
    switchUnhighlight: function () {

      if (this.switchFunctionKey % 3 == 2) {
         this.unhighlight();
      }

    },

    searchWordFunction: function(event) {

      if (window.getSelection().toString() !== "") {
        this.selectedText = window.getSelection().toString();
        this.translatedWord = this.selectedText;
      }

      axios.get("/api/data/" + this.translatedWord)
           .then((response) => {

             var searchId = response.data.match(/(\d{6})/);
             this.searchWordId = searchId[0]

             axios.get("/api/datashow/" + this.searchWordId)
                  .then((response) => {
                    var means = response.data.match(/<div>(.*?)<\/div>/)
                    this.translated = means[1];
                  })
                  .catch(response => console.log(response));
           })
           .catch((response) => {
             console.log(response);
             this.translated = "検索条件に一致する項目はありませんでした";
           });
    },

    selected: function() {

        var userSelection =window.getSelection();
        var rangeObject = userSelection.getRangeAt(0);
        var span = document.createElement("span");
        rangeObject.surroundContents(span);
        span.style.backgroundColor = "yellow";

     },
     unhighlight: function() {

       var userSelection = window.getSelection();
       var startRangeObject = userSelection.getRangeAt(0).startContainer;
       var endRangeObject = userSelection.getRangeAt(0).endContainer;

       var child = startRangeObject
       while (child) {
         if (child.nodeName == "SPAN") {
           var insertChild = document.createTextNode(child.textContent);
           var spanPalent = child.parentNode;
           spanPalent.insertBefore(insertChild, child);
           child.parentNode.removeChild(child);
         }

         child = child.nextSibling;

       }
     },
  },
}
</script>
<style scoped>
</style>
