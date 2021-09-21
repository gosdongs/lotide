const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('should return [1, 2, 5, 7, 2] for takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0)', () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("should return ['I've', 'been', 'to', 'Hollywood'] for takeUntil(['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'], x => x === ',')", () => {
    assert.deepEqual(takeUntil(['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'], x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
});