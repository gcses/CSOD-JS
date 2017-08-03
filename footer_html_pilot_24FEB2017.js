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

	console.log("Test9");

	//Alternative Header Icons

	//overlay a new image to cover up settings cog image
	var cogImg = $('<img class="cog1">');
	cogImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/cog.png');
	cogImg.appendTo('#optionsbtn');
	$('.cog1').css({'height': '30px', 'position': 'absolute', 'top': '5%', 'left': '0%', 'margin-left': '0px', 'margin-right': '0px', 'border-radius': '0', 'border': '0px', "zindex": "2147483644"});
	$('#optionsbtn').css({'backgroundColor': '#004593', 'border': '0px', "zindex": "2147483644"});
	
	$('#header_headerFixed_hlAvatar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});  //yellow border
	$('.avatar').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'margin-right': '10px', 'border': '0px solid #004593'});
	$('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '7px', 'margin-left': '-10px', 'border': '0px solid #004593'});
	$('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});
	$('.user-interaction').css({'backgroundColor': '#004593', 'border-radius': '0', 'border': '0px solid #004593'});

	
        // Profile   
	var imgLoc = document.getElementById('header_headerFixed_imgAvatar');

	if (imgLoc != null)
	{
	    document.getElementById('header_headerFixed_imgAvatar').src='https://bd-pilot.csod.com/clientimg/bd/welcome/profile.jpg';
            var elementAvatar = document.getElementById('header_headerFixed_imgAvatar');
            elementAvatar.style.position = "absolute";
            elementAvatar.style.zIndex="2147483644";
		
	    // margin: top, right, bottom, left
	    $('#header_headerFixed_imgAvatar').css({'width': '35px', 'margin': '-5px 0px 0px -30px',  'border-radius': '0', 'border-left': '6px ' , 'border-right': '6px', 'padding-left': '10px', 'padding-right': '10px'});
	}
	else
	{
		imgLoc = document.getElementById('ctl00_header_headerFixed_imgAvatar');
		if (imgLoc != null)
		{
	  	   document.getElementById('ctl00_header_headerFixed_imgAvatar').src='https://bd-pilot.csod.com/clientimg/bd/welcome/profile.jpg';
		   var elementAvatar = document.getElementById('ctl00_header_headerFixed_imgAvatar');
                   elementAvatar.style.position = "absolute";
                   elementAvatar.style.zIndex="2147483644";
		
	          // margin: top, right, bottom, left
	          $('#ctl00_header_headerFixed_imgAvatar').css({'width': '35px', 'margin': '-5px 0px 0px -20px'});
		}
	}

	
	

	
	
	$('#ctl00_footer_pnlCustomFooter').css({"margin-top": "0px", "margin-bottom": "-15px", "backgroundColor": "#f2f2f2", "width": "100%", "padding": "0px"});
	
	// margin: top, right, bottom, left
	$('.df-footer').css({"margin": "0px 0px 0px 0px", "backgroundColor": "#f2f2f2", "width": "100%", "padding": "0px"});					
				
	$('.df-footer').each(function(){
	        $(this).html('<img src="https://bd-pilot.csod.com/clientimg/bd/welcome/angle.png" id="slopedFooterImage" />' +
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
	
	$('#sm1').css({'height': '30px', 'padding-bottom': '20px'});
	$('#sm2').css({'height': '45px', 'padding-bottom': '18px'});
	$('#sm3').css({'height': '37px', 'padding-bottom': '20px'});
	$('#sm4').css({'height': '37px', 'padding-bottom': '18px'});
	
	$('#footerTD2').css({"width": "40px"});
	$('#footerTD3').css({"width": "40px"});
	$('#footerTD4').css({"width": "40px"});
	$('#footerTD5').css({"width": "40px"});
	
	
	//enlarge the link area for the social media links
	$('.smLink').css({'font-size': '400%'});
	
	$('.footer-links').css({"padding-left": "0", "float": "right", "padding-right": "15px", "margin-top": "8px"});
	$('.footer-links li').css({"display": "inline-block", "line-height": "16px", "padding-right": "5px", "padding-left": "5px", "border-left": "1px solid #EEEEEE"});
	$('.footer-links li:first-child').css({"border-left": "none"});
	$('.footer-links a').css({"color": "#FFFFFF", "font-weight": "400", "text-decoration": "none", "font-size": "11px", "font-weight": "bold"});
	
	// sloped image with top margin
	 $('#slopedFooterImage').css({"width": "100%", "padding-bottom": "0px", "margin-top": "35px", "margin-bottom": "-5px"});
	
	 // margin: top, right, bottom, left
	 $('.footerTable').css({"margin": "0px 0px 0px 0px", "padding-top": "0px", "backgroundColor": "#004593", "width": "100%", "height": "100px"});

	  // copywrite info
	 $('.copy').css({'font-size': '11px', 'padding-left': '40px', 'text-align': 'center', "font-weight": "bold"});	
	
	//footer logo
	 $('#footerLogo').css({'height': '40px', 'margin-left': '20px', 'margin-right': '30px','padding-bottom': '20px'});
	 $('#footerTD1').css({'width': '60px', 'padding': '0px'}); 

	 $('#footerTDspace').css({'width': '15px'});
	
	 $('#footerTD6').css({"width": "50%", "color": "#ffffff"});
	 $('#footerTD7').css({"width": "20%"});

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
	

	
	//add words 'Learning Compass'
	var $LClabel = $("<H1>").text('Learning Compass');
	// margin: top, right, bottom, left
	$LClabel.css({'display': 'inline', 'float': 'left', 'backgroundColor': '#ffffff', 'margin': '5px 30px 0px 30px', 'padding': '0px 0px 0px 0px'});
	$('.c-glbl-nav').prepend($LClabel);
	
	

	//change the navigation bar to white, remove gradient		
	$('#main-menu').css({"background-image": "none", "background-color": "#ffffff"});
	
	//handle the navigation bar active tab, only decorate first descendant or main categories
	$('#main-menu > li.active').css({"background-color": "#ffffff", "text-decoration": "underline", "font-weight": "bold", "fontSize": "18px"});
	
	
	//$('#main-menu > li').css({"background-color": "#ffffff", "text-decoration": "underline", "font-weight": "bold", "fontSize": "18px"});
	//$('.navTabs li').css({"background-image": "none", "text-shadow": "none", "color": "#808080", "fontSize": "18px", "font-weight": "normal"});
	
	
	
	
	
	// navigation bar changes (font color and size here)
	 $('.navTabs li a').css({"background-image": "none", "text-shadow": "none", "color": "#808080", "fontSize": "18px", "font-weight": "normal"});
	
	//underlines all sub-categories of active category - do we want to do that?
	//$('.navTabs li.active a').css({"background-image": "none", "color": "#000000", "fontSize": "18px"});
	//$('.navTabs li a').css({"background-image": "none", "color": "#000000", "fontSize": "18px"});
	
	
	//$('.navTabs li.active a').css({"background-image": "none", "color": "#000000", "fontSize": "18px"});
	
	//$('.navTabs li.active li').css({"background-image": "none", "color": "yellow", "fontSize": "18px"});
	
	
	 //navigation bar hover - active hover is being blocked somewhere else (the hover is always blue or theme color)
	 $("#main-menu > li").hover(function(){ 
		 $(this).css({"backgroundColor": "yellow",  "color": "#000000", "text-decoration": "underline", "font-weight": "bold", "fontSize": "18px"}); },
		 function() { $(this).css({"backgroundColor": "#ffffff",  "color": "#808080", "text-decoration": "", "font-weight": "", "fontSize": "18px"}); }
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
	
	//underlines all sub-categories of active category - do we want to do that?
	//$('.navTabs li.active a').css({"background-image": "none", "color": "#000000", "text-decoration": "underline"});

	 $('.compass-title').css({"font-size": "20px", "line-height": "36px", "margin-left": "30px", "margin-right": "30px", "display": "inline-block"});

	if (document.title.indexOf("Welcome - Realize Your Potential") > -1)
	{
		
	      $('#header_headerFixed_hlAvatar').css({'backgroundColor': '#004593',  'margin-top': '5px', 'margin-left': '5px', 'border': '0px solid #004593'});  //yellow border
	      $('.avatar').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '5px', 'margin-left': '5px', 'border': '0px solid #004593'});
	      $('.avatar a .img').css({'backgroundColor': '#004593', 'border-radius': '0', 'margin-top': '5px', 'margin-left': '5px', 'border': '0px solid #004593'});
	      $('.avatar a').css({'backgroundColor': '#004593', 'border-radius': '0',  'margin-top': '5px', 'margin-left': '5px', 'border': '0px solid #004593'});
	      $('.user-interaction').css({'backgroundColor': '#004593', 'border-radius': '0', 'border': '0px solid #004593'});

	
		
		
	   //hide the first name field. It is only included to that we can use the name elsewhere
           $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").hide();
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl02_widgetContainer_ctl00_htmlContainer").hide();
	
	   var fname = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").text();
	   var lname = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl02_widgetContainer_ctl00_htmlContainer").text();

	  //all of this needs testing
	   $('*').css({"font-family": "'Source Sans Pro', sans-serif !important", "font-weight": "normal", "fontSize": "18px"});
	   $('body').css({"background-color": "#f2f2f2", "font-family": "'Source Sans Pro-bottom', sans-serif", "font-weight": "normal", "padding": "0", "margin": "0"}); 
	
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
	    $('.Panel_contentMiddle td a').css({"width": "150px", "color": "#ffffff", "font-weight": "normal", "padding": "10px 0px 10px 0px", "backgroundColor": "#004593", "display": "inline-block", "box-sizing": "border-box", "position": "relative"});
		
		
	    // margin: top, right, bottom, left
	    var chevImg = $('<img class="chevron1">'); //Equivalent: $(document.createElement('img'))
	    chevImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/rightArrowIcon.png');
	    chevImg.attr('height','22px');
            chevImg.appendTo('.Panel_contentMiddle td a');
	    $('.chevron1').css({'position': 'absolute', 'top': '13%', 'left': '81%', 'margin-left': '5px'});
           

		
		// $(".Panel_contentMiddle td a").hover(function(){ 
		//      $(this).css({"text-decoration": "none", "backgroundColor": "#003066"}); },
		//	function() { $(this).css({"backgroundColor": "#004593"}); }
		//); 
		
		 //$('.Panel_contentMiddle td a:after').css({"content": "\f054", "position": "absolute", "right": "0", "top: 10px", "color": "#ffffff", "width": "26px", "height": "28px", "isplay": "block", "font": "normal normal normal 14px/1 FontAwesome"});
		
		 $('.cs-panel-flat.Panel_footer, .cs-panel-plain.Panel_footer, .cs-panel-gradient.Panel_footer').css({"border": "none"});
		
		
		
		
	
		
     //adjust slider size
        //$("#my-slider").css({"width": "101%", "margin-bottom": "200//px"}); 
       // margin bottom pushes down the Cards
	$("#my-slider").css({"border": "none", "width": "100%", "margin-bottom": "10px", "margin-top": "0px", "padding-bottom": "0px", "padding-top": "0px"}); 
	
	//push down the My Learninig box	
        $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl04_widgetContainer_ctl00_pnlMyTraining").css({"margin-top": "150px"}); 
		
      //remove rounded corners from slider
	   document.getElementById("my-slider").style.borderRadius = "0px";
		
      //bring entire slider and body in general up to be flush with the warning banner under the nav bar
       $("#ctl00_masterPageBody").css({ "margin": "-40px 0px 0px 0px"}); 
	
      //Resize and reposition slider - margin: top, right, bottom, left
	  //$("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl00_widgetContainer_ctl00_htmlContainer").css({"width": "102%", "margin": "0px 0px 0px -5px"}); 
	   //$("#ctl00_masterPageBody").css({"width": "100.5%", "margin": "-40px 0px 0px -6px" });  //-30
	  //$("#ctl00_ContentPlaceHolder1_labelError").css({"width": "100%"}); 
	   //$("#ctl00_ContentPlaceHolder1_widgetLayout_mainPageDiv").css({"width": "100%"}); 
	  // $("#ctl00_ContentPlaceHolder1_widgetLayout_mainDivRenderedWidgets").css({"width": "100%"}); 
	  // $("#mainContainer").css({"width": "100%"}); 
	  // $("#container0").css({"width": "100%"});  
	  // $("#container7").css({"width": "100%"}); 
		  
		
          // $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl00_widgetContainer_ctl00_htmlContainer").css({"border": "none"}); 
	 
	  // $("#ctl00_ContentPlaceHolder1_labelError").css({"border": "none"}); 
	  // $("#ctl00_ContentPlaceHolder1_widgetLayout_mainPageDiv").css({"border": "none"}); 
		
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_mainDivRenderedWidgets").css({"border": "none", "height": "100px", "margin-top": "0px", "padding-top": "0px"}); 
	   $("#mainContainer").css({"border": "none", "height": "500x", "margin-top": "0px", "padding-top": "0px"}); 
	   $("#container0").css({"border": "none", "height": "500px", "margin-top": "0px", "padding-top": "0px"});  
	   $("#container7").css({"border": "none", "height": "500px", "margin-top": "0px", "padding-top": "0px"}); 
		
		
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
	
    //move plus to the far right and vertically center
    $('.cs-subjwidg-list li.cat a.exp-icon').css({'backgroundPosition': '98% 12px'});
    $('#dir-rtl .cs-subjwidg-list li.cat .exp-icon').css({'backgroundPosition': '98% 12px'});

    //replace plus with down arrow 
    $('.cs-subjwidg-list li.cat a.exp-icon').css({'background-image': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/downArrowSmall.jpg")'});
    $('#dir-rtl .cs-subjwidg-list li.cat .exp-icon').css({'background-image': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/downArrowSmall.jpg")'});
    $('.cs-subjwidg-list li.cat.nochild .exp-icon').css({"background-image": "none"});
	
    $('.cs-subjwidg-list li.cat a.exp-icon').click(function(e) {
    	  e.preventDefault();

	    var code = $(this).css('background-image');
	    if (code.indexOf("down") > -1)
            {
         	  $(this).css({'background-image': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/upArrowSmall.jpg")'});
	    }
	    else if (code.indexOf("up") > -1)
            {
         	  $(this).css({'background-image': 'url("https://bd-pilot.csod.com/clientimg/bd/welcome/downArrowSmall.jpg")'});
	    }
	});

	$(".cs-subjwidg-list li.cat .exp-icons.selected").css({"background-color": "#EEEEEE"});  
	$("#dir-rtl .cs-subjwidg-list li.cat .exp-icon.selected").css({"background-color": "#EEEEEE"});  
	
        $(".cs-subjwidg-list li.cat .exp-icons.selected:after").css({"content": "\f077"});  
	$("#dir-rtl .cs-subjwidg-list li.cat .exp-icon.selected:after").css({"content": "\f077"});  
	
	$(".cs-subjwidg-list li.cat.nochild .exp-icon").css({"border": "none"});  
	$("#dir-rtl .cs-subjwidg-list li.cat.nochild .exp-icon").css({"border": "none"});  
	
	$(".cs-subjwidg-list li.cat.nochild .exp-icon:after").css({"content": ''});  
	$("#dir-rtl .cs-subjwidg-list li.cat.nochild .exp-icon:after").css({"content": ''});  

	$(".cs-subjwidg-list li.cat a.exp-icon + a").css({"position": "relative", "top": "-22px", "padding-left": "16px", "text-decoration": "none", "color": "#333333", "font-weight": "400"});  
        $(".cs-subjwidg-list li.cat.nochild .exp-icon + a").css({"position": "relative", "top": "-22px", "padding-left": "16px", "text-decoration": "none", "color": "#333333", "font-weight": "400"});  
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
		


