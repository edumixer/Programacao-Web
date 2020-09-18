var dados = [];

$(document).ready(function() {
    
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
        fLocalMostraDados();
    });
});

function fLocalMostraDados() {

    $("#tableUsuarios").html("");

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