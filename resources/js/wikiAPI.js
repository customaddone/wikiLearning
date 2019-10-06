
    $(window).load(function() { // load(function)で呼び出し時に実行
        var refere = 'http://www.pahoo.org/e-soul/webtech/js01/js01-02-03.shtm';
        $('#title').html('Wikipedia API を利用する  <span style="font-size:small;">' + yyyymmdd() + '版</span>');
        $('#refere').html('参考サイト：<a href="' + refere +'">' + refere + '</a>');
    })

    //
    // 年月日取得
    // @return	string 年月日
    //
    function yyyymmdd() {
      var now = new Date();
      return now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
    }

    // wikipedia API利用
    function WikipediaAPI() {
        // 検索語
        var query = document.getElementById('query').value;
        // API呼び出し
        $.ajax({
            url: 'http://wikipedia.simpleapi.net/api',
            data: {
          output: 'json',
          keyword: query
        },
            type: 'GET',
        dataType: 'jsonp',			//Access-Control-Allow-Origin対策
        timeout: 1000,
            success: function (json) { //もし通信が成功したなら
                if (json != null && json.length > 0) {
                    $('#word').html('');
            //結果表示
  　　　　　　	for (i = 0; i < json.length; i++) {
                        $('#word').append(
                            '<dt>' + (i + 1) + '：<a href="' +
                            json[i].url + '">' +
                            json[i].title + '</a>' +　// wikiへのリンク
                            '&nbsp;(' + json[i].datetime +
                            ' 更新)</dt>' + // 日付
                            '<dd>' + json[i].body + '</dd>' //記事本体
                        );
                    }
                } else {
                    $('#word').html('検索結果なし');
                }
            }
        });
    }
