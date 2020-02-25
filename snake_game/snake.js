function Snake(){

    // init settings
    this.x = 0;
    this.y = 0;
    this.xdirection = 1;
    this.ydirection = 0;

    // set direction with the values of the keyboard
    this.dir = function(x, y){
        this.xdirection = x;
        this.ydirection = y;
    }

    // eat function
    this.eat = function(pos){
        // eval dist between snake and food
        var d = dist(this.x, this.y, pos.x, pos.y);

        // define when the snake eats
        if(d < 1){
            return true;
        } else {
            return false;
        }
    }

    // update position
    this.update = function(){

        // set the actual direction to the square for incremental
        this.x = this.x + this.xdirection * scl;
        this.y = this.y + this.ydirection * scl;

        // constrain to the size of the canvas object
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    // paint square
    this.show = function(){
        fill(255);
        // create the rectagule
        rect(this.x, this.y, scl, scl);
    }
}