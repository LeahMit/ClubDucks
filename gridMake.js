
var grid;

function generate( grid ) {

    //Full Div container to send everything to
    var gen = document.getElementById("Grid");

    //Establishing box dimensions
    var height = grid.getHeight();
    var width = grid.getWidth();
    gridSize = height;
    var array = [];

    for( let y = 0; y < height; y++ ) {
        let row = document.createElement("div") 
        row.className = "row";
        for( let x = 0; x < width; x++) {
            let box = document.createElement("img");
            box.src = "unblocked.png";
            row.appendChild(box);
        }
        gen.appendChild(row);
    }
}

function gridSize(side) {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var workingHeight = windowHeight - 200;
    var imgLength = workingHeight / side;


}

/**
 * A class containing the puzzle grids to be made
 */
class grid {

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

window.onload = () => {
    // Once our window is loaded, we generate the first grid
    console.log("Hey it's not that bad");
    generate( new grid( [ ["blocked", "empty", "end", "empty", "empty"],
    [ "blocked", "blocked", "blocked", "blocked", "empty" ],
    ["blocked", "empty", "empty", "blocked", "empty"],
    ["blocked", "empty", "empty", "empty", "empty"],
    ["start", "empty", "blocked", "empty", "empty"] ] ) );
 };