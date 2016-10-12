function diagonalAttack (input) {
	let matrix = input.map (row => row.split (' ').map (Number));
	let majorSumDiagonal = 0;
	let primarySumDiagonal = 0;

	for (let row in matrix) {
		for (let col in matrix) {
			if (row == col) {
				majorSumDiagonal += matrix[row][col];
			}
			if (col == matrix.length - 1 - row) {
				primarySumDiagonal += matrix[row][col];
			}
		}
	}
	if (majorSumDiagonal != primarySumDiagonal) {
		console.log (
			matrix.map (row => row.join (' '))
				.join ('\n'));
		return;
	}
	if (majorSumDiagonal == primarySumDiagonal) {
		for (let row in matrix) {
			for (let col in matrix) {
				if (!(row == col || col == matrix.length - 1 - row)) {
					matrix[row][col] = primarySumDiagonal;
				}
			}
		}
	}

	console.log (
		matrix.map (row => row.join (' '))
			.join ('\n'));
}
// diagonalAttack (
// 	[
// 		'5 3 12 3 1',
// 		'11 4 23 2 5',
// 		'101 12 3 21 10',
// 		'1 4 5 2 2',
// 		'5 22 33 11 1'
// 	]
// );
diagonalAttack (
	[
		'1 1 1',
		'1 1 1',
		'1 1 0'

	])