var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;
var randomInt = require('random-int');

var murderDataSchema = new Schema({
  room: String,
  pie: String,
  spy: String,
  constant: Boolean
}, {collection: 'murder-data'});

var MurderData = mongoose.model('MurderData', murderDataSchema);

// Clean the collection each time the server restarts
MurderData.remove({ constant: false }, function (err) {
  if (err) return handleError(err);
  // removed!
});

var seed = {
  room: "20",
  pie: "30",
  spy: "40",
  constant: false
};

var data = new MurderData(seed);
data.save();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/wait', function(req, res, next) {
  res.render('wait');
});

router.get('/choose', function(req, res, next) {
  res.render('choose');
});

router.get('/game', function(req, res, next) {
  res.render('game');
});

router.get('/new-data', function(req, res, next) {
  var pieNumber = randomInt(1,8).toString();
  MurderData.findById(data._id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.pie = pieNumber;
    doc.save();
  })
  MurderData.find()
    .then(function(doc){
      res.render('game', {murderInfo: doc});
    });
});

router.post('/insert', function(req, res, next) {

  res.redirect('/');
});

router.post('/update', function(req, res, next) {

});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  MurderData.findByIdAndRemove(id).exec();
  //res.redirect('/');
});

module.exports = router;
