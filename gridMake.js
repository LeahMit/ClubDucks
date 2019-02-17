
function generate( grid , start) {

    //Full Div container to send everything to
    var gen = document.getElementById("Grid");

    //Establishing box dimensions
    var height = grid.getHeight();
    var width = grid.getWidth();
    var imgLength = getImgLength(width+1, height+1).toString();

    for( let y = 0; y < height; y++ ) {
        let row = document.createElement("div") 
        row.className = "row";
        for( let x = 0; x < width; x++) {
            let box = document.createElement("img");
            box.src = grid.getBox(x,y);
            box.style.width = imgLength + "px";
            box.style.height = imgLength + "px";
            row.appendChild(box);
        }
        gen.appendChild(row);
    }

    var arrow = document.createElement("img");
    arrow.id = "arrow";
    arrow.src = "arrow.png";
    arrow.style.position = "absolute";
    arrow.style.top = (start.getY() * imgLength).toString() + "px";
    console.log( arrow.style.top );
    arrow.style.left = (start.getX() * imgLength).toString() + "px";
    console.log( arrow.style.left );
    gen.appendChild(arrow);

}

/**
 * Returns proper image width based on dimensions of the grid
 * @param {*} gridWidth The width of the grid
 * @param {*} gridHeight The height of the grid
 */
function getImgLength(gridWidth, gridHeight) {
    return Math.min( (window.innerWidth-350) / gridWidth, (window.innerHeight-200) / gridHeight) - 5;
}

function moveArrow(x, y, imgLength) {
    var arrow = document.createElement("img");
    arrow.style.position = "absolute";
    arrow.style.top = y*imgLength;
    arrow.style.left = x * imgLength;
    document.getElementById("Grid").appendChild(arrow);
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