var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(request, response) {
  response.json({ message: "Success" });
});

app.use('/api/v1/', router);

app.listen(port);
console.log("Express server running on port " + port);
