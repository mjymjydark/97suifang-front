$(document).ready(function(){
	$(".left>.index_line, .index_letter_container>.index_lines>.index_line").each(function(){
		classHover($(this), "add");
	});
	$(".right>.index_line").each(function(){
		classHover($(this), "minus");
	});
	$(".add>.icon").live("click", function(){
		//TODO ajax
		var obj = $(this).parent();
		var objClone = obj.clone();
		objClone.removeClass("add")
		objClone.children(".index_category").remove();
		$(".right").append(objClone);
		classHover(objClone, "minus");
		return false;
	});
	$(".minus>.icon").live("click", function(){
		//TODO ajax
		var obj = $(this).parent();
		obj.remove();
		return false;
	});
	$(".all_condition>.index_all_letter>div").bind("click", function(){
		$(".index_letter_container>.index_lines").hide();
		var letterClass = $(this).text();
		$("."+letterClass).show();
		$("."+letterClass).nextAll().show();
		return false;
	});
});
function classHover(obj, c){
	obj.hover(
		function(){
			$(this).addClass(c);
		},
		function(){
			$(this).removeClass(c);
		}
	);
}