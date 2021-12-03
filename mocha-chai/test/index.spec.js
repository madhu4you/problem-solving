const assert = require("chai").assert;
const app = require("../index");

describe("Array()", () => {
    let arr = new Array(1,2,3,4,5,6,7);
    describe("indexOf()", () => {
        it("should return -1 if the element doesn't exists in array", ()  => {
            assert.equal(arr.indexOf(8), -1);
        });
        it("should return the position of the element", () => {
            assert.isBelow(arr.indexOf(6), arr.length);
        });
    });
    describe("typeof", () => {
        it("should return the type as Array", () => {
            assert.equal(typeof arr, 'object');
        });
        it("should return string after join the array", () => {
            assert.equal(typeof arr.join(''), 'string');
        });
    });
});
