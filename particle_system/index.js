// without array and loop
// let bubble1;
// let bubble2;

// with array
let bubbles = []; 

function setup() {
    // to create workspace
    createCanvas(600,400);

    // without array
    // bubble1 = new Bubble(200, 200, 40);
    // bubble2 = new Bubble(200, 200, 20);

    // with array but without loop
    // bubble[0] = new Bubble(200, 200, 40);
    // bubble[1] = new Bubble(200, 200, 20);

    // with array and loop
    // for(let i = 0; i < 10; i++) {
    //     // create the x value
    //     // let x = 20 + 100 * 1;
    //     // bubbles[i] = new Bubble(x, 200, 40);

    //     // randomize origin
    //     let x = random(width);
    //     let y = random(height);
    //     let r = random(10, 40);
    //     bubbles[i] = new Bubble(x, y, r);
    // }
}

// to control the origen of bubbles with the click of the mouse
// function mousePressed(){
//     let r = random(10, 50);
//     let b = new Bubble(mouseX, mouseY, r);
//     bubbles.push(b);
// }

// to control the path of bubbles with the click of the mouse
function mouseDragged(){
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(0);

    // without array
    // bubble1.move();
    // bubble1.show();
    // bubble2.move();
    // bubble2.show();

    // with array but without loop
    // bubble[0].move();
    // bubble[0].show();
    // bubble[1].move();
    // bubble[1].show();

    // with array and loop
    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    // to receive data
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    // to move the particle
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    // to show the particle
    show() {
        // bubbles for cloud effect
        // noStroke();
        // fill(255, 10);

        // bubbles vector look
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }

}