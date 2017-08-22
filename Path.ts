export class Path {
    public list: Array<ISpot>;
    public currentSpot: ISpot;

    constructor(start?: ISpot) {
        this.list = new Array<ISpot>();
        if (typeof start != "undefined") {
            this.list.push(start);
            this.UpdatePosition();
        }
    }

    Add(node: ISpot) {
        this.list.push(node);
        this.UpdatePosition();
    }

    Remove() {
        this.list.pop();
        this.UpdatePosition();
    }

    UpdatePosition() {
        this.currentSpot = this.list[this.list.length-1];
    }
}

export interface ISpot {
    pos: IPosition;
    color: string;
    visited: number;
}

export interface IPosition {
    x: number,
    y: number
}

let myPath = new Path();
console.log(myPath.list);
myPath.Add({pos: {x:1,y:2}, color: "O", visited: 2});
console.log(myPath.list);
console.log(myPath.currentSpot);