
$(document).ready(function(){

	if (document.title.indexOf("Browse for Training") > -1)
	{			
		var sepElements = document.getElementsByClassName("cs-main-sep"); 
		var queryElement = sepElements[0];
	
		//add html for search
		queryElement.innerHTML = '<div class="srch-cont-outer">' +
				'<div id="srch-ctrl" class="srch-cont">' +
		        	'<div class="input-cont-outer">' +
		 		'<span class="cso-txt blue">' +
				'<label for="ctl00_ContentPlaceHolder1_txtsearch" id="ctl00_ContentPlaceHolder1_lblSearch" class="cs-acc-hid-con">What would you like to search for?</label>' +
				'<input name="ctl00$ContentPlaceHolder1$txtsearch" type="text" maxlength="250" id="ctl00_ContentPlaceHolder1_txtsearch" title="Search" class="txtsearch" />' +
				'<input type="hidden" name="ctl00$ContentPlaceHolder1$WcTextBoxWatermarkExtender1_ClientState" id="ctl00_ContentPlaceHolder1_WcTextBoxWatermarkExtender1_ClientState" />' +
				'<select name="ctl00$ContentPlaceHolder1$ddlSearchEngine" id="ctl00_ContentPlaceHolder1_ddlSearchEngine" title="Select a category" class="ddlSearchEngine" style="width:118px;">' +
					'<option selected="selected" value="1">Training</option></select>' +	 
				'</span>' +
				'</div></div></div>';
		
		function populatePSQuery_Search(query) {
			query.index = $('#ctl00_ContentPlaceHolder1_ddlSearchEngine').val();
			}

		function psItemSelected_Search() {
			if ($("#btSearch").is(':disabled') == false) {
				$("#btSearch").click();
			}
		}

		queryElement.innerHTML += '<link rel="stylesheet" type="text/css" href="/Core/GlobalSearch/PredictiveSearch/PredictiveSearch.css" />' +      
    					  '<script src="/Core/GlobalSearch/PredictiveSearch/PredictiveSearch.js?hsh=-1363452586" type="text/javascript"></script>';

		
		 (function (onload) {
            if (window.addEventListener) {
                window.addEventListener('load', onload, false);
            } else if (window.attachEvent) {
                window.attachEvent('onload', onload);
            }
        })(function () {
            new PredictiveSearch('ctl00_ContentPlaceHolder1_txtsearch',
                         '/Core/GlobalSearch/PredictiveSearch/PredictiveSearchService.ashx',
                         '|rWhe3ES6+2gcQp01Yw9olk3oPo3K+lrChNP+K8aFfoWNm4hT0tqBCAdb+J/7YrHK4cM0CEqo5WyQzSCCx9mUVA==||',
                         'populatePSQuery_Search',
                         'psItemSelected_Search',
                         '0',
                         '',
                         '2'
                ).initialize();
        });

		
		/*
			</span>
									<span id="btSearch" class="cs-srch-btn-cont">
										<button type="button" class="bd">
										<span class="cs-srch-btn-go">Search</span>
										</button>
									</span>
									<br />
								</div>
								<a id="lnkShowMoreSearchOptions" href="javascript:void(0)" style="display: none;" title='Refine search'>
									<span class="cs-moresrchoptns-cont">Refine search</span>
								</a>
								<!-- Advanced Search Options -->
								<div id="divAdvanceOptions" class="cs-advsrch-frame" style="display: none; z-index: 4">
*/
		
		
		
	}
	
       $('.cso-h1').css("color", "red");		
 
	
	
	
	
	
	
	
	
	
  //show the advanced search option whenever search is shown
  $("#lnkShowMoreSearchOptions").each(function(){
      //$("#srch-ctrl").each(function(){
	// console.log("#srch-ctrl.offsetHeight = " + $(this).offsetHeight);
	//});
	eventFire(document.getElementById('lnkShowMoreSearchOptions'), 'click');
   });

  //remove the close button on the advanced options
  $(".cs-advsrch-close-btn").remove();
	
  //hide the first name field. It is only included to that we can use the name elsewhere
  //$("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").hide();
	
  //use the name field to alter the My Learning header
  var fName = $("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").text();
  $('h2:contains("My Learning")').each(function(){
 	    $(this).html($(this).html().replace('My Learning', fName + '\'s Learning In Progress'));
	});
	
   //add smart menu items that allow for third party links
   $(".smenu.sm.navTabs").append('<li><a href="javascript:;" title="Support" aria-haspopup="true" aria-expanded="false" aria-controls="menu-Support" class="has-submenu"><span class="sub-arrow">+</span>Support</a><ul class="navTabs-subTabList sm-nowrap" role="group" aria-labelledby="Support" aria-expanded="false" style="display: none; width: auto; min-width: 10em; max-width: 20em; top: auto; left: 0px; margin-left: 0px; margin-top: 0px"><li><a href="http://cp.carefusion.com" title="Change Password" tabindex="-1">Change Password</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Contact Us" tabindex="-1">Contact Us</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Frequently Asked Questions" tabindex="-1">Frequently Asked Questions</a></li></ul></li>');

   $smjquery('#main-menu').smartmenus('refresh');
});

function eventFire(element, elementType){
	if (element.fireEvent) {
		element.fireEvent('on' + elementType);
	} 
	else {
		var eventObject = document.createEvent('Events');
		eventObject.initEvent(elementType, true, false);
		element.dispatchEvent(eventObject);
	}
}

