"use strict";
exports.__esModule = true;
var Path = (function () {
    function Path(start) {
        this.list = new Array();
        if (typeof start != "undefined") {
            this.list.push(start);
            this.UpdatePosition();
        }
    }
    Path.prototype.Add = function (node) {
        this.list.push(node);
        this.UpdatePosition();
    };
    Path.prototype.Remove = function () {
        this.list.pop();
        this.UpdatePosition();
    };
    Path.prototype.UpdatePosition = function () {
        this.currentSpot = this.list[this.list.length - 1];
    };
    return Path;
}());
exports.Path = Path;
var myPath = new Path();
console.log(myPath.list);
myPath.Add({ pos: { x: 1, y: 2 }, color: "O", visited: 2 });
console.log(myPath.list);
console.log(myPath.currentSpot);
