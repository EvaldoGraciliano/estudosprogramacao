let vetor = [];


function salvarvalores (){
  
  let a;
  a = document.getElementById('numero').value;
  
  a=parseInt(a);
  console.log( 'valor de a antes de limpar:',typeof(a));
  
  vetor.push(a);
  console.log('valor salvo');
  a = document.getElementById('numero').value = "";
  console.log(typeof(a));
}





function calcular() {
  
  console.log('tamanho do vetor',vetor.length);

  console.log('vetor indice 0:',vetor[0]);
  console.log('vetor indice 1:',vetor[1]);
  console.log('vetor indice 2:',vetor[2]);
  
  var iteracoes = vetor.length;    
  console.log(iteracoes);
 
  let number = 0;
 
  for(let x=0;x<vetor.length;x++){
    
    number = number + vetor[x];
    console.log('dentro do for',vetor[0]);
    console.log('dentro do for',vetor[1]);
    console.log('dentro do for',vetor[2]);
    console.log('numero dentro do for',number);


  }
  console.log(number);

  let media  = number/iteracoes;
  



  console.log('A media é:',media);
  alert(`a media é ${media}`);
}



