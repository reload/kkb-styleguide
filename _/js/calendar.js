(function($){
    
    var current;
    
    $(document).ready(function(){
        
        var $navItem = $(".calendar-nav a");
        var $calendarWeekday = $(".calendar-weekday");
        var $calendarContent = $('.calendar-content');
        var $calendarContentWrap = $('.calendar-content-wrap');
        
        current = 0;
        addActive($navItem, 0);
        changeContent($calendarContent, $calendarContentWrap,  $calendarWeekday,  0);
        
        $navItem.click(function(e){
            
            e.preventDefault();
            var i = $navItem.index(this);
            current = i;
            removeActive($navItem);
            addActive($navItem, i);
            changeContent($calendarContent, $calendarContentWrap,  $calendarWeekday,  i);
        })
        
        $(window).resize(function(){
            changeContent($calendarContent, $calendarContentWrap,  $calendarWeekday,  current);    
        })
        
    })
    
    
    
    
    function removeActive(items){
        $.each(items, function(i,el){
            var $el = $(el);
            if($el.hasClass("active")) $el.removeClass("active");
        })
    }
    
    function addActive(items, i){
       $(items[i]).addClass("active"); 
    }
    
    function changeContent(container, wrap, content, index){
        var $content = $(content[index]);
        
        var pos = $content.position().top;
        var height = $content.outerHeight();
        
        wrap.css({
            "top": "-" + pos + "px"
        })
        
        container.css({
            "height": height + "px"
        })
    }
    
}(jQuery))