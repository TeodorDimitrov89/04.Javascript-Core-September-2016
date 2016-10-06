function extractText(input) {
    let text = input[0];
    let startIndex = text.indexOf('(');
    let result = [];
    while (startIndex > -1) {
        let endIndex = text.indexOf(')', startIndex);
        if (endIndex == -1) {
            break;
        }
        let snippet = text.substring(startIndex + 1, endIndex);
        result.push(snippet);
        startIndex = text.indexOf('(',endIndex);

    }
    console.log(result.join(', '));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);
