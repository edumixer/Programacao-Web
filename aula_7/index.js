
var array_filmes = [['Resgate', 'resgate.jpg', 'Ação', false], ['O Pressão da Verdade', 'preco_da_verdade.jpg', 'Ação', false], 
['Rambo', 'rambo.jpg', 'Ação', false], ['Coringa', 'coringa.jpg', 'Ficçãoo', false], 
['Projeto Gemini', 'projeto_gemini.jpg', 'Ficção', false], ['Milagre na Cela 7', 'milagre_na_cela_7.jpg', 'Drama', false], 
['Dunkirk', 'dunkirk.jpg', 'Guerra', false], ['A Garota no Trem', 'a_garota_no_trem.jpg', 'Suspense', false]];

var array_carrinho = [];

$(document).ready(function() {
    

    fLocalListaFilmes();
});

function fLocalListaFilmes() {
    $(".div-filmes").html("");

    for(var i = 0; i < array_filmes.length; i++) {
        
        var conteudo = "";

        conteudo += '<div class="div-card">';
        conteudo += '<div class="div-poster">';
        conteudo += '<img src="images/' + array_filmes[i][1] + '">';
        conteudo += '</div>';
        conteudo += '<div class="div-titulo">';
        conteudo += '<h3>' + array_filmes[i][0] + '</h3>';
        conteudo += '</div>';
        conteudo += '<div class="div-descricao">';
        conteudo += '<b>Diretor:</b>' + array_filmes[i][2] + '<br>';
        conteudo += '<b>Genero:</b>' + array_filmes[i][2] + '<br>';
        conteudo += '<b>Ano:</b>' + array_filmes[i][2];
        conteudo += '</div>';
        conteudo += '<div class="div-footer">';

        if(array_filmes[i][3] == false){
            conteudo += '<button class="btn-footer" id_filme="' + i + '">Comprar</button>';
        }
        else {
            conteudo += '<button class="btn-footer btn-comprado" id_filme="' + i + '">Comprado</button>';
        }
        
        conteudo += '</div>';
        conteudo += '</div>';

        $(".div-filmes").append(conteudo);
    }

    $(".btn-footer").click(function() {
        var id = $(this).attr("id_filme");

        array_filmes[id].splice(3, 1, true);

        array_carrinho.push(array_filmes[id]);

        console.log(array_carrinho);

        fLocalListaFilmes();
    })
}

