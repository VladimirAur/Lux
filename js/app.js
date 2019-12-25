// // Управление модальными окнами
// const project = document.getElementById('project');
// const buttonOpen = document.querySelectorAll('.project_type-caption');
// const buttonClose = document.querySelectorAll('.popup_content_close');
// const containerContent = document.querySelector('.wrapper');

// // Klick//////////////////////////////////////////////////
// buttonOpen.forEach(function(item){
// 	item.addEventListener('click', function(){
// 		let popupName = item.getAttribute('data-popup');
// 		let popup = document.getElementById(popupName);
// 		popup.classList.toggle('popup-open');
// 		popup.scrollIntoView();
// 		containerContent.classList.toggle("wrapper-fixed");
// 	})  
// });

// buttonClose.forEach(function(item){
// 	item.addEventListener('click', function(){
// 		let popup = item.closest('.popup');
// 		popup.classList.toggle('popup-open');
// 		containerContent.classList.toggle("wrapper-fixed");
// 		project.scrollIntoView();

// 	})
// });
// // //////////////////////////////////////////////////////

// touchstart/////////////////////////////////////////////
$('.project_type-caption').click(function(){
	var popupName = $(this).attr('data-popup');
	$(`#${popupName}`).toggleClass('popup-open');	
	$('.wrapper').toggleClass("wrapper-fixed");
});

$('.popup_content_close').click(function(){
	var popup = $(this).closest('.popup');
	popup.toggleClass('popup-open');	
	$('.wrapper').toggleClass("wrapper-fixed");	
})


///////////////////////////////////////////////////////

// Управление блоком меню
// const menuButton = document.getElementById('navToggle');
// const menu = document.querySelector('.overlay')
// const menuItem = document.querySelectorAll('.menu_item')

// // Klick//////////////////////////////////////////////
// menuButton.addEventListener('click', function(){
// 	menuButton.classList.toggle("active");
// 	menu.classList.toggle("open");
// 	containerContent.classList.toggle("wrapper-fixed");
// });

// menuItem.forEach(function(item){
// 	item.addEventListener('click', function(){
// 	menuButton.classList.toggle("active");
// 	menu.classList.toggle("open");
// 	containerContent.classList.toggle("wrapper-fixed");	
// 	})
// });
// ////////////////////////////////////////////////////

// touchstart/////////////////////////////////////////////
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
// const serviceButton = document.querySelectorAll('.service_type-button');


// // Klick////////////////////////////////////////////////
// serviceButton.forEach(function(item){
// 	item.addEventListener('click', function(){
// 		event.preventDefault();
// 		this.classList.toggle('opend');
// 		let tableName = item.getAttribute('data-table');
// 		let table = document.getElementById(tableName);
// 		table.classList.toggle('table-open');
// 	})
// })
// // /////////////////////////////////////////////////////

// touchstart/////////////////////////////////////////////
$('.service_type-button').click(function(){
		event.preventDefault();
		$(this).toggleClass('opend');
		var tableName = $(this).attr("data-table");		
		$(`#${tableName}`).toggleClass("table-open");
	})

///////////////////////////////////////////////////////

