(function($) {
   
	$smjquery(document).ready(function() {
	
		/***** BEGIN : Header Tools *****/
		$smjquery('.topBarOuter .tools').css({'padding': '10px', 'height' : '40px' , 'margin-right' : '20px'});
		$smjquery('.topBar').css({'backgroundColor': '#023970',  'margin-top': '0px', 'margin-right': '10px', 'border': 'none'}); 
		
		/*****BEGIN: Search Bar Customization *****/
		$smjquery('#search .cso-top-srch-box').css({'backgroundColor': '#fff', 'border-radius': '4px', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '30px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$smjquery('#search input').css({'color':'#ccc'});
		/*****END: Search Bar Customization *****/
		
		/***** BEGIN : AVATAR IMAGE **********/
		//$smjquery('.avatar a img').css({ 'display' : 'none'});
		var avatargImg = $smjquery(document.getElementById('ctl00_header_headerFixed_imgAvatar'));
		avatargImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/avatar2.png');
		$smjquery('.user-interaction .avatar a img').css({ 'height' : '40px !important' , 'width' : '40px !important'});
		$smjquery('.avatar').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '10px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$smjquery('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'border': '0px solid #004593'});
		$smjquery('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});
		/******* END : AVATAR Image *****/ 
		
		/************ BEGIN : COG ***********/
		$smjquery('.user-interaction a span').css({'background-image' : 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/gear5.png")' , 'top' : '-1px' , 'left' : '-1px' });
		$smjquery('.user-interaction').css({'backgroundcolor': 'none', 'border-radius': '0', 'border': 'none'});
		//$smjquery('.user-interaction li').css({'border-radius': '0', 'border': 'none'});
		$smjquery('.cso-hdr-dd .item a span').css({'background-image' : 'none' });
		$smjquery('.settings a span').css({'background-position' : '0 0' , 'height' : '40px' , 'width' : '40px' });
		$smjquery('.cso-hdr-dd .item a span').css({'height' : 'auto' , 'width' : 'auto' });

		/***** BEGIN - Navigation *****/
		$smjquery('.navTabs').css({'background': '#023970' });
		$smjquery('.navTabs li').css({'border-right': '1px solid #444c54' });
		$smjquery('.navTabs li:last-child').css({'border-right': 'none' });
		$smjquery('.navTabs li a').css({'color':'#fff', 'text-shadow' : 'none'});
		$smjquery('.navTabs li a:hover').css({'text-decoration' : 'underline', 'text-shadow' : 'none', 'opacity' : '0.7'});
		$smjquery('.navTabs li.active').css({'text-decoration' : 'underline' , 'font-weight' : 'bold'});
		$smjquery('.c-glbl-nav').css({'border-top' : '1px solid #545d6d'});
		/***** END - Navigation *****/
			
		/********BEGIN - Featured Cards Component **********/
		$smjquery('.p-autoplay-controls').css({'border' : '2px solid #ccc' });
		$smjquery('.p-f-sz-2x').css({ 'font-size' : '1.3rem'});
		$smjquery('.p-content-slider-header').css({'border' : '2px solid red'});
		$smjquery('.p-content-slider-title').css({'border' : '2px solid blue'});
		$smjquery('.slick-slider').css({'border' : '2px solid #000' });
		$smjquery('.p-contentslider').css({'border' : '2px solid green'});
		$smjquery('.p-panel').css({'border' : '2px solid orange'});
		$smjquery('.p-mediaquerycontainer').css({'border' : '2px solid yellow'});
		$smjquery('.p-mediaquerycontainer').append('<div>the new div</div>');
		$smjquery('.p-view-usersummary').append('<div>the new left div</div>');

		/********BEGIN - Featured Cards Component **********/
			

		
		
		/***** BEGIN - Footer *****/
		$smjquery('.df-footer').css({"display": "none"}); // hide the csod default footer
		//create grey background and add sloped image
		$smjquery('#ctl00_footer_pnlCustomFooter').css({"backgroundColor": "#f2f2f2"});
		var footerImg = $('<img id="slopedFooterImage">');
	        footerImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/angle.png');
                footerImg.appendTo('#ctl00_footer_pnlCustomFooter');
		
		//add table and populate it
		var footerTable = $(
		'<table class="footerTable"><tr>'+
			     '<td id="footerTD1"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/logo.png" id="footerLogo"></td>' +
			    
			      '<td id="footerTD2"><a href="http://www.facebook.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/facebookIcon.png" id="sm1"></a></td>' +
			      '<td id="footerTD3"><a href="http://www.linkedin.com/company/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/linkedInIcon.jpg" id="sm2"></a></td>' +
			      '<td id="footerTD4"><a href="http://youtube.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/youTubeIcon.jpg" id="sm3"></a></td>' +
			      '<td id="footerTD5"><a href="http://twitter.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/twitterIcon.jpg" id="sm4"></a></td>' +
			     '<td id="footerTDspace">&nbsp</td>'+
			     
			     '<td id="footerTD6"><p class="copy">&copy; 2017 BD. All rights reserved. Unless otherwise noted, BD, the BD Logo and all other trademarks are property of Becton, Dickinson and Company.</p></td>'+
			     '<td id="footerTD7"><ul class="footer-links">'+
            			'<li><a href="http://www.bd.com/legal/privacy_policy/">Privacy Policy</a></li>'+
            			'<li><a href="http://www.bd.com/legal/terms/">Terms of Use</a></li>'+
        			'</ul></td> </tr></table>');
		
		footerTable.appendTo('#ctl00_footer_pnlCustomFooter');
		 
		// now style the footer elements
		$smjquery('#sm1').css({'height': '30px', 'padding-bottom': '20px'});
		$smjquery('#sm2').css({'height': '45px', 'padding-bottom': '18px'});
		$smjquery('#sm3').css({'height': '37px', 'padding-bottom': '20px'});
		$smjquery('#sm4').css({'height': '37px', 'padding-bottom': '18px'});

		$smjquery('#footerTD2').css({"width": "40px"});
		$smjquery('#footerTD3').css({"width": "40px"});
		$smjquery('#footerTD4').css({"width": "40px"});
		$smjquery('#footerTD5').css({"width": "40px"});

		//enlarge the link area for the social media links
		$smjquery('.smLink').css({'font-size': '400%'});

		$smjquery('.footer-links').css({"padding-left": "0", "float": "right", "padding-right": "15px", "margin-top": "8px"});
		$smjquery('.footer-links li').css({"display": "inline-block", "line-height": "16px", "padding-right": "5px", "padding-left": "5px", "border-left": "1px solid #EEEEEE"});
		$smjquery('.footer-links li:first-child').css({"border-left": "none"});
		$smjquery('.footer-links a').css({"color": "#FFFFFF", "font-weight": "400", "text-decoration": "none", "font-size": "11px", "font-weight": "bold"});

		// sloped image with top margin
		 $smjquery('#slopedFooterImage').css({"width": "100%", "padding-bottom": "0px", "margin-top": "35px", "margin-bottom": "-5px"});

		 // margin: top, right, bottom, left
		 $smjquery('.footerTable').css({"margin": "0px 0px 0px 0px", "padding-top": "0px", "backgroundColor": "#004593", "width": "100%", "height": "100px"});

		  // copywrite info
		 $smjquery('.copy').css({'font-size': '11px', 'padding-left': '40px', 'text-align': 'center', "font-weight": "bold"});	

		//footer logo
		 $smjquery('#footerLogo').css({'height': '40px', 'margin-left': '20px', 'margin-right': '30px','padding-bottom': '20px'});
		 $smjquery('#footerTD1').css({'width': '60px', 'padding': '0px'}); 

		 $smjquery('#footerTDspace').css({'width': '15px'});

		 $smjquery('#footerTD6').css({"width": "50%", "color": "#ffffff"});
		 $smjquery('#footerTD7').css({"width": "20%"});
		
		/***** END - Footer *****/
	});

}($smjquery)); 
