function printNthElement(array) {
    let step = Number(array[array.length-1]);
    array.pop();
    for (let i = 0; i < array.length; i+=step) {
        console.log(array[i]);
    }
}
// printNthElement([
//     "5",
//     "20",
//     "31",
//     "4",
//     "20",
//     "2"
// ]);
printNthElement(
    ["dsa",
    "asd",
    "test",
    "tset",
    "2"
]);
