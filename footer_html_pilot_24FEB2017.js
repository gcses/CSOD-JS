//var iScrollPos = 0;
// Replace Learning Objects on Scroll event
/*
$(window).scroll(function() {
    if (document.title.indexOf("Browse for Training") > -1)
    {
   	var iCurScrollPos = $(this).scrollTop();
	var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var bottomOfWindow = windowHeight * 0.85;
	    
	//if (iCurScrollPos > iScrollPos && iCurScrollPos > bottomOfWindow)
	if (iCurScrollPos > bottomOfWindow)
	{
           //Scrolling Down
	   replaceOnlineClass();
	    
	    var delayMillis = 100; 
	    setTimeout(function() { replaceOnlineClass(); }, delayMillis);
	} 
	    
      // iScrollPos = iCurScrollPos;
    }
});
*/	


// jQuery is null here
//var jq=jQuery.noConflict();

//jq(document).ready(function(){  
//  alert("Hi this will not conflict now");
  //jq('selector').show();
//});


console.log("Test before");

var script = document.createElement('script');
//script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


var $bdjquery = jQuery.noConflict(true);

$bdjquery(function($){
	
	console.log("Test2");


});

