module.exports = render

function render (h, things) {
  return h('div.things', things.map(function (thing) {
    return h('div.thing', [
      h('h2.name', {
        textContent: thing.name
      }),
      h('p.description', {
        textContent: thing.description
      })
    ])
  }))
}
