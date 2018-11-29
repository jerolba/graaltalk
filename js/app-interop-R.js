const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var text = 'Hello World from Graal.jss!<br> '

  text += Polyglot.eval('R',
    `svg();
     require(lattice);
     x <- 1:100
     y <- sin(x/10)
     z <- cos(x^1.3/(runif(1)*5+10))
     print(cloud(x~y*z, main="cloud plot"))
     grDevices:::svg.off()
    `);
  res.send(text)
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})