var invites=[];
var more_happened = 0;
var inputs=document.getElementsByTagName('input');
function click_show_mores() {
	var found = 0;
	var show_more = 0;
	anchors=document.getElementsByTagName('a');
	console.log("Quantidade de alvos localizados : " + anchors.length);
	for (var j = 0; j < anchors.length; j++) {
		console.log(anchors[j].innerText);
		if (anchors[j].innerText == "Mostrar mais") {
			found = 1;
			show_more = anchors[j];
		}
	}
	if (!found) {
		console.log("Elementos de envio de convites não encontrados !")
	} else {

		console.log("Elementos encontrados e acionados com sucesso !");
		show_more.click();
		window.setTimeout(function() {
			click_show_mores();
		}, 2000);
	}
}

click_show_mores();

console.log(inputs.length);
for (var i= 0; i < inputs.length; i++) {
	if(inputs[i].value == "Convidar") {
		invites.push(inputs[i]);
	}
}

function invite_that(some) {
	console.log(some.length);
	if (some.length == 0) {
		return;
	}
	some[0].click();

	console.log("Aguardando para o início do próximo envio !!");
	console.log("Preparando o próximo envio ..");
	console.log(some.length);
	window.setTimeout(function() {
		console.log("Envio de convite realizado !");
		console.log(some.length);
		invite_that(some.splice(1));
		console.log(some.length);
	}, 1600);
}

invite_that(invites);
