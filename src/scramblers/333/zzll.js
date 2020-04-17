var base = require('./base');

var zzll = (function (scrambler) {
  var getZZLSScramble = function () {
    return scrambler.customScramble(
      [3, 4, 5, 6, 7],
      [3, 8, 9, 10, 11],
      [2, 3, 4, 5, 6],
      []
    )
  }

  return {
    initialize: scrambler.initialize,
    setRandomSrc: scrambler.setRandomSrc,
    getRandomScramble: function () {
      return {
        scramble_string: getZZLSScramble()
      }
    },
    setScrambleLength: scrambler.setScrambleLength
  }
})(base);

module.exports = zzll;
