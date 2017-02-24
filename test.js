$(document).ready(function(){
 
		var box = $('#container2 span:contains("No assigned training")');
 if(box.length > 0){
   box.parents('#container2').children(':contains("No assigned training")').hide();
}
 
	});
  