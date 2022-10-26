$(document).ready(function(){
    // 갤러리 메뉴 클릭시 각각 서식을 적용하기
    // each() 함수  개별기능 삽입

    let g_mnu = $('.gallery .lnb > li > a');
    let g_img = $('.gallery figure img');

    g_mnu.each(function(){
        $(this).click(function(){
            $('.gallery .lnb > li > a').removeClass('on');
            $(this).addClass('on');
            return false;
        });
    });
    // 마이스 오버시 해당 캡션만 보이게 하기
    $('.gallery figure').hover(function(){
        $(this).find('figcaption').stop().css({'bottom':'0px'},300);
    },function(){
        $(this).find('figcaption').stop().animate({'bottom':'-40px'},300);
    });

    // 이미지 클릭하면 해당하는 이미지 파일명 불러오기
    g_img.each(function(){
        $(this).click(function(){
            let src=$(this).attr('src');
            console.log(src);

            let modal = `   
            <div class="modal">
              <div class="m_banner"> 0.
                <img src=${src} alt="">
                <i class="fas fa-times"></li>
              </div>
            </div>
            `;
            $('body').append(modal);
        
            $('.modal i.fa-times').click(function(){
                // $('.modal').hide();
                $('.modal').fadeOut();
                // $('.modal').css('display','none');
            });
        });
    });
  
});