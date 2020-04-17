var base = require('./base');

var ll = (function (scrambler) {
  var getLLScramble = function () {
    return scrambler.customScramble(
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [3, 4, 5, 6],
      [0, 1, 2, 3]
    );
  }

  return {
    initialize: scrambler.initialize,
    setRandomSrc: scrambler.setRandomSrc,
    getRandomScramble: function () {
      return {
        scramble_string: getLLScramble()
      }
    },
    setScrambleLength: scrambler.setScrambleLength
  }
})(base);

module.exports = ll;
