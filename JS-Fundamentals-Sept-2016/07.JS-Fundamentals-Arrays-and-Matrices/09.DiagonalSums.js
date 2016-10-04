function diagonalSums(input) {
    let matrix = input.map(row=>row.split(' ').map(Number));
    let majorSumDiagonal = 0;
    let primarySumDiagonal = 0;
    console.log(matrix);
    for (let row in matrix) {
        for (let col in matrix) {
            if (row == col) {
                if (matrix[row][col] != undefined) {
                    majorSumDiagonal += matrix[row][col];
                }
            }
            if (col == matrix.length - 1 - row) {
                primarySumDiagonal += matrix[row][col];
            }
        }
    }
    let sum = [];
    sum.push(majorSumDiagonal);
    sum.push(primarySumDiagonal);
    console.log(sum.join(' '));
}

// diagonalSums([
//     '20 40',
//     '10 60'
// ]);


diagonalSums(['3 5 17',
    '-1 7 14',
    '1 -8 89']
);