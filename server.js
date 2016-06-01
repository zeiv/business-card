var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

console.log("Sendgrid API Key: " + process.env.SENDGRID_API_KEY);
var sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);
console.log(sendgrid);

router.get('/', function(request, response) {
  response.json({ message: "Success" });
});

app.use('/api/v1/', router);

app.listen(port);
console.log("Express server running on port " + port);

router.route('/send-message')
.post(function(request, response) {

  var email = new sendgrid.Email({
    to: 'fbick@udallas.edu',
    from: request.body.fromAddress,
    replyto: request.body.fromAddress,
    fromname: request.body.fromName,
    subject: 'Message from ' + request.body.fromName + ' via Business Card',
    text: request.body.message
  });

  var error = false;
  sendgrid.send(email, function(err, json) {
    if (err) { error = err; }
    console.log(json);
  });

  // if (email.text === '' || email.from === '') {
  //   error = "Missing parameters";
  // }

  if (error !== false) {
    console.error(error);
    response.status(500).json({ error: error });
  }
  else {
    console.log(email);
    response.status(200).json({ message: "Email sent" });
  }

});
