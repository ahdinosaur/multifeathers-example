var vel = require('vel')

var render = require('./render')
var createApi = require('./api')

var el = vel(render)
var api = createApi()

var node = el([])
document.body.appendChild(node)

api.service('things').find()
.then(function (things) {
  console.log("got things", things)
  el(things)
})
.catch(function (err) {
  console.error(err)
})
