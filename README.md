# Canvas Image Loader

Canvas image loader for [getres](https://github.com/WebSeed/getres).

Returns a DOM image in the browser and `Canvas.Image` instance in Node.js.

## Example

```js
var getres = require('getres')
var loader = require('./lib')

getres.register('canvas-image', loader)

getres(
  {
    photo: {
      src: 'https://example.com/panda.jpg',
      type: 'canvas-image'
    }
  },
  function (err, resources) {
    if (err) {
      return console.error(err)
    }
    console.log('photo', resources.photo)
  }
)
```
