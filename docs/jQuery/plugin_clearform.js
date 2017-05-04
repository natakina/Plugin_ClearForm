$.fn.clearform = function (options) {

	var settings = $.extend({
		position: "right"
	}, options);

	$(this).each(function(index, elem){
		$(elem).css(settings.position, "3%");
		$(elem).prev().css("padding-"+settings.position, "7%");
	});

	$(".clear").each(function(index, elem) {
		$(elem).on('click', function(){
			$(elem).siblings(".input").val('');
			$(elem).css("display", "none");
		})
	});

	$(".input").keyup(function() {
		$(this).next(".clear").css("display", "block");
	})

}
