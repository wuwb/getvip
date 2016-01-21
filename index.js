require('colorful').toxic();
var packageJson = require('./package.json');

var getvip = function() {
  var help = function() {
    console.log('Getvip tools in command line'.grey + ' ~ ' + require('./package').version.green);
    console.log('  $ '.cyan + 'getvip iqy 爱奇艺|PPS');
    console.log('  $ '.cyan + 'getvip xl  迅雷');
    console.log('  $ '.cyan + 'getvip yk  优酷|土豆');
    console.log('  $ '.cyan + 'getvip ls  乐视');
  }

  if (!process.argv[2]) {
    help();
    return;
  }

  var param = process.argv.slice(2)[0];

  console.log();
  if (param === 'iqy') {
    var iqiyi = require('./lib/iqiyi');
    iqiyi();
  } else if (param === 'xl') {
    var xunlei = require('./lib/xunlei');
    xunlei();
  } else if (param === 'yk') {
    var youku = require('./lib/youku');
    youku();
  } else if (param === 'ls') {
    var leshi = require('./lib/leshi');
    leshi();
  } else {
    help();
  }
}

module.exports = getvip;