// Audio
var audio = document.getElementById("background-music");
var mute = document.getElementById("mute");

window.onload = function() {
    audio.play();
}
mute.addEventListener('click', function () {
    if (audio.muted) {
      audio.muted = false;
      mute.innerHTML = '<img src="images/mute-no.svg" alt="mute">';
    } else {
      audio.muted = true;
      mute.innerHTML = '<img src="images/mute.svg" alt="unmute">';
    }
}, false);


// Socket Stuff
// Make connection
var socket = io.connect();

// Query DOM
var message = document.getElementById('chat-message');
var handle = document.getElementById('chat-handle');
var btn = document.getElementById('chat-send');
var output = document.getElementById('chat-output');
var feedback = document.getElementById('chat-feedback');

// Emit events
btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});
message.addEventListener('keypress', function() {
  socket.emit('typing', handle.value);
});

// Listen for events
socket.on('chat', function(data) {
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', function(data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});