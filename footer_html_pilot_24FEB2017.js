(function($) {
   
	$smjquery(document).ready(function() {
		
		console.log("word test 2");
	
		/***** BEGIN : Header Tools *****/
		$('.topBarOuter .tools').css({'padding': '10px', 'height' : '40px' , 'margin-right' : '20px'});
		$('.topBar').css({'backgroundColor': '#023970',  'margin-top': '0px', 'margin-right': '10px', 'border': 'none'}); 
		
		/*****BEGIN: Search Bar Customization *****/
		$('#search .cso-top-srch-box').css({'backgroundColor': '#fff', 'border-radius': '4px', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '30px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$('#search input').css({'color':'#ccc'});
		/*****END: Search Bar Customization *****/
		
		/***** BEGIN : AVATAR IMAGE **********/
		//$smjquery('.avatar a img').css({ 'display' : 'none'});
		var avatargImg = $(document.getElementById('ctl00_header_headerFixed_imgAvatar'));
		avatargImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/avatar2.png');
		$('.user-interaction .avatar a img').css({ 'height' : '40px !important' , 'width' : '40px !important'});
		$('.avatar').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '10px', 'border': '0px solid #004593' , 'padding-left': '0'});
		$('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'border': '0px solid #004593'});
		$('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});
		/******* END : AVATAR Image *****/ 
		
		/************ BEGIN : COG ***********/
		$('.user-interaction a span').css({'background-image' : 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/gear5.png")' , 'top' : '-1px' , 'left' : '-1px' });
		$('.user-interaction').css({'backgroundcolor': 'none', 'border-radius': '0', 'border': 'none'});
		//$smjquery('.user-interaction li').css({'border-radius': '0', 'border': 'none'});
		$('.cso-hdr-dd .item a span').css({'background-image' : 'none' });
		$('.settings a span').css({'background-position' : '0 0' , 'height' : '40px' , 'width' : '40px' });
		$('.cso-hdr-dd .item a span').css({'height' : 'auto' , 'width' : 'auto' });

		/***** BEGIN - Navigation *****/
		$('.navTabs').css({'background': '#023970' });
		$('.navTabs li').css({'border-right': '1px solid #444c54' });
		$('.navTabs-subTabList li').css({'border-right': 'none' });
		$('.navTabs li:last-child').css({'border-right': 'none' });
		$('.navTabs li a').css({'color':'#fff', 'text-shadow' : 'none'});
		$('.navTabs li a:hover').css({'text-decoration' : 'underline', 'text-shadow' : 'none', 'opacity' : '0.7'});
		$('.navTabs li.active').css({'text-decoration' : 'underline' , 'font-weight' : 'bold'});
		$('.c-glbl-nav').css({'border-top' : '1px solid #545d6d'});
		/***** END - Navigation *****/
		
		//Make the home page clickable and link to the Welcome page / Main page
	        $('a:contains("Home")').attr("href","/ui/lms-learner-home/home?tab_page_id=-200300006"); 
		
		/***** BEGIN - Browse For Training Global Search Option Opens By Default *****/
     		$smjquery("#lnkShowMoreSearchOptions").each(function(){
     		  	eventFire(document.getElementById('lnkShowMoreSearchOptions'), 'click');
     		 });
		
       		$smjquery(".cs-advsrch-close-btn").remove();
		
		function eventFire(element, elementType)
		{
      			if (element.fireEvent)
       			{
				console.log("two.A");
           			element.fireEvent('on' + elementType);
       			} 
      			else 
      			{
				console.log("two.B");
	   			var eventObject = document.createEvent('Events');
	   			eventObject.initEvent(elementType, true, false);
	   			element.dispatchEvent(eventObject);
      			} 
		}
		/***** END - Browse For Training Global Search Option Opens By Default *****/
		
		
		
		
		
		
		
		
		
		
		
		
		
		/***** BEGIN - Text Changes *****/
		
		//change Subject to Topic
		if (document.title.indexOf("Browse for Training") > -1)
		{		 
		    //Change "Subject" header to "Topic"
		    $('h2:contains("Subject")').each(function(){
 			$(this).html($(this).html().replace('Subject','Topic'));
			});
	
       		 }  //end Browse For Training
	
/*
        $("a:has(span:contains('Popular'))").remove();
	
        $('h2:contains("Browse for Training")').each(function(){
 		$(this).html($(this).html().replace('Browse for Training','Browse Learning'));
	});
	
	$('h2:contains("Suggested Training")').each(function(){
 		$(this).html($(this).html().replace('Suggested Training','Suggested Learning'));
	});
	
	$('a:contains("Change your password")').each(function(){
 		$(this).remove();
	});
	
	$('a:contains("Go to Customer Portal")').each(function(){
 		$(this).remove();
	});
	
	$(".cso-cont-padtb5:has(h3:contains('Subjects'))").remove();
	$(".cso-cont-padtb5:has(h3:contains('Available Languages'))").remove();
	$(".cso-cont-padtb5:has(h3:contains('Product'))").remove();
	$(".cso-cont-padtb5:has(h3:contains('Brand'))").remove();
	$(".cso-cont-padtb5:has(span:contains('$0.00'))").remove();
	$(".dot:contains('$0.00')").remove();
	$(".usr-content:has(div:has(span:contains('$0.00')))").remove();
	
	$("[aria-labelledby=Support]").empty();
	
        $("[aria-labelledby=Support]").append('<li><a href="https://eim.carefusion.com/Account/ChangePassword" title="Change Password" tabindex="-1">Change Password</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Contact Us" tabindex="-1">Contact Us</a></li><li><a href="/catalog/CustomPage.aspx?id=20000479&amp;tab_page_id=20000479" title="Frequently Asked Questions" tabindex="-1">Frequently Asked Questions</a></li>');
        $smjquery('#main-menu').smartmenus('refresh');
	
	$('.cso-txt span:contains("Online Class")').each(function(){
 	     $(this).html($(this).html().replace('Online Class','Web-Based Training'));
	    });

	$('[data-original-title="Online Class"]').attr('data-original-title', 'Web-Based Training');
        //  $('.tooltip-cso').tooltip();
	
	
	$('.cso-brdcrm-cont a:contains("Browse for Training")').each(function(){
 	$(this).html($(this).html().replace('Browse for Training','Browse Learning'));
	});

	$('.cso-title-cont.cso-wsp-cont span:contains("Browse for Training")').each(function(){
 	$(this).html($(this).html().replace('Browse for Training','Browse Learning'));
	});

	$('.cso-cont-marb35.cso-cont-mart20 h2:contains("Training")').each(function(){
 	$(this).html($(this).html().replace('Training','Learning'));
	});

	$('.navTabs-subTabList a:contains("Browse for Training")').each(function(){
 	$(this).html($(this).html().replace('Browse for Training','Browse Learning'));
	});

	$('.navTabs-subTabList a:contains("Manage Employee Learning")').each(function(){
 	$(this).html($(this).html().replace('Manage Employee Learning','Manage My Learners'));
	});
	
*/
		
		/***** End - Text Changes *****/
		
		
		

		
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
	
		$('#ctl00_footer_pnlCustomFooter').css({'padding': '0px'});
		$('.footerContentsRow').css({'backgroundColor': '#004593', 'color': '#fff' , 'font-size' : '11px' ,
'padding' : '30px 20px 20px', 'text-align' : 'center' ,  'margin-top' : '0px' , 'margin-bottom': '0px', 'height' : '150px'});
		
		$('.footerContentsRow div.col').css({'float' : 'left', 'display' : 'inline-block', 'min-width' : '20px' , 'width' : 'auto' , 'padding' : '20px 5px 5px' });
		
		//the logo div is too tall and raises the entire footer. Setting a small height here seems to solve.
		$('.footerContentsRow div.colX').css({'height': '3px', 'float' : 'left', 'display' : 'inline-block', 'min-width' : '20px' , 'width' : 'auto' , 'padding' : '20px 5px 5px' });
		
		$('.footerContentsRow div.copyright').css({'width' : '49%', 'text-align' : 'center' , 'margin' : '0 auto'});
		// now style the footer elements
		$('#footerLogo').css({'position' : 'relative' , 'top': '-35px' });
		$('#sm1').css({'height': '20px'});
		$('#sm2').css({'height': '27px'});
		$('#sm3').css({'height': '25px'});
		$('#sm4').css({'height': '25px'});
		$('.footerLink').css({'float' : 'right' , 'border-right': '1px solid #ccc' , 'padding-top' : '0' , 'padding-bottom' : '0' , 'margin-top' : '20px' });
		$('.privacy').css({'border-right' : 'none'});
		$('.footerLink a').css({'color' : '#fff'});
		
		/***** END - Footer *****/
	});

}($smjquery)); 
