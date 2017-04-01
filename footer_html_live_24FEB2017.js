
$(document).ready(function(){

	 //$('.cs-main-sep').innerHTML = 
        //get the separation div just below Browse For Training

	if (document.title.indexOf("Browse for Training") > -1)
	{			
		var sepElements = document.getElementsByClassName("cs-main-sep"); 
		var queryElement = sepElements[0];
	
		//add html for search
		queryElement.innerHTML = '<div>' +
		 		'<span class="cso-txt blue">' +
				'<label for="ctl00_ContentPlaceHolder1_txtsearch" id="ctl00_ContentPlaceHolder1_lblSearch" class="cs-acc-hid-con">What would you like to search for?</label>' +
				'This item is part of a curriculum. ' +
				'Please return to the previous page and select Request to access this item.' +
				'</span>' +
				'</div>';

	}
	
       // $('.cso-h1').css("color", "red");		
 
	
	

/*		 
<!-- Search Bar -->
		"<div class='srch-cont-outer'>
		     <div id='srch-ctrl' class='srch-cont'>
		        <div class='input-cont-outer'>
			   <span class='input-cont'>
				<label for="ctl00_ContentPlaceHolder1_txtsearch" id="ctl00_ContentPlaceHolder1_lblSearch" class="cs-acc-hid-con">What would you like to search for?</label>
				<input name="ctl00$ContentPlaceHolder1$txtsearch" type="text" maxlength="250" id="ctl00_ContentPlaceHolder1_txtsearch" title="Search" class="txtsearch" />
				<input type="hidden" name="ctl00$ContentPlaceHolder1$WcTextBoxWatermarkExtender1_ClientState" id="ctl00_ContentPlaceHolder1_WcTextBoxWatermarkExtender1_ClientState" />
				<select name="ctl00$ContentPlaceHolder1$ddlSearchEngine" id="ctl00_ContentPlaceHolder1_ddlSearchEngine" title="Select a category" class="ddlSearchEngine" style="width:118px;">
					<option selected="selected" value="1">Training</option>
				</select>'		 
*/		 
	


// $('.cs-main-sep').css("background-color", "yellow");

//$('.brdcrmhdr').css("color", "red");
	
//$("#ctl00_ContentPlaceHolder1_widgetLayout_rptWidgets_ctl01_widgetContainer_ctl00_htmlContainer").css("background-color", "yellow");
	
	/*
	try {
				if (document.getElementById("common-messages").innerHTML.indexOf("This training item is currently unavailable to you.") > -1) {
					
					document.getElementById("common-messages").innerHTML = '<div>' +
                
						'<span class="cso-txt blue">' +
						'This item is part of a curriculum. ' +
						'Please return to the previous page and select Request to access this item.' +
						'</span>' +
					'</div>';
					
				}
			} catch(err) {
				console.log("common-messages = null");
			}
*/
	
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

