function solve(input) {
    function createRectangle(width,height) {
        let rec = {
            width:width,
            height:height,
            area:() => {
                return rec.width*rec.height;
            },
            compareTo: (other) => {
                let result = other.area()-rec.area();
                return result || (other.width-rec.width);
            }
        };
        return rec;
    }
    let rectangleArr = [];
    for (let [width,height] of input) {
        let rec = createRectangle(width,height);
        rectangleArr.push(rec);
    }
    return (rectangleArr.sort((a, b) => a.compareTo(b)));
}





// solve([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]);
solve([[10,5],[5,12]]);

