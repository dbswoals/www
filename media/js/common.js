  $(document).ready(function() {
   $(".menuOpen").toggle(function() {
	 $(".mainMenu").slideDown('slow');
   }, function() {
	 $(".mainMenu").slideUp('fast');
   });
   
   
    var current=0; //가정법 (1->소형테블릿 이상이면,0->모바일)
    $(window).resize(function(){ 
        var screenSize = $(window).width(); 
        if( screenSize > 768){  //소형태블릿 이상이면 
          $(".mainMenu").show();
           current=1;
        }
        if(current==1 && screenSize < 768){ //모바일이면
          $(".mainMenu").hide();
           current=0;
        }
      }); 
    
  });

  $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    var winh = $(window).height()/3;
    //console.log(winh);
   
   
    $('.text').text(scroll);

    if(scroll>1100){ //500이상의 거리가 발생되면
        $('.topMove').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.topMove').fadeOut('fast');//top안보여라~~~~
    }
});

$('.topMove').click(function(e){
   e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); 
});