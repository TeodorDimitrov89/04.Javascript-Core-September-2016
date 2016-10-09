
function checkIfStringStartWithGivenSubs(input) {
    let str= input[0];
    let word = input[1];
    console.log(str.startsWith(word));
}
checkIfStringStartWithGivenSubs(["How have you been?", "how"]);