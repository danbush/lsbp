//initialize some required modules
var randomInt = require('random-int');
var deleteKey = require('key-del');

// Build each room
var room1 = {name:"room 1", img:"http://placehold.it/500x500/222222"};
var room2 = {name:"room 2", img:"http://placehold.it/500x500"};
var room3 = {name:"room 3", img:"http://placehold.it/500x500/880000"};
var room4 = {name:"room 4", img:"http://placehold.it/500x500/008800"};
var room5 = {name:"room 5", img:"http://placehold.it/500x500/000088"};
var room6 = {name:"room 6", img:"http://placehold.it/500x500/ee7700"};
var room7 = {name:"room 7", img:"http://placehold.it/500x500/ff5511"};
var room8 = {name:"room 8", img:"http://placehold.it/500x500/228822"};

// Build the full room list
var roomDeck = {room1,room2,room3,room4,room5,room6,room7,room8};
var roomDeck_full = {room1,room2,room3,room4,room5,room6,room7,room8};
console.log("room deck pre murder: " + JSON.stringify(roomDeck));
// Initialize the murder room
var murderRoom = null;

// Get a random number to pick the murder room
var randomNumber = randomInt(1,8);
// Declare the murder room, and remove it from the room deck.
murderRoom = "room" + randomNumber;
console.log("murder room is " + murderRoom);
deleteKey(roomDeck,murderRoom,{copy: false});
console.log("room deck post murder: " + JSON.stringify(roomDeck));
// declare what can be used by the app
module.exports = {roomDeck,room1,room2,room3,murderRoom, roomDeck_full};