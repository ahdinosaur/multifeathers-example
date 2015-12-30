var feathers = require('feathers')
var bodyParser = require('body-parser')
var cors = require('cors')
var memory = require('feathers-memory')

module.exports = createApi

function createApi () {
  return feathers()
    .configure(feathers.rest())
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/things', memory())
}
