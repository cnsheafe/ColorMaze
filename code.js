"use strict";
exports.__esModule = true;
var Path_1 = require("./Path");
var matrix = [
    ['B', 'O', 'R', 'O', 'Y'],
    ['O', 'R', 'B', 'G', 'R'],
    ['B', 'O', 'G', 'O', 'Y'],
    ['Y', 'G', 'B', 'Y', 'G'],
    ['R', 'O', 'R', 'B', 'R']
];
var m = matrix[0].length;
var n = matrix.length / m;
var firstLetter = 'O';
var secondLetter = 'G';
var output = [];
// Turn 'output' into an array of arrays, with the same number
// of rows as (the input) matrix
matrix.forEach(function (row, i) {
    output[i] = [];
});
var myPath = new Path_1.Path();
function TraverseMaze(Maze, path, nextColor) {
}
for (var i_1 = 0; i_1 < n; i_1++) {
    var root = { pos: { x: m - 1, y: i_1 }, color: matrix[m - 1][n - 1 + i_1], visited: 0 };
    var myPath_1 = new Path_1.Path(root);
    // Break if we have reached the end of the maze i.e. the first row
    if (myPath_1.currentSpot.pos.y === 0) {
        break;
    }
}
// below is old code
for (var i = matrix.length - 1; i >= 0; i--) {
    // Only for the last row
    // if (i === matrix.length - 1) {
    //     for (var j = 0; j < matrix[i].length; j++) {
    //         let current = matrix[i][j];
    //         if (current === firstLetter) {
    //             // JUMP TO ROW ABOVE
    //             output[i][j] = firstLetter;
    //         } else {
    //             output[i][j] = '/';
    //         }
    //     }
    // }
}
