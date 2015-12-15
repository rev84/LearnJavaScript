// これはindex.js

function getIntegerRandom(min, max) {
  var syousuu = min + Math.random() * (max-min+1);
  var seisuu  = Math.floor(syousuu);
  return seisuu;
}


function afterLoad() {
  $('#btn').click(
    function(){
      var a = getIntegerRandom(1, 100);
      var message = '';
      if (95 <= a) {
        message = 'ファンブル！<br>';
      }
      else if (a <= 5) {
        message = 'クリティカル！<br>';
      }
      $('#text').html(message+a);
    }
  )
}

// ロード完了したらafterLoadを実行
$().ready(afterLoad);
  
