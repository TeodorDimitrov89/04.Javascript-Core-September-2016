function isMagicMatrix(input) {
    let matrix = input.map(row=>row.split(' ').map(Number));
    let rowSum = 0;
    let colSum = 0;
    rowSum += matrix[0].reduce((a, b)=>a + b);
    for (let col = 0; col < input.length; col++) {
        colSum=0;
        for (let row = input.length-1; row >= 0; row--) {
            colSum += matrix[row][col];
        }
        if (rowSum != colSum) {
            break
        }
    }
    if (colSum == rowSum) {
        console.log(true);
    }
    else {
        console.log(false);
    }

    // let matrix = matrixRow.map (row=>row.split (' ').map (Number));
    // let firstRowSum = matrix[0].reduce ((x, y)=>x + y);
    // let rowSum = 0;
    // let isMagic = true;
    // let colSum = 0;
    //
    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix.length; col++) {
    //         rowSum+=matrix[row][col];
    //     }
    //     if(firstRowSum!=rowSum) {
    //         isMagic = false;
    //         break;
    //     }
    //     rowSum=0;
    // }
    //
    // for (let col = 0; col < matrix[0].length; col++) {
    //     for (let row = 0; row < matrix.length; row++) {
    //         colSum += matrix[col][row];
    //     }
    //     if(firstRowSum!=colSum) {
    //         isMagic = false;
    //         break;
    //     }
    //     colSum=0;
    // }
    // isMagic ? console.log (true) : console.log (false);

}
// isMagicMatrix(
//     ['4 5 6',
//     '6 5 4',
//     '5 5 5']
// );

isMagicMatrix(
    ['4 5 6',
        '6 5 4',
        '5 5 5'

    ]
)