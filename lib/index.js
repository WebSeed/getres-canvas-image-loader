var loadHttp = require('getres/lib/loaders/http')
var Image = require('canvas').Image

function loadCanvasImage (node, cb) {
  loadHttp(node, function (err, resource) {
    if (err) {
      return cb(err)
    }
    var image = new Image()
    image.src = resource
    cb(null, image)
  })
}

module.exports = loadCanvasImage
