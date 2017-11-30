let _ = require('lodash');

const titleCase = s => _.map(s.split(/\s/), _.flowRight(_.upperFirst, x => x.toLowerCase())).join(' ')

function randInt(lo, hi) {
  if (typeof hi === 'undefined') {
    hi = lo;
    lo = 0;
  };
  let rng = hi - lo;
  return Math.random() * rng + lo;
}

chance = c => Math.random() < c;

function doRandTimes(lo, hi, f) {
  if (typeof hi === 'function' &&
      typeof f === 'undefined') {
    f = hi;
    hi = lo;
    lo = 0;
  };
  let i = 0;
  for (i; i < hi; i++) {
    f()
  }
}


module.exports = {
  chance,
  doRandTimes,
  randInt,
  titleCase
}
