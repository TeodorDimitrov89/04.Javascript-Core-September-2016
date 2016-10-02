function tripLength([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);

    // let point1 = {x:x1,y:y1};
    // let point2 = {x:x2,y:y2};
    // let point3 = {x:x3,y:y3};
    // let containerPoints = [point1,point2,point3];

    let dist12 = calcDistance(x1, y1, x2, y2);
    let dist13 = calcDistance(x1, y1, x3, y3);

    let dist23 = calcDistance(x2, y2, x3, y3);

    if (Math.max(dist12, dist13, dist23) == dist13) {
        console.log(`1->2->3: ${dist12 + dist23}`);
    }
    else if (Math.max(dist12, dist13, dist23) == dist12) {
        console.log(`1->3->2: ${dist13 + dist23}`);
    }
    else if (Math.max(dist12, dist13, dist23) == dist23) {
        console.log(`2->1->3: ${dist12 + dist13}`);
    }

    function calcDistance(x1, y1, x2, y2) {

        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    }

}

tripLength(["0", "0", "2", "0", "4", "0"]);
// tripLength([5, 1, 1, 1, 5, 4]);
// tripLength([-1, -2, 3.5, 0, 0, 2]);
