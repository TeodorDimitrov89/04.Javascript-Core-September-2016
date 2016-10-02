function validityChecker([x1,y1,x2,y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    let startCoordinateX = 0;
    let startCoordinateY = 0;
    let point1 = {x: x1, y: y1};
    let point2 = {x: x2, y: y2};
    let point0 = {x: startCoordinateX, y: startCoordinateY};

    function calcDist(p1, p2, p0) {
        let distBetweenP1P0 = Math.sqrt((Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2)));
        let distBetweenP2P0 = Math.sqrt((Math.pow(p2.x - p0.x, 2) + Math.pow(p2.y - p0.y, 2)));
        let distBetweenP1P2 = Math.sqrt((Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)));
        return [distBetweenP1P0, distBetweenP2P0, distBetweenP1P2];

    }

    let calc = calcDist(point1, point2, point0);

    function isValid() {
        for (let i = 0; i < 1; i++) {
            if (Math.floor(calc[0]) == calc[0]) {
                console.log("{" + `${point1.x}, ${point1.y}` + "}" + " to " + "{" + `${point0.x}, ${point0.y}` + "}" + " is valid");
            }
            if (Math.floor(calc[0]) != calc[0]) {
                console.log("{" + `${point1.x}, ${point1.y}` + "}" + " to " + "{" + `${point0.x}, ${point0.y}` + "}" + " is invalid");
            }
            if (Math.floor(calc[1]) == calc[1]) {
                console.log("{" + `${point2.x}, ${point2.y}` + "}" + " to " + "{" + `${point0.x}, ${point0.y}` + "}" + " is valid");
            }
            if (Math.floor(calc[1]) != calc[1]) {
                console.log("{" + `${point2.x}, ${point2.y}` + "}" + " to " + "{" + `${point0.x}, ${point0.y}` + "}" + " is invalid");
            }
            if (Math.floor(calc[2]) == calc[2]) {
                console.log("{" + `${point1.x}, ${point1.y}` + "}" + " to " + "{" + `${point2.x}, ${point2.y}` + "}" + " is valid");
            }
            if (Math.floor(calc[2]) != calc[2]) {
                console.log("{" + `${point1.x}, ${point1.y}` + "}" + " to " + "{" + `${point2.x}, ${point2.y}` + "}" + " is invalid");
            }
        }
    }

    isValid(calc)
}

validityChecker(['2', '1', '1', '1']);