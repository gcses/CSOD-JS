(function($) {
    console.log("Hello World 2");
    if (typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
        console.log("Injected Jquery to Head");
    }
})(jQuery);



