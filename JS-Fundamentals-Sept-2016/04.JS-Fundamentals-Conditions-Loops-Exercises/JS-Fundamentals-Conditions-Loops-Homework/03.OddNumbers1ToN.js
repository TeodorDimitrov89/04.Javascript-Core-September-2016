function oddNumber(input) {
    let num = Number(input[0]);
    for (let i = 1; i <= num; i++) {
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}
oddNumber(['5']);
