var express     = require('express'),
    app         = express(),
    cors        = require('cors'),
    bodyParser  = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;

var router = express.Router();

var corsOptions = {
  origin: 'http://localhost:4200'
};

app.options('*', cors());

console.log("Sendgrid API Key: " + process.env.SENDGRID_API_KEY);
var sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);
console.log(sendgrid);

app.use('/api/v1/', router);

router.get('/', function(request, response) {
  response.json({ message: "Success" });
});

router.post('/send-message', cors(corsOptions), function(request, response, next) {
  console.log(request);

  var email = new sendgrid.Email({
    to: 'fbick@udallas.edu',
    from: request.body.fromAddress,
    replyto: request.body.fromAddress,
    fromname: request.body.fromName,
    subject: 'Message from ' + request.body.fromName + ' via Business Card',
    text: request.body.message
  });
  console.log(email);

  var error = false;
  sendgrid.send(email, function(err, json) {
    if (err) { error = err; }
    console.log(json);
  });

  if (email.text === '' || email.from === '' || email.fromname === '') {
    error = "Missing parameters";
  }

  if (error !== false) {
    console.error(error);
    response.status(500).json({ error: error });
  }
  else {
    console.log(email);
    response.status(200).json({ message: "Email sent" });
  }

});

app.listen(port);
console.log("Express server running on port " + port);
