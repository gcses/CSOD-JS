/*(function($) {
    console.log("Hello World 2");
    if (typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
        
        console.log("Injected Jquery to Head");
    }
}(jQuery));


    $(document).ready(function() {
      console.log("Conflict Free jQuery goes here");
      $('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});  
    }); */
    

/*( function($) {
		<!-- Here "$" is a jQuery reference -->
		$(document).ready(function() {
			console.log("Conflict Free jQuery goes here");
		});
	} ) ( jQuery );*/

/*(function() {
    console.log("Hello World 2");
    if (typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
        
        console.log("Injected Jquery to Head");
    }
	var noConflictScript = document.createElement('script');
        noConflictScript.type = "text/javascript";
        noConflictScript.innerHTML = "$bdjquery = jQuery.noConflict(true)";
        document.getElementsByTagName('head')[0].appendChild(noConflictScript);
	
}());

$smjquery(document).ready(function() {
 	console.log("Conflict Free jQuery goes here");
	 $smjquery('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'}); 
}); 
*/



(function($) {
    if (typeof jQuery == 'undefined') {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }	
	
	$smjquery(document).ready(function() {
 	console.log("Conflict Free jQuery goes here");
	 $smjquery('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'}); 
}); 
}(jQuery));



