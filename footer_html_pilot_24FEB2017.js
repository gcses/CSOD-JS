
	 $bdquery = jQuery.noConflict(true);


(function($) {
   
	$bdquery(document).ready(function() {
		//overlay a new image to cover up settings cog image
		//var cogImg = $smjquery('<img class="cog1">');
		//cogImg.attr('src', 'https://bd-pilot.csod.com/clientimg/bd/welcome/cog.png'); /clientimg/bd/welcome/avatar.png
		//cogImg.appendTo('#optionsbtn');
		//$smjquery('.cog1').css({'height': '30px', 'position': 'absolute', 'top': '0', 'left': '-1px', 'margin-left': '0px', 'margin-right': '0px', 'border-radius': '0', 'border': '0px', "zindex": "2147483644"});
		//$smjquery('#optionsbtn').css({'padding-left': '5px', 'margin-right': '8px', 'backgroundColor': 'yellow', 'border': '0px', "zindex": "2147483644"});

		$bdquery('.topBar').css({'backgroundColor': '#004593',  'margin-top': '0px', 'margin-right': '10px', 'border': '0px solid #004593'});  //yellow border
		
	});

}($bdquery)); 
