//Big Fields used throughout the program
var curBoard = 0; //Keeps track of the current play board
var boardArray = []; //Array to hold all boards
/**
 * Draws the game grid onto the frame
 * @param {Grid} grid The grid on which the game is played
 */
function generate( grid ) {

    //Starting space
    start = grid.getStart();

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
    arrow.id = "Arrow";
    arrow.src = "arrow.png";
    arrow.style.width = (imgLength-6) + "px";
    arrow.style.height = (imgLength-6) + "px";
    arrow.style.position = "absolute";

    //Positioning the start arrow
    arrow.style.top = (start.getY() * imgLength + 18).toString() + "px"; //15 is added due to the #Grid's padding
    //+3 due to image size difference
    arrow.style.left = (start.getX() * imgLength + 18).toString() + "px";
    gen.appendChild(arrow);

}

/**
 * Removes all the child nodes of the Grid element
 */
function removeBoard() {
    var board = document.getElementById("Grid");
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }
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

    //Check if position is off the board
    if (pos.getX() < 0 || pos.getX() >= grid.getWidth() || pos.getY() < 0 || pos.getY() >= grid.getHeight()) {
        alert("You're body moved outside the region");
        return;
    }
    
    //Check if current position links to a blocked tile
    if ( grid.getBox( pos.getX(), pos.getY() ) == "cattail.png" ) {
        alert("You've moved into a blocked region");
        return;
    }

    //Execute the move
    if (order.length > 0) {
        switch (order[0]) {
            case "right":
                console.log("right");
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

    console.log("Entering Loop");
    var id = setInterval(frame, 5);
    console.log("Past var id");

    function frame() {
        console.log("Loop frame");
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

    constructor(array, start) {
        console.log("Generating Grid");
        this.boxes = array;
        this.height = array.length;
        this.width = array[0].length;
        this.start = start;
        this.imgLength = Math.min( (window.innerWidth-350) / (this.width+1), (window.innerHeight-200) / (this.height+1)) - 5;
    }

    getStart() {
        return this.start;
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

    toString() {
        return this.boxes.toString();
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

function resetArrow( grid ) {
    let arrow = document.getElementById("Arrow");
    //Positioning the start arrow
    arrow.style.top = (start.getY() * grid.getImgLength() + 18).toString() + "px"; //15 is added due to the #Grid's padding
    //+3 due to image size difference
    arrow.style.left = (start.getX() * grid.getImgLength() + 18).toString() + "px";
    return arrow;
}

function handleForm() {
    var solution = document.getElementById("solution").value.split(" ");
    console.log("Attempted solution was " + solution.toString());
    for(let i = 0; i < solution.length; i++) {
        if (solution[i] != "right" && solution[i] != "left" && solution[i] != "down" && solution[i] != "up") {
            alert("The solution you have entered cannot be run. It must be a strings of only the words 'up', 'down', 'left', and 'right'.");
            return;
        }
    }
    var arrow = resetArrow(boardArray[curBoard]);
    executeMoveOrder( boardArray[curBoard].getStart(), solution, arrow, boardArray[curBoard]);
    return false;
}

function previousLevel() {
    if (curBoard == 0) {
        alert("You're already on the lowest level");
    }
    else {
        removeBoard();
        generate( boardArray[ --curBoard ] );
    }
}

function nextLevel() {
    if (curBoard + 1 >= boardArray.length) {
        alert("You're already on the highest level");
    }
    else {
        removeBoard();
        generate( boardArray[ ++curBoard ] );
    }
}

window.onload = () => {
    // Once our window is loaded, we generate the first grid

    console.log("Window Loading");

    //Populating the BoardArray variable
    boardArray.push( new Grid( [ ["cattail.png", "waves.gif", "lilypad.png", "waves.gif", "waves.gif"],
        [ "cattail.png", "cattail.png", "cattail.png", "cattail.png", "waves.gif" ],
        ["cattail.png", "waves.gif", "waves.gif", "cattail.png", "waves.gif"],
        ["cattail.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif"],
        ["start.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif"] ], new Point(0, 4) ) ); //First level

    boardArray.push( new Grid( [ ["start.png", "cattail.png", "cattail.png", "cattail.png", "cattail.png", "cattail.png", ],
        ["waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "cattail.png"],
        ["cattail.png", "waves.gif", "cattail.png", "cattail.png", "waves.gif", "cattail.png"],
        ["cattail.png", "waves.gif", "cattail.png", "cattail.png", "waves.gif", "lilypad.png"],
        ["cattail.png", "waves.gif", "cattail.png", "cattail.png", "cattail.png", "waves.gif"],
        ["cattail.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif"] ], new Point( 0, 0) )); //Second Level
    
    boardArray.push( new Grid( [ ["cattail.png", "cattail.png", "waves.gif", "waves.gif", "start.png", "cattail.png"],
        ["cattail.png", "waves.gif", "waves.gif", "cattail.png", "waves.gif", "cattail.png"],
        ["cattail.png", "waves.gif", "cattail.png", "cattail.png", "waves.gif", "cattail.png"],
        ["cattail.png", "waves.gif", "cattail.png", "cattail.png", "waves.gif", "cattail.png"],
        ["cattail.png", "waves.gif", "waves.gif", "cattail.png", "cattail.png", "lilypad.png"],
        ["cattail.png", "cattail.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif"] ], new Point(4, 0) )); //Third Level
    
    boardArray.push( new Grid( [ ["cattail.png", "cattail.png", "cattail.png", "cattail.png", "cattail.png", "cattail.png", "cattail.png", "cattail.png"],
        ["cattail.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "cattail.png", "cattail.png"],
        ["cattail.png", "waves.gif", "cattail.png", "cattail.png", "cattail.png", "waves.gif", "waves.gif", "start.png"],
        ["cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "cattail.png"],
        ["cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "cattail.png"],
        ["lilypad.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "waves.gif", "waves.gif", "waves.gif"],
        ["cattail.png", "waves.gif", "cattail.png", "cattail.png", "cattail.png", "cattail.png", "cattail.png", "waves.gif"],
        ["cattail.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif"] ], new Point(7,2) )); //Fourth Level

    boardArray.push( new Grid( [ ["cattail.png", "cattail.png", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "waves.gif", "start.png"],
        ["cattail.png", "cattail.png", "waves.gif", "cattail.png", "cattail.png", "cattail.png", "cattail.png", "cattail.png", "waves.gif", "cattail.png"],
        ["cattail.png", "cattail.png", "waves.gif", "waves.gif", "cattail.png", "cattail.png", "cattail.png", "waves.gif", "waves.gif", "cattail.png"],
        ["cattail.png", "cattail.png", "cattail.png", "waves.gif", "cattail.png", "cattail.png", "cattail.png", "waves.gif", "cattail.png", "cattail.png"],
        ["cattail.png", "cattail.png", "cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "cattail.png"],
        ["waves.gif", "waves.gif", "waves.gif", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "cattail.png"],
        ["cattail.png", "cattail.png", "waves.gif", "cattail.png", "cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "cattail.png"],  
        ["cattail.png", "cattail.png", "waves.gif", "cattail.png", "cattail.png", "waves.gif", "cattail.png", "waves.gif", "cattail.png", "cattail.png"],
        ["lilypad.png", "cattail.png", "waves.gif", "waves.gif", "waves.gif", "cattail.png", "waves.gif", "waves.gif", "cattail.png", "cattail.png"],
        ["waves.gif", "waves.gif", "waves.gif", "cattail.png", "waves.gif", "waves.gif", "waves.gif", "cattail.png", "cattail.png", "cattail.png"] ], new Point(9, 0) )); //Fifth Level
    generate(boardArray[curBoard]) //End first argument
 };

