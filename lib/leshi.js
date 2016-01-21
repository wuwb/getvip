var request = require('request');
var cheerio = require('cheerio');

var getvip = function() {
  request.get({
    url: 'http://www.vipfenxiang.com/leshivip/'
  }, function(error, response, body) {
    $ = cheerio.load(body);
    var href = $('.excerpt-one').eq(0).find('header h2 a').attr('href');

    request.get({
      url: href
    }, function(error, response, body) {
      $ = cheerio.load(body, {
        decodeEntities: false
      });
      $dom = $('p[style="color: #444444;"]');
      console.log('免费乐视VIP账号:');
      for (var i = 0; i < $dom.length; i++) {
        var account = $dom.eq(i).html();
        account = account.replace('<strong><span style="color: #00ff00;">', '');
        account = account.replace('</span></strong>', '');
        if (account.indexOf('密码') > 0) {
          console.log(account);
        }
      }
    });
  });
};

module.exports = getvip;