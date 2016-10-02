function modifyAverage(input) {
    let number = input[0];

    function isModifyNum(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum+= Number(str[i]);
        }
        return sum /(str.length)>5;
    }

    while( !isModifyNum(number)) {
        number +="9";
    }
    console.log(number);
}
modifyAverage(["5835"]);