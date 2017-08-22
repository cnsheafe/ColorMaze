import {Path, ISpot} from "./Path";

var matrix = [
    ['B', 'O', 'R', 'O', 'Y'],
    ['O', 'R', 'B', 'G', 'R'],
    ['B', 'O', 'G', 'O', 'Y'],
    ['Y', 'G', 'B', 'Y', 'G'],
    ['R', 'O', 'R', 'B', 'R']
];
let m = matrix[0].length;
let n = matrix.length / m;

const firstLetter = 'O';
const secondLetter = 'G';

let output = [];

// Turn 'output' into an array of arrays, with the same number
// of rows as (the input) matrix
matrix.forEach((row, i) => {
    output[i] = [];
});

let myPath = new Path();


function TraverseMaze(Maze, path) {
// TODO fill out 
}

for (let i = 0; i < n; i++) {
    let root = {pos: {x:m-1,y:i},  color: matrix[m-1][n-1+i], visited: 0};
    let myPath = new Path(root);
    // TODO implement TraverseMaze
    TraverseMaze(matrix, myPath);
    // Break if we have reached the end of the maze i.e. the first row
    if (myPath.currentSpot.pos.y === 0) {
        break;
    }
}
