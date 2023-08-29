// JavaScript Document
// GNB
(function($){
    $.fn.dropdown = function(){
      return this.each(function(){
        var $gnb = $(this);
        var $header = $('header');
        
        $gnb.mouseenter(function(){
            gnbOn();
        }).mouseleave(function(){
            gnbOff();
        });
        
        $gnb.find("a").focusin(function(){
            gnbOn();
        }).focusout(function(){
            gnbOff();
        });
        
        function gnbOn(){
            $header.addClass('gnb-expanded').find('section').stop().animate({height: "320"},0);
        }
        function gnbOff(){
            $header.removeClass('gnb-expanded').find('section').stop().animate({height: "80"},200);
        }
      });
    }
    }(jQuery));
$(function(){
$("#gnb").dropdown();
});


// Snb
(function($){
    var lnbUI = {
        click : function (target, speed) {
        var _self = this,
            $target = $(target);
        _self.speed = speed || 300;
        
        $target.each(function(){
            if(findChildren($(this))) {
            return;
            }
            $(this).addClass('noDepth');
        });
        
        function findChildren(obj) {
            return obj.find('> ul').length > 0;
        }
        
        $target.on('click','a', function(e){
            e.stopPropagation();
            var $this = $(this),
                $depthTarget = $this.next(),
                $siblings = $this.parent().siblings();
            
            $this.parent('li').find('ul li').removeClass('on');
            $siblings.removeClass('on');
            $siblings.find('ul').slideUp(250);
            
            if($depthTarget.css('display') == 'none') {
            _self.activeOn($this);
            $depthTarget.slideDown(_self.speed);
            } else {
            $depthTarget.slideUp(_self.speed);
            _self.activeOff($this);
            }
            
        })
        
        },
        activeOff : function($target) {
        $target.parent().removeClass('on');
        },
        activeOn : function($target) {
        $target.parent().addClass('on');
        }
    };
    
    // Call lnbUI
    $(function(){
        lnbUI.click('#snb .nav li', 300)
    });
    
    }(jQuery));