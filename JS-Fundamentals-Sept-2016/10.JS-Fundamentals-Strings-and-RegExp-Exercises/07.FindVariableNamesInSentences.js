function findVariableNamesInSent(input) {
    let result=[];
    for (let name of input) {
        let regex =  /\b_([A-Za-z\d]+)\b/g;
        let exec=regex.exec(name);
        while (exec) {
            result.push(exec[1]);
            exec=regex.exec(name);
        }
    }
    console.log(result.join(','));
}

findVariableNamesInSent(["The _id231 and _age variables are both integers."]);
// findVariableNamesInSent(["Calculate the _area of the _perfectRectangle object."])