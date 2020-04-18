const base = require('./base');
const { shift } = require('./util/helpers');
const { EP, CP } = require('./util/cubePositions');

const zbll = function (register) {
  const scrambler = (function (scrambler) {
    const getZBLLScramble = function (args) {
      let co = scrambler.getRandomCO(args);

      let cori = [0, 0, 0, ...shift(co, scrambler.rn(4)), 0].reverse();

      return scrambler.getCustomScramble({
        ep: [EP.UF, EP.UL, EP.UB, EP.UR],
        cp: [CP.FLU, CP.FRU, CP.BRU, CP.BLU],
        cori: parseInt(cori.join(''), 3)
      });
    }

    return {
      initialize: scrambler.initialize,
      setRandomSrc: scrambler.setRandomSrc,
      getRandomScramble: function (args) {
        return {
          scramble_string: getZBLLScramble(args)
        }
      },
      setScrambleLength: scrambler.setScrambleLength
    }
  })(base);

  register('zbll', scrambler);
}

module.exports = zbll;
