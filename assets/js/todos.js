
// Check off specfic todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on x to delete item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// To add new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newTodo + "</li>");
	}
});

// Click pencil to edit function
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

// Clear all function
$("#clear-all").click(function(){
	$("li").fadeOut(300, function(){
		$("li").remove();
	});
});


