let img;
let waves = [];

function preload() {
  img = loadImage('assets/starlove.jpeg');
}

function setup() {
  let canvas = createCanvas(img.width, img.height);
  canvas.parent('canvas-container');
  
  for (let i = 0; i < 10; i++) {
    waves.push(new WaveLine(random(0, width), random(0, height), random(50, 200), random(0, TWO_PI)));
  }
}

function draw() {
    // if (frameCount === 1) {
    //     capturer.start();
    //   }
  background(255);
  image(img, 0, 0);
  
  for (let i = 0; i < waves.length; i++) {
    waves[i].update();
    waves[i].display();
  }


  // if(frameCount < 60*5){
  //   capturer.capture(canvas);
  // }
  
  // else if (frameCount === 60*5) {
  //   capturer.save();
  //   capturer.stop();
  // }
}

class WaveLine {
  constructor(x, y, wavelength, phase) {
    this.x = x;
    this.y = y;
    this.wavelength = wavelength;
    this.phase = phase;
  }

  update() {
    this.phase += 0.05;
  }

  display() {   
    stroke(255, 0, 0);
    strokeWeight(1);
    noFill();

    beginShape();
    for (let x = 0; x < width; x += 10) {
      let y = this.y + sin((x / this.wavelength) + this.phase) * 50;
      vertex(x, y);
    }
    endShape();
  }
}
