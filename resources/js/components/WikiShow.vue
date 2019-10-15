<template>
    <div>
        <div @select="selected" @touchstart="selected" @touchmove='unhighlight' @blur="selected" @keyup=
            "selected" @click="selected">
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
          if (this.selectedText == "") {
            var userSelection =window.getSelection();
            var rangeObject = userSelection.getRangeAt(0);

            var span = document.createElement("span");
            rangeObject.surroundContents(span);
            span.style.backgroundColor = "yellow";
          }
      },
      unhighlight: function() {
        var userSelection = window.getSelection();
        var startRangeObject = userSelection.getRangeAt(0).startContainer;
        var endRangeObject = userSelection.getRangeAt(0).endContainer;

        function deletehighlight(rangeparent) {
          var parent = rangeparent.parentNode;
          var child = parent.firstChild;
          while (child) {
            if (child.nodeType == 1) {
              child.style.backgroundColor = "";
            }
            child = child.nextSibling;
          }
        }
        deletehighlight(startRangeObject);
        deletehighlight(endRangeObject);

      }
    }
  }


</script>

<style scoped>

</style>
