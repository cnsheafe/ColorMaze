var matrix = [
    ['B', 'O', 'R', 'O', 'Y'],
    ['O', 'R', 'B', 'G', 'R'],
    ['B', 'O', 'G', 'O', 'Y'],
    ['Y', 'G', 'B', 'Y', 'G'],
    ['R', 'O', 'R', 'B', 'R']
];

const firstLetter = 'O';
const secondLetter = 'G';

let output = [];

// Turn 'output' into an array of arrays, with the same number
// of rows as (the input) matrix
matrix.forEach((row, i) => {
    output[i] = [];
});

let path = [];


function TraverseMaze(Maze, currentPos, path, sequence) {
    let m = matrix[0].length;
    let n = matrix.length / m;
    if (Maze[currentPos + 1] == path[path.length - 1]) // Check next in sequence
}

// below is old code
for (var i = matrix.length - 1; i >= 0; i--) {

    // Only for the last row
    if (i === matrix.length - 1) {
        for (var j = 0; j < matrix[i].length; j++) {
            let current = matrix[i][j];

            if (current === firstLetter) {
                // JUMP TO ROW ABOVE
                output[i][j] = firstLetter;
            } else {
                output[i][j] = '/';
            }
        }
    }
}