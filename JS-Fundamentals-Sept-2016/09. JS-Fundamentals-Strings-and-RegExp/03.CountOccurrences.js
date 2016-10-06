function countOccurences(input) {
    let word = input[0];
    let count = 0;
    let string = input[1];
    let index = string.indexOf(word);
    while(index>-1) {
        count++;
        index = string.indexOf(word,index+1);
    }
    console.log(count);
}
countOccurences(['the', 'The quick brown fox jumps over the lay dog.']);
