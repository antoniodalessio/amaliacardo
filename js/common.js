$(document).ready(function(){
	$(".menu-mobile").on("touchstart", function(e){
		e.stopPropagation();
		if ($(this).hasClass("active")){
			$(this).removeClass("active");
			$("nav ul").slideUp("fast");
		}else{
			$(this).addClass("active");
			$("nav ul").slideDown("fast");
		}
	});
});