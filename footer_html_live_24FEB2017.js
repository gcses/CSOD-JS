
$(document).ready(function(){

	if (document.title.indexOf("Browse for Training") > -1)
	{			 
                //define style of grey area around search options
		$(".cs-main-sep").css({"backgroundColor": "#EEEEEE", "height": "210px",  "margin": "40px 0px 40px 0px", "padding": "15px", "border-style": "solid", "border-width": "1px", "border-radius": "5px", "border-color": "grey"});   
		
		var sepElements = document.getElementsByClassName("cs-main-sep"); 
		var queryElement = sepElements[0];
		
		queryElement.innerHTML += '<input id="searchText" placeholder="What would you like to search for?" style="font-style:italic"></input><br/>';
		
		$("#searchText").css({"padding": "5px", "width": "520px"});   
		
		queryElement.innerHTML += '<hr id="searchHR" /><br/>';
		$("#searchHR").css({"border-color": "grey"});   
		
		
		
	
		
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

		queryElement.innerHTML += '<div id="divAdvanceOptions" class="cs-advsrch-frame" style="display: none; z-index: 4">';
		
		
		
		

		//L. 1713-1752
		
		queryElement.innerHTML += '<div id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_uplAdvanceOptions">' +
					'<div onkeypress="javascript:return WebForm_FireDefaultButton(event, &#39;ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_btSubmit&#39;)">' +
					'<span class="cs-acc-hid-con">' +
            				'<input type="hidden" name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$hfCurrentSearchEngine" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_hfCurrentSearchEngine" />' +
           				' <input type="hidden" name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$hfAdvanceOptions" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_hfAdvanceOptions" />';

		
		 queryElement.innerHTML += '<a id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_lkPopulateAdvanceFields" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$lkPopulateAdvanceFields&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))"></a>' +
            				'</span><div class="cs-advsrch-cont1">' +
		  			'<div class="cs-advsrch-cont-title">' +
				    	'<a class="cs-advsrch-close-btn" href="#" onclick="closeDialog(); return false;">' +
                       			' &#215;' +
                    			'</a><span class="cso-txt-lrg" style="line-height:normal;">Refine your search</span></div><br/>';

		  queryElement.innerHTML +=  '<div id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_divAdvanceControls" class="divAdvanceControls" style="display: none" engineId="1">' +
					     '<span class="cs-advsrch-item1">' +
        				     '<label class="cs-acc-hid-con" for="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_tbKeywords">Keywords:</label>' +
       					     '<input name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$tbKeywords" type="text" maxlength="100" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_tbKeywords" class="cs-advsrch-input" /><input type="hidden" name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$atxKeywords_ClientState" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_atxKeywords_ClientState" />' +
    					     '</span><span class="cs-advsrch-item1">';
        

		//L. 1791- 
		queryElement.innerHTML += '<table id="advSearchTable"><tr><td>Brand:</td><td>Product:</td><td>Role:</td></tr><tr>';
		
		
		
		 queryElement.innerHTML += '<td><input name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$rptCustomFields$ctl00$ucCFWrapper$ctl00$parentValue" type="hidden" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_rptCustomFields_ctl00_ucCFWrapper_ctl00_parentValue" /><select name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$rptCustomFields$ctl00$ucCFWrapper$ctl00$lstControl" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_rptCustomFields_ctl00_ucCFWrapper_ctl00_lstControl" class="FieldValue">' +
					'<option selected="selected" value="-1">Select</option>' +
					'<option value="1">Pyxis</option>' +
					'<option value="2">Alaris</option>' +
					'<option value="3">Cato</option>' +
					'<option value="4">BD</option>' +
					'<option value="5">MedMined</option>' +
					'<option value="6">Rowa</option>' +
					'<option value="7">V. Mueller</option>' +
					'</select></td>';
		
		queryElement.innerHTML += '<td><input name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$rptCustomFields$ctl01$ucCFWrapper$ctl00$parentValue" type="hidden" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_rptCustomFields_ctl01_ucCFWrapper_ctl00_parentValue" /><select name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$rptCustomFields$ctl01$ucCFWrapper$ctl00$lstControl" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_rptCustomFields_ctl01_ucCFWrapper_ctl00_lstControl" class="FieldValue">' +
			'<option selected="selected" value="-1">Select</option>' +
			'<option value="8">3100A HFOV</option>' +
			'<option value="9">ACE</option>' +
			'<option value="10">Alaris Server 9.2.1</option>' +
			'<option value="79">Alaris Plus Editor</option>' +
			'<option value="56">Alaris System with Guardrails Suite MX</option>' +
			'<option value="80">Alaris Viewer Suite</option>' +
			'<option value="11">Anesthesia ES</option>' +
			'<option value="12">Anesthesia System</option>' +
			'<option value="13">AVEA</option>' +
			'<option value="76">CATO</option>' +
			'<option value="14">CIISafe</option>' +
			'<option value="15">Connect</option>' +
			'<option value="16">CQI Reporter</option>' +
			'<option value="17">DuoStation</option>' +
			'<option value="18">EnVe</option>' +
			'<option value="19">Gateway Workstation v1.2</option>' +
			'<option value="78">Gateway Workstation v1.5</option>' +
			'<option value="20">Guardrails Editor</option>' +
			'<option value="21">IMPRESS</option>' +
			'<option value="22">Infant Flow LP</option>' +
			'<option value="23">Alaris Infusion System</option>' +
			'<option value="24">Alaris Infusion Viewer</option>' +
			'<option value="25">International (Non-USA)</option>' +
			'<option value="26">Knowledge Portal</option>' +
			'<option value="27">LTV</option>' +
			'<option value="28">Medication Stewardship Advisor</option>' +
			'<option value="29">MedMined</option>' +
			'<option value="30">MedStation</option>' +
			'<option value="31">MedStation ES</option>' +
			'<option value="32">MicroLoop</option>' +
			'<option value="55">N/A</option>' +
			'<option value="33">Nurse Link</option>' +
			'<option value="34">ParAssist</option>' +
			'<option value="77">PARx</option>' +
			'<option value="35">Patterns</option>' +
			'<option value="36">PHACTS</option>' +
			'<option value="37">Pharmacy</option>' +
			'<option value="38">PharmoCode (Canada)</option>' +
			'<option value="39">Pharmogistics</option>' +
			'<option value="40">PharmoPack</option>' +
			'<option value="41">ProcedureStation</option>' +
			'<option value="42">Pyxis Advisor</option>' +
			'<option value="43">Pyxis Control Center</option>' +
			'<option value="44">Pyxis Enterprise Server</option>' +
			'<option value="45">Pyxis ES</option>' +
			'<option value="46">Pyxis ES Link</option>' +
			'<option value="47">Pyxis IV</option>' +
			'<option value="48">Pyxis Medication Dispensing</option>' +
			'<option value="49">Respiratory</option>' +
			'<option value="50">ScrubStation</option>' +
			'<option value="51">SpecialtyStation</option>' +
			'<option value="52">SupplyStation</option>' +
			'<option value="53">Tissue and Implant Module</option>' +
			'<option value="54">VELA</option>' +
			'</select></td>';
		
		queryElement.innerHTML += '<td><input name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$rptCustomFields$ctl02$ucCFWrapper$ctl00$parentValue" type="hidden" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_rptCustomFields_ctl02_ucCFWrapper_ctl00_parentValue" /><select name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$rptCustomFields$ctl02$ucCFWrapper$ctl00$lstControl" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_rptCustomFields_ctl02_ucCFWrapper_ctl00_lstControl" class="FieldValue">' +
			'<option selected="selected" value="-1">Select</option>' +
			'<option value="57">Administrator/System Manager</option>' +
			'<option value="58">Anesthesia Provider</option>' +
			'<option value="59">Biomed</option>' +
			'<option value="60">Material Management personnel</option>' +
			'<option value="61">Nurse/Clinician</option>' +
			'<option value="62">Pharmacist</option>' +
			'<option value="63">Pharmacy Technician</option>' +
			'<option value="64">Radiology Technician</option>' +
			'<option value="65">Respiratory Therapist</option>' +
			'</select></td></tr></table>';
		
		  $('td').css("width": "100px", "padding-right": "10px");		
  

		  queryElement.innerHTML += '<div class="cs-advsrch-srchbtn-cont">' +
                    	'<span class="cs-srch-btn-cont cs-advsrch-btn">' +
                        '<a id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_btSubmit" class="btnRefine cso-btn cso-btn-large cso-btn-blue cso-corner" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$btSubmit&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))" style="width: 155px">Refine</a>' +
                    	'</span></div></div>';

    }  //end adv search logic on Browse For Training

   
   // $('.cso-h1').css("color", "red");		
 
	
	
	
	
	
	
	
	
	
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



