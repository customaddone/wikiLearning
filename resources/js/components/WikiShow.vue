<template>
    <div>
        <p>範囲指定して適当な場所を軽くタッチするとハイライトが付きます</p>
        <p>長押ししてハイライトの周りをグリグリするとして小さく指をずらすとハイライトが消えます（割と広範囲
        が消えます）</p>
        <p>※どうしてもハイライトが付かない部分、消えない部分があります</p>
        <div id="textbox" style="position: fixed;  display: flex; z-index: 3;
            top: 0px; left: 0px; width:1;"">
            <div class="uk-card uk-card-default uk-margin" style="width: 250px;">
                <div class="uk-card-media-top">
                    <div class="uk-cover-container">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">{{ selectedText }}</h3>
                        <p style="height: 112px; overflow: hidden;">{{ translated }}</p>
                    </div>
                    <div class="uk-card-footer"><a class="uk-text-muted" href="#">READ MORE</a></div>
                </div>
            </div>
        </div>
        <div @select="selected" @touchstart="textBoxClient" @touchmove='unhighlight' @blur="selected" @keyup=
            "selected" @click="textBoxClient">
            <div v-html="usersshow"></div>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      usersshow: "",
      showquery: {
        format: 'json',
        action: 'parse',
        origin: '*',
        page: "",
        },
      url: "https://en.wikipedia.org/w/api.php",
      selectedText: "",
      searchWordId: "",
      translated: "",
      translatedquery: {
        Dic: 'EJdict',
        word: "",
        Scope: "HEADWORD",
        Match: "STARTWITH",
        Prof: 'application/json',
        PageSize: 20,
        PageIndex: 0,
      },
    }
  },
  mounted: function () {
    var pathname= location.pathname;
    var searchname = pathname.split("/");
    var underVarJoin = searchname[3].split("%20").join('_')
    this.showquery.page = (searchname.length == 4) ? encodeURI(underVarJoin) : "";
    axios.get(this.url, {params: this.showquery})
         .then((response) => {
            this.usersshow = response.data.parse.text["*"]
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
      textBoxClient: function(event) {
        if (window.getSelection().toString() !== "") {
          this.selectedText = window.getSelection().toString();
          this.translatedquery.word = this.selectedText;
        }

        axios.get("/api/data/" + this.translatedquery.word)
             .then((response) => {
                this.translated = "検索条件に一致する項目はありません..."
                var searchId = response.data.match(/(\d{6})/);
                this.searchWordId = searchId[0]
                axios.get("/api/datashow/" + this.searchWordId)
                      .then((response) => {
                        var means = response.data.match(/<div>(.*?)<\/div>/)
                        this.translated = means[1];
                      })
                      .catch(response => console.log(response));
             })
             .catch(response => console.log(response));
      },
    }
  }
</script>
<style scoped>
</style>
