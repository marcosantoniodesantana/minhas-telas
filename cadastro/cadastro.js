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

let termosTxt = document.querySelector('.descricao > a');
termosTxt.addEventListener('click', ()=>{
	console.log("Termos de uso clicados");
	const termosPage = document.createElement('div');
	termosPage.classList = 'tela-termos';

	const header = document.createElement('div');
	header.classList = "itens";

	const texto = document.createElement('h2');
	texto.innerHTML = "Termos de uso";

	const iconX = document.createElement('i')
	iconX.classList = "fas fa-times";

	const termosCaixa = document.createElement('div')
	termosCaixa.classList = "termos-caixa";

	const termosTexto = document.createElement('p');
	termosTexto.innerHTML = `<br> Bem-vindo ao website SKINNY, onde todos os serviços são ofertados pela empresa Skinny Brasil Serviços de Pagamentos LTDA, inscrito sob o CNPJ nº 12.345.678-9000, com endereço na Rua Belval, CEP nº 06478-040, Cidade Barueri, estado São Paulo, representado por meio dessa página na web. </br>
<br> Avisamos previamente que ao acessar esse site você concorda tacitamente com as disposições contidas nesse documento, por isso muito atenção ao ler cada uma das cláusulas e obrigações dispostas a seguir: </br>
<br> 1.Do Objeto</br>
<br> Essa plataforma tem como finalidade de “e-commerce”, ou seja, disponibilizar a venda de produtos e serviços online disponibilizados na nossa plataforma ou aplicativo. </br>
<br> 2. Da reserva de produtos</br>
<br> 2.1 O nosso website não trabalha com nenhuma possibilidade de reservar qualquer um dos produtos ofertados em nossa plataforma. </br>
<br> 2.2 O fato de o produto estar no carrinho de compras não é tido como uma reserva e não impossibilita que outras pessoas possam adquirir o produto e eles venham a se esgotar. </br>
<br> 3. Das obrigações do cliente</br>
<br> 3.1 O cliente deverá informar os dados de forma completa e correta no momento de cadastro em nossa plataforma. </br>
<br> 3.2 É responsabilidade do cliente qualquer erro na escrita ou na transmissão errônea dos dados. </br>
<br> 3.3 Para efetuar qualquer compra em nosso website ou adicionar produtos ao carrinho é necessário logar com o usuário e senha que foi fornecido no momento do cadastro. </br>
<br> 3.4 Não informar os seus dados de login a terceiros sob pena de ser responsabilizado por qualquer conduta advinda desse uso. </br>
<br> 3.5 Cada cliente só poderá efetuar um cadastro, não sendo aceito mais de uma conta por CPF. </br>
<br> 3.6 Usar a plataforma respeitando a ética, bons costumes, legislações e ordenamentos vigentes no país, sob pena de sofrer sanções. </br>
<br> 3.7 Ser maior de idade (18 anos) e ter capacidade plena para realizar o cadastro e efetuar compras em nossa plataforma. </br>
<br> 3.7.1 Se um menor de idade ou pessoa física sem capacidade plena vir a adquirir algum produto ou serviço ofertado em nossa plataforma, entenderemos que os responsáveis autorizaram, respondendo esses por toda e qualquer situação que advir, bem como pela compra. </br>
<br> 3.8 Não comentar ou enviar imagens nas avaliações que possam ir de encontro com a ética e o respeito, ou que tenha cunho difamatório, ofensivo, de ódio ou preconceituoso. </br>
<br> 3.9 O primeiro login de acesso será feito através de um link enviado para o seu e-mail cadastrado. </br>
<br> 3.10 Não fornecer qualquer informação falsa, fraudulenta ou que não seja correspondente aos seus dados. </br>
<br> 4. Das obrigações do proprietário do e-commerce</br>
<br> 4.1 Informar de forma ostensiva e verdadeira sobre as características e especificações do produto disponível para venda de forma clara e completa. ( Ex: Cores, altura, material ou largura). </br>
<br> 4.2 Enviar os produtos dentro do prazo estabelecido. </br>
<br> 4.3 Disponibilizar uma plataforma segura. </br>
<br> 4.4 Disponibilizar imagens, áudios e vídeos informativos sobre os produtos ofertados, e condizentes com o que será entregue ao cliente. </br>
<br> 4.5 Emitir a nota fiscal do produto que será enviado e enviá-la ao cliente junto do produto. </br>
<br> 4.6 Informar como deve ocorrer o manuseio, a limpeza ou lavagem do produto e qualquer informação considerada relevante relacionada ao produto. </br>
<br> 5. Isenção de responsabilidade</br>
<br> 5.1 Não nos responsabilizamos pelo mau uso ou manuseio errado do produto, bem como de qualquer dano que possa ocorrer na instalação de qualquer produto adquirido em nossa plataforma. </br>
<br> 5.2 Todos os produtos que vendemos estão dentro dos padrões e condições que vem de fábrica, do distribuidor ou da empresa que revendeu o produto. </br>
<br> 5.3 Fornecemos todas as informações pertinentes relacionadas ao produto, bem como os mesmos vão acompanhados de instruções de uso e cuidados em suas caixas ou através de manual de instruções. </br>
<br> 6. Da Propriedade intelectual</br>
<br> 6.1 Todo o design e paginação são de propriedade do nosso website, e foram desenvolvidos por um prestador de serviços que foi contratado para tal finalidade. </br>
<br> 6.2 Toda imagem, ilustração, obras de arte, HTML, nomes comerciais, softwares ou vídeo disponibilizados em nossa plataforma por um dos gerenciadores da página são de nossa propriedade. </br>
<br> 6.2.1 As imagens e vídeos são meramente ilustrativas, pois dependendo do monitor ou da tela do aparelho eletrônico o mesmo pode apresentar variação de cores ou tons. </br>
<br> 6.3 A logo, a marca e toda a aparência da webempresa/empresa são de nossa propriedade. </br>
<br> 6.4 É vedada a cópia sem autorização de qualquer imagem, vídeo, design, áudios, aparência ou descrições de produtos existentes em nossa web página, sob pena se responder por sanções quem desobedecer. </br>
<br> 6.5 Não nos responsabilizamos por links externos que possam vir a aparecer em nossa página. </br>
<br> 6.5.1 Há algumas áreas que poderão apresentar propagandas ou divulgação de links, mas não temos qualquer tipo de relação, por isso muito cuidado ao navegar por essas páginas e ao fornecer os seus dados, pois navegar por essas páginas é responsabilidade do usuário/cliente. </br>
<br> 6.6 Nada contido em nossa web página garante o direito a concessão de licença ou direito de uso sem o consentimento expresso de um dos gerenciadores da página ou do proprietário da página. </br>
<br> 6.7 O consentimento de cópia ou compartilhamento deve vir por escrito de forma clara e expressa. </br>
<br> 6.8 É vedado compartilhar, copiar, plagiar ou disponibilizar qualquer conteúdo, foto, vídeo ou áudio encontrado em nosso site sem consentimento expresso. </br>
<br> 7. Formas de pagamento</br>
<br> 7.1 As formas de pagamento aceitas em nosso e-commerce são cartão de crédito e débito, ou boleto bancário. </br>
<br> 7.2 O boleto bancário poderá ser emitido no momento em que você escolheu a opção, preencheu os dados requisitados e gerou. </br>
<br> 7.2.1 O boleto tem vencimento na data exposta no mesmo, não sendo aceito após a data de vencimento. </br>
<br> 7.2.2 Se o boleto vencer e o pagamento não tiver sido efetuado, o produto voltará a ficar disponível para venda e será necessário realizar uma nova compra para adquiri-lo. </br>
<br> 7.3 O produto será enviado assim que o pagamento for processado, registrado e confirmado em nossa plataforma. </br>
<br> 7.4 Qualquer outra forma de pagamento não é aceita por nosso e-commerce. </br>
<br> 7.5 Cupons de descontos são aceitos, desde que tenhamos disponibilizados, estando sujeitos a esgotarem ou terem vigência cancelada a qualquer momento. </br>
<br> 7.5 Se o cliente quiser parcelar o produto em mais vezes deverá arcar com os juros da operadora. </br>
<br> 7.6 Para solicitar o estorno entre em contato com a nossa Central de Atendimento ou SAC. </br>
<br> 8. Entrega e envio do produto</br>
<br> 8.1 O produto será enviado assim que o pagamento for confirmado, podendo ser enviado até 3 dias após a confirmação do pagamento. </br>
<br> 8.2 Os custos de envio e entrega estarão dispostos no momento em que você estiver quase finalizando a compra, na aba de frete/entrega/envio, onde você informará o seu endereço e CEP. </br>
<br> 8.3 O cliente pagará pela entrega e o envio do produto com faixas pré-definidas, ou de acordo com o peso padrão da categoria. </br>
<br> 9. Troca e devolução</br>
<br> 9.1 O cliente poderá devolver o produto ou trocar que foi adquirido em nosso e-commerce em até 7 dias, seja qual for a razão, conforme a previsão expressa no Código de Defesa do Consumidor em seu art. 49. </br>
<br> 9.1.1 Para que ocorra a troca ou a devolução é necessário que o produto esteja conforme foi entregue, com todos os acessórios, manual e embalagem, caixa. </br>
<br> 9.1.2 O produto que será devolvido ou trocado não poderá apresentar qualquer marca de uso, como o produto estar trincado, riscado ou apresentar sinais de quedas. </br>
<br> 9.2 Se você requisitou a troca do produto o novo será enviado para o endereço e você será notificado sobre o envio via e-mail. </br>
<br> 9.3 Se você solicitou o reembolso, a devolução do valor ocorrerá da forma como foi efetuado o pagamento. </br>
<br> 9.3.1 Se foi via cartão de crédito ou débito o valor será creditado ou debitado na fatura atual ou na seguinte do cartão, pois informaremos a administradora do cartão. </br>
<br> 9.3.2 Se o pagamento foi feito via boleto bancário, o valor de reembolso será restituído dentro de 30 dias úteis diretamente na conta que solicitaremos no momento de sua requisição de devolução. </br>
<br> 10. Política de Privacidade e Proteção de Dados</br>
</br> 10.1 Você pode conferir a nossa política de privacidade no link de rodapé, onde informamos como ocorre a coleta e o tratamentos dos dados cadastrados em nosso site, bem como da navegação. </br>
`;

	document.querySelector('.area').classList.toggle('sombra');
	document.querySelector('.area').appendChild(termosPage);
	document.querySelector('.tela-termos').appendChild(header);
	document.querySelector('.tela-termos > .itens').appendChild(texto);
	document.querySelector('.tela-termos > .itens').appendChild(iconX);

	document.querySelector('.tela-termos').appendChild(termosCaixa);
	document.querySelector('.termos-caixa').appendChild(termosTexto);

	let fechar = document.querySelector(".itens > i");
	fechar.addEventListener("click", ()=>{
		console.log("Botão fechar precionado");
		document.querySelector('.area').classList.remove('sombra');
		document.querySelector(".tela-termos").remove();
	});
});


let caixaTermoInput = document.querySelector('#termos');
caixaTermoInput.value = false;
let sVerificado = document.querySelector("#verificado");
sVerificado.style.opacity = '0';

let enviarDados = document.querySelector('#env-dados');

let caixaTermo = document.querySelector("#caixa-termos").addEventListener("click", function(){
	caixaTermoInput.click();
	caixaTermoInput.value = true;

	if (sVerificado.style.opacity == '0') {
		sVerificado.style.opacity = "1";
	}else{
		sVerificado.style.opacity = '0';
	}
		if (caixaTermoInput.checked) {
		//console.log('A caixa foi marcada');
		caixaTermoInput.value = true;
	}else{
		//console.log("A caixa foi desmarcada");
		caixaTermoInput.value = false;
	}

	marcaBt();

	enviarDados.onclick = () =>{
		console.log("Botão cadastrar enviado");
	}

	if (caixaTermoInput == false) {
		enviarDados.forEach(function(elm){
			elm.setAttribute('disabled', 'true');
		});
	}
});

function marcaBt(){
	if (caixaTermoInput.checked == true) {
		//console.log('Caixa marcada');
	} else if (caixaTermoInput.checked == false) {
		//console.log('Caixa desmarcada');
	}
}

const cpf = document.querySelector("#cpf");

cpf.addEventListener("keypress", () =>{
	let cpfFormatado = cpf.value.length;
	
	if (cpfFormatado === 3 || cpfFormatado === 7) {
		cpf.value += ".";
	} else if(cpfFormatado === 11){
		cpf.value += "-";
	}
});

const telefone = document.querySelector("#telefone");
telefone.addEventListener("keypress", ()=>{
	let telefoneFormatado = telefone.value.length;

	if (telefoneFormatado === 0) {
		telefone.value += "(";
	} else if(telefoneFormatado === 3){
		telefone.value += ") ";
	} else if (telefoneFormatado === 10) {
		telefone.value += "-";
	}
});
