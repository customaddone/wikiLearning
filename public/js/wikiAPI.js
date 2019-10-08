new Vue({
   el: '#app',
   data: {
     users: [],
     // 結局のところorigin=*を追加するだけでAccess-Control-Allow-Origin通過するみたい
     // なんで？
     query: {
       format: 'json',
       action: 'query',
       list: 'search',
       origin: '*',
       srsearch: 'AKIRA'
     },
   },
   mounted :function(){
     axios.get( "https://ja.wikipedia.org/w/api.php", {params: this.query})
           .then(response => this.users = response.data)
           .catch(response => console.log(response))
   }
 })
