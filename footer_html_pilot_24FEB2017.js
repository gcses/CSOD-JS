(function() {
    if (typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }

}());

	$smjquery(document).ready(function() {
	$smjquery('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'}); 
}); 




