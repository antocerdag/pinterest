$(document).ready(function() {

	$('.contenedor').masonry({
  		itemSelector: '.elemento',
	});
    var html = "";
    json.search_results.forEach(function (e) {
    	var titulo = e.title;
        html += $('.elemento').append("<p class='title'>" + titulo+ "</p>");
    })
	/* MODAL */ 
	$(".open").click(function(event) {
		var img = $(this).attr("src");
		var muestraIMG = "<div id='apear_image_div' onClick='closeImage'></div>";
		muestraIMG = muestraIMG.concat("<img id='mi_img' src='dest/img/"+ 1+ "'.jpg/>");
		$('body').append(muestraIMG);
		
	});
});
