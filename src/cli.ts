import cli from 'commander';
import { Scrambow } from './scrambow';
import { Scramble } from './scramblers';
const packageVersion = require('../package.json').version;

cli
  .version(packageVersion)
  .option('-n, --number [num]', 'set amount of scrambles to generate')
  .option('-t, --type [string]', 'set the scramble type', '333')
  .option('-s, --seed [num]', 'set seed')
  .option('-l, --length [num]', 'set scramble length')
  .parse(process.argv);

const out = new Scrambow();
let scrambles: Array<Scramble>;

try {
  out.setType(cli.type.toLowerCase());
  if (cli.seed) {
    out.setSeed(cli.seed);
  }
  if (cli.length) {
    out.setLength(cli.length);
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

if (cli.number) {
  scrambles = out.get(cli.number);
} else {
  scrambles = out.get();
}

console.log(scrambles.map(s => s.scramble_string).join('\n'));