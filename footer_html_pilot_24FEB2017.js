

$(document).ready(function(){

	
	// Redesign Header with new imagery and layout
	
	//load splash image background
	//<div class="topBarOuter">
	$(".topBarOuter").css({"background-color": "yellow" });  
	$("#tblTopBar").css({"background-image": "https://rawgit.com/gcses/CSOD-JS/master/header.JPG"});  


	
	//"height": "250px"
	
	
	console.log("TestMe4");
	
	
	
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
	    
	//hide the various Cornerstone footers
	$('.df-footer').hide();
	
	var EnterCoupon = "Enter customer code";	

	//swap the shopping carts coupon code text for customer code
	$('span:contains("Coupon Code")').each(function(){
		console.log("span found!!");
	        $(this).html($(this).html().replace('Coupon','Customer'));
		});
	
        //write to console to confirm attributes
        //var x = $("label[for='txtCouponCode']").text();
	//console.log("text: " + x);
	
        //console.log("span5!");
	  
	//var couponSpan = $(".cso-input-outer.med.cso-fleft-ie7");
	//couponSpan.html('<label for="txtCouponCode">Enter customer code</label>');
	
	//couponSpan.html('<input id="txtCouponCode" type="text" maxlength="16" /></span>');
	
	//couponSpan.html('<input id="txtCouponCode" type="text" maxlength="16" /></span>');
	
	//couponSpan.html('<input id="txtCouponCode" type="text" maxlength="16" data-bind="value: couponCode, valueUpdate: \'afterkeydown\', event: {keyup: applyCouponOnEnter}" /></span>');
	
	
	
	// margin: top, right, bottom, left
	//$(".cso-input-outer.med.cso-fleft-ie7").css({"width": "105px", "height": "25px", "background-color": "yellow", "margin": "0px 10px 0px 0px", });  
	

								
	//valueUpdate: 'afterkeydown'" 
	/*
        var obj = {
          value: "couponCode"
	};
	dataBind(couponSpan, obj);
	*/
	

	//<span class="cso-input-outer med cso-fleft-ie7">
          //<label for="txtCouponCode" class="cs-acc-hid-con">Enter coupon code</label>
          //<input id="txtCouponCode" type="text" maxlength="16" data-bind="value: couponCode, valueUpdate: 'afterkeydown', 
	//            event: {keyup: applyCouponOnEnter}" </span>  />


	
	/*
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
	
	
	// -------------  Browse For Training Global Search Options -------------
	if (document.title.indexOf("Browse for Training") > -1)
	{		 
		//Change "Subject" header to "Topic"
		$('h2:contains("Subject")').each(function(){
 			$(this).html($(this).html().replace('Subject','Topic'));
			});
		

                //define style of grey area around search options
		$(".cs-main-sep").hide();  //hide until working
		$(".cs-main-sep").css({"backgroundColor": "#EEEEEE", "height": "250px",  "margin": "40px 0px 40px 0px", "padding": "15px", "border-style": "solid", "border-width": "1px", "border-radius": "5px", "border-color": "grey"});   
		
		var sepElements = document.getElementsByClassName("cs-main-sep"); 
		var queryElement = sepElements[0];
		
		queryElement.innerHTML += '<input id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_atxKeywords_ClientState" name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$tbKeywords" placeholder="What would you like to search for?" style="font-style:italic"></input>';
		
		$("#ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_atxKeywords_ClientState").css({"padding": "5px", "width": "520px"});   
		
		queryElement.innerHTML += '<hr id="searchHR" />';
		$("#searchHR").css({"border-color": "grey", "margin": "15px 0px 15px 0px"});   
		
		queryElement.innerHTML += '<h2>Refine your Search</h2><br/>';
			
		//queryElement.innerHTML += '<div id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_divAdvanceControls" class="divAdvanceControls" style="display: none" engineId="1">';
                            
		//keywords here
		queryElement.innerHTML += '<span class="cs-advsrch-item1">' +
                			  '<label class="cs-acc-hid-con" for="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_tbKeywords">Keywords:</label>'+
					  '<input placeholder="Keywords" name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$tbKeywords" type="text" maxlength="100" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_tbKeywords" class="cs-advsrch-input" /><input type="hidden" name="ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$rptAdvanceControls$ctl00$ctl00$atxKeywords_ClientState" id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_atxKeywords_ClientState" />'+
    					  '</span>';
		
		$("#ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_tbKeywords").css({"padding": "5px", "width": "200px"}); 
		
		//queryElement.innerHTML += '</div>';

		
		queryElement.innerHTML += '<select id="langSelect">' +
			                     '<option>All Languages</option>' +
					     '<option>Bahasa Malaysia (Malaysia)</option>' +
					     '<option>Bulgarian (Bulgaria)</option>' +
					     '<option>Chinese (Simplified)</option>' +
					     '<option>Chinese (Traditional)</option>' +
					     '<option>Croatian (Croatia)</option>' +
					     '<option>Czech (Czech Republic)</option>' +
					     '<option>Danish (Denmark)</option>' +
					     '<option>Dutch (The Netherlands)</option>' +
					     '<option>English (Australia)</option>' +
					     '<option>English (England)</option>' +
					     '<option>English (US)</option>' +
					     '<option>Estonian (Estonia)</option>'+
					     '<option>Finnish (Finland)</option>'+
					     '<option>French (Canada)</option>'+
					     '<option>French (France)</option>'+
					     '<option>German (Germany)</option>'+
					     '<option>Greek (Greece)</option>'+
					     '<option>Hebrew (Israel)</option>'+
					     '<option>Hungarian (Hungary)</option>'+
					     '<option>Indonesian (Indonesia)</option>'+
					     '<option>Italian (Italy)</option>'+
					     '<option>Japanese (Japan)</option>'+
					     '<option>Korean (Korea)</option>'+
					     '<option>Latvian (Latvia)</option>'+
				             '<option>Lithuanian (Lithuania)</option>'+
					     '<option>Norwegian (Norway)</option>'+
					     '<option>Polish (Poland)</option>'+
					     '<option>Portuguese (Brazil)</option>'+
					     '<option>Portuguese (Portugal)</option>'+
					     '<option>Romanian (Romania)</option>'+
					     '<option>Russian (Russia)</option>'+
					     '<option>Serbian (Serbia)</option>'+
					     '<option>Slovak (Slovakia)</option>'+
					     '<option>Slovenian (Slovenia)</option>'+
					     '<option>Spanish (Latin America)</option>'+
					     '<option>Spanish (Spain)</option>'+
					     '<option>Swedish (Sweden)</option>'+
					     '<option>Thai (Thailand)</option>'+
					     '<option>Turkish (Turkey)</option>'+
					     '<option>Ukrainian (Ukraine)</option>'+
				             '<option>Vietnamese - Vietnam</option>';	
					   '</select>';
 
		$("#langSelect").css({"margin": "0px 0px 20px 20px"}); 

		
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
	
		
		 $("#advSearchTable td").css({"width": "210px", "padding-right": "10px", "fontWeight": "bold"});   
                 $("ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_rptAdvanceControls_ctl00_ctl00_rptCustomFields_ctl00_ucCFWrapper_ctl00_parentValue").css({"width": "60px", "padding-right": "10px"});   

		
		// '<a id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_btSubmit" class="btnRefine cso-btn cso-btn-large cso-btn-blue cso-corner" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ContentPlaceHolder1$ucSearchAdvanceControls$btSubmit&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))" style="width: 155px">Refine</a>'+
            
		
		$testArgs = "-6\#f=1\&s=568,614\&o=1\&h=2";
		
		  queryElement.innerHTML += '<br/><div class="cs-advsrch-srchbtn-cont">' +
                    	'<span class="cs-srch-btn-cont cs-advsrch-btn">' +
			 '<a id="ctl00_ContentPlaceHolder1_ucSearchAdvanceControls_btSubmit" class="btnRefine cso-btn cso-btn-large cso-btn-blue cso-corner" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ContentPlaceHolder1$testArgs$btSubmit&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))" style="width: 155px">Refine</a>'+
                    '</span></div></div>';   

		 $(".cs-advsrch-srchbtn-cont").css({"float": "right", "margin": "15px 0px 15px 0px"});   
		
        }  //end adv search logic on Browse For Training
        // -------------  End Browse For Training Global Search Options ------------
   	
 
	
	
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
       $('h2:contains("My Learning")').each(function(){
 	    $(this).html($(this).html().replace('My Learning', fName + '\'s Learning In Progress'));
	});
	
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
	
        $("[aria-labelledby=Support]").append('<li><a href="http://cp.carefusion.com" title="Change Password" tabindex="-1">Change Password</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Contact Us" tabindex="-1">Contact Us</a></li><li><a href="/catalog/CustomPage.aspx?id=20000479&amp;tab_page_id=20000479" title="Frequently Asked Questions" tabindex="-1">Frequently Asked Questions</a></li>');
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

	window.setInterval(replaceOnlineClass, 1000);
	
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
