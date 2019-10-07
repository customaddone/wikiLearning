new Vue({
  el: '#app',
  data: {
    users: []
  },
  mounted :function(){
    axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => this.users = response.data)
          .catch(response => console.log(response))
  }
})
