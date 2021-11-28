window.addEventListener('DOMContentLoaded',function(){
  let sec =0;
  let min =0;
  let timer;
 
 //スタート 
$(".start").click(function() {
  sec = 0;
  min = 0;

  $(".clock").html("0:0:0:0");
  timer = setInterval(countup, 100);

  $(this).prop("disabled", true);
  $(".stop,.reset").prop("disabled", false);
});

//ストップ
$(".stop").click(function(){
  clearInterval(timer);

  $(this).prop("disabled", true);
})

//リセット
$(".reset").click(function() {
  sec = 0;
  min = 0;

  $(".clock").html("0:0:0:0");
  clearInterval(timer);

  $(".stop,.reset").prop("disabled", true);
  $(".start").prop("disabled", false);
});

// カウントアップ
  function countup()
  {
    sec += 1;

    if (sec > 59) {
      sec = 0;
      min += 1;
    }
    }

})