function pointInRectangle([x,y,xMin,xMax,yMin,yMax]) {
    [x,y,xMin,xMax,yMin,yMax]=[x,y,xMin,xMax,yMin,yMax].map(Number);

    let isInside = (x <= xMax && x >= xMin) && (y <= yMax && y >= yMin);

    if(isInside) {
        console.log("inside");
    }
    else {
        console.log("outside");
    }

}

pointInRectangle(['12.5','-1','2','12','-3','3']);
