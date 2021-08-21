
// exemplo de uma arrow function, como estão na mesma linha 
// não precisa do return
// exemplo 1 

const sum = (valor1,valor2) => valor1 + valor2;
console.log(sum(2,2));


// exemplo 2 
const sum2 = (valor3,valor4) => {
    return valor3+valor4; 

}

console.log(sum2(5,5));

// exemplo 3, sem parâmetros
const  comunity = () => {
    return ('Trobogy');

}
console.log(comunity());

// exemplo 4, sem o return 
const comunity2 = () => 'Madre de Deus';

console.log(comunity2());

// exemplo 5, quando se tem um único parâmetro você pode tirar o parentese
const multiplicar = number => number*2;
console.log(multiplicar(5));

// exemplo 6, usando o _ como parâmetro.
const multiplicar2 = _ => _*2;
console.log(multiplicar2(5));

//Exemplo 6 , utilizando condicional
const cIdade = (idade) => {
    if(idade >=18){
        return 'pessoa maior de idade';
    }

    else { return 'menor de idade';
    }

};


console.log(cIdade(19));

 //exemplo 7, usando Json

const getPerson = () => ({name: "Evaldo" , eye:"blue" });

console.log(getPerson());

//Criando função com Json que se autoexecuta para que outras pessoas não possam executar no navegador quando
//quiserem

//Continuar em 35 minutos
