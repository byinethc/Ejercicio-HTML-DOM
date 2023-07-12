$(document).ready(function() {

    var arrayCantidadJuana = [];
    var arrayPrecioJuana = [];

    var arrayCantidadPedro = [];
    var arrayPrecioPedro = [];

    var sumaJuana = 0;
    var sumaPedro = 0;
    var ventasJuana = 0;
    var ventasPedro = 0;


    $("#agregar_productos").on("click", function() {

        let perfume = $("#producto").val();
        let vendedor = $("#vendedor").val();
        let cantidad = parseInt($("#cantidad").val());
        let precio;
        if (perfume == 'aqua') {
            precio = 200;
        } else if (perfume == 'emocion') {
            precio = 180;
        } else if (perfume == 'alegria') {
            precio = 160;
        } else {
            precio = 150;
        }
        // productos Juana 
        if (vendedor == 'juana') {
            arrayCantidadJuana.push(cantidad);
            arrayPrecioJuana.push(parseInt(precio));

        } else {
            arrayCantidadPedro.push(cantidad);
            arrayPrecioPedro.push(precio);
        }
    });


    function calcularCantidadJuana() {

        for (var i = 0; i < arrayCantidadJuana.length; i++) {
            sumaJuana += arrayCantidadJuana[i];
        }
        console.log("la cantidad de productos vendidas por Juana son" + " " + sumaJuana);
    }

    function calcularCantidadPedro(arrayPedro) {
        for (var i = 0; i < arrayCantidadPedro.length; i++) {
            sumaPedro += arrayCantidadPedro[i];
        }
        console.log("la cantidad de productos vendidas por Pedro son" + " " + sumaPedro);
    }


    function calcularVentasJuana() {

        for (var i = 0; i < arrayPrecioJuana.length; i++) {
            ventasJuana += arrayPrecioJuana[i];
        }
        console.log("las ventas de Juana son" + " " + ventasJuana);
    }

    function calcularVentasPedro(arrayPedro) {
        for (var i = 0; i < arrayPrecioPedro.length; i++) {
            ventasPedro += arrayPrecioPedro[i];
        }
        console.log("la cantidad de productos vendidas por Pedro son" + " " + ventasPedro);
    }


    function elMejor() {
        if (sumaJuana > sumaPedro) {
            console.log("El mejor vendedor del mes es Juana");
        } else {
            console.log("El mejor vendedor del mes es Pedro");
        }
    }


    $('#calcularJuana').on('click', function() {
        console.log(calcularCantidadJuana());
        console.log(calcularVentasJuana());
        console.log(elMejor());

    });

    $('#calcularPedro').on('click', function() {
        console.log(calcularCantidadPedro());
        console.log(calcularVentasPedro());
        console.log(elMejor());
    });


});