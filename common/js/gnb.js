//글로벌네비게이션 코드 작성


$(document).ready(function() {

    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off=false;  //false(안오버)  true(오버)
    
        $('#headerArea').mouseenter(function(){
            //var scroll = $(window).scrollTop();
            $(this).css('background','#fff');
            $('.dropdownmenu li a').css('color','#333'); 
           
            on_off=true;
        });
    
       $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();  //스크롤의 거리
            //console.log(scroll);
 
            if(scroll<smh-50 ){  // 현재 스크롤의 위치가 비주얼 이미지가 보이는 위치면...
                $(this).css('background','rgba(255,255,255,.7)').css('border-bottom','none'); 
                $('.dropdownmenu li a').css('color','#333');
            }else{  //메뉴가 비주얼 영역을 벗어 났다면...
                $(this).css('background','#fff'); 
                $('.dropdownmenu li a').css('color','#333');
            }
           on_off=false;    
       });
 
       //스크롤의 위치변화가 생기면 발생하는 이벤트 ->scroll
       // $(window).on('scroll',function(){ //실행코드});
    
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
 
            if(scroll>smh-50){//스크롤300까지 내리면
                $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
                $('.dropdownmenu li a').css('color','#333');
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
               if(on_off==false){ //헤더에서 마우스가 벗어난 상태 
                    $('#headerArea').css('background','rgba(255,255,255,.7)').css('border-bottom','none');
                    $('.dropdownmenu li a').css('color','#333');
               }
            }; 
            
         });
 
   
     //2depth 열기/닫기
     $('ul.dropdownmenu').hover(
        function() { 
           $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop()}); //모든 서브를 다 열어라
           $('#headerArea').animate({height:350 },'fast').clearQueue();
        },function() {
           $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
           $('#headerArea').animate({height:205},'fast').clearQueue();
      });
     
      //1depth 효과
      $('ul.dropdownmenu li.menu').hover(
        function() { 
            $('.depth1',this).css('color','#333');
        },function() {
           $('.depth1',this).css('color','#333');
      });

      $('.menu ul li a').hover(
        function() { 
            $(this).css('color','#0064bf');
        },function() {
           $(this).css('color','#333');
      });
      
 
      //tab 처리
      $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
         $('ul.dropdownmenu li.menu ul').slideDown('normal');
         $('#headerArea').animate({height:350},'fast').clearQueue();
      });
 
     $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
         $('ul.dropdownmenu li.menu ul').slideUp('fast');
         $('#headerArea').animate({height:205},'normal').clearQueue();
     });
 });

 //패밀리사이트


 $(document).ready(function() {
    /*	
     $('.select .arrow').click(function(){
         $('.select .aList').fadeIn('slow');			  
     });
 
     $('.select .aList').mouseleave(function(){
         $(this).fadeOut('fast');			  
     });
   */
     $('.select .arrow').toggle(function(){
         $('.select .aList').fadeIn('slow');	
         $(this).children('span').html('<i class="fa-solid fa-angle-down"></i>');	
     },function(){
         $('.select .aList').fadeOut('fast');	
         $(this).children('span').html('<i class="fa-solid fa-angle-up"></i>');	
     });
 
     //tab키 처리
       $('.select .arrow').on('focus', function () {        
               $('.select .aList').fadeIn('slow');	
        });
        $('.select .aList li:last a').on('blur', function () {        
               $('.select .aList').fadeOut('fast');
        });
  
 });

 //상단이동

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
 