// // Управление модальными окнами

$('.project_type-caption').click(function(){
	var popupName = $(this).attr('data-popup');
	var popup = document.getElementById(popupName);
	$(`#${popupName}`).toggleClass('popup-open');
	popup.scrollIntoView();	
	$('.wrapper').toggleClass("wrapper-fixed");
});

$('.popup_content_close').click(function(){
	var popup = $(this).closest('.popup');
	var project = document.getElementById('project');
	popup.toggleClass('popup-open');	
	$('.wrapper').toggleClass("wrapper-fixed");
	project.scrollIntoView();	
})
///////////////////////////////////////////////////////

// Управление блоком меню

$("#navToggle").click(function() {
	    $(this).toggleClass("active");
	    $(".overlay").toggleClass("open");
	    // this line ▼ prevents content scroll-behind
	    $("body").toggleClass("locked"); 
	});

$(".menu_item").click(function(){
	$("#navToggle").toggleClass("active");
	$(".overlay").toggleClass("open");
	// this line ▼ prevents content scroll-behind
	$("body").toggleClass("locked");
})
///////////////////////////////////////////////////////


// Управление акордеоном для услуг

$('.service_type-button').click(function(){
		event.preventDefault();
		$(this).toggleClass('opend');
		var tableName = $(this).attr("data-table");		
		$(`#${tableName}`).toggleClass("table-open");
	})

///////////////////////////////////////////////////////

