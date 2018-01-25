(function($) {
   
	$smjquery(document).ready(function() {
		//overlay a new image to cover up settings cog image
		//var cogImg = $smjquery('<img class="cog1">');
		//cogImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/cog.png'); /clientimg/bd/welcome/avatar.png
		//cogImg.appendTo('#optionsbtn');
		//$smjquery('.cog1').css({'height': '30px', 'position': 'absolute', 'top': '0', 'left': '-1px', 'margin-left': '0px', 'margin-right': '0px', 'border-radius': '0', 'border': '0px', "zindex": "2147483644"});
		//$smjquery('#optionsbtn').css({'padding-left': '5px', 'margin-right': '8px', 'backgroundColor': 'yellow', 'border': '0px', "zindex": "2147483644"});

		$smjquery('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});  //yellow border
		
		/***** BEGIN : Header Tools *****/
		$smjquery('.topBarOuter .tools').css({'padding': '10px', 'height' : '40px'});
		$smjquery('.topBarOuter .tools span').css({'margin-right': '15px'});
		
		/*****BEGIN: Search Bar Customization *****/
		$smjquery('#search .cso-top-srch-box').css({'backgroundColor': '#fff', 'border-radius': '4px', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '10px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$smjquery('#search input').css({'color':'#ccc'});
		/*****END: Search Bar Customization *****/
		
		/***** BEGIN : AVATAR IMAGE **********/
		//$smjquery('.avatar a img').css({ 'display' : 'none'});
		var avatargImg = $smjquery(document.getElementById('ctl00_header_headerFixed_imgAvatar'));
		avatargImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/avatar1.png');
		$smjquery('.user-interaction .avatar a img').css({ 'height' : '40px !important' , 'width' : '40px !important'});
		
		$smjquery('.avatar').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '10px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$smjquery('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'border': '0px solid #004593'});
		$smjquery('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});
		/******* END : AVATAR Image *****/ 
		
		/************ BEGIN : COG ***********/
		$smjquery('.user-interaction a span').css({'background-image' : 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/gear2.png")' , 'height' : '40px' , 'width' : '40px' });
		$smjquery('.user-interaction li').css({'backgroundcolor': 'none', 'border-radius': '0', 'border': 'none'});
		$smjquery('.cso-hdr-dd .item a span').css({'background-image' : 'none' });

		/***** BEGIN - Navigation *****/
		$smjquery('.navTabs').css({'background': '#fff' });
		$smjquery('.navTabs li a').css({'color':'#5f6062', 'text-shadow' : 'none' , 'border-top' : '1px solid #ccc'});
		$smjquery('.navTabs li a:hover').css({'color':'#fff', 'text-shadow' : 'none' , 'border-top' : '1px solid #ccc'});
		$smjquery('.navTabs li.active').css({'text-decoration' : 'underline', 'color' : '#fff', 'border-top' : '1px solid #ccc'});
		
		/***** END - Navigation *****/
			
		// FOOTER 
		$smjquery('.df-footer').css({"display": "none"}); // hide the csod default footer
	});

}($smjquery)); 
