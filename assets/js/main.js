$(document).ready(function() {

	json.forEach(function(e){
		var img = e.id+1;
		$('.contenedor').append("<div class='elemento'><img src='dist/img/"+ img+ ".jpg'><p class='title'>"+ e.title+ "</p><p>"+ e.description+"</p></div>");
	})

		var $container = $('.contenedor'); 
			$container.imagesLoaded( function() {
			$container.masonry();
		});

	/* MODAL */ 
	$(".open").click(function(event) {
		var img = $(this).attr("src");
		var muestraIMG = "<div id='apear_image_div' onClick='closeImage'></div>";
		muestraIMG = muestraIMG.concat("<img id='mi_img' src='dest/img/"+ 1+ "'.jpg/>");
		$('body').append(muestraIMG);
		
	});
});
