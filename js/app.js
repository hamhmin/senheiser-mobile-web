$(function(){
    // 메뉴바 열고 닫기
    $('#toggle-btn').click(function(){
        $('#gnb').addClass('on');
    });
    $('#btn-close').click(function(){
        $('#gnb').removeClass('on');
    });

    $('#gnb > ul > li > a').click(function(){
        $(this).css('color','var(--main-color)');
    });

    // 타입별 제품보기 
    $('.btn-all').click(function(){
        $('.product').show();
    });
    $('.btn-w').click(function(){
        $('.product').not('.product.wireless').hide();
        $('.product.wireless').show();
    });
    $('.btn-bhp').click(function(){
        $('.product').not('.product.bhp').hide();
        $('.product.bhp').show();
    });
    $('.btn-hp').click(function(){
        $('.product').not('.product.hp').hide();
        $('.product.hp').show();
    });
});
