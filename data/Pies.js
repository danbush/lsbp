//initialize some required modules
var randomInt = require('random-int');
var deleteKey = require('key-del');

// Build each pie
var pie1 = {name:"pie 1", card:"http://placehold.it/500x500/222222"};
var pie2 = {name:"pie 2", card:"http://placehold.it/500x500"};
var pie3 = {name:"pie 3", card:"http://placehold.it/500x500/880000"};
var pie4 = {name:"pie 4", card:"http://placehold.it/500x500/008800"};
var pie5 = {name:"pie 5", card:"http://placehold.it/500x500/000088"};
var pie6 = {name:"pie 6", card:"http://placehold.it/500x500/ee7700"};

// Build the full pie list
var pieDeck = {pie1,pie2,pie3,pie4,pie5,pie6};
console.log("pie deck pre murder: " + JSON.stringify(pieDeck));
// Initialize the murder pie
var murderPie = null;

// Get a random number to pick the murder pie
var randomNumber = randomInt(1,6);
// Declare the murder pie, and remove it from the pie deck.
murderPie = "pie" + randomNumber;
console.log("murder pie is " + murderPie);
deleteKey(pieDeck,murderPie,{copy: false});
console.log("pie deck post murder: " + JSON.stringify(pieDeck));
// declare what can be used by the app
module.exports = {pieDeck,pie1,pie2,pie3,murderPie};