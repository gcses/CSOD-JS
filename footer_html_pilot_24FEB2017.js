(function($) {
   
	$smjquery(document).ready(function() {
	
		/***** BEGIN : Header Tools *****/
		$('.topBarOuter').css({'height' : '50px'});
		$('.topBarOuter .tools').css({'padding': '0 10px', 'height' : '50px' , 'margin-right' : '20px' , 'position' : 'relative' , 'top' : '-10px'});
		$('.topBar').css({'margin-top': '0px', 'margin-right': '10px', 'border': 'none'}); 
		
		/*****BEGIN: Logo Customization *****/
		$('.imageLogo').css({'height' : '62px' , 'top' : '-14px' , 'position' : 'relative' });
		
		/*****BEGIN: Search Bar Customization *****/
		$('#search').css({ 'border-right': '1px solid #1a589e'});
		$('#search .cso-top-srch-box').css({'width' : '140px' , 'backgroundColor': '#fff', 'border-radius': '4px', 'margin-right': '20px' , 'border' : 'none' , 'padding-left': '0'});
		$('#search input').css({'color':'#808080' , 'width' : '130px' });
		$('#search .search-lnk').css({'background-image' : 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/magnifyingGlass.png")' , 'background-position' : '-5px -4px' });
		
		/*****END: Search Bar Customization *****/
		
		/***** BEGIN : AVATAR IMAGE **********/

		//var avatargImg = $(document.getElementById('ctl00_header_headerFixed_imgAvatar'));
		//avatargImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/avatar-sm.png');
		$('.user-interaction .avatar a img').css({ 'height' : '40px !important' , 'width' : '40px !important'});
		$('.avatar').css({'backgroundColor': '#004593', 'margin-top': '7px', 'margin-right': '10px', 'border': '0px solid #004593' , 'border-radius': '0', 'padding-left': '0'});
		$('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'border': '0px solid #004593'});
		$('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});
		/******* END : AVATAR Image *****/ 
		
		/************ BEGIN : COG ***********/
		$('.user-interaction .settings a span').css({'background-image' : 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/gear-small.png")' , 'top' : '-2px' , 'left' : '-1px' });
		$('.user-interaction').css({'backgroundcolor': 'none', 'border-radius': '0', 'border': 'none' , 'margin-left' : '20px'});
		//$smjquery('.user-interaction li').css({'border-radius': '0', 'border': 'none'});
		$('.cso-hdr-dd .item a span').css({'background-image' : 'none' });
		$('.settings a span').css({'background-position' : '0 0' , 'height' : '40px' , 'width' : '40px' });
		$('.cso-hdr-dd .item a span').css({'height' : 'auto' , 'width' : 'auto' });
		
		
		/***** BEGIN - Navigation *****/
		$('.c-glbl-nav').css({'height' : '62px'});
		var lcTitleImg = $('<img id=\"lcTitle\">');
		lcTitleImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/Learning_Compass_title_img.png');
		$(lcTitleImg).insertBefore('.c-glbl-nav ul:first-child');
		$('#lcTitle').css({'float': 'left', 'display' : 'inline-block' , 'vertical-align' : 'middle' , 'font-size' : '16px', 'height' : '62px' });
		$('.navTabs').css({'background': '#fff' , 'padding-top' : '12px' });
		$('.navTabs li').css({'padding-right': '5px'});
		$('.navTabs-subTabList li').css({'border-right': 'none' });
		$('.navTabs li:last-child').css({'border-right': 'none' });
		$('.navTabs li a').css({'color':'#808080', 'text-shadow' : 'none'});
		$('.navTabs li a:hover').css({'text-shadow' : 'none' , 'background-color' : 'none !important'});
		$('.navTabs li a.highlighted').css({'background-color' : '#fff !important'});
		$('#main-menu li a.has-submenu.highlighted').attr('style', 'background-color: #fff !important');
		$('.navTabs li.active').css({ 'font-weight' : 'bold !important' ,  'background-color' : '#fff !important' , 'color' : '#000' });
		   $('.navTabs li').hover(function() {
			$(this).css('background-color', '#fff !important');
		    }, function() {
			$(this).css('background-color', '#fff');
		    });
		

		/***** END - Navigation *****/
		
	       //Make the home page clickable and link to the Welcome page / Main page
	       $('a:contains("Home")').attr("href","/ui/lms-learner-home/home?tab_page_id=-200300006"); 
	
		/***** BEGIN - Footer *****/
		$('.df-footer').css({"display": "none"}); // hide the csod default footer
		//create grey background and add sloped image
		$('#ctl00_footer_pnlCustomFooter').css({"backgroundColor": "#f2f2f2"});
		var footerImg = $('<img id="slopedFooterImage">');
	        footerImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/angle.png');
                footerImg.appendTo('#ctl00_footer_pnlCustomFooter');
		
		var footerContents = $('<div class="footerContentsRow">' +
			    '<div class="colX"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/bd_white_rgb_tag_EN_1_5.png" id="footerLogo"></div>' +
			    '<div class="col"><a href="http://www.facebook.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/facebookIcon.png" id="sm1"></a></div>' +
			    '<div class="col"><a href="http://www.linkedin.com/company/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/linkedInIcon.jpg" id="sm2"></a></div>' +
			    '<div class="col"><a href="http://youtube.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/youTubeIcon.jpg" id="sm3"></a></div>' +
			    '<div class="col"><a href="http://twitter.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/twitterIcon.jpg" id="sm4"></a> </div>' +
			    '<div class="col copyright"><p class="copy">&copy; 2017 BD. All rights reserved. Unless otherwise noted, BD, the BD Logo and all other trademarks are property of Becton, Dickinson and Company.</p></div>' +
			    '<div class="col footerLink privacy"><a href="http://www.bd.com/legal/privacy_policy/">Privacy Policy</a></div>' +
			    '<div class="col footerLink"><a href="http://www.bd.com/legal/terms/">Terms of Use</a></div>' +
			'</div>');
		
		footerContents.appendTo('#ctl00_footer_pnlCustomFooter');
		
		//offset the slope a bit to offset whatever is pulling it down
		$('#slopedFooterImage').css({'max-width' : '100%',  'margin-top': '-5px', 'display' : 'block' , 'height' : 'auto'});
	
		$('#ctl00_footer_pnlCustomFooter').css({'padding' : '0'});
		$('.footerContentsRow').css({'backgroundColor': '#004593', 'color': '#fff' , 'font-size' : '11px' ,
'padding' : '30px 20px 20px', 'text-align' : 'center' ,  'margin-top' : '-5px' , 'height' : '150px'});
		
		//the logo div is too tall and raises the entire footer. Setting a small height here seems to solve.
		$('.footerContentsRow div.colX').css({'height': '3px', 'float' : 'left', 'display' : 'inline-block', 'min-width' : '20px' , 'width' : 'auto' , 'padding' : '20px 5px 5px' });
		
		$('.footerContentsRow div.col').css({'float' : 'left', 'display' : 'inline-block', 'min-width' : '20px' , 'width' : 'auto' , 'padding' : '20px 5px 5px' });
		$('.footerContentsRow div.copyright').css({'width' : '49%', 'text-align' : 'center' , 'margin' : '0 auto' , 'float' : 'none' });
		// now style the footer elements
		$('#footerLogo').css({'position' : 'relative' , 'top': '-35px' });
		$('#sm1').css({'height': '20px'});
		$('#sm2').css({'height': '27px'});
		$('#sm3').css({'height': '25px'});
		$('#sm4').css({'height': '25px'});
		$('.footerLink').css({'float' : 'right' , 'border-right': '1px solid #ccc' , 'padding' : '0 15px', 'margin-top' : '20px' });
		$('.privacy').css({'border-right' : 'none'});
		$('.footerLink a').css({'color' : '#fff'});
		
		/***** END - Footer *****/
	});

}($smjquery)); 
