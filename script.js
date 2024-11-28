let countDown = 30;
let points = document.getElementById("points");
let timer = setInterval(() => {
    countDown--
    let spanTimer = document.getElementById("timer");
    spanTimer.innerHTML = countDown
    console.log(countDown)
    if (countDown <= 0){
        clearInterval(timer)
        let pointsByUser = points.value
        window.alert('O tempo acabou, você conseguiu efetuar ' + pointsByUser + ' cadastros de fantasmas')
        tabela.innerHTML = "";  
    }
    
    document.getElementById("resetTimer").addEventListener('click', function resetTimer (){
        countDown = 30
        })
        
        
    }, 1000)
    
let tabela = document.getElementById("tabelaFantasma").querySelector("tbody");


let holder = 0
document.getElementById("botaoCadastrar").addEventListener("click", function () {
    let nome = document.getElementById("nome").value.trim();
    let idade = parseInt(document.getElementById("idade").value.trim());
    let poder = document.getElementById("poder").value.trim();
    let mensagem = document.getElementById("mensagem");
    let points = document.getElementById("points");
    let increasePoints = 0


    if (!nome || !idade || !poder)  {
        mensagem.innerText = "Erro: Todos os campos devem ser preenchidos corretamente!";
        mensagem.style.color = "red";
        return;
    }

    increasePoints++;
    holder = holder + increasePoints;
    points.value =  holder;

        // Caso queira determianar quantos cadastro o usuario tem que fazer (definir uma quantidade)
    // if (points.value == 5){
    //     window.alert('Parabens você conseguiu cadastrar 5 fantasmas');
    // }

    let tabela = document.getElementById("tabelaFantasma").querySelector("tbody");
    let novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = idade;
    novaLinha.insertCell(2).innerText = poder;


    mensagem.innerText = `Fantasma ${nome} cadastrado com sucesso!`;
    mensagem.style.color = "green";

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("poder").value = "";

});
