$(window).scroll(function(){
    var top1 = $(".news").offset().top;
    var position1 = top1 - $(window).height();
    var top2 = $(".about").offset().top;
    var position2 = top2 - $(window).height();
    var top3 = $(".works").offset().top;
    var position3 = top3 - $(window).height();
    var top4 = $(".partners").offset().top;
    var position4 = top4 - $(window).height();
    var top5 = $(".members").offset().top;
    var position5 = top5 - $(window).height();
    var top6 = $(".contact").offset().top;
    var position6 = top6 - $(window).height();

    if($(window).scrollTop() > position1){
        $('.list-news a').css('color', '#20d8ba');

        $(".triangle").addClass("triangle-move");
        $(".header-logo").addClass("header-logo-move");
    }else{
        $('.list-news a').css('color', '#404040');

        $(".triangle").removeClass("triangle-move");
        $(".header-logo").removeClass("header-logo-move");
    }

    if($(window).scrollTop() > position2){
        $('.list-news a').css('color', '#404040');
        $('.list-about a').css('color', '#20d8ba');
    }else{
        $('.list-about a').css('color', '#404040');
    }

    if($(window).scrollTop() > position3){
        $('.list-about a').css('color', '#404040');
        $('.list-works a').css('color', '#20d8ba');
    }else{
        $('.list-works a').css('color', '#404040');
    }

    if($(window).scrollTop() > position4){
        $('.list-works a').css('color', '#404040');
        $('.list-partners a').css('color', '#20d8ba');
    }else{
        $('.list-partners a').css('color', '#404040');
    }

    if($(window).scrollTop() > position5){
        $('.list-partners a').css('color', '#404040');
        $('.list-members a').css('color', '#20d8ba');
    }else{
        $('.list-members a').css('color', '#404040');
    }

    if($(window).scrollTop() > position6){
        $('.list-members a').css('color', '#404040');
        $('.list-contact a').css('color', '#20d8ba');
    }else{
        $('.list-contact a').css('color', '#404040');
    }
});

$('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },'slow');
});