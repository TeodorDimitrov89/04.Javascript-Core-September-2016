let expect = require("chai").expect;
let isSymmetric = require("../isSymmetric").isSymmetric;

describe("isSymmetric(arr)",function () {
    it("should return true for [1,2,3,3,2,1]",function () {
        let expectedResult = true;
        let actualResult = isSymmetric([1,2,3,3,2,1]);
        expect(actualResult).to.be.equal(expectedResult)
    });

    it("should return false for [1,2,3,4,2,1]",function () {
        let expectedResult = false;
        let actualResult = isSymmetric([1,2,3,4,2,1]);
        expect(actualResult).to.be.equal(expectedResult)
    });
    it("should return true for [-1,2,-1]",function () {
        let expectedResult = true;
        let actualResult = isSymmetric([-1,2,-1]);
        expect(actualResult).to.be.equal(expectedResult)
    });

    it("should return false for [-1,2,1]",function () {
        let expectedResult = false;
        let actualResult = isSymmetric([-1,2,1]);
        expect(actualResult).to.be.equal(expectedResult)
    });

    it("should return false for [1,2]",function () {
        let expectedResult = false;
        let actualResult = isSymmetric([1,2]);
        expect(actualResult).to.be.equal(expectedResult)
    });

    it("should return true for [1]",function () {
        let expectedResult = true;
        let actualResult = isSymmetric([1]);
        expect(actualResult).to.be.equal(expectedResult)
    });

    it("should return false for [5,'hi',{a:5},new Date(),{a:5},'hi',5]",function () {
        let expectedResult = true;
        let actualResult = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]);
        expect(actualResult).to.be.equal(expectedResult)
    });
    it("should return false for [5,'hi',new Date(),{a:5},'hi',5]",function () {
        let expectedResult = false;
        let actualResult = isSymmetric([5,'hi',new Date(),{a:5},'hi',5]);
        expect(actualResult).to.be.equal(expectedResult)
    });
    it("should return false for []",function () {
        let expectedResult = true;
        let actualResult = isSymmetric([]);
        expect(actualResult).to.be.equal(expectedResult)
    });

    it("should return false for 1,2,2,1",function () {
        let expectedResult = false;
        let actualResult = isSymmetric(1,2,2,1);
        expect(actualResult).to.be.equal(expectedResult)
    });


});