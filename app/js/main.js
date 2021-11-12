$(function () {
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});
	$('.menu__list').on('click', function () {
		$('.menu__list').removeClass('menu__list--active');
	});

	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		blockId = $(this).data('scroll');
		blockOffset = $(blockId).offset().top;

		$("html,body").animate({
			scrollTop: blockOffset + 50
		}, 700);
	});

	$('[data-modal]').on('click', function (event) {
		event.preventDefault();
		$('#modal-resume').addClass('modal-show');
	});
	$('#modal-resume').on('click', function () {
		$('#modal-resume').removeClass('modal-show');
	});
});
