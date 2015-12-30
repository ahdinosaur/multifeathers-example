var feathers = require('feathers-client')
var request = require('request')

module.exports = createApi

function createApi () {
  return feathers('http://localhost:9967')
    .configure(feathers.request(request))
}
