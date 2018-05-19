primeiroJogo = {
    nome: "The Witcher III",
    valor: 100
}

segundoJogo = {
    nome: "FIFA 18",
    valor: 150
}

listaJogos = [primeiroJogo,segundoJogo]

let total = 0;

for (let indice=0; indice < listaJogos.length; indice++) {
    total = soma(total,listaJogos[indice].valor);
}

function soma(x1,x2) {
    return x1+x2;
}

console.log(`Valor total dos jogos: ${total}`)

