// これはindex.js

function getIntegerRandom(min, max) {
  var syousuu = min + Math.random() * (max-min+1);
  var seisuu  = Math.floor(syousuu);
  return seisuu;
}


function afterLoad() {
  $('#block').css({
    "position" : "absolute"
  });

  $('body').on('mousemove', function(e){
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    setTimeout(function(){
      $('#red').css({
        "left" : mouseX - $('#red').width() / 2,
        "top"  : mouseY - $('#red').height() / 2
      });
    }, 100);
    setTimeout(function(){
      $('#blue').css({
        "left" : mouseX - $('#blue').width() / 2,
        "top"  : mouseY - $('#blue').height() / 2
      });
    }, 200);
    setTimeout(function(){
      $('#green').css({
        "left" : mouseX - $('#green').width() / 2,
        "top"  : mouseY - $('#green').height() / 2
      });
    }, 300);
    setTimeout(function(){
      $('#matui').css({
        "left" : mouseX - $('#matui').width() / 2,
        "top"  : mouseY - $('#matui').height() / 2
      });
    }, 400);
  });

}

// ロード完了したらafterLoadを実行
$().ready(afterLoad);
  
