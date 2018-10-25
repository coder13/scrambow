import { Scrambow } from './scrambow';
import cli from 'commander';
import { Scramble } from './scramblers';

cli
  .version('0.3.0')
  .option('-n, --number [num]', 'set amount of scrambles to generate')
  .option('-t, --type [string]', 'set the scramble type', '333')
  .option('-s, --seed [num]', 'set seed')
  .option('-l, --length [num]', 'set scramble length')
  .parse(process.argv);

const out = new Scrambow();
let scrambles: Array<Scramble>;

out.setType(cli.type);
if (cli.seed) {
  out.setSeed(cli.seed);
}
if (cli.length) {
  out.setLength(cli.lenth);
}
if (cli.number) {
  scrambles = out.get(cli.number);
} else {
  scrambles = out.get();
}

console.log(scrambles.map(s => s.scramble_string).join('\n'));