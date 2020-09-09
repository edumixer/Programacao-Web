$(document).ready(function() {

    $("#salvar-formulario").click(function() {
        var valor1 = $("#nome").val();
        var valor2 = $("#sobrenome").val();
        var valor3 = $("#email").val();
        var valor4 = $("#matricula").val();
        var valor5 = $("#usuario").val();
        var valor6 = $("#senha").val();
        var valor7 = $("#confirma-senha").val();

        
        if (valor1 == 0){
            $("#nome").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#nome").removeClass("campo-errado").addClass("campo-formulario");
        }

        if (valor2 == 0){
            $("#sobrenome").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#sobrenome").removeClass("campo-errado").addClass("campo-formulario");
        }

        if (valor3 == 0){
            $("#email").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#email").removeClass("campo-errado").addClass("campo-formulario");
        }

        if (valor4 == 0){
            $("#matricula").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#matricula").removeClass("campo-errado").addClass("campo-formulario");
        }

        if (valor5 == 0){
            $("#usuario").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#usuario").removeClass("campo-errado").addClass("campo-formulario");
        }
        
        if (valor6 == 0){
            $("#senha").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#senha").removeClass("campo-errado").addClass("campo-formulario");
        }
        
        if (valor7 == 0){
            $("#confirma-senha").removeClass("campo-formulario").addClass("campo-errado");
        }
        else {
            $("#confirma-senha").removeClass("campo-errado").addClass("campo-formulario");
        }
        
        if ((valor1 != 0) && (valor2 != 0) && (valor3 != 0) && (valor4 != 0) && (valor5 != 0) && (valor6 != 0) && (valor7 != 0)) {
            alert("Voce completou todos os campos");
        }
        
        
        if (verifica_senha(valor6, valor7)) {
            $("#nome").val("");
            $("#sobrenome").val("");
            $("#email").val("");
            $("#matricula").val("");
            $("#usuario").val("");
            $("#senha").val("");
            $("#confirma-senha").val("");
        }

        $("#nome").focus();
        // redirecionar();
    });
    
    function verifica_senha(valor6, valor7) {
        if (valor6 !== valor7) {
            alert("Por favor, insira uma senha igual");
            $("#senha").removeClass("campo-formulario").addClass("campo-errado");
            $("#confirma-senha").removeClass("campo-formulario").addClass("campo-errado");
            return false;
        }
        return true;
    }

    // var redirecionar = function() {          Segue ai kkkkk
    //     window.location = "https://www.instagram.com/smart_codebr/";
    // }
});
