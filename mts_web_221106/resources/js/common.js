$(document).ready(function(){
    // GNB
    function gnbToggle(){
        $('header').find('.sub_group').stop().animate({height: "toggle"}, 250);
    }

    $('#gnb').mouseenter(function(){
        gnbToggle();
    }).mouseleave(function(){
        gnbToggle();
    });

    $('#gnb>.nav>li>a').mouseenter(function(){
        $('#gnb .nav>li>a').removeClass('selected');
        $(this).addClass('selected');
    }).mouseleave(function(){
        $(this).removeClass('selected');
    });

    $('.sub_group a').each(function(){
        var grpIndex = $(this).closest('ul').closest('li').index() + 1; 

        $(this).mouseenter(function(){
            $('#gnb>.nav>li>a').removeClass('selected');
            $('#gnb>.nav>li:nth-child('+ grpIndex +')>a').addClass('selected');
        });

        $(this).on('click', function(e){
            e.stopPropagation();
        });
    });
    

    // LNB
    function lnbUI(target, speed){
        $(target).each(function(){
            if($(this).find('> ul').length > 0) return;
            $(this).addClass('noDepth');
        });
        
        $(target).on('click','a', function(e){
            e.stopPropagation();

            var nextDepth = $(this).next(),
                menuList = $(this).parent().siblings();
            
            menuList.removeClass('on');
            menuList.find('ul').slideUp(speed);

            if($(this).parent().hasClass('on')){
                $(this).parent().removeClass('on');
                nextDepth.slideUp(speed);
            }
            else{
                $(this).parent().addClass('on');
                nextDepth.slideDown(speed);
            }
        });
    }

    lnbUI('#snb .nav li', "250");

    //tabs
    $(".tab_content").hide();
    $(".tab_container").each(function () {
        $(this).children(".tabs li:first").addClass("active"); 
        $(this).children(".tab_content").first().show();
    });

    $(".tabs li a").click(function () {
        $(this).parent().siblings("li").removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().parent().find(".tab_content").hide();
        
        var activeTab = $(this).attr("rel");
        $(activeTab).fadeIn();
    });
    

});