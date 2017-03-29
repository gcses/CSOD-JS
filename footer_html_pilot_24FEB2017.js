$(document).ready(function(){
	
	$("h2:contains('Subject')").each(function(){
 		$(this).html($(this).html().replace('Subject','Topics'));
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
//	$(".usr-content:has(div:has(span:contains('$0.00')))").remove();

	$("[aria-labelledby=Support]").empty();
	
  $("[aria-labelledby=Support]").append('<li><a href="http://cp.carefusion.com" title="Change Password" tabindex="-1">Change Password</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Contact Us" tabindex="-1">Contact Us</a></li><li><a href="/catalog/CustomPage.aspx?id=20000480&amp;tab_page_id=20000480" title="Frequently Asked Questions" tabindex="-1">Frequently Asked Questions</a></li>');
  $smjquery('#main-menu').smartmenus('refresh')

	$('.cso-txt span:contains("Online Class")').each(function(){
 	$(this).html($(this).html().replace('Online Class','Web-Based Training'));
	});

//TESTING - 3/24/17 - JS	
	$('[data-original-title="Online Class"]').attr('data-original-title', 'Web-Based Training');
//  $('.tooltip-cso').tooltip();

/*	
	$("span:contains('Online Class')").each(function(){
 		$(this).html($(this).html().replace('Online Class','Web-based Training'));
	});
*/	
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

});

	window.setInterval(replaceOnlineClass, 1000);

	function replaceOnlineClass() {
		
//		console.log("replace() - Start");
		
		var elements=document.getElementsByTagName("*"), count=elements.length, elementChildNodes=[], subCount=0, i=0, sub=0;
		var contentToReplace="";
		
		for(i=0; i<count; i++) {

			elementChildNodes = elements[i].childNodes;
			subCount = elementChildNodes.length;

			for (sub=0; sub<subCount; sub++) {

//				if(elementChildNodes[sub].nodeType === 1 || elementChildNodes[sub].nodeType === 3) {
				if(elementChildNodes[sub].nodeType === 3) {
//					console.log("replaceOnlineClass() - i="+i+" - sub="+sub);
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
					} catch(err) {
					}
				/*
					try {
						if (String(elementChildNodes[sub].id).substr(-5,5) === "Price") {
							if (elementChildNodes[sub].innerHTML.indexOf("$0.00") > -1) {
								elementChildNodes[sub].innerHTML = "!@#$#@!";
							}
						}
					} catch(err) {
					}
				*/
					try {
						elementChildNodes[sub].text = elementChildNodes[sub].text.replace(new RegExp("Online Class", "g"), "Web-based Training");
					} catch(err) {
					}
					
				}

			}

		}

		if (document.getElementById("common-messages")) {
			
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
			
			try {
				console.log("selectedSearchEngineID = " + selectedSearchEngineID);
			} catch(err) {
			}
				
		}
		try {
			if(String(document.body.innerHTML).indexOf("$0.00") > -1) {
				document.body.innerHTML = document.body.innerHTML.replace(new RegExp("$0.00", "g"), "!@#$#@!");
			}
		} catch(err) {
		}
		
//		console.log("replace() - End");
	}
