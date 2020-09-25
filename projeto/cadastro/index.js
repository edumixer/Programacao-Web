var dados = [];
var banco = window.localStorage;

$(document).ready(function() {
    var db = banco.getItem("dadosUsuarios")
    if( db !== null) {
        dados = JSON.parse(db);   
    }else {
        dados = [];
    }
    
    $("#salvar-formulario").click(function() {
        var nome = $("#nome").val();
        var sobrenome = $("#sobrenome").val();
        var email = $("#email").val();
        var senha = $("#senha").val();
        var confirma_senha = $("#confirma_senha").val();
        
        var aux = [];
        aux.push(nome);
        aux.push(sobrenome);
        aux.push(email);
        aux.push(senha);
        aux.push(confirma_senha);
        
        dados.push(aux);
        
        banco.setItem("dadosUsuarios", JSON.stringify(dados));
        //fLocalMostraDados();
        alert("Seu arquivo foi gravado!");
        
        
        if (nome == 0){
            $("#nome").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#nome").removeClass("campo-errado").addClass("campo-formulario");
        }
        
        if (sobrenome == 0){
            $("#sobrenome").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#sobrenome").removeClass("campo-errado").addClass("campo-formulario");
        }
        
        if (email == 0){
            $("#email").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#email").removeClass("campo-errado").addClass("campo-formulario");
        }
        
        if (senha == 0){
            $("#senha").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#senha").removeClass("campo-errado").addClass("campo-formulario");
        }
        
        if (confirma_senha == 0){
            $("#confirma_senha").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#confirma_senha").removeClass("campo-errado").addClass("campo-formulario");
        }
        
        if ((nome != 0) && (sobrenome != 0) && (email != 0) && (senha != 0) && (confirma_senha != 0)) {
            alert("Voce completou todos os campos");
        }
        
        
        if (verifica_senha(senha, confirma_senha)) {
            $("#nome").val("");
            $("#sobrenome").val("");
            $("#email").val("");
            $("#senha").val("");
            $("#confirma_senha").val("");
        }
        
        // $("salvar-formulario").click(function() {
        window.location.href = "../home/index.html"
        // });
    });
    
    function verifica_senha(senha, confirma_senha) {
        if (senha !== confirma_senha) {
            alert("Por favor, insira uma senha igual");
            $("#senha").removeClass("campo-formulario").addClass("campo-errado");
            $("#confirma_senha").removeClass("campo-formulario").addClass("campo-errado");
            return false;
        }
        return true;
    }
    
});



