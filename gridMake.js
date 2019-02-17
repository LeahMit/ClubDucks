
function generate( grid , start) {

    //Full Div container to send everything to
    var gen = document.getElementById("Grid");

    //Establishing box dimensions
    var height = grid.getHeight();
    var width = grid.getWidth();
    var imgLength = grid.getImgLength();

    for( let y = 0; y < height; y++ ) {
        let row = document.createElement("div") 
        row.className = "row";
        for( let x = 0; x < width; x++) {
            let box = document.createElement("img");
            box.src = grid.getBox(x,y);
            box.style.width = imgLength.toString() + "px";
            box.style.height = imgLength.toString() + "px";
            row.appendChild(box);
        }
        gen.appendChild(row);
    }


    //Creating and giving the start arrow it's base attributes
    var arrow = document.createElement("img");
    arrow.id = "arrow";
    arrow.src = "arrow.png";
    arrow.style.width = (imgLength-6) + "px";
    arrow.style.height = (imgLength-6) + "px";
    arrow.style.position = "absolute";

    //Positioning the start arrow
    arrow.style.top = (start.getY() * imgLength + 18).toString() + "px"; //15 is added due to the #Grid's padding
    //+3 due to image size difference
    console.log( arrow.style.top );
    arrow.style.left = (start.getX() * imgLength + 18).toString() + "px";
    console.log( arrow.style.left );
    gen.appendChild(arrow);


    //Starts moving the arrow
    console.log("Executing Move Order");
    executeMoveOrder( start, ["right", "up", "left", "down", "right", "left"], arrow, grid);

}

/**
 * Starts the game as programmed
 * @param {Point} pos The currenty position of the arrow
 * @param {String[]} order The elements of moving the arrow will take
 * @param {Element} arrow The HTML element containing the arrow
 * @param {Grid} grid The grid containing the game
 */
function executeMoveOrder( pos, order, arrow, grid ) {
    console.log("Moves to Execute:" + order.toString() );

    //Check if current position links to a blocked tile

    //Execute the move
    if (order.length > 0) {
        switch (order[0]) {
            case "right":
                console.log("Right");
                moveRight(pos, order.slice(1), arrow, grid);
                break;
            case "up":
                console.log("up");
                moveUp(pos, order.slice(1), arrow, grid);
                break;
            case "down":
                console.log("down");
                moveDown(pos, order.slice(1), arrow, grid);
                break;
            case "left":
                console.log("left");
                moveLeft(pos, order.slice(1), arrow, grid);
                break;
        }//End of switch statement
    }
}

/**
 * Moves the arrow one to the right
 * @param {*} pos Must be a Point object
 */
function moveRight(pos, order, arrow, grid) {
    endPos = new Point( pos.getX()+1, pos.getY() );
    xNext = endPos.absoluteX(grid);
    var x = parseFloat( arrow.style.left );

    var id = setInterval(frame, 5);
    function frame() {
        //Animation Loop
        if (xNext < x) {
            clearInterval(id);
            executeMoveOrder(endPos, order, arrow, grid);
        }
        else {
            x++;
            arrow.style.left = x.toString() + "px";
        }
    }
}

function moveLeft(pos, order, arrow, grid) {
    endPos = new Point( pos.getX()-1, pos.getY() );
    xNext = endPos.absoluteX(grid);
    var x = parseFloat( arrow.style.left );

    var id = setInterval(frame, 5);
    function frame() {
        //Animation Loop
        if (xNext > x) {
            clearInterval(id);
            executeMoveOrder(endPos, order, arrow, grid);
        }
        else {
            x--;
            arrow.style.left = x.toString() + "px";
        }
    }
}

function moveUp(pos, order, arrow, grid) {
    endPos = new Point( pos.getX(), pos.getY()-1 );
    yNext = endPos.absoluteY(grid);
    var y = parseFloat( arrow.style.top );

    var id = setInterval(frame, 5);
    function frame() {
        //Animation Loop
        if (yNext > y) {
            clearInterval(id);
            executeMoveOrder(endPos, order, arrow, grid);
        }
        else {
            y--;
            arrow.style.top = y.toString() + "px";
        }
    }
}

function moveDown(pos, order, arrow, grid) {
    endPos = new Point( pos.getX(), pos.getY()+1 );
    yNext = endPos.absoluteY(grid);
    var y = parseFloat( arrow.style.top );

    var id = setInterval(frame, 5);
    function frame() {
        //Animation Loop
        if (yNext < y) {
            clearInterval(id);
            executeMoveOrder(endPos, order, arrow, grid);
        }
        else {
            y++;
            arrow.style.top = y.toString() + "px";
        }
    }
}

/**
 * A class containing the puzzle grids to be made
 */
class Grid {

    constructor(array) {
        console.log("Works so far");
        this.boxes = array;
        this.height = array.length;
        this.width = array[0].length;
        this.imgLength = Math.min( (window.innerWidth-350) / (this.width+1), (window.innerHeight-200) / (this.height+1)) - 5;
    }

    getImgLength(gridWidth, gridHeight) {
        return this.imgLength;
    }

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getBox(x, y) {
        return this.boxes[y][x];
    }

}

/**
 * Class point used to store Cartesian coordinate values
 */
class Point {

    constructor(x1, y1) {
        this.x = x1;
        this.y = y1;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    absoluteX(grid) {
        return this.x * grid.getImgLength() + 18;
    }

    absoluteY(grid) {
        return this.y * grid.getImgLength() + 18;
    }

    toString() {
        return "This is a point";
    }

}

window.onload = () => {
    // Once our window is loaded, we generate the first grid
    generate( new Grid( [ ["blocked.png", "waves.gif", "stop.png", "waves.gif", "waves.gif"],
    [ "blocked.png", "blocked.png", "blocked.png", "blocked.png", "waves.gif" ],
    ["blocked.png", "waves.gif", "waves.gif", "blocked.png", "waves.gif"],
    ["blocked.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif"],
    ["start.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif"] ] ) , //End first argument
    new Point( 0, 5 ) );
 };