var base = require('./base');

var zzlsll = (function (scrambler) {
  var getZZL2SLLScramble = function () {
    return scrambler.customScramble(
      [2, 3, 4, 5, 6, 7],
      [2, 3, 8, 9, 10, 11],
      [1, 2, 3, 4, 5, 6],
      []
    );
  }

  return {
    initialize: scrambler.initialize,
    setRandomSrc: scrambler.setRandomSrc,
    getRandomScramble: function () {
      return {
        scramble_string: getZZL2SLLScramble()
      }
    },
    setScrambleLength: scrambler.setScrambleLength
  }
})(base);

module.exports = zzlsll;
