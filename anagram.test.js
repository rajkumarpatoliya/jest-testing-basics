/*jshint esversion: 6 */

const isAnagram = require("./anagram");

test("siAnagram a function", () => {
  expect(typeof isAnagram).toEqual("function");
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});
