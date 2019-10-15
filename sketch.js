var myImage;
var myImage2;
var mySound;
var cosquis;

function preload() {
  mySound = loadSound("./assets/beberiendose.mp3");
  myImage = loadImage("./assets/beberiendo.jpg")
  myImage2 = loadImage("./assets/mano.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  imageMode(CENTER);

  mySound.pause();
  mySound.playMode('sustain');

}

function draw() {
  // FOTO DEL BEBE
  image(myImage, width / 2, height / 2, myImage.width / 6, myImage.height / 6);

  // MANO
  cosquis = new Mano(mouseX, mouseY);
  cosquis.display();
  cosquis.move();

  // TEXTO: Tickle the baby
  fill("grey")
  textFont("Mansalva");
  textSize(60);
  text("Tickle the baby", width / 1.7, height / 6);

}

// LA MANO QUE HACE COSQUIS
function Mano(_x, _y) {

  // PROPIEDADES
  this.x = _x;
  this.y = _y;
  this.speed = 1;
  myImage2.resize(400, 400);
  this.body = image;

  var xInc = this.x;
  var yInc = this.y;

  // METODO 1: MOVE
  this.move = function() {
    this.x += xInc * this.speed;
    this.y += yInc * this.speed;
  }

  // METODO 2: DISPLAY
  this.display = function() {
    image(myImage2, this.x, this.y);
  }
}

// METODO: MOUSE CLICKED
function mouseClicked() {
  if (mySound.isPlaying() == false) {
    mySound.play();
  } else {
    mySound.pause();
  }
}

// METODO: WINDOW RESIZED
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
