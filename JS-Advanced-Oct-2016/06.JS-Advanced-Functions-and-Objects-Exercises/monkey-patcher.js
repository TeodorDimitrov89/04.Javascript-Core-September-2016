function solve() {
    switch (arguments[0]) {
        case "upvote":
            this.upvotes += 1;
            break;
        case "downvote":
            this.downvotes += 1;
            break;
        case "score":
            return score(this);
            break;
    }

    function score(obj) {
        let resultReport = [];
        let _that = obj;
        let modified = 0;
        let rating = '';
        let upvotes = Number(_that.upvotes);
        let downvotes = Number(_that.downvotes);
        if (upvotes + downvotes > 50) {
            modified = Math.ceil(Math.max(upvotes, downvotes) * 0.25)
        }
        if (upvotes + downvotes >= 10) {
            if (upvotes / (upvotes + downvotes) > 0.66) {
                rating = 'hot';
            }
            else if (upvotes > 100) {
                rating = 'controversial';
            }
            else if (upvotes - downvotes < 0) {
                rating = 'unpopular';
            }
            else {
                rating = 'new';
            }
        }
        else {
            rating = 'new';
        }
        resultReport.push(upvotes + modified);
        resultReport.push(downvotes + modified);
        resultReport.push(upvotes - downvotes);
        resultReport.push(rating);
        return resultReport
    }
}

let obj = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solve.call(obj, 'upvote');
solve.call(obj, 'downvote');
console.log(solve.call(obj, 'score'));
