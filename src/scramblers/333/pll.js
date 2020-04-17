var base = require('./base');

var pll = (function (scrambler) {
  var getPLLScramble = function () {
    return scrambler.customScramble(
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [],
      []
    );
  }

  return {
    initialize: scrambler.initialize,
    setRandomSrc: scrambler.setRandomSrc,
    getRandomScramble: function () {
      return {
        scramble_string: getPLLScramble()
      }
    },
    setScrambleLength: scrambler.setScrambleLength
  }
})(base);

module.exports = pll;
