function rectangleOfStars(input) {
    let n = Number(input[0]);

    for (let row = 1; row <= n; row++) {
            printStars();
    }
    function printStars() {
        console.log("* " + "* ".repeat(n-1));
    }
}
rectangleOfStars(['2']);
