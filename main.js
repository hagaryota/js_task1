/*global $*/
$(function() {
  var fps =0;
  var sec =0;
  var min =0;
  var hour =0;
  var timer;
 
 //スタート 
$(".start").click(function() {
  timer = setInterval(countup, 100);

  $(this).prop("disabled", true);
  $(".stop,.reset").prop("disabled", false);
});

//ストップ
$(".stop").click(function(){
  clearInterval(timer);

  $(this).prop("disabled", true);
  $(".start").prop("disabled", false);
})

//リセット
$(".reset").click(function() {
  fps = 0;
  sec = 0;
  min = 0;
  hour =0;

  $(".clock").html("0:0:0:0");
  clearInterval(timer);

  $(".stop,.reset").prop("disabled", true);
  $(".start").prop("disabled", false);
});

// カウントアップ
 function countup()
  {
    fps += 1;

    if (fps > 9) {
      fps = 0;
      sec += 1;
    }

    if (sec > 59) {
      sec = 0;
      min += 1;
    }
    
    if (min > 59) {
      min = 0;
      hour += 1;
    }
    
 // 0埋め
  //fps_number = ("0" + fps).slice(-2);
  //sec_number = ("0" + sec).slice(-2);
  //min_number = ("0" + min).slice(-2);
  //hour_number = ("0" + hour).slice(-2);

  $(".clock").html(hour + ':' + min + ':' +  sec + ':' + fps);
  }
});