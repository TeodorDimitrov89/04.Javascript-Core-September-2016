function extractNonDecreasingSubs(input) {
    let newArr = input.map(Number);
    // let result = [];
    let bigNum=newArr[0];
    let biggestNum = newArr.filter(item=>{
        if(item>=bigNum) {
            bigNum=item;
            return true;
        }
        return false;
    });
    // biggestNum.unshift(newArr[0]);
    console.log(biggestNum.join('\n'));

    // let biggestNum = newArr[0];
    // result.unshift(biggestNum);
    // for (let i = 1; i < newArr.length; i++) {
    //     if(newArr[i] >= biggestNum) {
    //         result.push(newArr[i]);
    //         biggestNum = newArr[i];
    //     }
    // }
    // console.log(result.join('\n'));

}
extractNonDecreasingSubs(
    [
        "1",
        "3",
        "8",
        "4",
        "10",
        "12",
        "3",
        "2",
        "24"
    ]);
