// これはindex.js

function afterLoad() {
  $('#btn').click(
    function(){
      var a = Math.random();
      var message = '';
      if (a > 0.9) {
        message = 'すげえ！';
      }
      $('#text').html(message+a);
    }
  )
}

// ロード完了したらafterLoadを実行
$().ready(afterLoad);
  
