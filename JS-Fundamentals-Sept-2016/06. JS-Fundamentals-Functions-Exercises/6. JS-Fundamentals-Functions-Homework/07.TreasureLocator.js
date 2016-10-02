function treasure(input) {
    let arr = [];
    let points = {};
    let pointsArr = [];

    function readInput() {
        for (let i = 0; i < input.length; i++) {
            arr[i] = Number(input[i]);
        }
        for (let i = 0; i < arr.length; i += 2) {
            points = {x: arr[i], y: arr[i + 1]};
            pointsArr.push(points);
        }
        return pointsArr;
    }
    let objCoordinates = readInput();
    function findLocation(coordinates) {
        for (let i = 0; i < coordinates.length; i++) {
            if((coordinates[i].x >= 1 && coordinates[i].x <= 3)&&(coordinates[i].y >= 1 && coordinates[i].y <= 3) ) {
                console.log("Tuvalu");
            }
            else if((coordinates[i].x >= 8 && coordinates[i].x <= 9)&&(coordinates[i].y >= 0 && coordinates[i].y <= 1)) {
                console.log("Tokelau");
            }
            else if((coordinates[i].x >= 5 && coordinates[i].x <= 7)&&(coordinates[i].y >= 3 && coordinates[i].y <= 6)) {
                console.log("Samoa");
            }
            else if((coordinates[i].x >= 0 && coordinates[i].x <= 2)&&(coordinates[i].y >= 6 && coordinates[i].y <= 8)) {
                console.log("Tonga");
            }
            else if((coordinates[i].x >= 4 && coordinates[i].x <= 9)&&(coordinates[i].y >= 7 && coordinates[i].y <= 8)) {
                console.log("Cook");
            }
            else {
                console.log("On the bottom of the ocean");
            }
        }
    }
    findLocation(objCoordinates);
}

treasure(["4", "2", "1.5", "6.5", "1", "3"]);