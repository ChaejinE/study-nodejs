const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect("mongodb+srv://cjlotto:1234@cluster0.x4bssi5.mongodb.net/?retryWrites=true&w=majority",
    (err, client) => {
        if (err) return console.log(err);

        db = client.db("TODOApp");
        var data = { 이름: "John", 나이: 19 };
        db.collection('post').insertOne(data, (err, result) => { console.log("good") });
        app.listen(8080, function () { console.log('listening on 8080') });
    })

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/beauty', (request, response) => { response.send("Beuaty Page") });
app.get('/', function (request, response) { response.sendFile(__dirname + "/index.html") });
app.get('/write', (request, response) => { response.sendFile(__dirname + "/write.html") });

app.post('/add', (request, response) => { console.log(request.body.title) });