$(document).ready(function(){
	//副标题点大叉
	$("#index_title_closed_icon").bind("click", function(){
		$(this).parent().remove();
		//TODO
		return false;
	});
	
	//卡片点大叉
	$(".card_delete").hover(
		function(){
			$(this).removeClass("card_delete");
			$(this).addClass("card_delete_hover");
		}, 
		function(){
			$(this).removeClass("card_delete_hover");
			$(this).addClass("card_delete");
		}
	);
	$(".card_delete").bind("click", function(){
		var this_card = $(this).parent();
		this_card.nextAll().each(function(){
			if($(this).hasClass("index_card_fir")){
				$(this).removeClass("index_card_fir");
				$(this).addClass("index_card_sec");
			}else if($(this).hasClass("index_card_sec")){
				$(this).removeClass("index_card_sec");
				$(this).addClass("index_card_fir");
			}
		});
		this_card.remove();
		return false;
	});
});