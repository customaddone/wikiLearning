<template>
    <div v-html="usersshow"></div>
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
      url: "https://en.wikipedia.org/w/api.php"
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
}
</script>

<style scoped>

</style>
