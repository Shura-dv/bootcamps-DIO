let pessoa = {
    nome: "Carlos",
    idade: 37
};

function calculaIdade(anos) { 
  
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

// console.log(calculaIdade.call(pessoa, 15));
console.log(calculaIdade.apply(pessoa, [15]));