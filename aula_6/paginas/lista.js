var banco = window.localStorage;

$(document).ready(function() {
    fLocalMostraDados();

    $("#bVoltar").click(function() {

        window.location.href = "../parte_1/index.html"
    });
});

function fLocalMostraDados() {
    var dados = JSON.parse(banco.getItem("dadosUsuarios"));
    $("#tableUsuarios").html("");
    if( dados == null) {
        return;
    }

    for( var i = 0; i < dados.length; i++) {
        var conteudo = "";
        conteudo += "<tr>"; 
        conteudo += "<td>" + dados[i][0] + "</td>";
        conteudo += "<td>" + dados[i][1] + "</td>";
        conteudo += "<td>" + dados[i][2] + "</td>";
        conteudo += "<td>" + dados[i][3] + "</td>";
        conteudo += "</tr>";

        $("#tableUsuarios").append(conteudo);

    }
}
