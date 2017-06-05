$(document).ready(function() {

	var speed = 5000;
	var run = setInterval('rotate()', speed);	
	
	var item_width = $('#slide li').outerWidth(); 
	var left_value = item_width * (-1); 
        
	$('#slide li:first').before($('#slide li:last'));
	
	$('#slide ul').css({'left': left_value});

	$('#prev').click(function() {

		var left_indent = parseInt($('#slide ul').css('left')) + item_width;
		$('#slide ul').animate({'left' : left_indent}, 200,function(){    
			
			$('#slide li:first').before($('#slide li:last'));           
			
			$('#slide ul').css({'left': left_value});
		});

		return false;  
	});

 	$('#next').click(function() {
		
		var left_indent = parseInt($('#slide ul').css('left')) - item_width;
		
		$('#slide ul').animate({'left': left_indent}, 200, function () {
            
			$('#slide li:last').after($('#slide li:first'));                 	
			
			$('#slide ul').css({'left': left_value});
		
		});
		         
		return false;
		
	});        
	
	$('#slide').hover(
		
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('rotate()', speed);	
		}
	); 
        
});

function rotate() {
	$('#next').click();
}
