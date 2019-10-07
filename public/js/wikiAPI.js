new Vue({
  el: '#app',
  data: {
    users: []
  },
  mounted :function(){
    const list = {
      name: 'Glenna Reichert'
    }
    axios.get('https://jsonplaceholder.typicode.com/users',
            {
              params: list,
            })
          .then(response => this.users = response.data)
          .catch(response => console.log(response))
  }
})
