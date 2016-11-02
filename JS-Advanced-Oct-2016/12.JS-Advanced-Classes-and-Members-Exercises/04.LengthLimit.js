class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }
    
    increase(length) {
        this.innerLength += Number(length);
    }

    decrease(length) {
        this.innerLength -= Number(length);

        if (this.innerLength < 3) {
            this.innerLength = 0;
        }
    }

    toString() {
        let string = this.innerString + "";
        let lengthProp = Number(this.innerLength);
        let output = '';
        if (string.length == 0) {
            output = '...';
            return output;
        }
        if (string.length > Number(lengthProp)) {
            // output = string.substring(string.length - Number(lengthProp));
            output = string.substr(0,this.innerLength);
            return output + "...";
        }
        return string
    }
}
let str = new Stringer("Peshou", 0);
str.increase(5);
str.decrease(2);
console.log(str.toString());
// let s = new Stringer("Viktor", 3);
// console.log(s.toString());
