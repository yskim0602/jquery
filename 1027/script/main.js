
$(document).ready(function(){

//갤러리 메뉴 클릭시 각각 서식을 적용하기
//each() 함수      개별기능 삽입

let g_mnu = $('.gallery .lnb > li > a');
let g_img = $('.gallery figure img');
let title, n; //제목, 숫자

g_mnu.each(function(){
  $(this).click(function(e){
    e.preventDefault();

    $('.gallery .lnb > li > a').removeClass('on');
    $(this).addClass('on');
    // return false;
  });
});

let total_btn = $('.gallery > nav > ul > li:first-child a');
let plan_btn = $('.gallery > nav > ul > li:nth-child(2) a');
let design_btn = $('.gallery > nav > ul > li:nth-child(3) a');
let ui_btn = $('.gallery > nav > ul > li:nth-child(4) a');
let coding_btn = $('.gallery > nav > ul > li:last-child a');

plan_btn.click(function(){
  $('.g_box .total').hide(); //보이는 이미지 숨기고,
  $('.g_box .plan').fadeIn(); //해당 이미지만 보이게 한다.
});

design_btn.click(function(){
  $('.g_box .total').hide();
  $('.g_box .design').fadeIn()
  // $('.g_box .design').show().css({'bottom':'-50px'}).animate({'bottom':'0px'},300);
});

ui_btn.click(function(){
  $('.g_box .total').hide();
  $('.g_box .ui').fadeIn()
  // $('.g_box .ui').show().css({'bottom':'-50px'}).animate({'bottom':'0px'},300);
});

coding_btn.click(function(){
  $('.g_box .total').hide();
  $('.g_box .coding').fadeIn()
});

total_btn.click(function(){
  $('.g_box .total').hide();
  $('.g_box .total').fadeIn()
});

//마우스 오버시 해당 캡션만 보이게 하기
$('.gallery figure').hover(function(){
  $(this).find('figcaption').stop().animate({'bottom':'0px'},300);
},function(){
  $('figcaption').stop().animate({'bottom':'-40px'},300);
});

//이미지 클릭하면 각각 해당하는 이미지 파일명 불러오기
g_img.each(function(){ //이미지 각각 아래 기능을 삽입할꺼
  $(this).click(function(){  //이미지 클릭시
    let src=$(this).attr('src'); //해당 이미지 src속성값을 변수에 담아
    console.log(src); //콘솔창에 출력해본다.

    //이미지의 다음요소(figcaption)의 내용을 변수에 담는다.
    title=$(this).next().text();
    console.log(title);

    //모달 변수를 만들고
    let modal=`
      <div class="modal">
        <div class="m_banner">
          <h3>${title}</h3>
          <img src=${src} alt="">
          <i class='fas fa-times'></i>
          <i class='fas fa-angle-left'></i>
          <i class='fas fa-angle-right'></i>
        </div>
      </div>
    `;
    //모달변수를 body.append()로 뒤에 삽입하고
    $('body').append(modal);

    //닫기를 누르면 모달윈도가 사라지게 한다.
    $('.modal i.fa-times').click(function(){
      //$('.modal').hide();
      $('.modal').fadeOut();
      //$('.modal').css('display','none');
    });

    n = 1; //초기값
    //이전버튼 클릭시 번호 1,12,11,10,9,8,7......
    $('.modal i.fa-angle-left').click(function(){
      if(n==1){
        n=12;
      }else{
        n--;
      }
      console.log(n);
      //이미지 변경
      //$('.modal img').attr('src','./images/img'+n+'.jpg');
      
      img_Check();

      //타이틀 변경
      $('.modal h3').text($('.g_box > figure').eq(n-1).find('figcaption').text());
    });

    //다음버튼 클릭시 번호 1,2,3,4,5,6,7,8......
    $('.modal i.fa-angle-right').click(function(){
      if(n==12){
        n=1;
      }else{
        n++;
      }
      console.log(n);
      //이미지 변경
      // $('.modal img').attr('src','./images/img'+n+'.jpg');
      img_Check();

      //타이틀 변경
      $('.modal h3').text($('.g_box > figure').eq(n-1).find('figcaption').text());
    });

    //이미지 파일의 확장자를 변경해주는 함수
    function img_Check(){
      //png  4, 9, 11
      if((n==4)||(n==9)||(n==11)){   //3중에 하나만 만족하면
        $('.modal img').attr('src','./images/img'+n+'.png');
      }else{ //그렇지 않으면
        $('.modal img').attr('src','./images/img'+n+'.jpg');
      }
    }

  });
});

});