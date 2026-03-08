const { pack, batch } = require('./index');

describe('svg-icon-pack', () => {
  test('should process string input', () => {
    expect(pack('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => pack(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = pack('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
