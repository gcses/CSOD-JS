(function($) {
   
	$smjquery(document).ready(function() {
	
		/***** BEGIN : Header Tools *****/
		//$('.topBarOuter').css({'height' : '50px'});
		$('.topBarOuter .tools').css({'padding': '0 10px', 'margin-right' : '20px'});
		$('.topBar').css({'margin-top': '0px', 'margin-right': '10px', 'border': 'none'}); 
		
		$('div[role=navigation]').css ({ 'border-bottom' : '1px solid #b6b6b6'});

		/***** BEGIN : Feedback Button on header
		var feedback_button = $('<img id=\"fdSurvey\">');
		feedback_button.attr('src', 'https://bd.csod.com/clientimg/bd/welcome/btn_feedback2.png');
		$(feedback_button).insertBefore('#search');
		$(feedback_button).css({'width' : '80px' , 'height' : '32px' ,  'margin-right': '20px', 'cursor' : 'pointer', 'border-radius' : '10px'});
		$(feedback_button).wrap($("<a class=\"feedback-link\">").attr('href', 'https://bd2.az1.qualtrics.com/jfe/form/SV_eQYAiZqIHUNjXrD'));
		$('.feedback-link').css({'display' : 'inline' });  *****/
		
		/*****BEGIN: Logo Customization *****/
		//$('.imageLogo').css({'height' : '62px' , 'top' : '-14px' , 'position' : 'relative' });
		
		/*****BEGIN: Search Bar Customization *****/
		//$('#search').css({ 'display': 'none'});
		$('#search').css({ 'border-right': '1px solid #1a589e'});
		$('#search .cso-top-srch-box').css({'width' : '140px' , 'backgroundColor': '#fff', 'border-radius': '4px', 'margin-right': '20px' , 'border' : 'none' , 'padding-left': '0'});
		$('#search input').css({'color':'#808080' , 'width' : '130px' });
		$('#search .search-lnk').css({'background-image' : 'url("https://bd.csod.com/clientimg/bd/welcome/magnifyingGlass.png")' , 'background-position' : '-4px -2px' });
		//$('.p-predictivesearch .predictor').css({'border' : '1px solid #416299'});
		//$('.p-prerenderplaceholder:has(span:contains("What would you like to learn today?"))').addClass('search-label');
		
		/*****END: Search Bar Customization *****/
		
		/***** BEGIN : AVATAR IMAGE **********/
		//var avatargImg = $(document.getElementById('ctl00_header_headerFixed_imgAvatar'));
		//avatargImg.attr('src', 'https://bd.csod.com/clientimg/bd/welcome/avatar-sm.png');
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
		$('.tools').css({'height': '32px' , 'padding' : '3px 8px' });
		
		/***** BEGIN - Navigation *****/
		//$('.c-glbl-nav').css({'height' : '58px'});
		
		//$('.c-glbl-nav').append("<style>.clearfix::after{ content:'.' ;  visibility: hidden ; display : block ; height : 0 ; clear : both;  }</style>");
		var lcTitleImg = $('<img id=\"lcTitle\">');
		lcTitleImg.attr('src', 'https://bd.csod.com/clientimg/bd/welcome/Learning_Compass_title_img2.png');
		$(lcTitleImg).insertBefore('.c-glbl-nav ul:first-child');
		$('#lcTitle').css({'float': 'left' , 'height' : '39px' });
		$('.navTabs').css({'background': '#fff'});
		$('.navTabs li').css({'padding-right': '5px'});
		$('.navTabs-subTabList li').css({'border-right': 'none' });
		$('.navTabs li:last-child').css({'border-right': 'none' });
		$('.navTabs li a').css({'color':'#808080', 'text-shadow' : 'none'});
		$('.navTabs li a:hover').css({'text-shadow' : 'none' , 'background-color' : 'none !important'});
		//$('.navTabs li a.highlighted').css({'background-color' : '#fff !important'});
		//$('#main-menu li a.has-submenu.highlighted').attr('style', 'background-color: #fff !important');
		$('.navTabs li.active').css({ 'font-weight' : 'bold !important' ,  'background-color' : '#fff !important' });
		$('.navTabs li').removeClass('highlighted');
		//$('.navTabs li a').hover(function() {
		//	$(this).removeClass('highlighted');
		//	$(this).css({'background-color': '#fff !important' , 'font-color' : '#5f6062', 'padding-right' : '0'  });
		//    }, function() {
		//	$(this).css({'background-color': '#fff' ,  'font-color' : '#808080'});
		//    });
		
		//$('.navTabs li a').hover(function() {
		//	$(this).css({'opacity' : '.5'});
		//    }, function() {
		//	$(this).css({'opacity' : '.5'});
		  //  });
		

		
		/***** END - Navigation *****/
		
	       //Make the home page clickable and link to the Welcome page / Main page
	       $('a:contains("Home")').attr("href","/ui/lms-learner-home/home?tab_page_id=-200300006"); 
		
		
		/***** BEGIN - Footer *****/
		$('.df-footer').css({"display": "none"}); // hide the csod default footer
		//create grey background and add sloped image
		$('#ctl00_footer_pnlCustomFooter').css({"backgroundColor": "#e6e7e9" , "padding" : "0"});
		
		var footerQuickLinksBox = $('<div id="footerQuickLinks" style="height : auto; z-index: 1; padding: 30px 0 15px; border-top: 2px solid #e5e5e5; float: left; width: 100%; background-color: #f5f5f5;">' +
				'<div id="feedback">' +						
					'<a href="https://bd2.az1.qualtrics.com/jfe/form/SV_eQYAiZqIHUNjXrD">' +						
					    '<img src="/clientimg/bd/welcome/feedback-purple-side2.png" alt="Feedback" title="Feedback Button" width="40px" height="103px"/>' +
					'</a>'	+			           
				'</div>' +
			        '<div class="row">' +
					    '<div class="col">' +
					    		'<p>NURSES AND CLINICIANS - QUICK LINKS</p>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=ec3b84f3-3130-4719-b19a-24ef5b62f31d">Alaris System with Guardrails Suite MX training - CLP1106 (CBT)</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=aab53be1-1579-428b-a2ce-ed3f15fd3cd8">CLP1042 - Pyxis MedStation 4000 Nursing Tutorial</a></div>' +
					    		'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=1c283ca8-59c6-4050-8d86-b30ba0acde2e#t=1">CLP1041 - Pyxis MedStation 4000 System for Nursing</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=9de7cb68-68e1-49ca-a510-940a6e882232#t=1">CLP1107 - Pyxis MedStation ES system for Nurses, v1.3.4</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=0609c768-d305-421e-ad0e-30011635211b#t=1">CLP-ES200-XX - v1.4 Pyxis MedStation ES system for Nurses</a></div>' +	
					    		'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=16f0cea1-d7f3-4bf1-bb4d-c4f1977edf21#t=1">Clinical workflows for BD Pyxis ES System v1.5 devices in Profile mode (CLP-ES200-N)</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=9ad18b49-7753-4e19-94ff-9a49b2563a10">BD Pyxis ES Station and ES Link v1.5 for Nurses and Clinicians - Custom - Advanced  - Profile - Quiz (CLP-ES200-N_Q) and BD Pyxis ES Link</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=c2e7031e-3100-4942-a862-d9f465d762dc#t=1">BD Pyxis ES System v1.5 Training Guide, Tool Kit and Other Resources</a></div>' +

					     '</div>' +
					     '<div class="col">' +
					    		'<p>PHARMACY - QUICK LINKS</p>' +
					    		'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loId=7d262bbf-47db-410c-a205-d2462ae6118a">Preparing for Alaris&trade; Interoperability - Adobe Connect Webinar - CLP1266</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=2507553d-61bb-49bf-9f9c-9aa6d5a6bb27">CLP1043 - Pyxis MedStation 4000 system for Pharmacy</a></div>' +
					    		'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=ecd49018-3bdf-4cf5-bc68-b87852744ea5">Pyxis MedStation 4000 for System Managers (CLP1008 - CLP1012)</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=b0ce2671-4467-4aec-9308-1af879b6d354">CLP1107 - Pyxis MedStation ES system for Pharmacy, v1.3.4</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=be89e791-ef5e-4851-b752-59b6f2cb6876">CLP-ES200-XX - Pyxis MedStation ES system for Pharmacy, v1.4</a></div>' +	
					    		'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=36e106a3-c4fa-4193-8394-5045b4b4bff8">Pharmacy workflows for BD Pyxis ES System v1.5 devices (CLP-ES200-PH)</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=79c259c6-9fe0-4847-9438-a4d8691f4ca4">BD Pyxis ES System Manager Series for ES v1.5</a></div>' +

					    
					    '</div>' +
					    '<div class="col">' +
					    		'<p>FREQUENT QUESTIONS</p>' +
							'<div class="text-link"><a href="https://bd.csod.com/phnx/driver.aspx?routename=Social/Topic/Posting/QAPostingDetails&Posting=27&Root=-1">How do I fix the Pop-up Blocker to allow the course to open?</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/phnx/driver.aspx?routename=Social/Topic/Posting/QAPostingDetails&Posting=13&Root=-1">How do I print the certificate for a course I have already completed?</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/phnx/driver.aspx?routename=Social/Topic/Posting/QAPostingDetails&Posting=17&Root=-1">How do I view transcripts and/or assign courses in Learning Compass?</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/phnx/driver.aspx?routename=Social/Topic/TopicDetails&Topic=3&Root=-1">Frequently Asked Questions</a></div>' +
					      '</div>' +
					    '<div class="col last-col">' +
					    		'<p>NEED HELP?</p>' +
							//'<div class="text-link"><a href="https://bd.csod.com/LMS/LoDetails/DetailsLo.aspx?loid=e049e85e-c131-46a3-90aa-fe2fa5520192#t=1">NEW! - Try our Curriculum Finder to find courses for your role</a></div>' +
							'<div class="text-link"><a href="https://bd.csod.com/catalog/CustomPage.aspx?id=20000480&tab_page_id=20000480">&#9990; Contact Us</a></div>' +
							'<div class="text-link feedback-link"><a href="https://bd2.az1.qualtrics.com/jfe/form/SV_eQYAiZqIHUNjXrD">&#9997; Give us Feedback</a></div>' +
					    '</div>' + 
				
			 '</div>');
                footerQuickLinksBox.appendTo('#ctl00_footer_pnlCustomFooter');
		$('#footerQuickLinks .row').css({'height' : 'auto' , 'width' :  '80%', 'font-size' : '11px',  'line-height' : '1.2', 'display' : 'flex' , 'margin' : '0 auto' , 'padding-bottom' : '30px'});
		$('#footerQuickLinks .row:after').css({'content':'' , 'display' : 'table' , 'clear' :  'both'});
		$('#footerQuickLinks .col').css({'height' : 'auto' , 'width' :  '28%', 'float' : 'left' , 'padding-right' : '40px'});
		$('#footerQuickLinks .last-col').css({'padding-right' : '0'});
		$('#footerQuickLinks .col p').css({'font-size' : '12px' , 'font-weight' :  'bold' , 'color' :  '#444444', 'padding' : '5px 0'});
		$('#footerQuickLinks .text-link a').css({'font-weight' : 'normal' , 'color' :  '#666666', 'display' : 'block' , 'margin' : '8px 0'});
		$('#footerQuickLinks div a:hover').css({'font-weight' : 'bold' ,   'opacity' : '0.6' });
		//$('#footerQuickLinks .feedback-link a').css({'color' :  '#f27707'});
		$( "#footerQuickLinks div a:hover" ).addClass( "footerlinkshover" );
		$('.footerlinkshover').css({'font-weight' : 'bold' ,   'opacity' : '0.6' });

		   $('#footerQuickLinks .row a').hover(function() {
			$(this).css({'opacity' : '0.6'});
		    }, function() {
			$(this).css({'opacity' : '1'});
		    });

		var footerImg = $('<img id="slopedFooterImage">');
	        footerImg.attr('src', 'https://bd.csod.com/clientimg/bd/welcome/angle.png');
                footerImg.appendTo('#ctl00_footer_pnlCustomFooter');
		
		var footerContents = $('<div class="footerContentsRow">' +
			    '<div class="colX"><img src="https://bd.csod.com/clientimg/bd/welcome/bd_white_rgb_tag_EN_1_5.png" id="footerLogo"></div>' +
			    '<div class="col"><a href="http://www.facebook.com/carefusion"><img src="https://bd.csod.com/clientimg/bd/welcome/facebookIcon.png" id="sm1"></a></div>' +
			    '<div class="col"><a href="http://www.linkedin.com/company/carefusion"><img src="https://bd.csod.com/clientimg/bd/welcome/linkedInIcon.jpg" id="sm2"></a></div>' +
			    '<div class="col"><a href="http://youtube.com/carefusion"><img src="https://bd.csod.com/clientimg/bd/welcome/youTubeIcon.jpg" id="sm3"></a></div>' +
			    '<div class="col"><a href="http://twitter.com/carefusion"><img src="https://bd.csod.com/clientimg/bd/welcome/twitterIcon.jpg" id="sm4"></a> </div>' +
			    '<div class="col copyright"><p class="copy">&copy; 2019 BD. All rights reserved. Unless otherwise noted, BD, the BD Logo and all other trademarks are property of Becton, Dickinson and Company.</p></div>' +
			    '<div class="col footerLink privacy"><a href="http://www.bd.com/legal/privacy_policy/">Privacy Policy</a></div>' +
			    '<div class="col footerLink"><a href="http://www.bd.com/legal/terms/">Terms of Use</a></div>' +
			'</div>');
		
		footerContents.appendTo('#ctl00_footer_pnlCustomFooter');
		
		//offset the slope a bit to offset whatever is pulling it down
		$('#slopedFooterImage').css({'max-width' : '100%',  'margin-top': '-34px', 'display' : 'block' , 'height' : 'auto', 'float' : 'left'});
	
		$('#ctl00_footer_pnlCustomFooter').css({'padding' : '0 !important'});
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
		$('.footerLink').css({'float' : 'right','border-right': '1px solid #ccc' , 'padding' : '10px 15px', 'margin-top' : '20px' });
		$('.privacy').css({'border-right' : 'none'});
		$('.footerLink a').css({'color' : '#fff'});
		
		$('#feedback').css({'float' : 'left' ,'position' : 'fixed' , 'top': 'calc(50% - 47px)' , 'right' : '0' });

		/***** END - Footer *****/
	});

}($smjquery)); 
