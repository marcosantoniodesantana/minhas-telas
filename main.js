
//Código responsavél por inserir titulo com limitação e corte nas tags marcadas com o id titulo-item
	let listaTitulo = [
		"Camisa Ousa Desafiar o Deus da Guerra",
		"Camisa Escanor Body Builder",
		"Camisa Social Ninja",
		"Moletom Ninja",
		"Camisa Zabuza Momochi",
		"Camisa Colisão",
		"Camisa a Arte é Uma Explosão, BOOM!"
	];

	const tituloProduto = document.querySelectorAll("#titulo-item");
	console.log(tituloProduto.length)

	for (var i = 0; i < tituloProduto.length; i++) {
		//document.write(tituloProduto[i].innerHTML = listaTitulo)
		tituloProduto[i].innerHTML = listaTitulo[i+0];

		const limite = 28;

		for (let analise of tituloProduto){
			const verifica = analise.innerText.length > limite;
			const pontos = verifica ? "..." : "";
			analise.innerText = analise.innerText.substring(0, limite) + pontos;
		}

		if (tituloProduto[i].innerText.length < 28) {
			tituloProduto[i].classList.toggle("altura");
		}
	}

//Parte responsavél por fazer a execução do menu

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

document.querySelectorAll(".vitrine > .itens").forEach((iten) =>{
	iten.setAttribute('data-aos', 'fade-up');
	iten.setAttribute('data-aos-duration', '2000');
});

let vitrine = document.querySelector('.vitrine');

document.querySelector(".proximo").addEventListener("click", () =>{
	 vitrine.scrollBy(350, 0);
});

document.querySelector('.anterior').addEventListener("click", ()=> {
	vitrine.scrollBy(-350, 0);
});

//IMPORTANTE!!!!!! => https://michalsnik.github.io/aos/

//Script que ativa a biblioteca modificada okzoom que foi editada


//Cria uma sombra para a tela de visualização dos produtos
const infsProdutoSombra = document.querySelector(".tela-infs");

const geralProdutosInf = document.createElement("div");
geralProdutosInf.classList = "geral-produtos-inf";

const divTop = document.createElement("div");
divTop.classList = "div-top";

const btnFechar = document.createElement("button");
btnFechar.classList = "bt-fechar";

const btnFecharIcon = document.createElement("i");
btnFecharIcon.classList = "fas fa-times";

//divisão com imagem do produto junto a descrição e o preço

const produtoDiv = document.createElement("div");
produtoDiv.classList = "divisao-produto";

const imgProdutofigure = document.createElement("figure");
imgProdutofigure.classList = "img-detalhada";


let itens = document.querySelectorAll(".itens");

		let selecionaImagem = document.querySelectorAll(".itens > img");

		selecionaImagem.forEach((selecionaImagem) =>{
			selecionaImagem.id = "imagem-produto";
		});
		let imagemClicada = document.querySelectorAll("#imagem-produto");

for (let a = 0; a < itens.length; a++) {
	itens[a].addEventListener("click", ()=>{


		//Isso é o código que faz o zoom
		$(document).ready(()=>{
			$('.imagem-detalhada-zoom').okzoom({
	  		width: 300,
		  	height: 400,
		  	round: true,
	  		background: "transparent",
		  	shadow: "0 0 0 transparent",
		  	radius: 10
		});
});
		//Eu achei que esse console.log(itens[a]) não tava funcionando mas pelo visto ele tá
		console.log(itens[a])
		infsProdutoSombra.classList.toggle("sombra");
		document.querySelector(".sombra").appendChild(geralProdutosInf);
		document.querySelector(".geral-produtos-inf").appendChild(divTop);
		document.querySelector(".div-top").appendChild(btnFechar);
		document.querySelector(".bt-fechar").appendChild(btnFecharIcon);

		document.querySelector(".geral-produtos-inf").appendChild(produtoDiv);
		document.querySelector(".divisao-produto").appendChild(imgProdutofigure);

		//Essa variável a baixo seleciona todos os atributos 'src' das tags img que possuirem o id 'imagem-produtos'
		const imageDetalhada = document.createElement('img');

		for(let b = 0; b < imagemClicada.length; b++){
			imageDetalhada.classList = "imagem-detalhada-zoom";
			//console.log(imagemClicada.length)

			const contadorImagens = document.querySelectorAll(".imagem-detalhada-zoom");

			imageDetalhada.src = imagemClicada[0].src;
			//console.log(b)

			document.querySelector(".img-detalhada").appendChild(imageDetalhada);
		btnFechar.onclick = () =>{
			document.querySelector(".img-detalhada > img").remove();
			document.querySelector(".tela-infs").classList.remove("sombra");
			document.querySelector(".geral-produtos-inf").remove();
		}
		}

	})

}
