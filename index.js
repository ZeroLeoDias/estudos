function calcular(){
	//Cancelar o comportamento padrão do botão submit
	event.preventDefault();
	
	//Recuperar os valores digitados de nota1 e nota2
	var n1 = Number(document.getElementById("nota1").value);
	var n2 = Number(document.getElementById("nota2").value);
	
	//Calcular a media
	var media = calculaMedia(n1,n2);
	
	//Calcular o resultado
	var resultado = calculaResultado(media);
	
	//Preencher a media e o resultado na minha página
	document.getElementById("media").value = media;
	document.getElementById("resultado").value = resultado;	
}

function calculaMedia(nota1,nota2){
	return (nota1+nota2)/2;
} 

function calculaResultado(media){
  if(media==0){
	  return "burro pra caralho";
  }
  else {
	  if(media>0 && media<=3){
	    return "estude mais";
	  }
	  else{
		  if(media>3 && media<7){
			return "reprovado";
		  }else{
			return "Aprovado";
		  }	  
	  }
  }
}