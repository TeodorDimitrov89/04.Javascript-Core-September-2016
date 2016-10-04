function firstAndLastNum(input) {
    let inp = input.map(Number);
    let k = Number(input[0]);
    let newArr = [];
    for (let i = 1; i < input.length; i++) {
        newArr[i]=Number(input[i]);
    }
    let arr1 = inp.splice(1,k);
    let arr2 = newArr.splice(newArr.length - k,newArr.length);
    console.log(arr1.join(' '));
    console.log(arr2.join(' '));
}
// firstAndLastNum(['2',
//     '7', '8', '9']
// );
firstAndLastNum(['3', '6', '7', '8', '9']);

firstAndLastNum(['1', '6']);

