function templateFormat(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>\n<quiz>');

    for (let i = 0; i < input.length; i += 2) {
        function questionQuiz(question, answer) {
            return '  <question>\n\t' + question + '\n  </question>\n  <answer>\n\t' + answer + '\n  </answer>';
        }
        console.log(questionQuiz(input[i],input[i+1]));
    }
    console.log("</quiz>");
}
templateFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
