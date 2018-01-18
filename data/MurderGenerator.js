//initialize some required modules
var randomInt = require('random-int');
var deleteKey = require('key-del');
var Rooms = require('./Rooms');
var Pies = require('./Pies');
var Spies = require('./Spies');

var theDeck = {};

class PickMurderThings {
  room () {
    var roomDeck = Rooms.roomDeck;
    var randomNumber = randomInt(1,8);
    var murderRoom = "room" + randomNumber;
    deleteKey(roomDeck,murderRoom,{copy: false});
    theDeck += roomDeck;
    return murderRoom;
  }
  pie () {
    var pieDeck = Pies.pieDeck;
    var randomNumber = randomInt(1,6);
    var murderPie = "pie" + randomNumber;
    deleteKey(pieDeck,murderPie,{copy: false});
    theDeck += pieDeck;
    return murderPie;
  }
  spy () {
    var spyDeck = Spies.spyDeck;
    var randomNumber = randomInt(1,6);
    var murderSpy = "spy" + randomNumber;
    deleteKey(spyDeck,murderSpy,{copy: false});
    theDeck += spyDeck;
    return murderSpy;
  }
  // murderedDeck () {
  //   // deck = {}
  //   // deck += Rooms.roomDeck;
  //   var murderRoom = this.room;
  //   return murderRoom;
  // }
}

exports.PickMurderThings = PickMurderThings;
exports.theDeck = theDeck;