   const numeros = [1,2,3,4,5];
   const vetorNumber = [10,8];
   let novoArray = [];

  //modo tradicional MAP
   for (let i=0; i<numeros.length;i++){
   novoArray.push(numeros[i]*2);
}

   //usando o map
   const novoArrayMap = numeros.map(function(numero) {
    return numero*5
})

  //usando o map com Arron Function , o map retorna um Array
  const  arrowArray = numeros.map(numero => numero * 6 );
  
  //usando o map com Arron Function , o map retorna um Array
  const vetorNomes = ['Evaldo', 'Graciliano'];
  const vetorNomesArray = vetorNomes.map(nome => nome.toLowerCase());
  

   // Modo tradicional usando FOR para FIltrar 
   
   const vetorNumberFiltrado = [];
  
   

   for (let i=0; i<=vetorNumber.length;i++){
      if(vetorNumber[i] % 2 ===0){
         vetorNumberFiltrado.push(vetorNumber[i]);
      }
   }

   // o método Filter retorna Um array, a função de Callback retorna True ou false(usando ArrowFunction)
   const vetorNumberFilter = vetorNumber.filter(number => number % 1 === 0);

  

   // usando o filter e o MAP juntos, funciona dos dois jeitos, tanto MAP ou Filter na frente
   const vetorNumberteste = [1,2,3];
   const vetorNumberFilterMap = vetorNumberteste.map(number => number * 2).filter(number=> number % 2 ===0);
   console.log(vetorNumberFilterMap); 
  

   // usando for para somar os itens do array
   let soma = 0;

   for(let i = 0; i<numeros.length; i++){
      soma = soma + numeros[i];
   }

   // usando o reduce com função normal
   const result = numeros.reduce(function(valorAcumulador , valorArray){
         return valorAcumulador + valorArray;
   }, 0 )

   // usando reduce com arrow Function
  const resultArrow = numeros.reduce((valorAcumulador , valorArray)  =>  valorAcumulador + valorArray,0);


  const pessoas =[
     {
        nome:'Ayrton',
        idade: 27
     }
     ,
     {
        nome: 'João',
        idade: 14
     }
  ]

// reduce com objetos
 const pessoasFiltradas = pessoas.reduce(function (valorAcumulador, valorArray) {
   
   const  propMaiorOuMenor = valorArray.idade >=18 ? 'maiores' : 'menores';   
   valorAcumulador[propMaiorOuMenor].push(valorArray); 

   return valorAcumulador;

 }, { maiores: [], menores: [] })

   //reduce com objetos e arrowFunction 
   pessoas.reduce((valorAcumulador, valorArray) => {
      const  propMaiorOuMenor = valorArray.idade >=18 ? 'maiores' : 'menores';   
      valorAcumulador[propMaiorOuMenor].push(valorArray); 
   
      return valorAcumulador;
   }, { maiores: [], menores: [] })

 