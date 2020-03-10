// empty var to hold the object
let s;
// global scale
let scl = 30;
// food
let food;

// init function
function setup(){
    createCanvas(600, 600);
    s = new Snake();
    // framme set
    frameRate(10);
    // food cords
    pickLocation();
} 

// pick location of the food
function pickLocation(){
    // aprox values
    let cols = floor(width/scl);
    let rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    // don`t forget the size of the food
    food.mult(scl);
}

// grow snake by clicks
function mousePressed() {
        s.total++;
    }

// create the entire object
function draw(){
    // canvas color
    background(50);
    // random coord after the eat
    if(s.eat(food)){
        pickLocation();
    }
    // methods of snake
    s.death();
    s.update();
    s.show();

    // draw food
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

// read keyboard press
function keyPressed(){
    if(keyCode === UP_ARROW){
        s.dir(0,-1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}

