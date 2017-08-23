class ColorSequence {
    private head;
    private tail;
    private length;

    constructor(color:string=null) {
        this.head = {
            color: color,
            next: undefined
        }
        this.tail = undefined;
        this.length = 1;
    }

    add(color) {
        let newColor = {
            color: color,
            next: undefined
        }
        
    }
}