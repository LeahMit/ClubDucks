
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

    moveRight( new Point( start.getX()+1, start.getY() ).absoluteX() );

}

function moveRight(xNext) {
    var x = document.getElementById("arrow").style.left;
    var id = setInterval(frame, 5);
    function frame() {
        if (xNext > x) {
        clearInterval(id);
        } else {
            x++
            document.getElementById("arrow").style.left = x;
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
        return this.x * getImgLength() + 18;
    }

    toString() {
        return "This is a point";
    }

}

window.onload = () => {
    // Once our window is loaded, we generate the first grid
    generate( new Grid( [ ["blocked.png", "unblocked.png", "stop.png", "unblocked.png", "unblocked.png"],
    [ "blocked.png", "blocked.png", "blocked.png", "blocked.png", "unblocked.png" ],
    ["blocked.png", "unblocked.png", "unblocked.png", "blocked.png", "unblocked.png"],
    ["blocked.png", "unblocked.png", "unblocked.png", "unblocked.png", "unblocked.png"],
    ["start.png", "unblocked.png", "blocked.png", "unblocked.png", "unblocked.png"] ] ) , //End first argument
    new Point( 0.0, 4.0 ) );
 };