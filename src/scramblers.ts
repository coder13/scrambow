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

type Scramblers = Record<string, Scrambler>;

export const scramblers: Scramblers = {};

const register = (scramblers: Scramblers) =>
  (name: string, scrambler: Scrambler) => {
    scramblers[name] = scrambler;
  };

require('./scramblers/index.js')(register(scramblers));
