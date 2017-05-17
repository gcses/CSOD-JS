$(document).ready(function(){
 
	console.log("Test5");
	
	//hide the various Cornerstone footers
	$('.df-footer').hide();
	
	if (document.title.indexOf("Welcome - Realize Your Potential") > -1)
	{
	   //hide the first name field. It is only included to that we can use the name elsewhere
           $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").hide();
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl02_widgetContainer_ctl00_htmlContainer").hide();
	
	   var fname = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").text();
	   var lname = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl02_widgetContainer_ctl00_htmlContainer").text();

	   var elements = document.getElementsByClassName('avatar');
           var univProfileLi = elements[0];
	   univProfileLi.innerHTML += fname + " " + lname; 
	   univProfileLi.style.width = "120px";  
	   univProfileLi.style.verticalAlign = "middle";
		
	   //remove rounded corners from slider
           $("#my-slider").css({"width": "101%"}); 
	   document.getElementById("my-slider").style.borderRadius = "0px";
	   document.getElementById("my-slider").style.zIndex = "-10000";
	
	   // //Resize and reposition slider - margin: top, right, bottom, left
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl00_widgetContainer_ctl00_htmlContainer").css({"width": "102%", "margin": "0px 0px 0px -5px"}); 
	   $("#ctl00_masterPageBody").css({"width": "100.6%", "margin": "-77px 0px 0px -6px" }); 
	   $("#ctl00_ContentPlaceHolder1_labelError").css({"width": "100%"}); 
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_mainPageDiv").css({"width": "100%"}); 
	   $("#ctl00_ContentPlaceHolder1_widgetLayout_mainDivRenderedWidgets").css({"width": "100%"}); 
	   $("#mainContainer").css({"width": "100%"}); 
	   $("#container0").css({"width": "100%"});  
	   $("#container7").css({"width": "100%"}); 
		
		//try to drive slider beneath cards
		document.getElementById("ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl00_widgetContainer_ctl00_htmlContainer").style.zIndex = "-10000";
		document.getElementById("ctl00_masterPageBody").style.zIndex = "-10000";
		document.getElementById("ctl00_ContentPlaceHolder1_labelError").style.zIndex = "-10000";
		document.getElementById("ctl00_ContentPlaceHolder1_widgetLayout_mainPageDiv").style.zIndex = "-10000";
		document.getElementById("ctl00_ContentPlaceHolder1_widgetLayout_mainDivRenderedWidgets").style.zIndex = "-10000";
		document.getElementById("mainContainer").style.zIndex = "-10000";
		document.getElementById("container0").style.zIndex = "-10000";
		document.getElementById("container7").style.zIndex = "-10000";

	   //$("#my-slider").css('position', 'relative');
           // $("#my-slider").css('z-index', 3000);
		
	   //Cards (z-index cannot be changed in jQuery)
	   //<div class="wrapper"><div class="cso-min-height"><ul><div class="card">
	    $(".wrapper").css({"margin": "-77px 0px 0px 0px"}); 
	   // $(".cso-min-height").css({"width": "50%", "margin": "-77px 0px 0px 0px" }); 
	   // $(".card").css({"width": "50%", "margin": "-77px 0px 0px 0px" }); 
		//style.zIndex="-1"
		
		
		
		
		
		
	}
	
	
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
		


