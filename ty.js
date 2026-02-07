// Car position variable
let carX = 0;
let carY;
let carSpeed = 5;

function setup() {
  
  fill(1100,0,0)
   //rect(450, 140, 10, 55);
  //quad(480, 150, 490, 140, 515, 180, 525, 165);
  quad(480, 150, 483, 142, 522, 170, 515, 178);
  
  
  
  
  createCanvas(800, 400);
  // Start car in the middle vertically
  carY = height / 2;
}

function draw() {
  
  
  
  
  // ===== DRAW BACKGROUND =====
  // Sky (light blue)
  background(135, 206, 235);

  // ===== BEGIN BILLBOARD HERE =====
  
  // ===== END BILLBOARD HERE =====

  // ===== DRAW GRASS =====
  fill(34, 139, 34); // Green grass
  rect(0, height / 2 + 50, width, height);

  // ===== DRAW ROAD =====
  fill(70, 70, 70); // Gray road
  rect(0, carY + 30, width, 60);
  
  // Road lines (dashed yellow line)
  stroke(255, 255, 0);
  strokeWeight(3);
  for (let i = 0; i < width; i += 40) {
    line(i, carY + 60, i + 20, carY + 60);
  }
  noStroke();
  
  
   fill(200,200,200)
   rect(496, 150, 10, 80);
  
  fill(1100,1100,1100)
   circle(500, 160, 60);
  fill(1100,0,0)
   circle(500, 160, 50);
  fill(1100,1100,1100)
   circle(500, 160, 40);
  
  
  
  
   fill(0, 0, 0);
  rect(485, 145, 30, 14, 5);
  rect(480, 155, 40, 15, 5);
  circle(492, 170, 11);
  circle(509, 170, 11);
  
  
  fill(1100,0,0)
   //rect(450, 140, 10, 55);
  //quad(480, 150, 490, 140, 515, 180, 525, 165);
  quad(480, 150, 483, 142, 522, 170, 515, 178);
  
  
  

  // ===== DRAW CAR =====
  drawCar(carX, carY);

  // ===== MOVE CAR =====
  carX = carX + carSpeed;

  // Reset car when it goes off the right side
  if (carX > width + 220) {
    carX = -100;
  }
  
   // ===== DRAW CAR =====
  drawcopCar(carX, carY);

  // ===== MOVE CAR =====
  carX = carX + carSpeed;

  // Reset car when it goes off the right side
  if (carX > width + 220) {
    carX = -100;
  }
  
  
}

// Function to draw the car
function drawCar(x, y) {
  // Car body (red)
  fill(255, 0, 0);
  rect(x, y, 100, 40, 5);

  // Car top (red)
  fill(200, 0, 0);
  rect(x + 20, y - 25, 60, 30, 5);

  // Windows (light blue)
  fill(135, 206, 250);
  rect(x + 25, y - 20, 20, 18);
  rect(x + 55, y - 20, 20, 18);

  // Wheels (black)
  fill(0);
  circle(x + 25, y + 40, 20);
  circle(x + 75, y + 40, 20);

  // Wheel rims (gray)
  fill(150);
  circle(x + 25, y + 40, 10);
  circle(x + 75, y + 40, 10);

  // Headlight (yellow)
  fill(255, 255, 0);
  circle(x + 95, y + 15, 8);
  
  
  
  
  
  
 // fill(100,100,100)
   //rect(400, 230, 25, 300);

   //rect(300, 230, 25, 300);
  
  
  //fill(1100,1100,1100)
   //rect(210, 200, 300, 150,5);
  //fill(0,0,0)
   //rect(225, 210, 270, 130,5);
  //fill(1100,1100,1100)
   //rect(240, 220, 240, 110,5)
  
  //textSize(25);
  //fill(255);
  //stroke(0);
  //strokeWeight(4);
  //text('MADE YOU LOOK!', 250, 290);
  
}


function drawcopCar(x, y) {
  
  fill(1000,0,0)
  circle(x - 240, y - 25, 20);
  
  // Car body (red)
  fill(0, 0, 0);
  rect(x- 290, y, 100, 40, 5);

  // Car top (red)
  fill(1000, 1000, 1000);
  rect(x - 270, y - 25, 60, 30, 5);

  // Windows (light blue)
  fill(135, 206, 250);
  rect(x - 235, y - 20, 20, 18);
  rect(x - 265, y - 20, 20, 18);

  // Wheels (black)
  fill(0);
  circle(x - 215, y + 40, 20);
  circle(x - 265, y + 40, 20);

  // Wheel rims (gray)
  fill(150);
  circle(x - 215, y + 40, 10);
  circle(x - 265, y + 40, 10);

  // Headlight (yellow)
  fill(255, 255, 0);
  circle(x - 195, y + 15, 8);
}