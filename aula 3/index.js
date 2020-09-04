$(document).ready(function() {
    $("#somar").click(function(){
        var somar1 = parseInt($("#somar1").val());
        var somar2 = parseInt($("#somar2").val());
        var somar = somar1 + somar2;
        $("#bAdicao").val(somar);

        $("#somarL").click(function(){
            var somar1 = parseInt($("#somar1").val(" "));
            var somar2 = parseInt($("#somar2").val(" "));
            var bAdicao = parseInt($("#bAdicao").val(""));
            $("#somarL").val(" ");
        });
    });
    $("#subtrair").click(function(){
        var subtrair1 = parseInt($("#subtrair1").val());
        var subtrair2 = parseInt($("#subtrair2").val());
        var subtrair = subtrair1 - subtrair2;
        $("#bSub").val(subtrair);

        $("#subtrairL").click(function(){
            var subtrair1 = parseInt($("#subtrair1").val(" "));
            var subtrair2 = parseInt($("#subtrair2").val(" "));
            var subtrair = parseInt($("#bSub").val(""));
            $("#subtrairL").val(" ");
        });
    });
    $("#multiplicar").click(function(){
        var multiplicar1 = parseInt($("#multiplicar1").val());
        var multiplicar2 = parseInt($("#multiplicar2").val());
        var multiplicar = multiplicar1 * multiplicar2;
        $("#bMulti").val(multiplicar);

        $("#multiplicarL").click(function(){
            var multiplicar1 = parseInt($("#multiplicar1").val(" "));
            var multiplicar2 = parseInt($("#multiplicar2").val(" "));
            var multiplicar = parseInt($("#bMulti").val(""));
            $("#multiplicarL").val(" ");
        });
    });
    $("#dividir").click(function(){
        var dividir1 = parseInt($("#dividir1").val());
        var dividir2 = parseInt($("#dividir2").val());
        var dividir = dividir1 / dividir2;
        $("#bDivi").val(dividir);

        $("#dividirL").click(function(){
            var dividir1 = parseInt($("#dividir1").val(" "));
            var dividir2 = parseInt($("#dividir2").val(" "));
            var dividir = parseInt($("#bDivi").val(""));
            $("#dividirL").val(" ");
        });
    });
    
    
    // $("#raiz").click(function(){
    //     var raiz1 = parseInt($("#raiz1").val());
    //     var raiz = Math.sqrt(raiz1);
    //     alert(raiz);
    // });
});