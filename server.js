var express     = require('express'),
    app         = express(),
    cors        = require('cors'),
    request     = require('request'),
    bodyParser  = require('body-parser');



var port = process.env.PORT || 8080;

var router = express.Router();

app.use(express.static(__dirname + '/public'));

var corsOptions = {
  origin: 'http://localhost:4200'
};

app.options('*', cors());

console.log("Sendgrid API Key: " + process.env.SENDGRID_API_KEY);
var sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);
console.log(sendgrid);

var recaptchaSecret = process.env.RECAPTCHA_SECRET;
var recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify";

function verifyRecaptcha(url, secret, token) {
  return new Promise(function(resolve, reject) {
    var responseBody;
    request.post({url: url, form: {secret: secret, response: token}}, function(error, res, body) {
      console.log(body);
      responseBody = body;
      var parsedResponse = JSON.parse(responseBody);
      console.log("Google Response Body: " + JSON.stringify(parsedResponse));
      if(parsedResponse.success) {
        resolve("Success");
      }
      else {
        reject(Error("reCAPTCHA Verification Failed: " + parsedResponse.errorCodes));
      }
    });
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/', router);
app.use(express.static(__dirname + '/ember/dist'));

router.post('/send-message', cors(corsOptions), function(req, res, next) {
  console.log(req);

  verifyRecaptcha(recaptchaUrl, recaptchaSecret, req.body.grecaptchaToken).then(function(promiseResult) {
    var error = false;

    var email = new sendgrid.Email({
      to: 'fbick@udallas.edu',
      from: req.body.fromAddress,
      replyto: req.body.fromAddress,
      fromname: req.body.fromName,
      subject: 'Message from ' + req.body.fromName + ' via Business Card',
      text: req.body.message
    });
    console.log(email);

    sendgrid.send(email, function(err, json) {
      if (err) { error = err; }
      console.log(json);
    });

    if (error !== false) {
      console.error(error);
      res.status(400).json({ error: error });
    }

    if (email.text === '' || email.from === '' || email.fromname === '') {
      error = "Missing parameters";
    }
    else {
      console.log(email);
      res.status(202).json({ message: "Email sent" });
    }
  }, function(promiseError) {
    console.error(promiseError);
    res.status(400).json({ message: "An error occurred: " + promiseError});
  });
});


app.listen(port);
console.log("Express server running on port " + port);
