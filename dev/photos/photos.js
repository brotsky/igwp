$ = jQuery;
$("#filters button").click(function(){
    console.log("clicked");
    
    var filter = $(this).data("filter");
        
    var items = $(".smart-gallery-item");
    
    for(var i = 0 ; i < items.length ; i++) {
        if(filter == "*")
            TweenLite.to(items[i],1,{opacity:1});
        else if($(items[i]).hasClass(filter))
            TweenLite.to(items[i],1,{opacity:1});
        else
            TweenLite.to(items[i],1,{opacity:0.2});
    }
});

$(document).ready(function(){
    $('.smart-gallery-item').magnificPopup({type:'image'});
});