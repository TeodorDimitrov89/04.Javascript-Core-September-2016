class Rectangle {
    constructor(width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}
let rec = new Rectangle(10,20,"green");
console.log(rec.calcArea());