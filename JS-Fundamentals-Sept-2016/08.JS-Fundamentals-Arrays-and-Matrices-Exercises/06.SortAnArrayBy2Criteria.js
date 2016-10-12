function sortArrayBy2Criteria(input) {
    let resultArray = input.sort().sort((a,b)=> (a.length - b.length));
    console.log(resultArray.join("\n"));
}

sortArrayBy2Criteria(
    [
        "test",
        "Deny",
        "omen",
        "Default"

    ]);
sortArrayBy2Criteria(
    [
        "alpha",
        "beta",
        "gamma"
    ]);


// sortArrayBy2Criteria(
//     [
//         "Isacc",
//         "Theodor",
//         "Jack",
//         "Harrison",
//         "George"
//
//     ]);

