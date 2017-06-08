const axios = require('axios')
const url = "http://api.randomuser.me/"
axios.get(url)
  .then(function(response) {
    console.log(response)
  })
  .catch(function(err) {
    console.log(err.message)
  })