(function($) {
    console.log("Hello World 1");
    if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

     $bdjquery = jQuery.noConflict(true);
    
      $bdjquery(function () {
    
        console.log( "ready!" );
           $bdjquery('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});  

    });
   
})(jQuery);



