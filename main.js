let menubt = document.querySelector('#menu-bar').addEventListener("click", () =>{
	let menuOptions = document.querySelector('.menu');
	menuOptions.classList.toggle('visible');

	let menuIcon = document.querySelector(".fa-solid");

	if (menuIcon.classList.contains('fa-bars')) {
		menuIcon.classList.remove('fa-bars');
		menuIcon.classList.toggle('fa-xmark');
		document.querySelector('#menu-bar').classList.toggle('menu-clicado');
	}else{
		menuIcon.classList.remove('fa-xmark');
		menuIcon.classList.toggle('fa-bars');
		document.querySelector('#menu-bar').classList.remove('menu-clicado');
	}
});

let linkConta = document.querySelector('.menu > ul > li:nth-child(1)').addEventListener("click", ()=>{
	let subMenuOptions = document.querySelector('.submenu');
		subMenuOptions.classList.toggle('menu-option-visible');
});

document.querySelectorAll(".vitrine > .itens").forEach( function(elm){
	elm.setAttribute('data-aos', 'fade-up');
	elm.setAttribute('data-aos-duration', '2000');
});

let vitrine = document.querySelector('.vitrine');

let btProximo = document.querySelector(".proximo");
btProximo.addEventListener("click", () =>{
	 vitrine.scrollBy(350, 0);
});

let btAnterior = document.querySelector('.anterior');
btAnterior.addEventListener("click", ()=> {
	vitrine.scrollBy(-350, 0);
});

//IMPORTANTE!!!!!! => https://michalsnik.github.io/aos/
