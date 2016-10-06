function matchTheDates(input) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [], match;
    for (let currentSentence of input) {
        let match = pattern.exec(currentSentence);
        while (match) {
            dates.push(match[0] + ` (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
            match = pattern.exec(currentSentence)
        }
    }
    console.log(dates.join(`\n`));
}
// matchTheDates(
//     [
//     "I am born on 30-Dec-1994.",
//         "My father is born on the 29-Jul-1955."
//     ]);
matchTheDates(
    [
        "I dont know what to test anymore so here are some random dates.",
        "15-May-1996",
        "21-June-1995",
        "31-February-3000",
        "woops that was invalid...",
        "111-Nov-2332",
        "01-January-0001",
        "What the fuck",
        "11-Sep-2001",
        "One minute of silence!"
    ]);
// matchTheDates(["I am born on 30-Dec-1994.",
//     "My father is born on the 29-Jul-1955."]);