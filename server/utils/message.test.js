const expect = require('expect');

const {
  generateMessage
} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let res = generateMessage('Govind', 'Hello');
    expect(res.from).toBe('Govind');
    expect(res.text).toBe('Hello');
    expect(res.createdAt).toBeA('number');
  });
});