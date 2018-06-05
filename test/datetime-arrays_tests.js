var datetimeArrays = require('../datetime-arrays');
describe('datetime arrays', function () {
  'use strict';
  it('has a time object', function () {
    expect(datetimeArrays.time).toBeTruthy();
  });
  it('has a dateArray object', function () {
    expect(datetimeArrays.dateArray).toBeTruthy();
  });
  it('has a toDate function', function () {
    expect(datetimeArrays.toDate).toBeTruthy();
    expect(typeof datetimeArrays.toDate).toBe('function');
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

  describe('toDate()', function () {
    it('returns null when first param invalid dateArray', function () {
      expect(datetimeArrays.toDate([])).toBeNull();
    });
    describe('with valid dateArray as first param', function () {
      var arr = [1982, 5, 9];
      var result = datetimeArrays.toDate(arr);

      it('returns a JS Date object', function () {
        expect(Object.prototype.toString.call(result)).toBe('[object Date]');
      });

      it('maps to midnight on that day', function () {
        expect(result.getFullYear()).toBe(1982);
        expect(result.getMonth()).toBe(4);
        expect(result.getDate()).toBe(9);
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
      });

      describe('and invalid second param', function () {
        var result = datetimeArrays.toDate(arr, []);

        it('maps to midnight on that day', function () {
          expect(result.getFullYear()).toBe(1982);
          expect(result.getMonth()).toBe(4);
          expect(result.getDate()).toBe(9);
          expect(result.getHours()).toBe(0);
          expect(result.getMinutes()).toBe(0);
          expect(result.getSeconds()).toBe(0);
        });
      });

      describe('and time array as second param', function () {
        var time = [10, 18, 0];
        var result = datetimeArrays.toDate(arr, time);

        it('maps to specified time on that day', function () {
          expect(result.getFullYear()).toBe(1982);
          expect(result.getMonth()).toBe(4);
          expect(result.getDate()).toBe(9);
          expect(result.getHours()).toBe(10);
          expect(result.getMinutes()).toBe(18);
          expect(result.getSeconds()).toBe(0);
        });
      });

    });
    

  });
});