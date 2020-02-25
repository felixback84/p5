// empty var to hold the object
var s;
// global scale
var scl = 20;
// food
var food;

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
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    // don`t forget the sixe of the food
    food.mult(scl);
}

// create the entire object
function draw(){
    // canvas color
    background(50);

    // methods of snake
    s.update();
    s.show();

    // random coord after the eat
    if(s.eat(food)){
        pickLocation();
    }

    // eat action
    s.eat(food);

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

