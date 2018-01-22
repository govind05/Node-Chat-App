const expect = require('expect');

const {
  generateMessage,
  generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let res = generateMessage('Govind', 'Hello');
    expect(res.from).toBe('Govind');
    expect(res.text).toBe('Hello');
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let res = generateLocationMessage('Govind', 1, 1);
    expect(res.from).toBe('Govind');
    expect(res.createdAt).toBeA('number');
    expect(res.url).toBe('https://www.google.com/maps?q=1,1');
  });
});