const alunos = [
    {
        nome: "Marcos",
        nota: 7,
        melhorDiciplina: "História"
    },
    {
        nome: "Felipe",
        nota: 3,
        melhorDiciplina: "Geografia"
    },
    {
        nome: "Amanda",
        nota: 5,
        melhorDiciplina: "Matemática" 
    }
]

function alunosAprovados (array, media) {
    let aprovados = [];

    for(let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];
        if(nota >= media){
            aprovados.push(nome)
        }
        return aprovados;
    }
}

console.log(alunosAprovados(alunos, 7));