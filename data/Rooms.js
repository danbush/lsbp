//initialize some required modules
var randomInt = require('random-int');
var deleteKey = require('key-del');

// Build each room
var room1 = {name:"Lobby", img:"/images/area_lobby.png"};
var room2 = {name:"Lounge", img:"/images/area_lounge.png"};
var room3 = {name:"Exhibit Hall", img:"/images/area_exhibit_hall.png"};
var room4 = {name:"Kitchen", img:"/images/area_kitchen.png"};
var room5 = {name:"Theatre", img:"/images/area_theatre.png"};
var room6 = {name:"Training Grounds", img:"/images/area_training_grounds.png"};
var room7 = {name:"Conference Room", img:"/images/area_conference_room.png"};
var room8 = {name:"Lounge", img:"/images/area_lounge.png"};

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