// これはindex.js

function afterLoad() {
  $('#btn').click(
    function(){
      if ($('#text').css('display') == 'none') {
        $('#text').css({
          "display" : "inline"
        });
      }
      else {
        $('#text').css({
          "display" : "none"
        });
      }
    }
  )
}

// ロード完了したらafterLoadを実行
$().ready(afterLoad);
  
