//var iScrollPos = 0;
$(window).scroll(function() {
    if (document.title.indexOf("Browse for Training") > -1)
    {
   	var iCurScrollPos = $(this).scrollTop();
	var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var bottomOfWindow = windowHeight * 0.85;
	    
	//if (iCurScrollPos > iScrollPos && iCurScrollPos > bottomOfWindow)
	if (iCurScrollPos > bottomOfWindow)
	{
           //Scrolling Down
	   replaceOnlineClass();
	    
	    var delayMillis = 100; 
	    setTimeout(function() { replaceOnlineClass(); }, delayMillis);
	} 
	    
      // iScrollPos = iCurScrollPos;
    }
});
	   


$(document).ready(function() {
	
	console.log("Test8");
	
	$('#ctl00_footer_pnlCustomFooter').css({"margin-top": "0px", "margin-bottom": "-15px", "backgroundColor": "#f2f2f2", "width": "100%", "padding": "0px"});
	
	// margin: top, right, bottom, left
	$('.df-footer').css({"margin": "0px 0px 0px 0px", "backgroundColor": "#f2f2f2", "width": "100%", "padding": "0px"});					
				
	$('.df-footer').each(function(){
	        $(this).html('<img src="https://bd-pilot.csod.com/clientimg/bd/welcome/angle.png" id="slopedFooterImage" />' +
			     '<table class="footerTable"><tr>'+
			     '<td id="footerTD1"><img src="https://bd-pilot.csod.com/clientimg/bd/welcome/logo.png" id="footerLogo"></td>' +
			     '<td id="footerTD2"><a href="http://www.facebook.com/carefusion" class="smLink">&nbsp</a></td>'+
			     '<td id="footerTD3"><a href="http://twitter.com/carefusion" class="smLink">&nbsp</a></td>'+
			     '<td id="footerTD4"><a href="http://www.linkedin.com/company/carefusion" class="smLink">&nbsp</a></td>'+
			     '<td id="footerTD5"><a href="http://youtube.com/carefusion" class="smLink">&nbsp</a></td>'+
			     '<td id="footerTD6"><p class="copy">&copy; 2017 BD. All rights reserved. Unless otherwise noted, BD, the BD Logo and all other trademarks are property of Becton, Dickinson and Company.</p></td>'+
			     '<td id="footerTD7"><ul class="footer-links">'+
            			'<li><a href="http://www.bd.com/">BD Worldwide</a></li>'+
           			 '<li><a href="http://www.bd.com/support/contact/">Contact BD</a></li>'+
            			'<li><a href="http://www.bd.com/legal/privacy_policy/">Privacy Policy</a></li>'+
            			'<li><a href="http://www.bd.com/legal/terms/">Terms of Use</a></li>'+
           			 '<li><a href="https://forms.bd.com/BDPERM/index.sp">Permission Request</a></li>'+
        			'</ul></td> </tr></table>')
		});
	
	//enlarge the link area for the social media links
	$('.smLink').css({'font-size': '400%'});
	
	$('.footer-links').css({"padding-left": "0", "float": "right", "padding-right": "15px", "margin-top": "8px"});
	$('.footer-links li').css({"display": "inline-block", "line-height": "16px", "padding-right": "5px", "padding-left": "5px", "border-left": "1px solid #EEEEEE"});
	$('.footer-links li:first-child').css({"border-left": "none"});
	$('.footer-links a').css({"color": "#FFFFFF", "font-weight": "400", "text-decoration": "none", "font-size": "10px"});
	
	
	// sloped image with top margin
	 $('#slopedFooterImage').css({"width": "100%", "padding-bottom": "0px", "margin-top": "35px", "margin-bottom": "-5px"});
	
	
	
	
	
	
	
	
	
	 // margin: top, right, bottom, left
	 $('.footerTable').css({"margin": "0px 0px 0px 0px", "padding-top": "0px", "backgroundColor": "#004593", "width": "100%", "height": "120px"});

	  // copywrite info
	 $('.copy').css({'font-size': '80%', 'padding-left': '40px', 'text-align': 'center'});	
	
	//footer logo
	 $('#footerLogo').css({'margin-left': '20px', 'margin-right': '20px'});
	 $('#footerTD1').css({'padding-left': '0px', 'width': '40px'});

         $('#footerTD2').css({'width': '10px', 'height': '20px', 'padding': '5px', 'backgroundColor': 'red', 'background': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite-4.png") no-repeat scroll 0px -255px transparent'});
	 $('#footerTD3').css({'width': '10px', 'height': '20px', 'padding': '5px', 'backgroundColor': 'blue', 'background': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite-4.png") no-repeat scroll -40px -255px transparent'});
	 $('#footerTD4').css({'width': '10px', 'padding': '5px', 'backgroundColor': 'red', 'background': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite-4.png") no-repeat scroll -80px -255px transparent'});
	 $('#footerTD5').css({'width': '10px', 'padding': '5px', 'backgroundColor': 'blue', 'background': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite-4.png") no-repeat scroll -120px -255px transparent'});

	 $('#footerTD6').css({"width": "45%", "color": "#ffffff"});
	 $('#footerTD7').css({"width": "30%"});

       //this handles initial load at the Browse Learning Page - replaces initial icons and wording, both needed?
        Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(function () { replaceOnlineClass(); });
	Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function () { replaceOnlineClass(); });

	// Remove Welcome sub-tab
        // $('a:contains("Welcome")').each(function(){
 	//	$(this).remove();
	//});
	
	// Remove Welcome Tab 
	//var welcomeTab = document.querySelector("[data-tag='Welcome']");
	//welcomeTab.parentNode.removeChild(welcomeTab);
	
	//Alternative Header Icons
	 //$('.avatar').css({'background': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite.png") no-repeat scroll 12px 4px transparent'});
	 $('.cart').css({'background': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite.png") no-repeat scroll 5px -35px transparent', 'width': '40px'});
	 $('.settings').css({'background': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite.png") no-repeat scroll 0px -80px transparent'});
	
	//$("#header_headerFixed_imgAvatar").css({'src': 'https://bd-pilot.csod.com/clientimg/bd/welcome/profile.png'});
	
	//var avtImg = document.createElement('Image');
	//avtImg.src = "https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite.png";
        //avatarImg.drawImage( avtImg, 12, 4, 8, 8 );
	//$('.item.oc').css
	
	
	/*
	var avatarImg = document.getElementById('header_headerFixed_imgAvatar');
	if (avatarImg != null)
	{
	    //avatarImg.src='https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite.png';
	    //avatarImg.style.backgroundPosition = "12px 4px";
	   // $('.avatar a').css({'background': 'no-repeat scroll 12px 4px transparent'});
	   //drawImage( image, x, y, width, height );
	   var avtImg = document.createElement('Image');
	   avtImg.src = "https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite.png";
           avatarImg.drawImage( avtImg, 12, 4, 8, 8 );
	}
	*/

/*  hide for screen shot	
	//univProfileLi.style.cssFloat = "right";
        //swap the new profile image (element ID varies by page)
	var imgLoc = document.getElementById('header_headerFixed_imgAvatar');
	if (imgLoc != null)
	{
	    document.getElementById('header_headerFixed_imgAvatar').src='https://rawgit.com/gcses/CSOD-JS/master/nophoto2.png';
	}
	else
	{
		imgLoc = document.getElementById('ctl00_header_headerFixed_imgAvatar');
		if (imgLoc != null)
		{
	  	   document.getElementById('ctl00_header_headerFixed_imgAvatar').src='https://rawgit.com/gcses/CSOD-JS/master/nophoto2.png';
		}
	}
*/
	
	//document.getElementById("header_headerFixed_hlAvatar").style.cssFloat = "left";
	//load splash image background
	//<div class="topBarOuter">
	//var headerTable = document.getElementById('tblTopBar');
	//headerTable.style.backgroundImage = "url('https://rawgit.com/gcses/CSOD-JS/master/header.JPG')";
	
	
	
	
	//change the navigation bar to white, remove gradient		
	$('#main-menu').css({"background-image": "none", "background-color": "#ffffff"});
	
	//handle the navigation bar active tab, only decorate first descendant or main categories
	$('#main-menu > li.active').css({"background-color": "#ffffff", "text-decoration": "underline", "font-weight": "bold"});
	
	// navigation bar changes
	 $('.navTabs li a').css({"background-image": "none", "text-shadow": "none", "color": "#808080", "font-weight": "normal"});
	
	 //navigation bar hover - active hover is being blocked somewhere else (the hover is always blue or theme color)
	 $("#main-menu > li").hover(function(){ 
		 $(this).css({"backgroundColor": "yellow",  "color": "#000000", "text-decoration": "underline", "font-weight": "bold"}); },
		 function() { $(this).css({"backgroundColor": "#ffffff",  "color": "#808080", "text-decoration": "", "font-weight": ""}); }
	); 
	
	$('#main-menu > li.active').hover(function(){ 
		 $(this).css({"backgroundColor": "yellow",  "color": "#000000", "text-decoration": "underline", "font-weight": "bold"}); },
		 function() { $(this).css({"background-color": "#ffffff", "text-decoration": "underline", "font-weight": "bold"}); }
	); 
	
       	//Fix the search area and icons - move up - margin: top, right, bottom, left
	$('#search .cso-top-srch-box').css({"height": "37px", "border-color": "#dddddd", "box-shadow": "none", "margin": "0 10px 0 0"});
	$('#search input').css({"height": "37px"});
	
	//fix the spacing around the header search and icons
	$('.tools').css({"margin": "-20px 0px 20px 0px", "background-color": "#004593"}); 
	
	// fix the header coloring. It needs help on screens such as Browse For Learning
	$('.topBarOuter').css({"margin": "0px 0px 0px 0px", "background-color": "#004593"}); 
	$('#ctl00_header_headerFixed_aHeaderLogoLink').css({"background-color": "#004593"}); 
	$('#tblTopBar').css({"background-color": "#004593"}); 
	
	
	

	
	
	
	
	//$('#search .search-lnk:after').css({"content": "\f002", "position": "absolute", "right": "0", "top": "0", "color": "#004593", "width": "26px", "height": "28px", "display": "block", "font": "normal normal normal 14px/1 FontAwesome"});
	//$('.navTabs li.active a, .navTabs li:hover a').css({"background-image": "none", "color": "#000000", "text-decoration": "underline"});
	
	//underlines all sub-categories of active category - do we want to do that?
	//$('.navTabs li.active a').css({"background-image": "none", "color": "#000000", "text-decoration": "underline"});

	//$('.user-interaction li').css({"background-image": "none", "background-color": "#ffffff", "text-decoration": "none"});
	 $('.compass-title').css({"font-size": "20px", "line-height": "36px", "margin-left": "30px", "margin-right": "30px", "display": "inline-block"});

	if (document.title.indexOf("Welcome - Realize Your Potential") > -1)
	{
	   //hide the first name field. It is only included to that we can use the name elsewhere
           $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").hide();
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl02_widgetContainer_ctl00_htmlContainer").hide();
	
	   var fname = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").text();
	   var lname = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl02_widgetContainer_ctl00_htmlContainer").text();

		/* hide for screen shot
	   var elements = document.getElementsByClassName('avatar');
           var univProfileLi = elements[0];
	   univProfileLi.innerHTML += fname + " " + lname; 
	   univProfileLi.style.width = "120px";  
	   univProfileLi.style.verticalAlign = "middle";
	   */
	

	  //all of this needs testing
	   $('*').css({"font-family": "'Source Sans Pro', sans-serif !important", "font-weight": "normal"});
	   $('body').css({"background-color": "#f2f2f2", "font-family": "'Source Sans Pro-bottom', sans-serif", "font-weight": "normal", "padding": "0", "margin": "0"}); 
	   //$('#mainContainer').css({"max-width": "1200px", "margin": "0 auto"});
	
           /*Header Top Bar - Logo and Header*/   
           $('.imageLogo').css({"margin-left": "30px"});
	   $('#tblTopBar').css({"background-color": "#004593"});
		
           $('#tblTopBar tr:nth-child(1), #tblTopBar tr:nth-child(3)').css({"height": "0"});
           $('.user-interaction li').css({"background-color": "none !important", "border": "none", "border-radius": "0", "padding-left": "3px", "border-left": "solid 1px #ffffff", "margin-left": "3px"});
           $('.user-interaction li:first-child').css({"color": "#ffffff", "text-align": "center", "line-height": "32px", "width": "auto !important", "padding": "0 10px 0 24px !important", "border-left": "none"});
			
	
		/*
		Targets: <div role="navigation" aria-label="Main menu">
    				<div role="application" class="c-glbl-nav">
        				<ul id="main-menu" class="smenu sm navTabs" aria-label="Main menu">

					 <li class="active">
		*/

		
		
		

		

	    /*Tables*/
            $('.cs-panel-flat, .cs-panel-plain, .cs-panel-gradient').css({"border-radius": "0"});
 	    $('.cs-panel-flat .Panel_content').css({"border-color": "transparent"});
	    $('.cs-panel-flat .Panel_title').css({"background-color": "#ffffff"});
	    $('.Panel_titleMiddle a').css({"color": "#000000"}); 
		
		//what do we want this hover to do?
	   // $(".Panel_titleMiddle a").hover(function(){ 
	//	 $(this).css({"color": "#000000"}); },
		// function() { $(this).css({"color": ""}); }
	//	); 
		
	    $('.cs-panel-flat.Panel_titleMiddle div, .cs-panel-plain.Panel_titleMiddle div, .cs-panel-gradient.Panel_titleMiddle div, .cs-panel-flat.Panel_titleMiddle h2, .cs-panel-plain.Panel_titleMiddle h2, .cs-panel-gradient.Panel_titleMiddle h2').css({"font-size": "20px!important", "font-weight": "lighter"});
	    $('.cs-panel-flat').css({"padding": "30px", "box-shadow": "0 0 0 0 rgba(0, 0, 0, 0.2)", "box-sizing": "border-box", "backgroundColor": "#ffffff"});
				  
				  
          $('table .CsList th').css({"display": "none"});
	  $('.Panel_contentMiddle td').css({"padding": "12px", "border-top": "1px solid #f2f3f4"});
		
		$(".Panel_contentMiddle tr").hover(function(){ 
		    $(this).css({"backgroundColor": "#ffffff!important"}); },
			function() { $(this).css({"backgroundColor": "yellow!important"}); }
		); 
		
	  $('.tablerolloverNewUI').css({"backgroundColor": "#ffffff!important"});
		
	  $(".CsList tbody tr").hover(function(){ 
		    $(this).css({"backgroundColor": "#ffffff!important"}); },
			function() { $(this).css({"backgroundColor": "yellow!important"}); }
		); 
	
		
		
		
		
		
		
	   											 									 								 
	    $('.Panel_contentMiddle tr:last-child td').css({"border-bottom": "none"});
		
	    // left side wording link - in blue text
	    $('.Panel_contentMiddle tr td:first-child').css({"color": "#004593"});
	
	     //boxed in link on right side of Learning In Progress
	    $('.Panel_contentMiddle td a').css({"color": "#ffffff", "font-weight": "normal", "padding": "8px 26px 8px 10px", "backgroundColor": "#004593", "min-width": "122px", "display": "inline-block", "box-sizing": "border-box", "position": "relative"});
		
		

	    
	    
	    var cartImg = $('<img id="chevron1">'); //Equivalent: $(document.createElement('img'))
	    cartImg.attr('src', 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite-4.png") -120px -255px');
            cartImg.appendTo('.Panel_contentMiddle td a');
		
		// margin: top, right, bottom, left
	 $('#chevron1').css({"margin": "3px 0px 0px 5px"});
           
		
	// $('#footerTD5').css({'padding-left': '5px', 'width': '10px', 'padding': '5px', 'backgroundColor': 'blue', 'background': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/compass-sprite-4.png") no-repeat scroll -120px -255px transparent'});

		
		
		
		
		
		
		
		// $(".Panel_contentMiddle td a").hover(function(){ 
		//      $(this).css({"text-decoration": "none", "backgroundColor": "#003066"}); },
		//	function() { $(this).css({"backgroundColor": "#004593"}); }
		//); 
		
		 //$('.Panel_contentMiddle td a:after').css({"content": "\f054", "position": "absolute", "right": "0", "top: 10px", "color": "#ffffff", "width": "26px", "height": "28px", "isplay": "block", "font": "normal normal normal 14px/1 FontAwesome"});
		
		 $('.cs-panel-flat.Panel_footer, .cs-panel-plain.Panel_footer, .cs-panel-gradient.Panel_footer').css({"border": "none"});
		
		
		
		
		
		

		
	   //remove rounded corners from slider
           $("#my-slider").css({"width": "101%", "margin-bottom": "200px"});  
	   document.getElementById("my-slider").style.borderRadius = "0px";
	   //document.getElementById("my-slider").style.zIndex = "-10000";  //this may be too deep in the stack
	
	   // //Resize and reposition slider - margin: top, right, bottom, left
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl00_widgetContainer_ctl00_htmlContainer").css({"width": "102%", "margin": "0px 0px 0px -5px"}); 
	   $("#ctl00_masterPageBody").css({"width": "100.5%", "margin": "-40px 0px 0px -6px" });  //-30
	   $("#ctl00_ContentPlaceHolder1_labelError").css({"width": "100%"}); 
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_mainPageDiv").css({"width": "100%"}); 
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_mainDivRenderedWidgets").css({"width": "100%"}); 
	   $("#mainContainer").css({"width": "100%"}); 
	   $("#container0").css({"width": "100%"});  
	   $("#container7").css({"width": "100%"}); 
		
		
		
	//CARD Style
		$(".widgetToMove").css({"box-shadow": "0 1px 6px 0 rgba(0,0,0,0.2)"});
	        $(".card").css({"width": "20%", "box-sizing": "border-box", "padding": "0px", "border-radius": "0px 0px 0px 0px", "border-top": "solid 9px #00a79e", "border-bottom": "none", "border-left": "solid 1px #f2f3f4", "border-right": "none", "margin": "0px 0px 0px 0px" }); 
		$(".card:first-child").css({"border-left": "none"});
		$(".card:nth-child(2)").css({"border-top": "solid 9px #6f2780"});
		$(".card:nth-child(3)").css({"border-top": "solid 9px #02abd7"});
		$(".card li").css({"width": "100%", "box-sizing": "border-box"});
		$(".card img").css({"width": "100%", "height": "100px"});
		$(".card h2").css({"padding": "5px", "color": "#808080", "font-size": "14px", "margin-top": "0px"});
		$(".card a:nth-child(2) li").css({"padding": "5px"});
		$(".card p ").css({"color": "#808080", "font-size": "10px"});
		
	//*************************************
	//   Z-Index Area (float cards over slider)
	//*************************************
	$(".wrapper").css({"margin-left": "10%"});
        var elements = document.getElementsByClassName('wrapper');
        elements[0].style.position = "absolute";
        elements[0].style.zIndex="2147483644";

		
	
	// margin: top, right, bottom, left
	//Drive Cards to the top of the stack (z-index cannot be changed in jQuery)	
	$(".wrapper").css({"margin": "-260px 0px 0px 15%"});    //move row of cards up over slider

      } //end if
	
	
	
	
	
	
	if (document.title.indexOf("Universal Profile") > -1)
	{	
        	// change the Profile page's links
		$('span:contains("Transcript")').each(function(){
 			$(this).html($(this).html().replace('Transcript','My Learning'));
			});
       		$(".nav-transcript  ").attr("title","My Learning");
	}
	
	//Make the home page clickable and link to the Welcome page / Main page
	$('a:contains("Home")').attr("href","/LMS/catalog/Main.aspx?tab_page_id=-67");

	var EnterCoupon = "Enter customer code";	

	//swap the shopping carts coupon code text for customer code
	$('span:contains("Coupon Code")').each(function(){
		console.log("span found!!");
	        $(this).html($(this).html().replace('Coupon','Customer'));
		});
	
	
	
	
	
	
	
	

        //write to console to confirm attributes
        //var x = $("label[for='txtCouponCode']").text();
	//console.log("text: " + x);
	//var couponSpan = $(".cso-input-outer.med.cso-fleft-ie7");
	//couponSpan.html('<label for="txtCouponCode">Enter customer code</label>');
	//couponSpan.html('<input id="txtCouponCode" type="text" maxlength="16" /></span>');
	//couponSpan.html('<input id="txtCouponCode" type="text" maxlength="16" /></span>');
	//couponSpan.html('<input id="txtCouponCode" type="text" maxlength="16" data-bind="value: couponCode, valueUpdate: \'afterkeydown\', event: {keyup: applyCouponOnEnter}" /></span>');
	
	
	// margin: top, right, bottom, left
	//$(".cso-input-outer.med.cso-fleft-ie7").css({"width": "105px", "height": "25px", "background-color": "yellow", "margin": "0px 10px 0px 0px", });  		
	//$('.cso-input-outer.med.cso-fleft-ie7').css({"background-color": "yellow"}); 
	
	

	
	// -------------  Browse For Training Global Search Options -------------
	if (document.title.indexOf("Browse for Training") > -1)
	{		 
		//Change "Subject" header to "Topic"
		$('h2:contains("Subject")').each(function(){
 			$(this).html($(this).html().replace('Subject','Topic'));
			});
	
        }  //end Browse For Training
	
       //show the advanced search option whenever search is shown
       $("#lnkShowMoreSearchOptions").each(function(){
        	eventFire(document.getElementById('lnkShowMoreSearchOptions'), 'click');
       });
	
	
       //remove the close button on the advanced options
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
	


	//test this
	//$('#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_pnlSuggestedTraining_title').css({'background-color':'#00B8B0'});
	
	
	
	//this setInterval logic breaks Internet Explorer
	//window.setInterval(replaceOnlineClass, 1000);
        //replaceOnlineClass();
	
	if (document.getElementById("common-messages"))   
	{
			try
			{
				if (document.getElementById("common-messages").innerHTML.indexOf("This training item is currently unavailable to you.") > -1)
				{
					document.getElementById("common-messages").innerHTML = '<div>' +
                
						'<span class="cso-txt blue">' +
						'This item is part of a curriculum. ' +
						'Please return to the previous page and select Request to access this item.' +
						'</span>' +
					'</div>';
					
				} //end if
			} 
			catch(err)
			{
				console.log("common-messages = null");
			}
			
			try
			{
				console.log("selectedSearchEngineID = " + selectedSearchEngineID);
			} 
			catch(err)
			{
			}
	} //end if
	
	
	// $(".usr-content:contains('$0.00')").css("border", "solid red");
			
	$(".usr-content:contains('$0.00')").each(function(){
			$(this).html($(this).html().replace('Total Price',''));
 			$(this).html($(this).html().replace('$0.00',''));
	});
	
	
	createAccordionControls();

	
});  // end $(document).ready(function(){


function eventFire(element, elementType)
{
      if (element.fireEvent)
       {
           element.fireEvent('on' + elementType);
       } 
      else 
      {
	   var eventObject = document.createEvent('Events');
	   eventObject.initEvent(elementType, true, false);
	   element.dispatchEvent(eventObject);
      } 
}

var expanded = false;


function createAccordionControls()
{
    // add font awesome script
    var script = document.createElement('script');
    script.src = 'https://use.fontawesome.com/a5e14d140f.js';
    script.type = 'text/javascript'; 
    document.getElementsByTagName('head')[0].appendChild(script);
	
    $(".cs-subjwidg-list li.cat").css({"padding": "0", "margin": "0px 0px 0px 0px", "line-height": "4px"});  
    $(".cs-subjwidg-list li.cat .sub").css({"margin": "0px 0px 0px 10px"});  
    $(".cs-subjwidg-list li.cat a.exp-icon").css({"display": "block", "width": "100%", "height": "40px", "border": "1px solid #CCCCCC", "position": "relative", "text-index": "0px"});  
    $(".cs-subjwidg-list li.cat.nochild .ex-icon").css({"display": "block", "width": "100%", "height": "40px", "border": "1px solid #CCCCCC", "position": "relative", "text-index": "0px"});  

	
    // font awesome down arrow - see css that is already linked in
	//$(".cs-subjwidg-list li.cat").css({ "background-color": "blue" });  
	
	//$('.cs-subjwidg-list li.cat').each(function(){
 	//    $(this).append($("Hello")});	
	
	//$(".cs-subjwidg-list li.cat a.exp-icon:after").css({ "content": " - AAA" });  
    	//$(".cs-subjwidg-list li.cat .exp-icon.selected:after").css({   "content": " - AAA" });  
	//$("#dir-rtl .cs-subjwidg-list li.cat .exp-icon.selected:after").css({ "content": " - AAA" });  
	//$(".cs-subjwidg-list li.cat.nochild .exp-icon:after").css({  "content": " - AAA" });  
	//$("#dir-rtl .cs-subjwidg-list li.cat.nochild .exp-icon:after").css({ "content": " - AAA" });  
	
	/*
	$(".cs-subjwidg-list li.cat.nochild .exp-icon:after").css({
		"content": "AAA", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block"});  
    	$(".cs-subjwidg-list li.cat .exp-icon.selected:after").css({  
		"content": "AAA", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block"});  
    	$("#dir-rtl .cs-subjwidg-list li.cat .exp-icon.selected:after").css({
		"content": "AAA", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block"});  
    	$(".cs-subjwidg-list li.cat.nochild .exp-icon:after").css({ 
		"content": "AAA", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block"});  
    	$("#dir-rtl .cs-subjwidg-list li.cat.nochild .exp-icon:after").css({
		"content": "AAA", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block"});  
	*/
	
	
	
	//<i class="fa fa-car">
	
		/*
        var accordionItem = document.getElementById("checkboxes");
	var elements = document.getElementsByClassName('avatar');
        var univProfileLi = elements[0];
	univProfileLi.innerHTML += fname + " " + lname; 
	univProfileLi.style.width = "120px";  
	
    	$(".cs-subjwidg-list li.cat a.exp-icon:after").css({"content": "\f078", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block", "font": "normal normal normal 14px/1 FontAwesome"});  
    	$(".cs-subjwidg-list li.cat.nochild .exp-icon:after").css({"content": "\f078", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block", "font": "normal normal normal 14px/1 FontAwesome"});  
    	$(".cs-subjwidg-list li.cat .exp-icon.selected:after").css({"content": "\f078", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block", "font": "normal normal normal 14px/1 FontAwesome"});  
    	$("#dir-rtl .cs-subjwidg-list li.cat .exp-icon.selected:after").css({"content": "\f078", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block", "font": "normal normal normal 14px/1 FontAwesome"});  
    	$(".cs-subjwidg-list li.cat.nochild .exp-icon:after").css({"content": "\f078", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block", "font": "normal normal normal 14px/1 FontAwesome"});  
    	$("#dir-rtl .cs-subjwidg-list li.cat.nochild .exp-icon:after").css({"content": "\f078", "position": "absolute", "right": "-13px", "top": "12px", "color": "CCCCCC", "width": "40px", "height": "40px", "display": "block", "font": "normal normal normal 14px/1 FontAwesome"});  
*/



	$(".cs-subjwidg-list li.cat .exp-icons.selected").css({"background-color": "#EEEEEE"});  
	$("#dir-rtl .cs-subjwidg-list li.cat .exp-icon.selected").css({"background-color": "#EEEEEE"});  
	
     // font awesome up arrow
        $(".cs-subjwidg-list li.cat .exp-icons.selected:after").css({"content": "\f077"});  
	$("#dir-rtl .cs-subjwidg-list li.cat .exp-icon.selected:after").css({"content": "\f077"});  
	
	$(".cs-subjwidg-list li.cat.nochild .exp-icon").css({"border": "none"});  
	$("#dir-rtl .cs-subjwidg-list li.cat.nochild .exp-icon").css({"border": "none"});  
	
	$(".cs-subjwidg-list li.cat.nochild .exp-icon:after").css({"content": ''});  
	$("#dir-rtl .cs-subjwidg-list li.cat.nochild .exp-icon:after").css({"content": ''});  

	$(".cs-subjwidg-list li.cat a.exp-icon + a").css({"position": "relative", "top": "-22px", "padding-left": "16px", "text-decoration": "none", "color": "#333333", "font-weight": "400"});  
        $(".cs-subjwidg-list li.cat.nochild .ex-icon + a").css({"position": "relative", "top": "-22px", "padding-left": "16px", "text-decoration": "none", "color": "#333333", "font-weight": "400"});  
}


function getAdditionalCSS() {
        var bdy  = document.getElementsByTagName('body')[0];
        var link  = document.createElement('link');
        link.id   = 'additionalCSS';
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://rawgit.com/gcses/CSOD-JS/master/additionalStyles.css';
	
       // link.href = 'https://github.com/gcses/CSOD-JS/blob/master/additonalStyles.css';
       link.media = 'all';
       bdy.appendChild(link);
}

//this needs to be called for every 'lazy load' of additional data
function replaceOnlineClass() 
{
    //	console.log("replace() - Start");
	
		/*
		oc: LoTypeId == LoType.OnlineClass,
		ev: LoTypeId == LoType.Event,
		qc: LoTypeId == LoType.QuickCourse,
		cr: LoTypeId == LoType.Curriculum,
		ts: LoTypeId == LoType.Test,
		lb: LoTypeId == LoType.Library,
		mt: LoTypeId == LoType.Material,
		po: LoTypeId == LoType.Posting,
		vd: LoTypeId == LoType.Video,
                sl: LoTypeId == LoType.Program,
		*/
	
	//Learning Objects
        // Assessments: A+  0px 0px    position 1
	$('.item.ts').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px 0px transparent'});
	
	// Curriculum:  Book 0px -57px  position 2
	$('.item.cr').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px -57px transparent'});
	
	// Events: man with quote 0px -182px position 4
	$('.item.ev').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px -182px transparent'});
	
	// Materials: paperclip        position 16
	$('.item.mt').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px -900px transparent'});
	
	// Video: triangle in circle   position 6
	$('.item.vd').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px -300px transparent'});
	
        // Notes: folded page     1380     position 24 - 
	$('.item.lb').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px -1380px transparent'});

	// Web-Based Training: laptop  position 15
	$('.item.oc').css({'background': 'url("/clientimg/bd/welcome/lo_sprite_lrg.png") no-repeat scroll 0px -840px transparent'});

	
	
	
		
    var elements=document.getElementsByTagName("*"), count=elements.length, elementChildNodes=[], subCount=0, i=0, sub=0, elementHeight=0;
    
    for(i=0; i<count; i++)
    {
	elementChildNodes = elements[i].childNodes;
	subCount = elementChildNodes.length;
	for (sub=0; sub<subCount; sub++)
	{
		//  if(elementChildNodes[sub].nodeType === 1 || elementChildNodes[sub].nodeType === 3) {
		if(elementChildNodes[sub].nodeType === 3)
		{
		   // console.log("replaceOnlineClass() - i="+i+" - sub="+sub);
					try {
						elementChildNodes[sub].nodeValue = elementChildNodes[sub].nodeValue.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					try {	
						elementChildNodes[sub].innerText = elementChildNodes[sub].innerText.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					try {
						elementChildNodes[sub].textContent = elementChildNodes[sub].textContent.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					try {
						elementChildNodes[sub].innerHTML = elementChildNodes[sub].innerHTML.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					try {
						elementChildNodes[sub].text = elementChildNodes[sub].text.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} 
					catch(err) 
					{
					}
		 } //end if
				  
	} //end inner for
    } //end outer for
} //end function	
		


