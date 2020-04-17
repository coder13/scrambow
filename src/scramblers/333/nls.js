var base = require('./base');
var { CO, CP, EP } = require('./util/cubePositions');

var nls = (function (scrambler) {
  var getNLSScramble = function () {
    return scrambler.getCustomScramble({
      co: [CO.FLU, CO.FRU, CO.BRU, CO.DFR],
      cp: [CP.FLU, CP.FRU, CP.BRU, CP.DFR],
      ep: [EP.UF, EP.UR, EP.FR],
    })
  }

  return {
    initialize: scrambler.initialize,
    setRandomSrc: scrambler.setRandomSrc,
    getRandomScramble: function () {
      return {
        scramble_string: getNLSScramble()
      }
    },
    setScrambleLength: scrambler.setScrambleLength
  }
})(base);

module.exports = nls;
