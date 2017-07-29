$(document).ready(function() {


    $("img.lazy").lazyload({
    	effect: 'fadeIn',
    });

	json.forEach(function(e){
		var img = e.id+1;
		$('.contenedor').append("<div class='elemento'><img class='lazy' src='dist/img/"+ img+ ".jpg'><i class='fa fa-thumb-tack icono' aria-hidden='true'></i><i class='fa fa-check icono' aria-hidden='true'></i><p class='title'>"+ e.title+ "</p><br><p class='description'>"+ e.description+"</p><p class='user'>"+e.username+"   "+"#"+e.hashtag+"</p></div>");
	})


		var $container = $('.contenedor'); 
			$container.imagesLoaded( function() {
			$container.masonry();
		});

	/* MODAL */ 
	$(".open").click(function(event) {
		var img = $(this).attr("src");
		var muestraIMG = "<div id='apear_image_div' onClick='closeImage'></div>";
		muestraIMG = muestraIMG.concat("<img id='mi_img' data-original='dest/img/"+ 1+ "'.jpg/>");
		$('body').append(muestraIMG);
		
	});
});

