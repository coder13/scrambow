const base = require('./base');

const cmll = function (register) {
  const scrambler = (function (scrambler) {
    const getCMLLScramble = function () {
      return scrambler.customScramble(
        [4, 5, 6, 7],
        [4, 6, 8, 9, 10, 11],
        [3, 4, 5, 6],
        [0, 1, 2, 3, 5, 7]
      );
    }

    return {
      initialize: scrambler.initialize,
      setRandomSrc: scrambler.setRandomSrc,
      getRandomScramble: function () {
        return {
          scramble_string: getCMLLScramble()
        }
      },
      setScrambleLength: scrambler.setScrambleLength
    }
  })(base);

  register('cmll', scrambler);
}

module.exports = cmll;
