function splitStringWithDelimiters(input) {
    let delimiters = input[1];
    console.log(input[0].split(delimiters).join('\n'));
}
splitStringWithDelimiters(["One-Two-Three-Four-Five","-"]);
