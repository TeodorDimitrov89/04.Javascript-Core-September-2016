function escaping(input) {
    let html = "<ul>\n";
    for (let items of input) {
        html += "  <li>" + escapingHtml(items) + "</li>\n";
    }

    function escapingHtml(items) {
        let lt = "&lt;";
        let gt = "&gt;";
        let amp = "&amp;";
        let quotes = "&quot;";
        let result = '';
        for (let i of items) {
            if (i == "<") {
                result += lt;
            }
            else if (i == ">") {
                result += gt;
            }
            else if (i == "&") {
                result += amp;
            }
            else if (i == "\"") {
                result += quotes;
            }
            else {
                result += i;
            }
        }
        return result;
    }

    html += "</ul>";
    console.log(html);
}
escaping(['<b>unescaped text</b>', 'normal text']);
escaping([
    '<div style=\"color: red;\">Hello, Red!</div>',
    '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>'
]);