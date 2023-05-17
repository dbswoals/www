// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    //$('.btn1').css('background','#0064bf'); //첫번째 불켜
    //$('.btn1').css('width','200'); // 버튼의 너비 증가
    $('.btn1').addClass('on');
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link1 span').delay(2000).animate({top:500, opacity:1},'slow');
    $('.gallery .link1 p').delay(1500).animate({top:600, opacity:1},'slow');
 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
     $('.gallery li').hide(); //모든 이미지 안보인다.
     $('.gallery .link'+cnt).fadeIn(2000); //자신만 이미지가 보인다..
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
     
      $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');

      $('.gallery li span').css('top',300).css('opacity',0);
      $('.gallery li p').css('top',400).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(2000).animate({top:500, opacity:1},'slow');
      $('.gallery .link'+cnt).find('p').delay(1500).animate({top:600, opacity:1},'slow');

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').hide(); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }

		  $('.gallery .link'+cnt).fadeIn(2000);  //자기 자신만 이미지가 보인다
		  
	
      $('.mbutton').removeClass('on');
      $('.btn'+cnt).addClass('on');
      
      $('.gallery li span').css('top',300).css('opacity',0);
      $('.gallery li p').css('top',400).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(2000).animate({top:500, opacity:1},'slow');
      $('.gallery .link'+cnt).find('p').delay(1500).animate({top:600, opacity:1},'slow');

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      }
      
    });



	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
		   onoff=true; 
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn(2000); //자신만 이미지가 보인다..
                        
    //$('.mbutton').css('background','#999'); //버튼 모두불꺼
    //$('.mbutton').css('width','16');
    //$('.btn'+cnt).css('background','#0064bf');//자신 버튼만 불켜 
    //$('.btn'+cnt).css('width','30');
    $('.mbutton').removeClass('on');
    $('.btn'+cnt).addClass('on');

    $('.gallery li span').css('top',300).css('opacity',0);
    $('.gallery li p').css('top',400).css('opacity',0);
    $('.gallery .link'+cnt).find('span').delay(2000).animate({top:500, opacity:1},'slow');
    $('.gallery .link'+cnt).find('p').delay(1500).animate({top:600, opacity:1},'slow');

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff==false){
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });


});


//스크롤 js       

  var h0= $('#content section:eq(0)').offset().top-600 ;
  var h1= $('#content section:eq(1)').offset().top-600 ;
  var h2= $('#content section:eq(2)').offset().top-600 ;
  var h3= $('#content section:eq(3)').offset().top-600 ;
  var h4= $('#content section:eq(4)').offset().top-600 ;

   //스크롤의 좌표가 변하면.. 스크롤 이벤트
  $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
      //스크롤top의 좌표를 담는다       
       //스크롤의 거리의 범위를 처리
      if(scroll>=h0 && scroll<h1){
          $('#content section:eq(0)').addClass('cardon');
          //첫번째 내용 콘텐츠 애니메이
      }else if(scroll>=h1 && scroll<h2){          
           $('#content section:eq(1)').addClass('temaon');
      }else if(scroll>=h2 && scroll<h3){          
           $('#content section:eq(2)').addClass('enjoyon');
      }else if(scroll>=h3 && scroll<h4){ 
           $('#content section:eq(3)').addClass('timeon');
      }else if(scroll>=h4){           
           $('#content section:eq(4)').addClass('noticeon');
      }  
      
  });

//태마 이미지 바꾸기

$('.tema ul li').mouseenter(function(){
      var ind = $(this).index('.tema ul li');  // 0 1 2
      $('.tema img').attr('src','./images/thema_0'+ (ind+1) +'.jpg') 
});

//카드 팝업

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
 
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
};

xhr.open('GET', 'mainjs/main.json', true);        // 요청을 준비한다.
xhr.send(null);    

//제휴카드
var newContent='';
$('.more_btn2').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.more_btn2');//0~
    //console.log(ind);

    $('.modal_box2').fadeIn('fast');
    $('.popup_card').fadeIn('slow');

    newContent='';
    newContent+='<p class="popup_title2">'+ responseObject.card[ind].title +' <br><span>성인자유이용권 50%할인</span></p>';

    $('.card_int').html(newContent);
    //console.log(responseObject); 
});



$('.close_btn2').click(function(e){
    e.preventDefault();
    $('.modal_box2').hide();
    $('.popup_card').hide();

});
