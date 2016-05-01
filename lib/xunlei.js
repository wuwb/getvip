var request = require('request');
var cheerio = require('cheerio');

var getvip_xunlei = function() {
  console.log('loading...');
  request.get({
    url: 'http://xlfans.com/'
  }, function(error, response, body) {
    $ = cheerio.load(body);
    var href = $('.excerpt header h2 a').eq(1).attr('href');

    console.log('loading... 50%');
    request.get({
      url: href
    }, function(error, response, body) {
      $ = cheerio.load(body, {
        ignoreWhitespace: false,
        xmlMode: true,
        decodeEntities: false
      });
      $dom = $('.article-content p');
      var account;

      console.log('免费迅雷VIP账号:');
      for (var i = 0; i < $dom.length; i++) {
        $dom.eq(i).find('a, strong, span, br').remove();
        account = '';
        account = $dom.eq(i).text();

        account = account.replace(/迅雷粉迅雷会员账号/g, '账号: ');
        account = account.replace(/密/g, ' 密码: ');
        account = account.replace(/转载请注明： &raquo;/gi,'');
        account = account.replace(/<br \/>/gi,'\n');
        console.log(account);
      }
    });
  });
};

module.exports = getvip_xunlei;
