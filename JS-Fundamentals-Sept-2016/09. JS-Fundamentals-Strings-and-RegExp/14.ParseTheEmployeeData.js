function parseTheEmployeeData(input) {
    let output = [], match = null;
    input.forEach(function(element) {
        let pattern = "^([A-Z][a-zA-Z]*) \- ([1-9][0-9]*) \- ([a-zA-Z0-9 -]+)$";
        let regex = new RegExp(pattern, "g");
        let match = regex.exec(element);
        if(match) {
            output.push("Name: " + match[1]);
            output.push("Position: " + match[3]);
            output.push("Salary: " + match[2]);
        }
    });
    console.log(output.join("\n"));
}

parseTheEmployeeData(
    [
        "Isacc - 1000 - CEO",
        "Ivan - 500 - Employee",
        "Peter - 500 - Employee"
    ]);

// parseTheEmployeeData(
//     ["Jonathan - 2000 - Manager",
//         "Peter- 1000- Chuck",
//         "George - 1000 - Team Leader"
//     ]);
//


// let text = '27 months';
// let regex = /(\d+)\s*(days?|months?|years?)/;
// let [, count, unit] = regex.exec(text);
// console.log(count);
// console.log(unit);