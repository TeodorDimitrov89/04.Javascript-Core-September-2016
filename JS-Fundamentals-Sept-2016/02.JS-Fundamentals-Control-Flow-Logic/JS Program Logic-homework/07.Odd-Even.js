function oddEven(number) {
    let num = number%2;
    if(num == 0) {
        console.log('even');
    }
    else if((num == Math.round(num))) {
        console.log('odd');
    }
    else {
        console.log('invalid');
    }
}

oddEven(['5']);
