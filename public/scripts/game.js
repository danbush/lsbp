// Game UI
// Notepad
var notepad = document.getElementById('notepad');
var notepadTab = document.getElementById('notepad-tab')

notepadTab.addEventListener('click', function() {
  if(notepad.id === 'notepad') {
    notepad.id = 'notepad-open';

  } else {
    notepad.id = 'notepad';
  }
  console.log(notepad.id);
});

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

//interact js
// target elements with the "draggable" class
  interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: {
    resistance: 10,
    minSpeed: 200,
    endSpeed: 100
    },
    // keep the element within the area of it's parent
    restrict: {
      restriction: 'self',
      endOnly: true
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        if (x < -1000) {
          x = -990;
        } else if (x > window.innerWidth - 700) {
          var windowWidth = window.innerWidth;
          x = x-100;
          console.log("window inner width is " + window.innerWidth);
        }
    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px)';

    // update the position attributes
    target.setAttribute('data-x', x);
    //target.setAttribute('data-y', y);
  }

// Full Screen
var requestFullscreen = function (ele) {
  if (ele.requestFullscreen) {
    ele.requestFullscreen();
  } else if (ele.webkitRequestFullscreen) {
    ele.webkitRequestFullscreen();
  } else if (ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen();
  } else if (ele.msRequestFullscreen) {
    ele.msRequestFullscreen();
  } else {
    console.log('Fullscreen API is not supported.');
  }
};

var exitFullscreen = function () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else {
    console.log('Fullscreen API is not supported.');
  }
};

var fsDocButton = document.getElementById('fs-doc-button');
var fsExitDocButton = document.getElementById('fs-exit-doc-button');

var windowIsFull = false;
console.log("full screen is " + windowIsFull);
fsDocButton.addEventListener('click', function(e) {
  if(windowIsFull) {
    e.preventDefault();
    exitFullscreen();
    document.getElementById("background-music").pause();
    document.getElementById("background-music").currentTime = 0;
    document.getElementById("pre-post-overlay").className = "pre-play-overlay";
    document.getElementById("fs-doc-button").innerHTML = "PLAY";
    windowIsFull = false;
  } else {
    e.preventDefault();
    requestFullscreen(document.documentElement);
    document.getElementById("background-music").play();
    document.getElementById("pre-post-overlay").className = "post-play-overlay";
    document.getElementById("fs-doc-button").innerHTML = "STOP";
    windowIsFull = true;
  }
  console.log("full screen is " + windowIsFull);
});