const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function () { console.log('listening on 8080') });
app.get('/beauty', (request, response) => { response.send("Beuaty Page") });
app.get('/', function (request, response) { response.sendFile(__dirname + "/index.html") });
app.get('/write', (request, response) => { response.sendFile(__dirname + "/write.html") });

app.post('/add', (request, response) => { console.log(request.body.title) });