(function($) {

        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
   
	$smjquery(document).ready(function() {
		//overlay a new image to cover up settings cog image
		var cogImg = $smjquery('<img class="cog1">');
		cogImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/cog.png');
		cogImg.appendTo('#optionsbtn');
		$smjquery('.cog1').css({'height': '30px', 'position': 'absolute', 'top': '0', 'left': '-1px', 'margin-left': '0px', 'margin-right': '0px', 'border-radius': '0', 'border': '0px', "zindex": "2147483644"});
		$smjquery('#optionsbtn').css({'padding-left': '5px', 'margin-right': '8px', 'backgroundColor': 'yellow', 'border': '0px', "zindex": "2147483644"});

		$smjquery('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});  //yellow border
		
		/***** BEGIN : Header Tools *****/
		$smjquery('.topBarOuter .tools').css({'padding': '10px'});
		
		
		/*****BEGIN: Search Bar Customization *****/
		$smjquery('#search .cso-top-srch-box').css({'backgroundColor': '#fff', 'border-radius': '4px', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '10px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$smjquery('#search input').css({'color':'#ccc'});
		
		/*****END: Search Bar Customization *****/
		
		/***** BEGIN - Navigation *****/
		
		$smjquery('.navTabs').css({'background': '#fff' });
		$smjquery('.navTabs li a').css({'color':'#999', 'text-shadow' : 'none'});
		$smjquery('.navTabs li.active').css({'text-decoration' : 'underline', 'color' : '#004593'});
		
		/***** END - Navigation *****/
		
		$smjquery('.avatar').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '10px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$smjquery('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'border': '0px solid #004593'});
		$smjquery('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});
		$smjquery('.user-interaction').css({'backgroundColor': '#004593', 'border-radius': '0', 'border': '0px solid #004593'});

		
		// FOOTER 
		$smjquery('.df-footer').css({"display": "none"}); // hide the csod default footer
	});

}(jQuery));





