function preload() {
    
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    line(0, 300, windowWidth, 300);

  }
  
  let value = 0;
  let x = 0;
  let xpos = 25;
  function draw() {
    fill(value);
    rect(xpos, 250, 50, 50);

    ellipse(x, height/2, 20, 20);
    x = x + 1;
}

function mouseClicked() {
  xpos+=50;
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}