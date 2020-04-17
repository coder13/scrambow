var base = require('./base');

var lsll = (function (scrambler) {
  var getLSLLScramble = function () {
    return scrambler.customScramble(
      [3, 4, 5, 6, 7],
      [3, 8, 9, 10, 11],
      [2, 3, 4, 5, 6],
      [0, 1, 2, 3, 8]
    );
  }

  return {
    initialize: scrambler.initialize,
    setRandomSrc: scrambler.setRandomSrc,
    getRandomScramble: function () {
      return {
        scramble_string: getLSLLScramble()
      }
    },
    setScrambleLength: scrambler.setScrambleLength
  }
})(base);

module.exports = lsll;
