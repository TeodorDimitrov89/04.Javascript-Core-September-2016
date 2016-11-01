let expect = require("chai").expect;
let rgbToHexColor = require("../RGBToHex").rgbToHexColor;

describe("rgb(red,green,blue-)",function () {
    describe("Nominal cases(valid input)",function () {
        it("should return black for rgb(0,0,0)",function () {
            let hex  = rgbToHexColor(0,0,0);
            expect(hex).to.be.equal("#000000");
        });
        it("should return valid for rgb(255,158,170)",function () {
            let hex  = rgbToHexColor(255,158,170);
            expect(hex).to.be.equal("#FF9EAA");
        });
        it("should return valid for rgb(12,13,14)",function () {
            let hex  = rgbToHexColor(12,13,14);
            expect(hex).to.be.equal("#0C0D0E");
        });
        it("should return white for rgb(255,255,255)",function () {
            let hex  = rgbToHexColor(255,255,255);
            expect(hex).to.be.equal("#FFFFFF");
        });
    });


    describe("Special cases(invalid input)",function () {
        it("should return invalid for rgb(-1,0,0)",function () {
            let hex  = rgbToHexColor(-1,0,0);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(0,-1,0)",function () {
            let hex  = rgbToHexColor(0,-1,0);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(0,0,-1)",function () {
            let hex  = rgbToHexColor(0,0,-1);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(256,0,0)",function () {
            let hex  = rgbToHexColor(256,0,0);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(0,256,0)",function () {
            let hex  = rgbToHexColor(0,256,0);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(0,0,256)",function () {
            let hex  = rgbToHexColor(0,0,256);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(3.14,0,0)",function () {
            let hex  = rgbToHexColor(3.14,0,0);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(0,3.14,0)",function () {
            let hex  = rgbToHexColor(0,3.14,0);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(0,0,3.14)",function () {
            let hex  = rgbToHexColor(0,0,3.14);
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb(empty input)",function () {
            let hex  = rgbToHexColor();
            expect(hex).to.be.equal(undefined);
        });
        it("should return invalid for rgb('5'[3],{8:9})",function () {
            let hex  = rgbToHexColor('5'[3],{8:9});
            expect(hex).to.be.equal(undefined);
        });
    })
});