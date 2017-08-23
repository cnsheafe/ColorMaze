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

const firstLetter = {
    color: 'O'
};
const secondLetter = 'G';

let output = [];
// Turn 'output' into an array of arrays, with the same number
// of rows as (the input) matrix
matrix.forEach((row, i) => {
    output[i] = [];
});



function TraverseMaze(Maze: string, path, nextColor) {
// TODO fill out 
    // look around
    let currentSpot = Object.assign({}, path.currentSpot);
    if (Maze[currentSpot.pos-1] === nextColor && currentSpot.visited === 0 ) {
        path.currentSpot.visited++;
        path.Add({pos: currentSpot.pos-1, color: Maze[currentSpot.pos-1], visited: 0});
    }
    else if (Maze[currentSpot.pos-n] === nextColor && currentSpot.visited === 1 ) {
        path.currentSpot.visited++;
        path.Add({pos: currentSpot.pos-n, color: Maze[currentSpot.pos-n], visited: 0});
    }

    else if (Maze[currentSpot.pos+1] === nextColor && currentSpot.visited === 2 ) {
        path.currentSpot.visited++;
        path.Add({pos: currentSpot.pos+1, color: Maze[currentSpot.pos+1], visited: 0});
    }

    else if (Maze[currentSpot.pos+n] === nextColor && currentSpot.visited === 3 ) {
        path.currentSpot.visited++;
        path.Add({pos: currentSpot.pos+n, color: Maze[currentSpot.pos+n], visited: 0});
    }
    // nextcolor needs to be referenced from a sequence
    TraverseMaze(Maze, path, nextColor);
  

}

for (let i = 0; i < n; i++) {
    // ++visited after moving to next step
    let root = {pos: {x:m-1,y:n-1+i},  color: matrix[m-1][n-1+i], visited: 0};
    let myPath = new Path(root);
    // TODO implement TraverseMaze
    TraverseMaze(matrix, myPath,);
    // Break if we have reached the end of the maze i.e. the first row
    if (myPath.currentSpot.pos.y === 0) {
        break;
    }
}
