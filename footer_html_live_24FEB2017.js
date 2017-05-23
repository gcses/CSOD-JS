$(document).ready(function(){

     //$('.cso-h1').css("color", "red");
	
	console.log("Test1");
	
	$('#main-menu').css({"background-image": "none", "background-color": "#004593"});
	
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
	    
	//hide the various Cornerstone footers
	$('.df-footer').hide();
	
	/*
	//swap the shopping carts coupon code text for customer code (this swaps but does not update somehow)
	$('label:contains("coupon")').each(function(){
		$(this).html("Enter customer code");
		});
	
	//write to console to confirm attributes
       // var x = $("label[for='txtCouponCode']").text();
	//console.log("text: " + x);
	
	//swap the shopping carts coupon code text for customer code
	$('span:contains("Coupon Code")').each(function(){
		console.log("span found!!");
	        $(this).html($(this).html().replace('Coupon','Customer'));
		});
	
	//swap the label in the shopping reference number with purchase order number
	$('label:contains("Reference Number")').each(function(){
 		$(this).html($(this).html().replace('Reference Number','Purchase Order Number'));
		});
	
	//swap the div shopping reference number with purchase order number
	$('div:contains("Reference Number")').each(function(){
 		$(this).html($(this).html().replace('Reference Number','Purchase Order Number'));
		});
		
	*/
	
	//$('.cso-input-outer.med.cso-fleft-ie7').css({"background-color": "yellow"}); 
	/*
	
	//write to console to confirm attributes
	console.log("Test");
        var x = $("label[for='txtCouponCode']").text();
	console.log("text: " + x);
	
	$("label[for='txtCouponCode']").text("Whassup Foo");
	$("label[for='txtCouponCode']").hide();
	$("label[for='txtCouponCode']").css({"color": "black"}); 
	*/
	
	
	
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
	
       //hide the first name field. It is only included to that we can use the name elsewhere
       $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").hide();
	
       //use the name field to alter the My Learning header
       var fName = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").text();
	
	if (fName != null)
	{
     	  $('h2:contains("My Learning")').each(function(){
 	    $(this).html($(this).html().replace('My Learning', fName + '\'s Learning In Progress'));
		});
	}

        $smjquery('#main-menu').smartmenus('refresh');
	
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

	//setInterval here breaks Internet Explorer
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
	
	 // console.log("replace() - End");
	
});



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
		



/*
 function passSerializedValuesBackToSearchPage(values) {
        ResetViewAfterPostback();
        globalSearchManager.onSearchButtonClick(values);
    }
    function closeDialog() {
        globalSearchManager.closeAdvanceOptionIFrame();
        globalSearchManager.initMoreSearchOptions();
    }
    function HideAdvanceControl() {
        $('.divAdvanceControls').hide();
    }
    function ShowAdvanceControl(selectedSearchEngineId) {    
        $('.divAdvanceControls[engineId="' + selectedSearchEngineId + '"]').show();
        //Set the search engine to the hidden field on the Advance Optional Control
        $("input[id*='hfCurrentSearchEngine']").val(selectedSearchEngineId);
    }
    function PopulateAdvanceFields(selectedSearchEngineId, advanceCoptions) {
        $("input[id*='hfCurrentSearchEngine']").val(selectedSearchEngineId);
        $("input[id*='hfAdvanceOptions']").val(advanceCoptions);
        __doPostBack('ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$lkPopulateAdvanceFields','');
    }
    function ResetViewAfterPostback(){
        //Set the Advance Control Visible based on the hidden field value
        var selectedSearchEngineId = $("input[id*='hfCurrentSearchEngine']").val();
        ShowAdvanceControl(selectedSearchEngineId);
    }
var globalSearchManager;
	function Initialize() {
		globalSearchManager = new GlobalSearchManager({
			searchTextSelector: '.txtsearch',
			searchEngineSelector: ".ddlSearchEngine",
			advanceOptionsSelector: '#divAdvanceOptions',
			advanceOptionsLinkSelector: '#lnkShowMoreSearchOptions',
			loaderSelector: '#loader',
			resultContainerSelector: '.srch-rslts',
			searchButtonSelector: '#btSearch',
			queryTipMessage: '#divEmptyQueryMessage',
			HasMoreResultSelector: 'input[id$="hdHasMoreResult"]',
		});
		$(window).unload(function () {
			if (window.history.replaceState) {
				var obj = {
					html: $('.srch-rslts').html(),
					hasMoreResult: globalSearchManager._getHasMoreResultFlag()
				};
				window.history.replaceState(obj, "search result", window.location.href);
			}
		});
		$(window).hashchange(function () {
			globalSearchManager.onHashChange();
			UpdateShoppingActivity();
		});
		$(window).scroll(function () {
			if ($(window).scrollTop() != 0) {
				$(".toTop").fadeIn();
			}
			else {
				$(".toTop").fadeOut();
			}
			var scrollPercent = ($(window).scrollTop() + $(window).height()) / $(document).height();
			if (scrollPercent > .80) {
				globalSearchManager.onPaging();
			}
		});
		$(".toTop").click(function () {
			$('body,html').animate({ scrollTop: 0 }, 800);
		});
		$(".txtsearch:input").keydown(function (e) {
			if (e.keyCode == 13) {
				
				var enterEvent = new jQuery.Event("enter.ps", { veto: false });
				$(this).trigger(enterEvent);
				if (!enterEvent.veto) {
					if ($("#btSearch").is(':disabled') == false) {
						$("#btSearch").click();
					}
					else if ($('#divAdvanceOptions').is(':visible') == true) {
						$('[id$="btSubmit"]', '#divAdvanceOptions').get(0).click();
					}
				}
			}
		});
		$(".cbFilter").click(function () {
			globalSearchManager.onFilterCheckBoxClick();
		});
		$(".hlFilter").click(function () {
			globalSearchManager.onFilterLinkClick(this);
		});
		$(".hlIcon").click(function () {
		    $(this).toggleClass("selected");
		    // if you don't do this here, this page will rely on deserializeParam() function, which will take the parameters from the last
		    // request string rather than what was entered on the UI. Check for isWatermarked and then send an empty string if it is.
		    if (Sys.Extended.UI.TextBoxWrapper.get_Wrapper($(globalSearchManager.searchTextSelector)[0])._isWatermarked) {
		        GlobalSearchContext.query = "";
		    } else {
		        GlobalSearchContext.query = $(globalSearchManager.searchTextSelector).val() || "";
		    }
			globalSearchManager.onFilterIconClick();
		});
		$(".ddlSearchEngine").change(function () {
			var index = $(".ddlSearchEngine").get(0).selectedIndex;
			if ($(".ddlSearchEngine option").size() > 1) {
				$(".ddlSearchEngine").dropkick('selectedIndex', index); // update dropkick (UI only since the dropdown has already been changed)
			}
			globalSearchManager.onSearchEngineIndexChanged();
		});
		$('#lnkShowMoreSearchOptions').click(function () {
			globalSearchManager.showAdvanceOptionIFrame();
		});
		$("#btSearch").click(function () {
			globalSearchManager.onSearchButtonClick();
		});
		globalSearchManager.onPageLoad();
		//Bind the dropkick event after onPageLoad!!!
		// if they click the dropkick, hide the options immediately since adv controls are positioned relatively above this control and the styles will break in ie
		$('.dk_toggle', '.input-cont-outer').click(function () {
			globalSearchManager.closeAdvanceOptionIFrame();
		});
		$('.dk_toggle', '.input-cont-outer').blur(function () {
			globalSearchManager.initMoreSearchOptions();
		});
	
		UpdateShoppingActivity();
	}
    function CloseAlertMessage() {
        $('[id$="divSearchAlertMessage"]').hide();
    }
    function UpdateShoppingActivity() {
        if(!false)
            return;
		var searchParams = globalSearchManager.getQueryString(); // uses hash if present; query params otherwise
		// if s param is set to 1 (training) or nothing (everything) we should save shopping activity
		var shouldSaveShoppingActivity = false;
		var searchParamArray = searchParams.split("&");
		for (var i = 0; i < searchParamArray.length; i++) {
			var pair = searchParamArray[i].split("=");
			if (pair[0] == 's') {
				if (pair[1] == '1' || pair[1].length == 0) {
					shouldSaveShoppingActivity = true;
				}
				break;
			}
		}
		if (shouldSaveShoppingActivity) {
			csCommon.updateShoppingActivity('/LMS/WebServices/ExtendedEnterpriseService.asmx/SaveShoppingActivity', window.location.href);
		}
	}
	function GetBackQueryString() {
		var backQueryString = window.location.search;
		var hashIndex = window.location.href.indexOf("#");
		if (hashIndex != -1) {
			backQueryString += window.location.href.substring(hashIndex);
		}
		return backQueryString;
	}
	function GetTrainingNavUrl(loId) {
		var backQueryString = GetBackQueryString();
		var searchUrl = '/GlobalSearch/Search.aspx' + backQueryString;
		var url = '/LMS/LoDetails/DetailsLo.aspx?loid=' + loId + '&query=' + encodeURIComponent(backQueryString) + '&back=' + encodeURIComponent(searchUrl);
		window.location = url;
	}
	function GetCourseReviewNavUrl(loId) {
		var backQueryString = GetBackQueryString();
		var url = '/LMS/LoDetails/DetailsLo.aspx?loid=' + loId + '&query=' + encodeURIComponent(backQueryString) + '#t=2';
		window.location = url;
	}
	function GetPeopleProfileNavUrl(userId) {
		var backQueryString = GetBackQueryString();
		var url = '/EPM/PeopleFinder/Profile.aspx?u=' + userId + '&m=1&query=' + encodeURIComponent(backQueryString);
		window.location = url;
	}
	function GetVMNavUrl(vmId) {
		var backQueryString = GetBackQueryString();
		var url = '/LMS/VMDetails/VMDetails.aspx?vmId=' + vmId + '&query=' + encodeURIComponent(backQueryString);
		window.location = url;
	}
	function GetCertificationNavUrl(certId) {
		var backQueryString = GetBackQueryString();
		var url = '/LMS/Certification/CertificationDetails.aspx?certid=' + certId + '&query=' + encodeURIComponent(backQueryString);
		window.location = url;
	}
	function GetConnectPostingNavUrl(postingURL) {
		var backQueryString = GetBackQueryString();
		var url = ResolveUrl(postingURL.substring(1)) + '&query=' + encodeURIComponent(backQueryString);
		window.location = url;
*/
