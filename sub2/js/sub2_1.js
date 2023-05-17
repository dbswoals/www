$(document).ready(function(){
    //ajex json파일 불러오기
    var productData = new XMLHttpRequest();// XMLHttpRequest 객체를 생성한다.
    productData.open('GET', './data/sub2_1.json', true);// 요청을 준비한다.
    productData.send(null);                         // 요청을 전송한다.
    
    
    
    //스크롤 이동 정프메뉴 
    var  jump1 = $('#jump1').offset().top-500;
    var  jump2 = $('#jump2').offset().top-500;
    var  jump3 = $('#jump3').offset().top-500;
    var  jump4 = $('#jump4').offset().top-500;
    var  jump5 = $('#jump5').offset().top-500;
    // var totalSize = $('.product ul li').size() //5
    
    var ProductIndexScroll =0;
    var popIndex = 0;  
    
    // 스크롤을 눌렀을때 이동하는 이벤트
    $('.content1 .img_box ul li a').click(function(e){
      e.preventDefault();
     ProductIndexScroll = $(this).index('.content1 .img_box ul li a');
     var jump = $('.more ul li:eq('+ProductIndexScroll+')').offset().top-300;
     $("html,body").stop().animate({"scrollTop":jump},500); //스크롤을 움직이는 코드
    
    });
    
    //스크롤 이벤트
    $(window).on('scroll',function(){
      var scrollEvent = $(window).scrollTop(); //스크롤의 거리
      
        if(scrollEvent>=jump1){
          $('.more ul li:eq(0) .text_box').addClass('boxMove');
        }
        if( scrollEvent>=jump2){
          $('.more ul li:eq(1) .text_box').addClass('boxMove');
        }
        if( scrollEvent>=jump3){
          $('.more ul li:eq(2) .text_box').addClass('boxMove');
        }
        if( scrollEvent>=jump4){
          $('.more ul li:eq(3) .text_box').addClass('boxMove');
        }
        if( scrollEvent>=jump5){ 
          $('.more ul li:eq(4) .text_box').addClass('boxMove');
        }
      });
    });