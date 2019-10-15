<template>
    <div>
        <p>選択中文字:<span>{{ selectedText }}</span></p>
        <div @select="selected" @touchstart="selected" @touchmove="textstate" @blur="selected" @keyup=
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
      textstate: function () {
        this.selectedText = "textstate";
      },
      unhighlight: function () {
        if (!(colour instanceof Colour)) {
          colour = new Colour(colour);
        }

        if (node.nodeType == 1) {
          var bg = node.style.backgroundColor;
          if (bg && colour.equals(new Colour(bg))) {
            node.style.backgroundColor = "";
          }
        }

        var child = node.firstChild;
        while (child) {
          unhighlight(child, colour);
          child = child.nextSibling;
        }
      },
      selected: function() {
          if (this.selectedText == "") {
            var userSelection =window.getSelection();
            var rangeObject = userSelection.getRangeAt(0);

            var span = document.createElement("span");
            rangeObject.surroundContents(span);
            span.style.backgroundColor = "yellow";
          } else {

          function unhighlight(node, colour) {
            if (!(colour instanceof Colour)) {
              colour = new Colour(colour);
            }

            if (node.nodeType == 1) {
              var bg = node.style.backgroundColor;
              if (bg && colour.equals(new Colour(bg))) {
                node.style.backgroundColor = "";
              }
            }

            var child = node.firstChild;
            while (child) {
              unhighlight(child, colour);
            child = child.nextSibling;
            }
          }
        }
      }
    }
  }


</script>

<style scoped>

</style>
