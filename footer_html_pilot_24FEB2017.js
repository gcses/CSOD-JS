(function($) {
    console.log("Hello World 2");
    if (typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
        console.log("Injected Jquery to Head");
    }
    var  $bd_jq = $.noConflict();
    $bd_jq(document).ready(function( ) {
      console.log("Conflict Free jQuery goes here");
      $bd_jq('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});  
    });
})();
