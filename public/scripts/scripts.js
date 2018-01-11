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
          var windowWidth = window.innerWidth
          x = 690;
          console.log(window.innerWidth);
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
    windowIsFull = false;
  } else {
    e.preventDefault();
    requestFullscreen(document.documentElement);
    windowIsFull = true;
  }
  console.log("full screen is " + windowIsFull);
});