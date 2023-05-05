const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs')

var db;
MongoClient.connect("mongodb+srv://cjlotto:1234@cluster0.x4bssi5.mongodb.net/?retryWrites=true&w=majority",
    (err, client) => {
        if (err) return console.log(err);

        db = client.db("TODOApp");
        app.listen(8080, function () { console.log('listening on 8080') });
    })

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (request, response) { response.sendFile(__dirname + "/index.html") });
app.get('/write', (request, response) => { response.sendFile(__dirname + "/write.html") });
app.get('/list', (request, response) => {
    db.collection('post').find().toArray((err, result) => {
        console.log(result);
        response.render('list.ejs', { posts: result });
    })
});

app.post('/add', (request, response) => {
    var data = { 제목: request.body.title, 날짜: request.body.date };
    db.collection('post').insertOne(data, (err, result) => { console.log("good") });
});