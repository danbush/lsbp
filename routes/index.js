var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;
var randomInt = require('random-int');

var Rooms = require('../data/Rooms');
var Pies = require('../data/Pies');
var Spies = require('../data/Spies');
var MurderInfo = require('../data/MurderGenerator');

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

var gameDataSchema = new Schema({
  owner: String,
  player2: String,
  player3: String,
  player4: String,
  gamename: String,
  ready: Boolean
}, {collection: 'user-data'});

var GameData = mongoose.model('GameData', gameDataSchema);

GameData.remove({ constant: false }, function (err) {
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
  console.warn('\x1b[35m%s\x1b[35m', 'username is ' + req.query.username + " and game name is " + req.query.gamename);
  var newGame = {
    owner: req.query.username,
    gamename: req.query.gamename,
    ready: false
  };
  // var data = new GameData(newGame);
  // data.save();
  res.render('wait', {newGame: newGame});
});

router.get('/choose', function(req, res, next) {
  res.render('choose');
});

router.get('/game', function(req, res, next) {
  const murderInfo = new MurderInfo.PickMurderThings();
  var murderRoom = Object.freeze(murderInfo.room());
  var murderPie = Object.freeze(murderInfo.pie());
  var murderSpy = Object.freeze(murderInfo.spy());
  console.warn('\x1b[35m%s\x1b[35m',"YOOO! THE MURDER ROOM IS " + murderInfo.room());
  console.warn('\x1b[35m%s\x1b[35m',"YOOO! THE MURDER PIE IS " + murderPie);
  console.warn('\x1b[35m%s\x1b[35m',"YOOO! THE MURDERER IS " + murderInfo.spy());
  var murderPieObject = {card: eval("Pies." + murderPie + ".card"), name: eval("Pies." + murderPie + ".name")};
  var murderSpyObject = {card: eval("Spies." + murderSpy + ".card"), name: eval("Spies." + murderSpy + ".name")};
  var murderRoomObject = {card: eval("Rooms." + murderRoom + ".card"), name: eval("Rooms." + murderRoom + ".name")};
  res.render('game', {MurderInfo: murderInfo, murderPie: murderPieObject, murderSpy: murderSpyObject, murderRoom: murderRoomObject});
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
