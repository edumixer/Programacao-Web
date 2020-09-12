var globalMusicas = [];

$(document).ready(function() {
    fLocalEventosClick();
});

function fLocalEventosClick() {
    $("#bAdd").click(function() {
        var nome = $("#tMusica").val();
        globalMusicas.push(nome);
        FLocalListaMusicas();        
    });

    $("#bRemover").click(function() {
        var posicao = parseInt($("#tPosicao").val());
        var qtde = parseInt($("#tQtde").val());

        globalMusicas.splice(posicao, qtde);
        FLocalListaMusicas();
    });
}

function FLocalListaMusicas() {    
    $("#divMusicas").html("");
    for( var i = 0; i < globalMusicas.length; i++) {
        $("#divMusicas").append(i + ": " + globalMusicas[i] + "<br>");
    }
}