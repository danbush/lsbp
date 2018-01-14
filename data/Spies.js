//initialize some required modules
var randomInt = require('random-int');
var deleteKey = require('key-del');

// Build each spy
var spy1 = {name:"spy 1", card:"http://placehold.it/500x500/222222", icon: "http://fillmurray.com/50/50"};
var spy2 = {name:"spy 2", card:"http://placehold.it/500x500", icon: "http://fillmurray.com/50/50"};
var spy3 = {name:"spy 3", card:"http://placehold.it/500x500/880000", icon: "http://fillmurray.com/50/50"};
var spy4 = {name:"spy 4", card:"http://placehold.it/500x500/008800", icon: "http://fillmurray.com/50/50"};
var spy5 = {name:"spy 5", card:"http://placehold.it/500x500/000088", icon: "http://fillmurray.com/50/50"};
var spy6 = {name:"spy 6", card:"http://placehold.it/500x500/ee7700", icon: "http://fillmurray.com/50/50"};

// Build the full spy list
var spyDeck = {spy1,spy2,spy3,spy4,spy5,spy6};
console.log("spy deck pre murder: " + JSON.stringify(spyDeck));
// Initialize the murder spy
var murderSpy = null;

// Get a random number to pick the murder spy
var randomNumber = randomInt(1,6);
// Declare the murder spy, and remove it from the spy deck.
murderSpy = "spy" + randomNumber;
console.log("murder spy is " + murderSpy);
deleteKey(spyDeck,murderSpy,{copy: false});
console.log("spy deck post murder: " + JSON.stringify(spyDeck));
// declare what can be used by the app
module.exports = {spyDeck,spy1,spy2,spy3,spy4,spy5,spy6,murderSpy};