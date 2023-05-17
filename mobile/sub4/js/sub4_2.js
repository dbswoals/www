//tab
// JavaScript Document

$(document).ready(function(){
    //var cnt=3;  //탭메뉴 개수 ***
    var acnt = 0;
    var index =0;

    $('.contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tabs .tab1').addClass('current1')//첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
      $('.tabs .tab').click(function(e){  //각각의 탭메뉴를 클릭하면... 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

          acnt = 0;
          index = $(this).index('.tabs .tab'); //클릭시 해당 버튼의 인덱스 번호를 리턴 0 1 2 
          //console.log(index)
          $(".contlist").hide();
          $(".contlist li").hide();
          $(".contlist:eq("+index+") li:eq(0)").show();

          $(".contlist").hide(); //모든 탭내용을 안보이게...
          //$(".tabs .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $(".contlist:eq("+index+")").fadeIn('slow');
      // 클릭한 해당 탭메뉴만 활성화
        $('.tab').removeClass('current1')
        $(this).addClass('current1');

     });


    //버튼클릭시 이미지 이동


$(".contlist li").hide();
$(".contlist:eq(0) li:eq(0)").show();
$(".contlist:eq(1) li:eq(0)").show();

var total = $(".contlist:eq(0) li").size();

$(".btn .next").click(function(e){
    e.preventDefault();

    acnt++; // 0 1 2 
    if(acnt==total){
        acnt=0;
    }
    $(".contlist li").hide();
    $('.contlist:eq('+ index+') li:eq('+acnt+')').fadeIn('slow');
    
});

$(".btn .back").click(function(e){
    e.preventDefault();
    
    acnt--;  // 2 1 0 2 1 0 ...
    if(acnt==-1){
        acnt=total-1;
    }

    $(".contlist li").hide();
    $('.contlist:eq('+ index+') li:eq('+acnt+')').fadeIn('slow');

})


});
