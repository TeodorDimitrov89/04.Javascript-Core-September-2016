function concatenateReversed(input) {
    let result = input.join('').split('').reverse().join('');
    console.log(result);
}
concatenateReversed(['I', 'am', 'student']);
