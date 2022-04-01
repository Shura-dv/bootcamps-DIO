function comparaNumeros (num1, num2) {
    if(!num1 || !num2) {
        return "Defina dois números.";
    }

    const primeiraSentenca = mostraPrimeiraSentenca(num1, num2);
    const segundaSentenca = mostraSegundaSentenca(num1, num2);

    return `${primeiraSentenca} ${segundaSentenca}`
}

function mostraPrimeiraSentenca(num1, num2) {
    let saoIguais = " ";
    if(num1 !== num2) {
        saoIguais = "não";
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function mostraSegundaSentenca(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = "menor";
    let resultado20 = "menor";
    const maiorQueDez = soma > 10;
    const menorQueVinte = soma > 20

    if(maiorQueDez) {
        resultado10 = "maior"
    }

    if(menorQueVinte) {
        resultado20 = "maior"
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(5, 15));