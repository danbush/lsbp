//initialize some required modules
var randomInt = require('random-int');
var deleteKey = require('key-del');

// Build each pie
var pie1 = {name:"Cherry", card:"/images/card_cherry.png", icon: "http://fillmurray.com/50/50"};
var pie2 = {name:"Strawberry", card:"/images/card_strawberry.png", icon: "http://fillmurray.com/50/50"};
var pie3 = {name:"Blueberry", card:"/images/card_blueberry.png", icon: "http://fillmurray.com/50/50"};
var pie4 = {name:"Boysenberry", card:"/images/card_boysenberry.png", icon: "http://fillmurray.com/50/50"};
var pie5 = {name:"Blackberry", card:"/images/card_blackberry.png", icon: "http://fillmurray.com/50/50"};
var pie6 = {name:"Raspberry", card:"/images/card_raspberry.png", icon: "http://fillmurray.com/50/50"};

// Build the full pie list
var pieDeck = [pie1,pie2,pie3,pie4,pie5,pie6];
var pieDeck_full = {pie1,pie2,pie3,pie4,pie5,pie6};
//console.log("pie deck pre murder: " + JSON.stringify(pieDeck));
// Initialize the murder pie
var murderPie = null;

// Get a random number to pick the murder pie
var randomNumber = randomInt(1,6);
// Declare the murder pie, and remove it from the pie deck.
murderPie = "pie" + randomNumber;
//console.log("murder pie is " + murderPie);
deleteKey(pieDeck,murderPie,{copy: false});
//console.log("pie deck post murder: " + JSON.stringify(pieDeck));
// declare what can be used by the app
module.exports = {pieDeck,pieDeck_full,pie1,pie2,pie3,pie4,pie5,pie6,murderPie};