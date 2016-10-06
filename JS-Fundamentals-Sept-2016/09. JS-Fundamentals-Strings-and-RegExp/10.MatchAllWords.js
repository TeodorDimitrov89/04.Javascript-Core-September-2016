function matchAllWords(sentences) {
    let regex = /[A-Za-z0-9|_]+/g;
    let result = sentences[0].match(regex);
    console.log(result.join('|'));
}
matchAllWords(["Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !"]);
// matchAllWords(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']);
// matchAllWords(['_(Underscores) are also word characters']);
