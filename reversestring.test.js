const reverseString = require('./reversestring');

test('reverseString to be define', () => {
    expect(reverseString).toBeDefined();
});

test('String must reverse', () => {
    expect(reverseString('hello')).toEqual('olleh');
});