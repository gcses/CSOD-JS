(function($) {
   
	$smjquery(document).ready(function() {
	
		/***** BEGIN : Header Tools *****/
		$('.topBarOuter').css({'height' : '50px'});
		$('.topBarOuter .tools').css({'padding': '0 10px', 'height' : '60px' , 'margin-right' : '20px'});
		$('.topBar').css({'margin-top': '0px', 'margin-right': '10px', 'border': 'none'}); 
		
		var feedback_button = $('<img id=\"fdSurvey\">');
		feedback_button.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/btn_feedback.png');
		$(feedback_button).insertBefore('#search');
		$(feedback_button).css({'width' : '80px' , 'height' : '35px' ,  'margin-right': '20px', 'cursor' : 'pointer'});
		$(feedback_button).wrap($("<a class=\"feedback-link\">").attr('href', 'https://bd2.az1.qualtrics.com/jfe/form/SV_5yWSp8x3k8D4PBz'));
		$('.feedback-link').css({'display' : 'inline' });
		
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
		//$('.user-interaction .avatar a img').css({ 'height' : '40px !important' , 'width' : '40px !important'});
		$('.avatar').css({'backgroundColor': '#004593', 'margin-right': '10px', 'border': '0px solid #004593' , 'border-radius': '0', 'padding-left': '0'});
		$('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'border': '0px solid #004593'});
		$('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});
		/******* END : AVATAR Image *****/ 
		
		/************ BEGIN : COG ***********/
		$('.user-interaction').css({'backgroundcolor': 'none', 'border-radius': '0', 'border': 'none' , 'margin-left' : '20px'});
		//$smjquery('.user-interaction li').css({'border-radius': '0', 'border': 'none'});
		$('.cso-hdr-dd .item a span').css({'background-image' : 'none' });
		//$('.settings a span').css({'background-position' : '0 0' , 'height' : '40px' , 'width' : '40px' });
		$('.cso-hdr-dd .item a span').css({'height' : 'auto' , 'width' : 'auto' });
		
		
		/***** BEGIN - Navigation *****/
		$('.c-glbl-nav').css({'height' : '58px'});
		var lcTitleImg = $('<img id=\"lcTitle\">');
		lcTitleImg.attr('src', 'https://bd-stg.csod.com/clientimg/bd/welcome/Learning_Compass_title_img1.png');
		$(lcTitleImg).insertBefore('.c-glbl-nav ul:first-child');
		$('#lcTitle').css({'float': 'left', 'display' : 'inline-block' , 'vertical-align' : 'middle' , 'font-size' : '16px', 'height' : '58px' });
		$('.navTabs').css({'background': '#fff' , 'padding-top' : '12px' });
		$('.navTabs li').css({'padding-right': '5px'});
		$('.navTabs-subTabList li').css({'border-right': 'none' });
		$('.navTabs li:last-child').css({'border-right': 'none' });
		$('.navTabs li a').css({'color':'#808080', 'text-shadow' : 'none'});
		$('.navTabs li a:hover').css({'text-shadow' : 'none' , 'background-color' : 'none !important'});
		$('.navTabs li a.highlighted').css({'background-color' : '#fff !important'});
		$('#main-menu li a.has-submenu.highlighted').attr('style', 'background-color: #fff !important');
		$('.navTabs li.active a').css({ 'font-weight' : 'bold !important' ,  'background-color' : '#fff !important' , 'opacity' : '0.7' });
		   $('.navTabs li').hover(function() {
			$(this).css({'background-color': '#fff !important'});
		    }, function() {
			$(this).css({'background-color': '#fff'});
		    });
		
		/***** END - Navigation *****/
		
	       //Make the home page clickable and link to the Welcome page / Main page
	       $('a:contains("Home")').attr("href","/ui/lms-learner-home/home?tab_page_id=-200300006"); 
	
		/***** BEGIN - Footer *****/
		$('.df-footer').css({"display": "none"}); // hide the csod default footer
		//create grey background and add sloped image
		$('#ctl00_footer_pnlCustomFooter').css({"backgroundColor": "#e6e7e9"});
		
		var footerQuickLinksBox = $('<div id="footerQuickLinks" style="height : auto; background-color: #e6e7e9; float: left; width: 100%;">' +
			'<div class="row">' +
					    '<div class="col">' +
					    		'<p>Hot Topics</p>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=e049e85e-c131-46a3-90aa-fe2fa5520192#t=1">Alaris System with Guardrails Suite MX training - CLP1106 (CBT)</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=85401bdb-ffcf-459e-8081-53db384d25e5#t=1">CLP1042 - Pyxis MedStation 4000 Nursing Tutorial</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=9de7cb68-68e1-49ca-a510-940a6e882232#t=1">CLP1107 - Pyxis MedStation ES system for Nurses, v1.3.4</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=c2e7031e-3100-4942-a862-d9f465d762dc#t=1">BD Pyxis ES System v1.5 Training Guide, Tool Kit and Other Resources</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=0609c768-d305-421e-ad0e-30011635211b#t=1">CLP-ES200-XX - v1.4 Pyxis MedStation ES system for Nurses</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=9ad18b49-7753-4e19-94ff-9a49b2563a10">BD Pyxis ES Station and ES Link v1.5 for Nurses and Clinicians - Custom - Advanced  - Profile - Quiz (CLP-ES200-N_Q) and BD Pyxis ES Link</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=16f0cea1-d7f3-4bf1-bb4d-c4f1977edf21#t=1">Clinical workflows for BD Pyxis ES System v1.5 devices in Profile mode (CLP-ES200-N)</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=1c283ca8-59c6-4050-8d86-b30ba0acde2e#t=1">CLP1041 - Pyxis MedStation 4000 System for Nursings</a></div>' +
					     '</div>' +
					    '<div class="col">' +
					    		'<p>Frequent Questions</p>' +
							'<div class="text-link"><a href="https://bd.csod.com/phnx/driver.aspx?routename=Social/Topic/Posting/QAPostingDetails&Posting=27&Root=-1">How do I fix the Pop-up Blocker to allow the course to open?</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/phnx/driver.aspx?routename=Social/Topic/Posting/QAPostingDetails&Posting=13&Root=-1">How do I print the certificate for a course I have already completed?</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/phnx/driver.aspx?routename=Social/Topic/Posting/QAPostingDetails&Posting=17&Root=-1">How do I view transcripts and/or assign courses in Learning Compass?</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/phnx/driver.aspx?routename=Social/Topic/TopicDetails&Topic=3&Root=-1">Frequently Asked Questrions</a></div>' +
					      '</div>' +
					    '<div class="col">' +
					    		'<p>Need Help?</p>' +
							//'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=e049e85e-c131-46a3-90aa-fe2fa5520192#t=1">NEW! - Try our Curriculum Finder to find courses for your role</a></div>' +
							'<div class="text-link"><a href="https://bd-stg.csod.com/catalog/CustomPage.aspx?id=20000480&tab_page_id=20000480">Contact Us</a></div>' +
							'<div class="text-link"><a href="https://bd2.az1.qualtrics.com/jfe/form/SV_5yWSp8x3k8D4PBz">Give us Feedback</a></div>' +
					    '</div>' +
			 '</div>');
                footerQuickLinksBox.appendTo('#ctl00_footer_pnlCustomFooter');
		$('#footerQuickLinks .row').css({'height' : 'auto' , 'width' :  '100%', 'font-size' : '10px', 'display' : 'flex' , 'justify-content' : 'center'});
		$('#footerQuickLinks .row:after').css({'content':'' , 'display' : 'table' , 'clear' :  'both'});
		$('#footerQuickLinks .col').css({'height' : 'auto' , 'width' :  '28%', 'float' : 'left' , 'padding' : '20px 5px 50px 55px'});
		$('#footerQuickLinks .col p').css({'font-size' : '11px' , 'font-weight' :  'bold' , 'color' :  '#666666', 'padding' : '5px 0'});
		$('#footerQuickLinks div a').css({'font-weight' : 'normal' , 'color' :  '#666666' , 'line-height' : '2'});
		$('#footerQuickLinks div a:hover').css({'font-weight' : 'bold' , 'color' :  '#72635d' });

		var footerLinkItems = getElementByID("footerQuickLinks div a");

		for (var i = 0; i < footerLinkItems.length; i++) {
		  var li = footerLinkItems[i];
		  li.addEventListener("mouseover", function() {
		    this.getElementsByTagName("a")[0].style.color = "#8080ff";
		  });
		  li.addEventListener("mouseout", function() {
		    this.getElementsByTagName("a")[0].style.color = "#000000";
		  });
		}

		var footerImg = $('<img id="slopedFooterImage">');
	        footerImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/angle.png');
                footerImg.appendTo('#ctl00_footer_pnlCustomFooter');
		
		var footerContents = $('<div class="footerContentsRow">' +
			    '<div class="colX"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/bd_white_rgb_tag_EN_1_5.png" id="footerLogo"></div>' +
			    '<div class="col"><a href="http://www.facebook.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/facebookIcon.png" id="sm1"></a></div>' +
			    '<div class="col"><a href="http://www.linkedin.com/company/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/linkedInIcon.jpg" id="sm2"></a></div>' +
			    '<div class="col"><a href="http://youtube.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/youTubeIcon.jpg" id="sm3"></a></div>' +
			    '<div class="col"><a href="http://twitter.com/carefusion"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/twitterIcon.jpg" id="sm4"></a> </div>' +
			    '<div class="col copyright"><p class="copy">&copy; 2018 BD. All rights reserved. Unless otherwise noted, BD, the BD Logo and all other trademarks are property of Becton, Dickinson and Company.</p></div>' +
			    '<div class="col footerLink privacy"><a href="http://www.bd.com/legal/privacy_policy/">Privacy Policy</a></div>' +
			    '<div class="col footerLink"><a href="http://www.bd.com/legal/terms/">Terms of Use</a></div>' +
			'</div>');
		
		footerContents.appendTo('#ctl00_footer_pnlCustomFooter');
		
		//offset the slope a bit to offset whatever is pulling it down
		$('#slopedFooterImage').css({'max-width' : '100%',  'margin-top': '-34px', 'display' : 'block' , 'height' : 'auto', 'float' : 'left'});
	
		$('#ctl00_footer_pnlCustomFooter').css({'padding' : '0'});
		$('.footerContentsRow').css({'backgroundColor': '#004593', 'color': '#fff' , 'font-size' : '11px' , 'text-align' : 'center' ,  'margin-top' : '-5px' , 'height' : '150px' , 'float' : 'left' , 'width' : '100%'});
		
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
		$('.footerLink').css({'border-left': '1px solid #ccc' , 'padding' : '0 15px', 'margin-top' : '20px' });
		$('.privacy').css({'border-left' : 'none'});
		$('.footerLink a').css({'color' : '#fff'});
		
		/***** END - Footer *****/
	});

}($smjquery)); 
