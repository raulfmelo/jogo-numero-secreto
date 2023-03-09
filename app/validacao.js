function verificaSeOChutePossuiUmValorValido(chute){
    const numero = parseInt(chute)

    if(chuteForValido(numero)){
        console.log('Valor Invalido')
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor Inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto){
        console.log("Você Acertou!")
        document.body.innerHTML = `
            <h2>&#x1F973	 Você Acertou!!!<h2>
            <h3> O número secreto era ${numeroSecreto}</h3>
            <button id="jogarNovamente" class="btn-jogar">Jogar Novamente</button>
        `
    }

    else if(numero > numeroSecreto){
        elementoChute.innerHTML = `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
    else{
        elementoChute.innerHTML = `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteForValido(numero){
    return Number.isNaN(numero)
}
function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogarNovamente'){
        window.location.reload()
    }
})