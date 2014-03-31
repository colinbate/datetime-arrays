var datetimeArrays = require('../datetime-arrays');
describe('datetime arrays', function () {
  it('has a time object', function () {
    expect(datetimeArrays.time).toBeTruthy();
  });
  it('has a dateArray object', function () {
    expect(datetimeArrays.dateArray).toBeTruthy();
  });
  describe('time', function () {
    describe('toString()', function () {
      it('returns hours, minutes, seconds as provided', function () {
        var time = [11, 32, 45];
        expect(datetimeArrays.time.toString(time)).toBe('11:32:45');
      });
      it('returns hours, minutes and seconds padded to two digits', function () {
        expect(datetimeArrays.time.toString([1, 2, 3])).toBe('01:02:03');
        expect(datetimeArrays.time.toString([1, 22, 3])).toBe('01:22:03');
        expect(datetimeArrays.time.toString([11, 2, 3])).toBe('11:02:03');
        expect(datetimeArrays.time.toString([1, 2, 33])).toBe('01:02:33');
      });
      it('omits seconds if they are zero', function () {
        expect(datetimeArrays.time.toString([12, 2, 0])).toBe('12:02');
      });
      it('outputs in 24h time', function () {
        expect(datetimeArrays.time.toString([16, 12, 0])).toBe('16:12');
      });
    });
  });
});
