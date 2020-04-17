const shift = (a, v) => a.concat(a).slice(v, v + a.length);

const swap = (a, i, j) => {
  let tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

const sum = array => array.reduce((a, b) => a + b);

module.exports = {
  shift,
  swap,
  sum
}
