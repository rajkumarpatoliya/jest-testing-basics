/*jshint esversion: 6 */

const chunkArray = require("./chunk");

test("chunk Array func exist", () => {
  expect(chunkArray).toBeDefined();
});

test("test an Array of 10 values with the lenght of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 21];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 21]]);
});

test("test an array of length 3 with length 1", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkArr = chunkArray(numbers, len);

  expect(chunkArr).toEqual([[1], [2], [3]]);
});
