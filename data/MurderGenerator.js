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
  murderedDeck (room,pie,spy) {
    var deck = [];
    var roomNumber = room.slice(-1) - 1;
    var pieNumber = pie.slice(-1) - 1;
    var spyNumber = spy.slice(-1)-1;
    console.log("room number is " + roomNumber);
    console.log("pie number is " + pieNumber);
    // This number for some reason is always wrong, even though the other two are always right.
    console.log("spy number is " + spyNumber);

    deck = deck.concat(Rooms.roomDeck);
    deck.splice(roomNumber,1);

    var pieDeck = Pies.pieDeck;
    pieDeck.splice(pieNumber,1);
    deck = deck.concat(pieDeck);

    var spyDeck = Spies.spyDeck;
    spyDeck.splice(spyNumber,1);
    deck = deck.concat(spyDeck);
    
    return deck;
  }
}

exports.PickMurderThings = PickMurderThings;
exports.theDeck = theDeck;