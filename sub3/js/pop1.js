

$(document).ready(function(){
  //객체배열(json)
  var memo = [
        {imgsrc:'coin1.jpg' ,title:'코인충전', sub1:'워터파크 내 위치한 충전/정산소에서 충전하실 수 있습니다.'
        , sub2:'충전시 현금 + 신용카드 (중복) 충전시 충전순서와 상관없이 현금이 먼저 사용처리됩니다.',
         sub3:'충전 최소 단위는 1,000원, 최대 단위는 300,000원입니다. (300,000원 이상 시 분할 충전 가능'},
        {imgsrc:'coin2.jpg' ,title:'코인사용', sub1:'코인은 롯데 워터파크의 실내외 식음료업장, 상품 매장, 대여소, 레스토랑 등의 모든 시설에서 사용하실 수 있습니다.',
         sub2:'금액이 부족할 경우 언제든지 재충전하실 수 있습니다.', },
        {imgsrc:'coin3.jpg' ,title:'코인충전소', sub1:'로우, 윈터 시즌 : 본관 로비 충전소',
         sub2:'미들, 하이, 골드 시즌 : 본관로비충전소, 별관로비충전소, 별관2층 충전소, 별관 실외출구충전소, 종합물놀이충전소'},
        {imgsrc:'coin4.jpg' ,title:'렌탈 물품 반납', sub1:'대여 품목 : 카바나, 텐트동, 썬베드, 구명자켓, 비치타월, 아동후드타월',
         sub2:'보증금이 적용된 렌탈 물품은 대여소로 반납해주셔야 보증금이 반환 됩니다.',
          sub3:'정산소에서는 보증금 반환이 되지 않습니다'},
        {imgsrc:'coin5.jpg' ,title:'남은 금액 환불', sub1:'사용 후 남은 금액은 충전/정산소에서 전액 환불을 받으실 수 있습니다.',
         sub2:'현금으로 구입한 코인의 잔액은 현금으로, 신용카드로 구입한 코인의 잔액은 부분 취소해 드립니다',
          sub3:'신용/체크카드로 충전하신 경우 정산소를 방문하지 않아도 자동으로 정산됩니다.'},
        {imgsrc:'coin6.jpg' ,title:'코인 정산소', sub1:'로우, 윈터 시즌 : 본관 로비 충전소',
         sub2:'미들, 하이, 골드 시즌 : 본관로비충전소, 별관로비충전소, 별관2층 충전소, 별관 실외출구충전소, 종합물놀이충전소'}
      ];
  var ind = 0;  //전역변수
  var txt =''; // dl태그 생성
  var total = $('.pop_menu li').size(); //총개수 4
  //var total = memo.length; 

  function popchange(){
    //$('.pop .popup img').attr('src','./images/big'+(ind+1)+'.jpg');
    $('.pop .popup img').attr('src','./images/'+memo[ind].imgsrc);
    txt ='';
      txt+= '<dl>';
      txt+= '<dt>'+memo[ind].title+'</dt>';
      txt+= '<dd>-'+memo[ind].sub1+'</dd>';
      txt+= '<dd>-'+memo[ind].sub2+'</dd>';
      txt+= '</dl>';
      $('.pop .popup .txt').html(txt);
      $('.popup span').text( (ind+1)+'/'+total);
  }


  $('.pop .pop_menu a').click(function(e){
      e.preventDefault();
      
      ind = $(this).index('.pop .pop_menu a');  // 0 1 2 3

      $('.pop_btn').fadeIn('slow');
      $('.pop .modal_box').fadeIn('fast');
      $('.pop .popup').fadeIn('slow');

      popchange();

  });

  $('.close_btn,.pop .modal_box').click(function(e){
      e.preventDefault();
      $('.pop .modal_box').fadeOut('fast');
      $('.pop .popup').fadeOut('fast');
      $('.pop_btn').fadeOut('fast');
  });

  
  $('.pop_btn a').click(function(e){
       e.preventDefault();

      $('.pop .popup').hide().fadeIn('slow'); //fade효과 
      
      if($(this).hasClass('pre')){  //이전버튼 클릭
          if(ind==0)ind=total;  // 3 2 1 0 3 2 1 0 ...
          ind--;
          popchange();
      }else if($(this).hasClass('next')){  //다음버튼 클릭
          if(ind==total-1)ind=-1;  // 0 1 2 3 0 1 2 3 ...
          ind++;
          popchange();
      }

  });
});
