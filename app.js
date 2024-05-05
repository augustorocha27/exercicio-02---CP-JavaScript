function verificarNumero() {
    let idade = Number(window.prompt('Digite sua idade'));
    let res = window.document.getElementById('resultado');
    
    if (idade < 16){
        res.innerHTML = `<p>Você tem ${idade} anos, não precisa votar ainda!</p>`;
    }
    else if (idade >= 16 && idade < 18 || idade >= 70){
        res.innerHTML = `<p>Você tem ${idade} anos, seu voto é facultativo !</p>`;
    }
    else if (idade >= 18 && idade <= 70){
        res.innerHTML = `<p>Você tem ${idade} anos, seu voto é obrigatório !</p>`;
    }
    
}

