$(document).foundation();

window.addEventListener('resize', resize);

function loadApp() {

  console.log('Load App');

  var size = getSize();
  console.log(size);

  // Create the flipbook

  $('.flipbook').turn({

      // Width
      width: size.width,
      
      // Height
      height: size.height,

      // Elevation
      elevation: 50,
      
      // Enable gradients
      gradients: true,
      
      // Auto center this flipbook
      autoCenter: true

  });
}


function getSize() {
  console.log('get size');
  var width = document.body.clientWidth/1.4;
  var height = width/3;

  return {
    width: width,
    height: height
  }
}

function resize() {
  console.log('resize event triggered');

  var size = getSize();
  console.log(size);

  $('.flipbook').turn('size', size.width, size.height);
}


// Load the HTML4 version if there's not CSS transform

yepnope({
    test : Modernizr.csstransforms,
    yep: ['js/vendor/turn.min.js'],
    nope: ['js/vendor/turn.html4.min.js'],
    both: ['css/turn.css'],
    complete: loadApp
});