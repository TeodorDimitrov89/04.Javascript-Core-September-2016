function arrayWithGuvenDelimeter(input) {
    let deliteter = input.pop();
    console.log(input.join(deliteter));
}
arrayWithGuvenDelimeter([
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "-"
]);
