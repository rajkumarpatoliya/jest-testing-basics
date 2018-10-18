/*jshint esversion: 6 */
const functions = require('./functions');

// toBe 
test('Adds 2 + 2 equal 4', () => {
    expect(functions.add(2, 2)).toBe(4); // toBe() is a matcher func...
});

// toBeNull
test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});