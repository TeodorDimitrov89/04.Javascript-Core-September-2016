function addRemoveElments(input) {
    let initialNumber = 1;
    let arr = [];
    for(let num of input) {
        if(num=="add") {
            arr.push(initialNumber);
        }
        else {
            arr.pop();
        }

        initialNumber++;
    }
    if(arr.length==0) {
        console.log("Empty");
        return;
    }
    console.log(arr.join('\n'));
}
// addRemoveElments([
//     "add",
//     "add",
//     "add",
//     "add"
//     ]);

// addRemoveElments(["add",
//     "add",
//     "remove",
//     "add",
//     "add"
// ]);
addRemoveElments([
    "remove",
    "remove",
    "remove"
])