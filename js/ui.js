// ui
$(function() {

var scrollTop = $(window).scrollTop(),
	lastScrollTop = scrollTop;

$(window).scroll(function() {
	scrollTop = $(window).scrollTop();
	console.log(scrollTop);

	if (scrollTop > lastScrollTop && scrollTop > 0)
	{
		$('body').not('.scroll-down').addClass('scroll-down');
	}
	else
	{
		$('body.scroll-down').removeClass('scroll-down');
	}


	lastScrollTop = scrollTop;
});

$('.card-button').click(function() {
	if (!$(this).hasClass('comment-button'))
	{
		var amount = parseInt(/\d+/.exec($(this).html()));
		var newAmount = $(this).hasClass('active') ? amount - 1 : amount + 1;

		$(this).html($(this).html().replace(amount, newAmount));

		$(this).toggleClass('active');
	}
});

$('.menu-groups a').click(function(evt) {
	evt.preventDefault();

	$('.shadow').click();

	$('.header-title').html($(this).text());

	$('.content').not('.sertanejo').fadeOut(300, function() {
		$('.content.posts.sertanejo').stop().fadeIn(300);
	});
});

$('a[href^=#\\/]').click(function(evt) {
	evt.preventDefault();

	var page = $(this).attr('href').replace('#/', '');

	$('.tabs li.active').removeClass('active');
	$(this).parent().addClass('active');

	$('body').removeClass('posts').removeClass('dates').removeClass('contacts').addClass(page);

	$('.content').not('.' + page).fadeOut(300, function() {
		$('.content.' + page).stop().fadeIn(300);
	});
});

$('.menu-button').click(function() {
	$('body').css('overflow', 'hidden');
	$('.shadow').stop().fadeIn(400);
	$('.menu').addClass('active');
});

$('.shadow').click(function() {
	$('body').css('overflow', 'auto');
	$(this).stop().fadeOut(400);
	$('.menu').removeClass('active');
});

});