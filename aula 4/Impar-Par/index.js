$(document).ready(function() {

    $("#bPar").click(function() {
        mostraPares();
    });

    $("#bImpar").click(function() {
        mostraImpar();
    });
});


function mostraPares() {
    $("#divResultado").html("");
    var parada = parseInt($("#tCondicaoParada").val());
    for( var i = 2; i <= parada; i += 2) {
        $("#divResultado").append(i + "<br>");
    }
}

function mostraImpar() {
    $("#divResultado").html("");
    var parada = parseInt($("#tCondicaoParada").val());
    for( var i = 1; i <= parada; i += 2) {
        $("#divResultado").append(i + "<br>");
    }
}