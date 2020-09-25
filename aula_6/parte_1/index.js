var dados = [];
var banco = window.localStorage;

$(document).ready(function() {
    var db = banco.getItem("dadosUsuarios")
    if( db !== null) {
        dados = JSON.parse(db);   
    }else {
        dados = [];
    }

    $("#bGravar").click(function() {
        var nome = $("#tNome").val();
        var sobrenome = $("#tSobrenome").val();
        var idade = $("#tIdade").val();
        var email = $("#tEmail").val();
        
        var aux = [];
        aux.push(nome);
        aux.push(sobrenome);
        aux.push(idade);
        aux.push(email);
        
        dados.push(aux);

        banco.setItem("dadosUsuarios", JSON.stringify(dados));
        //fLocalMostraDados();
        alert("Seu arquivo foi gravado!");
        $("#tNome").val("");
        $("#tSobrenome").val("");
        $("#tIdade").val("");
        $("#tEmail").val("");
    });

    $("#bMostrar").click(function() {
        window.location.href = "../paginas/lista.html"
    });

    $("#bDeletar").click(function() {
        alert("Seu banco de dados foi apagado!");
        banco.clear("dadosUsuarios");
    });
});

