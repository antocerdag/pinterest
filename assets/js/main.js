$(document).ready(function() {

	$('.contenedor').masonry({
  		itemSelector: '.elemento',
	});

	json.forEach(function(e){
		var title = e.title;
		$('.elemento').append("<p class='titulo'>"+ title+"</p>");
		for(var i = 0; i < e; i++){
			var element = e.title[i];
			console.log(element);
			//$('.elemento').append("<p class='titulo'>"+ element+"</p>");
		}
		//$(".elemento").append("<p class='titulo'>"+ e.title+"</p>");
	})

});
