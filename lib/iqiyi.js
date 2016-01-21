var request = require('request');
var cheerio = require('cheerio');

var getvip = function() {
  request.get({
    url: 'http://www.vipfenxiang.com/iqiyi/'
  }, function(error, response, body) {
    $ = cheerio.load(body);
    var href = $('.excerpt-one').eq(0).find('header h2 a').attr('href');

    request.get({
      url: href
    }, function(error, response, body) {
      $ = cheerio.load(body, {
        decodeEntities: false
      });
      $dom = $('span[style="color: #339966;"]');
      console.log('免费爱奇艺VIP账号:');
      for (var i = 0; i < $dom.length; i++) {
        var account = $dom.eq(i).html();
        console.log(account);
      }
    });
  });
};

module.exports = getvip;