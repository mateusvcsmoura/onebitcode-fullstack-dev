"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var elementsSum = numbers.reduce(function (accnum, num) {
    return accnum + num;
  }, 0);
  var arrayLength = numbers.length;
  return elementsSum / arrayLength;
};
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, obj = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    obj[_key2] = arguments[_key2];
  }
  var elementsSum = obj.reduce(function (accnum, _ref) {
    var n = _ref.n,
      p = _ref.p;
    return accnum + n * (p !== null && p !== void 0 ? p : 1);
  }, 0);
  var weightsSum = obj.reduce(function (accnum, obj) {
    var _obj$p;
    return accnum + ((_obj$p = obj.p) !== null && _obj$p !== void 0 ? _obj$p : 1);
  }, 0);
  return elementsSum / weightsSum;
};
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  if (numbers.length % 2 === 0) {
    return average(numbers[Math.round(numbers.length / 2) - 1], numbers[Math.round(numbers.length / 2)]);
  } else {
    var medianIndex = Math.round(numbers.length / 2) - 1;
    return numbers[medianIndex];
  }
};
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [[n, qtd], [n, qtd], [n, qtd]]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log(average(2, 6, 3, 7, 4));
console.log(weightedAverage({
  n: 7,
  p: 2
}, {
  n: 9,
  p: 5
}, {
  n: 3,
  p: 1
}));
console.log(median(2, 4, 5, 7, 42, 99));
console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));