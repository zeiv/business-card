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

router.post('send-message', function(request, response) {
  var sendgrid = require('sendgrid')('SENDGRID_API_KEY');

  var payload = new sendgrid.Email({
    to: 'fbick@udallas.edu',
    from: request.params.fromAddress,
    fromname: request.params.fromName,
    subject: 'Message from ' + request.params.fromName + ' via Business Card',
    text: request.params.message
  });

  var error = false;
  sendgrid.send(email, function(err, json) {
    if (err) { error = err; }
    console.log(json);
  });

  if (error !== false) {
    console.error(error);
    response.status(500).json({ error: error });
  }
  else {
    response.status(200).json({ message: "Email sent" });
  }

});
