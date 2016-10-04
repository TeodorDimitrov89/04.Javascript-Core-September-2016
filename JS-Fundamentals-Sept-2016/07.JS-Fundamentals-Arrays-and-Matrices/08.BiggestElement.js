function BiggestElement(input) {
    let matrix = input.map(row=>row.split(' ').map(Number));
    let max = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col <= matrix.length; col++) {
            let min = matrix[row][col];
            if(min > max) {
                max = min;
            }
        }
    }
    
    console.log(max);
}

BiggestElement(['3 5 7 12',
    '-1 4 33 2',
    '8 3 0 4']
);