(function($) {
   
	$(document).ready(function() {
	
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

		
		/********BEGIN - Featured Cards Component **********/	
		//var cardStructure = $('<div><ul><li>Hello</li><li>Hi</li><li>Whats up</li><li>Hola</li></ul></div>');
				      
				      
/*
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
*/

		
		$('div.p-prerenderplaceholder div.p-panel.p-p-t-md').prepend('<hr id="testHR">');		
		$('#testHR').css({"backgroundColor": "black", "color": "black", "height": "50px"});
		
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
		$('.df-footer').css({"display": "none"}); // hide the csod default footer
		//create grey background and add sloped image
		$('#ctl00_footer_pnlCustomFooter').css({"backgroundColor": "#f2f2f2"});
		var footerImg = $('<img id="slopedFooterImage">');
	        footerImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/angle.png');
                footerImg.appendTo('#ctl00_footer_pnlCustomFooter');
		
		var footerContents = $('<div class="footerContentsRow">' +
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
		
		$('#ctl00_footer_pnlCustomFooter').css({'padding' : '0'});
		$('.footerContentsRow').css({'backgroundColor': '#004593', 'color': '#fff' , 'font-size' : '11px' ,
'padding' : '30px 20px 20px', 'text-align' : 'center' ,  'margin-top' : '-5px' , 'height' : '150px'});
		$('.footerContentsRow div.col').css({'float' : 'left', 'display' : 'inline-block', 'min-width' : '20px' , 'width' : 'auto' , 'padding-top' : '20px' });
		$('.footerContentsRow div.copyright').css({'width' : '50%'});
		// now style the footer elements
		$('#footerLogo').css({'position' : 'relative' , 'top': '-35px' });
		$('#sm1').css({'height': '20px'});
		$('#sm2').css({'height': '27px'});
		$('#sm3').css({'height': '25px'});
		$('#sm4').css({'height': '25px'});
		$('.footerLink').css({'float' : 'right' , 'border-right': '1px solid #ccc' , 'padding-top' : '0' , 'padding-bottom' : '0' , 'margin-top' : '20px' });
		$('.footerLink:first-child').css({'border-right' : '0'});
		$('.footerLink a').css({'color' : '#fff'});
		
		/***** END - Footer *****/
	});
	
	
        //Make the home page clickable and link to the Welcome page / Main page
	$('a:contains("Home")').attr("href","/ui/lms-learner-home/home?tab_page_id=-200300006"); 
	
	
	
	
	/***** BEGIN - Browse For Training Global Search Options *****/
	
	
	/*
	if (document.title.indexOf("Browse for Training") > -1)
	{		 
		//Change "Subject" header to "Topic"
		$('h2:contains("Subject")').each(function(){
 			$(this).html($(this).html().replace('Subject','Topic'));
			});
	
        }  //end Browse For Training
	*/
	
       //show the advanced search option whenever search is shown
	console.log("one");
	
	
       $smjquery("#lnkShowMoreSearchOptions").each(function(){
        	eventFire(document.getElementById('lnkShowMoreSearchOptions'), 'click');
       });
		
	console.log("three");
	
	/*
       //remove the X (close) button on the advanced options
       $(".cs-advsrch-close-btn").remove();
	
       //use the name field to alter the My Learning header
       $('h2:contains("My Learning")').each(function(){
 	    $(this).html($(this).html().replace('My Learning', fname + '\'s Learning In Progress'));
	});
	
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
	*/
	
	var expanded = false;

	function eventFire(element, elementType)
	{
		if (expanded == false)
		{
			var eventObject = document.createEvent('Events');
	   		eventObject.initEvent(elementType, true, false);
	   		element.dispatchEvent(eventObject);
			expanded = true;
		}
		
		
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

	
	
	/****** END - Global Search *****/
	
	
	
	
	
}($smjquery)); 

