$(function() {

//fast move by the anchor
	$(".header_angle-string-holder").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

$(".header-flex-counter-digit").setTimer(function(i, count) {
  $(this).text(count);
}, 20000, 89, true, function() {
  $(this).text("OO");
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

});
