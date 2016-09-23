function biggestNumber([num1,num2,num3]) {
    [num1,num2,num3]=[num1,num2,num3].map(Number);
    let biggestNum = Math.max(num1,num2,num3);
    console.log(biggestNum);
}

biggestNumber(['5','-2','0']);
