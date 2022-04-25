//Código responsavél por inserir titulo com limitação e corte nas tags marcadas com o id titulo-item
let listaTitulo = [
    "Chihiro Tradicional",
    "Elemento X Tradicional",
    "Kamado Brothers",
    "Kaonashi",
    "Kiuubi",
    "Mariochu",
    "The Starry Cat Tradicional Black",
    "The Starry Cat Tradicional",
    "Yu-Gi-Oh Exomedia",
    "E Lá Vamos Nós",
    "Espirito De Dragão",
    "Kimetsu Masks",
    "Moonligth",
    "Science Time",
    "Titans",
    "Yin Yan Dragons"
];

console.log(listaTitulo.length);

const tituloProduto = document.querySelectorAll("#titulo-item");
console.log(tituloProduto.length)

for (var i = 0; i < tituloProduto.length; i++) {
    //document.write(tituloProduto[i].innerHTML = listaTitulo)
    tituloProduto[i].innerHTML = listaTitulo[i+0];

    let limite = 15;

    for (let analise of tituloProduto){
        const verifica = analise.innerText.length > limite;
        const pontos = verifica ? "..." : "";
        analise.innerText = analise.innerText.substring(0, limite) + pontos;
    }

    if (tituloProduto[i].innerText.length < limite) {
        tituloProduto[i].classList.toggle("altura");
    }


}

    let intensVitrine = document.querySelectorAll(".itens");
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

//Parte que adiciona a biblioteca de aparecimento gradual com animação

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
