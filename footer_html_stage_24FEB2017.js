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
		$smjquery('.navTabs-subTabList li').css({'border-right': 'none' });
		$smjquery('.navTabs li:last-child').css({'border-right': 'none' });
		$smjquery('.navTabs li a').css({'color':'#fff', 'text-shadow' : 'none'});
		$smjquery('.navTabs li a:hover').css({'text-decoration' : 'underline', 'text-shadow' : 'none', 'opacity' : '0.7'});
		$smjquery('.navTabs li.active').css({'text-decoration' : 'underline' , 'font-weight' : 'bold'});
		$smjquery('.c-glbl-nav').css({'border-top' : '1px solid #545d6d'});
		/***** END - Navigation *****/

		
		
		
		
		/********BEGIN - Featured Cards Component **********/	
		
		console.log("test3");
	
		
		var cardStructure = $smjquery('<div class="cso-min-height">' +
			'<ul>'+
	                   '<div class="card">' + 
				'<li><a href="https://bd.csod.com/DeepLink/ProcessRedirect.aspx?module=23">' +
				    '<img src="/clientimg/bd/welcome/image%204_title1_pyxis.png"></a>' +
				 '</li><a href="https://bd.csod.com/DeepLink/ProcessRedirect.aspx?module=23">' +
				 '<li><h2>Pyxis™ Learning</h2>' +
				      '<p>Pyxis™ courses are available for dispensing and supply technologies. Includes MedStation, Anesthesia System, ES Platform, SupplyStation™ and C<sup>II</sup>Safe.</p>' +
                                  '</li></a>' +
                            '</div>' +
		            '<div class="card">' + 
				'<li><a href="https://bd.csod.com/DeepLink/ProcessRedirect.aspx?module=23">' +
				    '<img src="/clientimg/bd/welcome/image%204_title1_pyxis.png"></a>' +
				 '</li><a href="https://bd.csod.com/DeepLink/ProcessRedirect.aspx?module=23">' +
				 '<li><h2>Pyxis™ Learning</h2>' +
				      '<p>Pyxis™ courses are available for dispensing and supply technologies. Includes MedStation, Anesthesia System, ES Platform, SupplyStation™ and C<sup>II</sup>Safe.</p>' +
                                  '</li></a>' +
                            '</div>' +
	                      '<div class="card">' + 
				'<li><a href="https://bd.csod.com/DeepLink/ProcessRedirect.aspx?module=23">' +
				    '<img src="/clientimg/bd/welcome/image%204_title1_pyxis.png"></a>' +
				 '</li><a href="https://bd.csod.com/DeepLink/ProcessRedirect.aspx?module=23">' +
				 '<li><h2>Pyxis™ Learning</h2>' +
				      '<p>Pyxis™ courses are available for dispensing and supply technologies. Includes MedStation, Anesthesia System, ES Platform, SupplyStation™ and C<sup>II</sup>Safe.</p>' +
                                  '</li></a>' +
                            '</div>' +
				       '<div class="card">' + 
				'<li><a href="https://bd.csod.com/DeepLink/ProcessRedirect.aspx?module=23">' +
				    '<img src="/clientimg/bd/welcome/image%204_title1_pyxis.png"></a>' +
				 '</li><a href="https://bd.csod.com/DeepLink/ProcessRedirect.aspx?module=23">' +
				 '<li><h2>Pyxis™ Learning</h2>' +
				      '<p>Pyxis™ courses are available for dispensing and supply technologies. Includes MedStation, Anesthesia System, ES Platform, SupplyStation™ and C<sup>II</sup>Safe.</p>' +
                                  '</li></a>' +
                            '</div>' +
		      '</ul></div>');



		
		
		$smjquery('div.p-prerenderplaceholder div.p-panel.p-p-t-md').prepend('<hr id="testHR">');		
		$smjquery('#testHR').css({"backgroundColor": "black", "color": "black", "height": "50px"});
		
		//CARD Style
		/*
		$smjquery(".widgetToMove").css({"box-shadow": "0 1px 6px 0 rgba(0,0,0,0.2)"});
	        $smjquery(".card").css({"width": "20%", "box-sizing": "border-box", "padding": "0px", "border-radius": "0px 0px 0px 0px", "border-top": "solid 9px #00a79e", "border-bottom": "none", "border-left": "solid 1px #f2f3f4", "border-right": "none", "margin": "0px 0px 0px 0px" }); 
		$smjquery(".card:first-child").css({"border-left": "none"});
		$smjquery(".card:nth-child(2)").css({"border-top": "solid 9px #6f2780"});
		$smjquery(".card:nth-child(3)").css({"border-top": "solid 9px #02abd7"});
		$smjquery(".card li").css({"width": "100%", "box-sizing": "border-box"});
		$smjquery(".card img").css({"width": "100%", "height": "100px"});
		$smjquery(".card h2").css({"padding": "5px", "color": "#808080", "font-size": "14px", "margin-top": "0px"});
		$smjquery(".card a:nth-child(2) li").css({"padding": "5px"});
		$smjquery(".card p ").css({"color": "#808080", "font-size": "10px"});
		*/
		

		
		/***** BEGIN - Footer *****/
		$smjquery('.df-footer').css({"display": "none"}); // hide the csod default footer
		//create grey background and add sloped image
		$smjquery('#ctl00_footer_pnlCustomFooter').css({"backgroundColor": "#f2f2f2"});
		var footerImg = $smjquery('<img id="slopedFooterImage">');
	        footerImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/angle.png');
                footerImg.appendTo('#ctl00_footer_pnlCustomFooter');
		
		var footerContents = $smjquery('<div class="footerContentsRow">' +
			    '<div class="col"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/bd_white_rgb_tag_EN_1_5.png" id="footerLogo"></div>' +
			    '<div class="col"><a href="http://www.facebook.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/facebookIcon.png" id="sm1"></a></div>' +
			    '<div class="col"><a href="http://www.linkedin.com/company/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/linkedInIcon.jpg" id="sm2"></a></div>' +
			    '<div class="col"><a href="http://youtube.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/youTubeIcon.jpg" id="sm3"></a></div>' +
			    '<div class="col"><a href="http://twitter.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/twitterIcon.jpg" id="sm4"></a> </div>' +
			    '<div class="col copyright"><p class="copy">&copy; 2017 BD. All rights reserved. Unless otherwise noted, BD, the BD Logo and all other trademarks are property of Becton, Dickinson and Company.</p></div>' +
			    '<div class="col footerLink"><a href="http://www.bd.com/legal/privacy_policy/">Privacy Policy</a></div>' +
			    '<div class="col footerLink"><a href="http://www.bd.com/legal/terms/">Terms of Use</a></div>' +
			'</div>');
		
		footerContents.appendTo('#ctl00_footer_pnlCustomFooter');
		
		$smjquery('#ctl00_footer_pnlCustomFooter').css({'padding' : '0'});
		$smjquery('.footerContentsRow').css({'backgroundColor': '#004593', 'color': '#fff' , 'font-size' : '11px' ,
'padding' : '30px 20px 20px', 'text-align' : 'center' ,  'margin-top' : '-5px' , 'height' : '150px'});
		$smjquery('.footerContentsRow div.col').css({'float' : 'left', 'display' : 'inline-block', 'min-width' : '80px' , 'width' : 'auto' , 'padding-top' : '20px' });
		$smjquery('.footerContentsRow div.copyright').css({'width' : '50%'});
		// now style the footer elements
		$smjquery('#footerLogo').css({'position' : 'relative' , 'top': '-35px' });
		$smjquery('#sm1').css({'height': '20px'});
		$smjquery('#sm2').css({'height': '27px'});
		$smjquery('#sm3').css({'height': '25px'});
		$smjquery('#sm4').css({'height': '25px'});
		$smjquery('.footerLink').css({'float' : 'right' , 'border-right': '1px solid #ccc' , 'padding-top' : '0' , 'padding-bottom' : '0' , 'margin-top' : '20px' });
		$smjquery('.footerLink:first-child').css({'border-right' : '0'});
		$smjquery('.footerLink a').css({'color' : '#fff'});
		
		/***** END - Footer *****/
	});

}($smjquery)); 

