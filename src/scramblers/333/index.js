module.exports = function (register) {
  require('./standard')(register);
  require('./ble')(register);
  require('./cmll')(register);
  require('./cmllsune')(register);
  require('./edges')(register);
  require('./lccp')(register);
  require('./ll')(register);
  require('./lsll')(register);
  require('./nls')(register);
  require('./pll')(register);
  require('./wv')(register);
  require('./zzll')(register);
  require('./zzlsll')(register);
}
