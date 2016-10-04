function processOddNums(input) {
   let result = input.filter((num,i)=>i % 2 != 0).map(n=>n*2).reverse().join(' ');
    console.log(result);
}
processOddNums(['10', '15', '20', '25']);