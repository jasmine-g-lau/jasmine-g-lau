let video;
let handPose;
let modelReady = false;
let hands = [];
let particles = [];
const gravity = 0.25;
let colors;
let endColor;
let wasThumbsUp = false;

function setup() {
  createCanvas(640, 480);
  colors = ['aquamarine', 'paleturquoise', 'pink', 'lightpink'];
  endColor = color(255);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  ml5.handPose({ flipped: true }).then((model) => {
    handPose = model;
    console.log("handPose model loaded, has detectStart:", typeof handPose.detectStart);
    modelReady = true;
    handPose.detectStart(video, gotHands);
  });
}

function gotHands(results) {
  hands = results;
}

function draw() {
  background(0);
  if (video) {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0, width, height);
    pop();
  }
  if (modelReady) {
    checkThumbsUp();
  }
  particles.forEach((p) => {
    p.step();
    p.draw();
  });
  particles = particles.filter((p) => p.isActive);
}

let fireworkCooldown = 0; // frames until next allowed shot
const FIREWORK_INTERVAL = 15; // frames between shots while thumb is up (~4 shots/sec at 60fps)

function checkThumbsUp() {
  if (hands && hands.length > 0) {
    let hand = hands[0];
    let thumbTip = hand.keypoints[4];
    let thumbIP = hand.keypoints[3];
    let indexTip = hand.keypoints[8];
    let middleTip = hand.keypoints[12];
    let isThumbsUp = (thumbTip.y < thumbIP.y - 15) &&
                     (thumbTip.y < indexTip.y - 30) &&
                     (thumbTip.y < middleTip.y - 30);

    if (isThumbsUp) {
      if (fireworkCooldown <= 0) {
        // Stagger x/y slightly around the thumb tip
        let offsetX = random(-40, 40);
        let offsetY = random(-30, 30);
        particles.push(new Firework(thumbTip.x + offsetX, thumbTip.y + offsetY));
        fireworkCooldown = FIREWORK_INTERVAL;
      }
      wasThumbsUp = true;
    } else {
      wasThumbsUp = false;
      fireworkCooldown = 0; // reset so it fires immediately next time thumb goes up
    }
  } else {
    wasThumbsUp = false;
    fireworkCooldown = 0;
  }

  if (fireworkCooldown > 0) {
    fireworkCooldown--;
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}