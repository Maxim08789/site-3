const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const topHeader = document.querySelector(".header__top")
function toggleMenuIcon() {
	menuIcon.classList.toggle("active");
	menuBody.classList.toggle("active");
	topHeader.classList.toggle("active");
}
menuIcon.addEventListener("click", toggleMenuIcon);


$(".menu__icon").click(function () {
	$('body').toggleClass('lock-scroll');
});


function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


$(document).ready(function () {
	$('.spoiler__title').click(function (event) {
		if ($('.spoiler').hasClass('one')) {  //если добавить к .spoiler класс 'one', то получится "аккардеон"
			$('.spoiler__title').not($(this)).removeClass('active');
			$('.spoiler__content').not($(this).next()).slideUp(200);
		}
		$(this).toggleClass('active').next().slideToggle(200);
	});
});
//отдельный код на спойлер для нижней секции
$(document).ready(function () {
	$('.about__title').click(function (event) {
		if ($('.about__item').hasClass('one')) {  //если добавить к .spoiler класс 'one', то получится "аккардеон"
			$('.about__title').not($(this)).removeClass('active');
			$('.about__item-content').not($(this).next()).slideUp(200);
		}
		$(this).toggleClass('active').next().slideToggle(200);
	});
});


$('.slider__body').slick({
	arrows: true,
	dots: false,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 10000,
	pauseOnHover: true,
	pauseOnDotsHover: true,
	adaptiveHeight: true,
});

$('.slider2__body').slick({
	arrows: true,
	dots: false,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 10000,
	pauseOnHover: true,
	pauseOnDotsHover: true,
	adaptiveHeight: true,
});

//Табы
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active-tab')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active-tab');
			});

			tabsItems.forEach(function (item) {
				item.classList.remove('active-tab');
			});

			currentBtn.classList.add('active-tab');
			currentTab.classList.add('active-tab');
		}
	});
}

document.querySelector('.tabs__nav-btn').click();
