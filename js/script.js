
const listener = document.querySelector('.wrapper');
listener.addEventListener("click", function(event){
	const menu = document.querySelector('.header__list'),
	burger = document.querySelector('.header__icon');
	if(event.target.closest('.header__burger')){
		if(menu.classList.contains('active')){
			menu.classList.remove('active');
			burger.classList.remove('activeBurger');
		} else{
			menu.classList.add('active');
			burger.classList.add('activeBurger');
		}
	}
	if(!event.target.closest('.header__menu')){
		menu.classList.remove('active');
		burger.classList.remove('activeBurger');
	}
});

const footer = document.querySelector('.footer'),
titles = document.querySelectorAll('.footer__title'),
lists = document.querySelectorAll('.footer__list');
titles.forEach(element => element.addEventListener("click", function(tar){
	console.log("work")
	if(element.classList.contains('change')){
		element.classList.remove('change');
		element.nextElementSibling.classList.remove('open');
	} else{
		titles.forEach(element => element.classList.remove('change'));
		lists.forEach(element => element.classList.remove('open'));
		element.classList.add('change');
		element.nextElementSibling.classList.add('open');
	}
	listener.addEventListener("click", function(element){
		if(!element.target.closest('.footer__title')){
		titles.forEach(element => element.classList.remove('change'));
		lists.forEach(element => element.classList.remove('open'));
	}
	})
}));
const toTop = document.querySelector('.navbtns__to_top'),
toBottom = document.querySelector('.navbtns__to_bottom'),
menuHeader = document.querySelector('header'),
mainElement = document.documentElement;
const mainElementHeight = mainElement.clientHeight,
menuHeaderHeight = menuHeader.offsetHeight;
let windowScroll = mainElementHeight - menuHeaderHeight,
scrollHeight = Math.max(
document.body.scrollHeight, document.documentElement.scrollHeight,
document.body.offsetHeight, document.documentElement.offsetHeight,
document.body.clientHeight, document.documentElement.clientHeight
);
toTop.addEventListener("click", function(){
	window.scrollBy({
		top: - windowScroll,
		left: 0,
		behavior: "smooth",
	});
});
toBottom.addEventListener("click", function(){
	window.scrollBy({
		top: windowScroll,
		left: 0,
		behavior: "smooth",
	});
});
toTop.addEventListener("dblclick", function(){
	window.scrollBy({
		top: - scrollHeight,
		left: 0,
		behavior: "smooth",
	});
});
toBottom.addEventListener("dblclick", function(){
	window.scrollBy({
		top: scrollHeight,
		left: 0,
		behavior: "smooth",
	});
});