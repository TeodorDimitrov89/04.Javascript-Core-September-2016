function aggregateTable(input) {
    let result = [];
    let sum = 0;
    for (let line of input) {
        let townData = line.split('|');
        let townName = townData[1].trim();
        let income = Number(townData[2].trim());
        result.push(townName);
        sum+=income;
    }
    console.log(result.join(', ')+"\n" + sum);
}

aggregateTable(
    ['| Sofia          | 300',
        '| Veliko Tarnovo  | 500',
        '| Yambol          | 275'
    ]
)
