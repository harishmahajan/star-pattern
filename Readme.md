# Star Pattern


![Example CL Usage](example.gif)

## Installation

```
npm install -g nimstall
nimstall -g star-pattern
```

## Uses

```

var star= require('star-pattern');

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
   res.write(star(15));
   res.end(); //end the response
}).listen(8080);

```

## Output

```
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
**************
***************

```

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.me/HarishMahajan)
