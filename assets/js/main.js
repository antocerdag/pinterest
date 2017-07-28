$(document).ready(function() {

	$('.contenedor').masonry({
  		itemSelector: '.elemento',
	});

	json.forEach(function(e){
		for(var i = 0; i < e; i++){
			var element = e.title;
			console.log(element);
			//$('.elemento').append("<p class='titulo'>"+ i.title+"</p>");
		}
		//$(".elemento").append("<p class='titulo'>"+ e.title+"</p>");
	})

});
