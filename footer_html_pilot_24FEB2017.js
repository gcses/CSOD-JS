$(document).ready(function(){
 
	console.log("Test6");
	
	//defer loading / set time out / long time out
	//setTimeout(getAdditionalCSS, 30000);
	//$('body').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://github.com/gcses/CSOD-JS/blob/master/additonalStyles.css') );
	
	//hide the various Cornerstone footers
	$('.df-footer').hide();
	
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
	
           /*Header Top Bar*/     
           $('.imageLogo').css({"margin-left": "30px"});
	   $('#tblTopBar').css({"background-color": "#004593"});  /* Mark, please change this in the admin from #ffffff */
           $('#tblTopBar tr:nth-child(1), #tblTopBar tr:nth-child(3)').css({"height": "0"});
           $('.user-interaction li').css({"background-color": "none !important", "border": "none", "border-radius": "0", "padding-left": "3px", "border-left": "solid 1px #ffffff", "margin-left": "3px"});
           $('.user-interaction li:first-child').css({"color": "#ffffff", "text-align": "center", "line-height": "32px", "width": "auto !important", "padding": "0 10px 0 24px !important", "border-left": "none"});
						      
	    $('#main-menu').css({"background-color": "#ffffff"});	 /* Mark, there's still a gradient-looking background though it was turned off in the admin, please investigate */			      
	   $('.compass-title').css({"font-size": "20px", "line-height": "36px", "margin-left": "30px", "margin-right": "30px", "display": "inline-block"});
	    $('.navTabs').css({"background-color": "#ffffff"});	
	
	    $('#main-menu).css({"background-color": "#ffffff"});
	   $('.c-glbl-nav').css({"background-color": "#ffffff"});
	   $('.smenu sm navTabs').css({"background-color": "#ffffff"});
		
		
		
		
		
	    $('.navTabs li a').css({"text-shadow": "none", "color": "#808080", "font-weight": "normal"});
	    $('.navTabs li.active, .navTabs li:hover').css({"background-color": "transparent !important", "text-shadow": "none"});
	    $('.navTabs li.active a, .navTabs li:hover a').css({"color": "#000000", "text-decoration": "underline"});

	
		/*
		Targets: <div role="navigation" aria-label="Main menu">
    				<div role="application" class="c-glbl-nav">
        				<ul id="main-menu" class="smenu sm navTabs" aria-label="Main menu">

					 <li class="active">
*/

		
		
		
		
		
		
		
		
		
		
	   // $('.#search .cso-top-srch-box ').css({"height": "37px", "border-color": "#dddddd", "box-shadow": "none", "margin": "0 10px 0 0"});
	    //$('#search input').css({"height": "37px"});	     
	    //$('#search .search-lnk:after').css({"content": "\f002", "position": "absolute", "right": "0", "top": "0", "color": "#004593", "width": "26px", "height": "28px", "display": "block", "font": "normal normal normal 14px/1 FontAwesome"});

	    /*Tables*/
		/*
            $('.cs-panel-flat, .cs-panel-plain, .cs-panel-gradient').css({"
 	    $('.cs-panel-flat .Panel_content').css({"
	    $('.cs-panel-flat .Panel_title').css({"
	    $('.Panel_titleMiddle a, .Panel_titleMiddle a:hover').css({"
	    $('.cs-panel-flat .Panel_titleMiddle div, .cs-panel-plain .Panel_titleMiddle div, .cs-panel-gradient .Panel_titleMiddle div, .cs-panel-flat .Panel_titleMiddle h2, .cs-panel-plain .Panel_titleMiddle h2, .cs-panel-gradient .Panel_titleMiddle h2').css({"
	    $('.cs-panel-flat').css({"
            $('table .CsList th').css({"
	    $('.Panel_contentMiddle td').css({"
	    $('.Panel_contentMiddle tr:hover, .tablerolloverNewUI,.CsList tbody tr:hover td').css({"
	    $('.Panel_contentMiddle tr:last-child td').css({"
		*/  


		
		
		
	   //remove rounded corners from slider
           $("#my-slider").css({"width": "101%", "margin-bottom": "200px"}); 
	   document.getElementById("my-slider").style.borderRadius = "0px";
	   //document.getElementById("my-slider").style.zIndex = "-10000";  //this may be too deep in the stack
	
	   // //Resize and reposition slider - margin: top, right, bottom, left
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl00_widgetContainer_ctl00_htmlContainer").css({"width": "102%", "margin": "0px 0px 0px -5px"}); 
	   //$("#ctl00_masterPageBody").css({"width": "100.5%", "margin": "-77px 0px 0px -6px" }); 
		
		
		 $("#ctl00_masterPageBody").css({"width": "100.5%", "margin": "-30px 0px 0px -6px" }); 
		
		
		
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
	//$(".topBarOuter").css({"background-color": "yellow" });  

	//var headerTable = document.getElementById('tblTopBar');
	//headerTable.style.backgroundImage = "url('https://rawgit.com/gcses/CSOD-JS/master/header.JPG')";
	
       // $('.cso-h1').css("color", "red");	
	
	
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
	
	$('.item.oc').css({'background':'url("https://placeholdit.imgix.net/~text?txtsize=33&txt=61×61&w=61&h=61")'});
	$('.item.mt').css({'background':'url("https://placeholdit.imgix.net/~text?txtsize=33&txt=61×61&w=61&h=61")'});
	$('.item.ts').css({'background':'url("https://placeholdit.imgix.net/~text?txtsize=33&txt=61×61&w=61&h=61")'});
	$('.item.ev').css({'background':'url("https://placeholdit.imgix.net/~text?txtsize=33&txt=61×61&w=61&h=61")'});
	$('.item.vd').css({'background':'url("https://placeholdit.imgix.net/~text?txtsize=33&txt=61×61&w=61&h=61")'});

	$('#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_pnlSuggestedTraining_title').css({'background-color':'#00B8B0'});
	
	//this setInterval logic breaks Internet Explorer
	//window.setInterval(replaceOnlineClass, 1000);
        replaceOnlineClass();
	
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

	
    // font awesome down arrow
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

/*
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}


function dataBind(domElement, obj) {    
    var bind = domElement.getAttribute("bind").split(":");
    var domAttr = bind[0].trim(); // the attribute on the DOM element
    var itemAttr = bind[1].trim(); // the attribute the object

    // when the object changes - update the DOM
    Object.observe(obj, function (change) {
        domElement[domAttr] = obj[itemAttr]; 
    });
    // when the dom changes - update the object
    new MutationObserver(updateObj).observe(domElement, { 
        attributes: true,
        childList: true,
        characterData: true
    });
    domElement.addEventListener("keyup", updateObj);
    domElement.addEventListener("click",updateObj);
    function updateObj(){
        obj[itemAttr] = domElement[domAttr];   
    }
    // start the cycle by taking the attribute from the object and updating it.
    domElement[domAttr] = obj[itemAttr]; 
}

*/

function replaceOnlineClass() 
{
    //	console.log("replace() - Start");
		
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
		


