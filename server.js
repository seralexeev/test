var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient

app.get('/api', function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/skype', function (err, db) {
        db.collection('issues').find().sort({issue: 1}).skip(+req.query.skip).limit(+req.query.take).toArray(function (err, items) {
            res.send(items);
            db.close();
        });
    });
});

app.listen(3000, function () {
    console.log('Express server listening on port 3000');
});
