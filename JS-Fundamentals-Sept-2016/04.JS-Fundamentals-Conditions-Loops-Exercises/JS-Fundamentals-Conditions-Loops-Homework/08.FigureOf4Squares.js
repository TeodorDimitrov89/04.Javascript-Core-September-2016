function figureOfFourSquares(input) {
    let n = Number(input[0]);
    if (n % 2 != 0) {
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        for (let row = 0; row < (n - 3) / 2; row++) {
            console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
        }
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        for (let row = 0; row < (n - 3) / 2; row++) {
            console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
        }
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
    }
    else {
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        for (let row = 0; row < (n - 4) / 2; row++) {
            console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
        }
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        for (let row = 0; row < (n - 4) / 2; row++) {
            console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
        }
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
    }
}

figureOfFourSquares(['4']);
