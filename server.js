<script>
//Code adapted from practical sessions of CEGEG077 2018.
//developed with L https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
//Server code:
// express is the server that forms part of the nodejs program
var express = require('express');
var app = express();
// serve static files - e.g. html, css
app.use(express.static(__dirname));
var https = require('https');
var fs = require('fs');
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4443);
</script>
<script>
//Added body-parser so that it will be able to process the uploaded data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
</script>
<script>
app.post('/uploadData',function(req,res){
// using POST here as we are uploading data
// so the parameters form part of the BODY of the request rather than the RESTful API
       console.dir(req.body);
       pool.connect(function(err,client,done) {
             if(err){
             console.log("not able to get connection "+ err);
             res.status(400).send(err);
             }
             var querystring = "INSERT into formdata (question1,question2,question3,question4,question5,question6) values
('" + req.body.question1 + "','" + req.body.question2 + "','" + req.body.question3+"''" + req.body.question4 + "','" + req.body.question5 + "','" + req.body.question6 + "',)";
             console.log(querystring);
             client.query( querystring,function(err,result) {
          done();
          if(err){
               console.log(err);
               res.status(400).send(err);
}
          res.status(200).send("row inserted");
       });
}); });
</script>
<script>
var querystring = "INSERT into formdata (question1,question2,question3,question4,question5,question6
) values ('";
querystring = querystring + req.body.question1 + "','" + req.body.question2 + "','" +
req.body.question3 + "','";
querystring = querystring + req.body.question4 + "','" + req.body.question5 + "','"
+ req.body.question6+"')";
</script>
