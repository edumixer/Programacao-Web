$(document).ready(function() {

    $("#bAdicao").click(function() {

        var valor1 = parseInt($("#tAdicao1").val());
        var valor2 = parseInt($("#tAdicao2").val());
        var soma = valor1 + valor2;
        $("#tAdicaoResultado").val(soma);
    });
    $("#tAdicaoLimpar").click(function() {
        $("#tAdicao1").val("");
        $("#tAdicao2").val("");
        $("#tAdicaoResultado").val("");
        $("#tAdicao1").focus();
        
    });


    $("#bSubtracao").click(function() {

        var valor1 = parseInt($("#tSubtracao1").val());
        var valor2 = parseInt($("#tSubtracao2").val());
        var soma = valor1 - valor2;
        $("#tSubtracaoResultado").val(soma);
    });
    $("#tSubtracaoLimpar").click(function() {
        $("#tSubtracao1").val("");
        $("#tSubtracao2").val("");
        $("#tSubtracaoResultado").val("");
        $("#tSubtracao1").focus();
        
    });


    $("#bMultiplicacao").click(function() {

        var valor1 = parseInt($("#tMultiplicacao1").val());
        var valor2 = parseInt($("#tMultiplicacao2").val());
        var soma = valor1 - valor2;
        $("#tMultiplicacaoResultado").val(soma);
    });
    $("#tMultiplicacaoLimpar").click(function() {
        $("#tMultiplicacao1").val("");
        $("#tMultiplicacao2").val("");
        $("#tMultiplicacaoResultado").val("");
        $("#tMultiplicacao1").focus();
        
    });


    $("#bDivisao").click(function() {

        var valor1 = parseInt($("#tDivisao1").val());
        var valor2 = parseInt($("#tDivisao2").val());
        var soma = valor1 - valor2;
        $("#tDivisaoResultado").val(soma);
    });
    $("#tDivisaoLimpar").click(function() {
        $("#tDivisao1").val("");
        $("#tDivisao2").val("");
        $("#tDivisaoResultado").val("");
        $("#tDivisao1").focus();
        
    });


});