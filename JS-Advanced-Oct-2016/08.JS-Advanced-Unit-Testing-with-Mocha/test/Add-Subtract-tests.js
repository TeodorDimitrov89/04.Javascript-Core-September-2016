let expect = require("chai").expect;
let createCalculator = require("../Add-Subtract").createCalculator;
describe("createCalculator", function () {
    let calc = {};
    beforeEach('Init a createCalculator instance',function () {
        calc = createCalculator();
    });
    describe("Valid cases with valid input",function () {
        it("should be an object", function () {
            expect(calc).to.be.an('object');
        });
        it("should exist with properties add subtract and get ", () => {
            expect(calc).to.have.property('add');
            expect(calc).to.have.property('subtract');
            expect(calc).to.have.property('get');
        });
        it("should return 5 after {add:3;add:2}", function () {
            calc.add(3);
            calc.add(2);
            let value = calc.get();
            expect(value).to.be.equal(5);
        });

        it("should return 0 after {add:2;subtract:2}", function () {
            calc.add(2);
            calc.subtract(2);
            let value = calc.get();
            expect(value).to.be.equal(0);
        });

        it("should return -5 after {subtract:2;subtract:3}", function () {
            calc.subtract(2);
            calc.subtract(3);
            let value = calc.get();
            expect(value).to.be.equal(-5);
        });

        it("should return '15' after {add:20;subtract:5}", function () {
            calc.add('20');
            calc.subtract('5');
            let value = calc.get();
            expect(value).to.be.equal(15);
        });

        it("should return 4 after {add:10;subtract:7;add:-2;subtract:-1}", function () {
            calc.add(10);
            calc.subtract('7');
            calc.add('0');
            calc.subtract('-1');
            let value = calc.get();
            expect(value).to.be.equal(4);
        });

        it("should return 4.2 after {add:5.3;subtract:1.1}", function () {
            calc.add(5.3);
            calc.subtract(1.1);
            let value = calc.get();
            expect(value).to.be.equal(5.3 - 1.1);
        });

        it("should return 4.199999999999999 after {add:5.3;subtract:1.1}", function () {
            calc.add(5.3);
            calc.subtract(1.1);
            let value = calc.get();
            expect(value).to.be.not.equal(4.2);
        });
    });


    describe("Invalid cases with invalid input", function () {

        it('should return 0 on get on empty calculator', function () {
            expect(calc.get()).to.equal(0);
        });
        it('should return NaN on empty sum',function () {

            calc.add();
            expect(Number.isNaN(calc.get())).to.be.true;
        });
        it("should return NaN after {add:hello}",function () {
            calc.add("hello");
            let value = calc.get();
            expect(Number.isNaN(calc.get())).to.be.true;
        });
        it("should return NaN after {subtract:hello}", function () {
            calc.subtract("hello");
            let value = calc.get();
            expect(Number.isNaN(calc.get())).to.be.true;
        });

        it("should return 0 after get(5)", function (){
            let value = calc.get(5);
            expect(value).to.be.equal(0);
        });
    })
});