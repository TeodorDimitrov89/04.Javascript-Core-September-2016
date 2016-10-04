function equalNeighbors(input) {

    let matrix = input.map(row=>row.split(' '));
    let neigbbor = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                neigbbor++;
            }
            if (matrix[row][col] == matrix[row][col + 1]) {
                neigbbor++;

            }
            if (row == matrix.length - 2) {
                for (let i = 0; i < 1; i++) {
                    if (matrix[row + 1][col] == matrix[row + 1][col + 1]) {
                        neigbbor++;
                    }
                }
            }
        }

    }
    console.log(neigbbor);
}
equalNeighbors(
    ['2 2 5 7 4',
        '4 0 5 3 4',
        '2 5 5 4 2'
    ]
);
