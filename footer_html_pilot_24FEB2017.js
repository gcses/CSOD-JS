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
		$smjquery('.avatar').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '10px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$smjquery('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'border': '0px solid #004593'});
		$smjquery('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});
		$smjquery('.user-interaction').css({'backgroundColor': '#004593', 'border-radius': '0', 'border': '0px solid #004593'});

		var imgLoc = document.getElementById('header_headerFixed_imgAvatar');

		if (imgLoc != null)
		{
		    document.getElementById('header_headerFixed_imgAvatar').src='https://bd-pilot.csod.com/clientimg/bd/welcome/profile.jpg';
		    var elementAvatar = document.getElementById('header_headerFixed_imgAvatar');
		    elementAvatar.style.position = "absolute";
		    elementAvatar.style.zIndex="2147483644";

		    // margin: top, right, bottom, left
		    $smjquery('.topBar').css({'width': '35px', 'margin': '-5px 0px 0px -30px',  'border-radius': '0', 'border-left': '6px ' , 'border-right': '6px', 'padding-left': '10px', 'padding-right': '10px'});
		}
		else
		{
			imgLoc = document.getElementById('ctl00_header_headerFixed_imgAvatar');
			if (imgLoc != null)
			{
			   document.getElementById('header_headerFixed_imgAvatar').src='https://bd-pilot.csod.com/clientimg/bd/welcome/profile.jpg';
			   var elementAvatar = document.getElementById('header_headerFixed_imgAvatar');
			   elementAvatar.style.position = "absolute";
			   elementAvatar.style.zIndex="2147483644";

			  // margin: top, right, bottom, left
			  $smjquery('#header_headerFixed_imgAvatar').css({'width': '35px', 'margin': '-5px 0px 0px -20px'});
			}
		}
$smjquery('#ctl00_footer_pnlCustomFooter').css({"display": "none";});
		$smjquery('#ctl00_footer_pnlCustomFooter').css({"margin-top": "0px", "margin-bottom": "-15px", "backgroundColor": "#f2f2f2", "width": "100%", "padding": "0px"});

		// margin: top, right, bottom, left
		$smjquery('#ctl00_footer_pnlCustomFooter').css({"margin": "0px 0px 0px 0px", "backgroundColor": "#f2f2f2", "width": "100%", "padding": "0px"});					

		$smjquery('#ctl00_footer_pnlCustomFooter').each(function(){
			$smjquery(this).html('<img src="https://bd-pilot.csod.com/clientimg/bd/welcome/angle.png" id="slopedFooterImage" />' +
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
					'</ul></td> </tr></table>')
			});

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

	       //this handles initial load at the Browse Learning Page - replaces initial icons and wording, both needed?
	      //   Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(function () { replaceOnlineClass(); });
	      //   Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function () { replaceOnlineClass(); });

		//add words 'Learning Compass'
		var $smjqueryLClabel = $smjquery("<H3>").text('Learning Compass');

		// Formate Learning Compass Title; margin: top, right, bottom, left
		$smjqueryLClabel.css({'font-size': '150%', 'color': 'black', 'display': 'inline', 'float': 'left', 'backgroundColor': '#ffffff', 'margin': '11px 20px 0px 20px', 'padding': '0px 0px 0px 0px'});
		$smjquery('.c-glbl-nav').prepend($smjqueryLClabel);


		//change the navigation bar to white, remove gradient		
		$smjquery('#main-menu').css({"background-image": "none", "background-color": "#ffffff"});

		//handle the navigation bar active tab, only decorate first descendant or main categories
		$smjquery('#main-menu > li.active').css({"background-color": "#ffffff", "text-decoration": "underline", "font-weight": "bold"});

		// navigation bar changes (font color and size here)
		 $smjquery('.navTabs li a').css({"background-image": "none", "text-shadow": "none", "color": "#808080", "font-weight": "normal"});


		 //navigation bar hover - active hover is being blocked somewhere else (the hover is always blue or theme color)
		 $smjquery("#main-menu > li").hover(function(){ 
			 $smjquery(this).css({"backgroundColor": "yellow",  "color": "#000000", "text-decoration": "underline", "font-weight": "bold", "fontSize": "18px"}); },
			 function() { $smjquery(this).css({"backgroundColor": "#ffffff",  "color": "#808080", "text-decoration": "", "font-weight": "", "fontSize": "18px"}); }
		); 


		 $smjquery("#main-menu > li > ul > li").hover(function(){ 
			 $smjquery(this).css({"backgroundColor": "yellow",  "color": "#000000", "text-decoration": "underline", "font-weight": "bold", "font-size": "18px"}); },
			 function() { $smjquery(this).css({"backgroundColor": "#ffffff",  "color": "#808080", "text-decoration": "", "font-weight": "", "font-size": "18px"}); }
		); 


		$smjquery('#main-menu > li.active').hover(function(){ 
			 $smjquery(this).css({"backgroundColor": "yellow",  "color": "#000000", "text-decoration": "underline", "font-weight": "bold"}); },
			 function() { $smjquery(this).css({"background-color": "#ffffff", "text-decoration": "underline", "font-weight": "bold"}); }
		); 

		//Fix the search area and icons - move up - margin: top, right, bottom, left
		$smjquery('#search .cso-top-srch-box').css({"height": "37px", "border-color": "#dddddd", "box-shadow": "none", "margin": "0 10px 0 0"});
		$smjquery('#search input').css({"height": "37px"});

		//fix the spacing around the header search and icons
		$smjquery('.tools').css({"margin": "-20px 0px 20px 0px", "background-color": "#004593"}); 

		// fix the header coloring. It needs help on screens such as Browse For Learning
		$smjquery('.topBarOuter').css({"margin": "0px 0px 0px 0px", "background-color": "#004593"}); 
		$smjquery('#ctl00_header_headerFixed_aHeaderLogoLink').css({"background-color": "#004593"}); 
		$smjquery('#tblTopBar').css({"background-color": "#004593"}); 
		}); 

}(jQuery));





