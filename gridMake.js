
function generate( grid ) {

    //Full Div container to send everything to
    var gen = document.getElementById("Grid");

    //Establishing box dimensions
    var height = grid.getHeight();
    var width = grid.getWidth();
    var imgLength = getImgLength(width+1, height+1).toString() + "px";
    console.log( imgLength );

    for( let y = 0; y < height; y++ ) {
        let row = document.createElement("div") 
        row.className = "row";
        for( let x = 0; x < width; x++) {
            let box = document.createElement("img");
            box.src = grid.getBox(x,y);
            box.style.width = imgLength;
            box.style.height = imgLength;
            row.appendChild(box);
        }
        gen.appendChild(row);
    }
}

/**
 * Returns proper image width based on dimensions of the grid
 * @param {*} gridWidth The width of the grid
 * @param {*} gridHeight The height of the grid
 */
function getImgLength(gridWidth, gridHeight) {
    return Math.min( (window.innerWidth-350) / gridWidth, (window.innerHeight-200) / gridHeight) - 5;
}

function initArrow(x, y) {

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
    generate( new grid( [ ["blocked.png", "unblocked.png", "stop.png", "unblocked.png", "unblocked.png"],
    [ "blocked.png", "blocked.png", "blocked.png", "blocked.png", "unblocked.png" ],
    ["blocked.png", "unblocked.png", "unblocked.png", "blocked.png", "unblocked.png"],
    ["blocked.png", "unblocked.png", "unblocked.png", "unblocked.png", "unblocked.png"],
    ["start.png", "unblocked.png", "blocked.png", "unblocked.png", "unblocked.png"] ] ) );
 };