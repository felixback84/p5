function Snake() {
    // init settings
    // pos
    this.x = 0;
    this.y = 0;
    // dir
    this.xdirection= 1;
    this.ydirection = 0;
    //history of snake
    this.total = 0;
    this.tail = [];
    
    // eat function
    this.eat = function(pos) {
        // eval dist between snake and food
        let d = dist(this.x, this.y, pos.x, pos.y);
        // define when the snake eats
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    };

    // set direction with the values of the keyboard
    this.dir = function(x, y) {
        this.xdirection = x;
        this.ydirection = y;
    };

    // death snake
    this.death = function() {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                console.log('starting over');
                this.total = 0;
                this.tail = [];
            }
        }
    };

    // update position
    this.update = function() {
        // shift throught pixels(squares of the snake) to move all 
        //of them one position back and create an empty spot for the new one
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        
        // only when the snake eat
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }

        // set the actual direction to the square for incremental
        this.x = this.x + this.xdirection * scl;
        this.y = this.y + this.ydirection * scl;
        
        // constrain to the size of the canvas object
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    };

    // paint square
    this.show = function() {
        fill(255);
        // draw all history rectangles
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        // create one inicial rectagle
        rect(this.x, this.y, scl, scl);
    };
}