//Faça um programa que entre com cinco números e imprima o quadrado de cada número.


function quadrado(){
  
  let digitos = 0 ;
  let vetor = [];
  let a;
 
  while(digitos<5){
    
    a = prompt('Informe o número');
    a = parseInt(a);
    vetor.push(a);
    digitos++;
  }


    document.getElementById('numero1').innerHTML = `O número inserido foi ${vetor[0]}:${vetor[0]*vetor[0]}`
    document.getElementById('numero2').innerHTML = `O número inserido foi ${vetor[1]}:${vetor[1]*vetor[1]}`
    document.getElementById('numero3').innerHTML = `O número inserido foi ${vetor[2]}:${vetor[2]*vetor[2]}`
    document.getElementById('numero4').innerHTML = `O número inserido foi ${vetor[3]}:${vetor[3]*vetor[3]}`
    document.getElementById('numero5').innerHTML = `O número inserido foi ${vetor[4]}:${vetor[4]*vetor[4]}`

     
      // Modo alternativo de fazer
      // let resultado = vetor[x];
      // resultado = resultado * resultado;
      // console.log(resultado);
      

  }


 



quadrado();