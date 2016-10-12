function spiralMatrix(input) {
    let number = (input[0].split(' '));
    let n = Number(number[0]);
    let total = n * n;
    let result = [];
    let step = 0;
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
        let rs = [];
        for (let j = 0; j < n; j++) {
            rs.push(0);
        }
        result.push(rs);
    }
    
    for (let i = 0; i < total;) {
        while (y + step < n) {
            i++;
            result[x][y] = i;
            y++;
        }
        y--;
        x++;

        while (x + step < n) {
            i++;
            result[x][y] = i;
            x++;
        }
        x--;
        y--;

        while (y >= step) {
            i++;
            result[x][y] = i;
            y--;
        }
        y++;
        x--;
        step++;

        while (x >= step) {
            i++;
            result[x][y] = i;
            x--;
        }
        x++;
        y++;
    }

    console.log(
        result.map(row => row.join(' '))
            .join('\n'));


}
spiralMatrix(['3 3']);
