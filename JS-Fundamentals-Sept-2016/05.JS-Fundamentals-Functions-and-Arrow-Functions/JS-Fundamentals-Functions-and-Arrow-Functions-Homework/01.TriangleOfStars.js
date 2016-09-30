function triangleOfStars(input) {
    let n = Number(input[0]);
    for (let i = 1; i < n; i++) {
        printTriangle(i)
    }
    for(let i = n+1; i--;) {
        printTriangle(i)
    }

    function printTriangle(count) {
        console.log("*".repeat(count));
    }

}

triangleOfStars(['7']);
