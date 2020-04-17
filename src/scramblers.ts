export interface Scramble {
  state?: string;
  scramble_string: string | '';
}

export interface Seed {
  random: () => number;
}

interface Scrambler {
  version?: string;
  initialize: (randomSource: Seed) => Function | void;
  setRandomSource: (randomSource: Seed) => void;
  getRandomScramble: () => Scramble;
  setScrambleLength: (length: number) => void;
}

interface Scramblers {
  [key: string]: Scrambler
}

export let scramblers: Scramblers = {};
scramblers = require('./scramblers/NNN.js');
scramblers['222'] = require('./scramblers/222.js');
scramblers['333'] = require('./scramblers/333/standard.js');
scramblers.edges = require('./scramblers/333/edges.js');
scramblers.ll = require('./scramblers/333/ll.js');
scramblers.lsll = require('./scramblers/333/lsll.js');
scramblers.zzlsll = require('./scramblers/333/zzlsll.js');
scramblers.nls = require('./scramblers/333/nls.js');
scramblers.pll = require('./scramblers/333/pll.js');
scramblers.zzll = require('./scramblers/333/zzll.js');
scramblers.cmll = require('./scramblers/333/cmll.js');
scramblers.cmllsune = require('./scramblers/333/cmllsune.js');
scramblers.ble = require('./scramblers/333/ble.js');
scramblers.lccp = require('./scramblers/333/lccp.js');
scramblers.wv = require('./scramblers/333/wv.js');
scramblers.clock = require('./scramblers/clock.js');
scramblers.minx = require('./scramblers/minx.js');
scramblers.pyram = require('./scramblers/pyram.js');
scramblers.sq1 = require('./scramblers/sq1.js');
scramblers.skewb = require('./scramblers/skewb.js');
