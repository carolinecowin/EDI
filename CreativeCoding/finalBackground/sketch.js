
let img;
function preload() {
  img = loadImage('assets/CodingBackground.png');
}






function setup() {// runs once
  createCanvas(windowWidth, windowWidth);
  fill("violet");
  strokeWeight(1);
}

function draw() {


var num = 24; //variable for the number of squares in the array

  var sideLen = windowWidth/num; //variable for the side length of each square

  for(var y = 0; y < windowWidth; y = y + sideLen) {//loop to create rowsof squares in the x direction

  for (var x = 0; x < windowWidth; x = x + sideLen) {//loop to create a row of squares in the x direction

image(img, 0, 0);

  }


  noLoop();
}
}
