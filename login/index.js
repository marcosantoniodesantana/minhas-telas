var email = document.getElementById('email');
var senha = document.getElementById('senha');
var btEntrar = document.getElementById("enviarInfs");
var inputBotao = document.getElementById("fazerLogin");
var btCadastrar = document.getElementById('cadastrar');
var linkCadastro = document.getElementById('pgcadastro');

var verSenha = document.getElementById('mostrar-senha');

verSenha.onclick = ()=>{

	if (senha.type == "password") {
		senha.type = "text";
		verSenha.style.fill = "#7e81b0";
	} else if (senha.type == "text") {
		senha.type = "password";
		verSenha.style.fill = "#000000";
	}
}


/*
	email.addEventListener('focus', ()=>{
		email.style.borderColor = "#3b3b3b";
	});
	*/


	btEntrar.onclick = ()=>{
		inputBotao.click(validar());
	}

	btCadastrar.onclick = () => {
		linkCadastro.click();
	}

	function validar(){

		var emailDados = document.getElementById('email').value;
		var senhaDados = document.getElementById('senha').value;
		var registroEmail = "cliente.um@gmail.com";
		var registrosenha = "123456";

		var erroLogin = document.getElementById('infsErradas');
		erroLogin.style.color = "rgb(175 1 1)";
		erroLogin.style.bottom = "-5px";
		erroLogin.style.top = "-5px";


		if(emailDados == registroEmail && senhaDados == registrosenha){
			//window.alert("E-mail correto! e senha corretos, Iniciando login");
			onload(abrirInicio());

		} else if (emailDados == null || emailDados == "" && senhaDados == null || senhaDados == "") {
			//window.alert("Login e/ ou senha invalidos, tente novamente");
			erroLogin.innerHTML = "Preencha os campos";
		} else {
			//window.alert('Informações incorretas');
			erroLogin.innerHTML = "Login e/ ou senha incorretos";
		}
	}

	function abrirInicio(){
		var linkInicio = document.getElementById('pHome');
		//window.alert("Iniciando login, bem vindo");

		linkInicio.click();
	}

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
