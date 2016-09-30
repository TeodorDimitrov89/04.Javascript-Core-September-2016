function wordsUppercase(input) {
    let strToUpper = input[0].toUpperCase();

    let words=extractWords().filter(w=>w!='');
    console.log(words.join(', '));
    function extractWords() {
        return strToUpper.split(/\W+/)
    }
}
wordsUppercase(['Hi, how are you?']);
