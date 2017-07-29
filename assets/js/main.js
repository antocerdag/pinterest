$(document).ready(function() {



	json.forEach(function(e){
		var img = e.id;
		$('.contenedor').append("<div class='elemento'><img class='lazy open image'href='#openmodal' src='dist/img/"+ img+ ".jpg'><i class='fa fa-thumb-tack icono' aria-hidden='true'></i><i class='fa fa-check icono' aria-hidden='true'></i><p class='title'>"+ e.title+ "</p><br><p class='description'>"+ e.description+"</p><p class='user'>"+e.username+"   "+"#"+e.hashtag+"</p>"+"</div>");

		
	});
    $("img.lazy").lazyload({
    	effect: 'fadeIn',
    });


		var $container = $('.contenedor'); 
			$container.imagesLoaded( function() {
			$container.masonry();
		});

	imgModal();
});

function imgModal(){
	var img = Array.from(document.getElementsByClassName("image"));
	var title = Array.from(document.getElementsByClassName("title"));
	var modal = document.getElementById("modalimg");
	var bodyModal, close, img;

	img.forEach(function(foto){
		foto.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = foto.outerHTML; //agrego la img
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});

}