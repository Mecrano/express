$(document).ready(function () {
    $(".logo-carrito").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $(".menu-carrito").show();
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $(".menu-carrito").hide();
        }
    );
});
$(document).ready(function () {
    $(".logo-lupa").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $(".menu-lupa").show();
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $(".menu-lupa").hide();
        }
    );
});
$(document).ready(function () {
    $(".logo-mi-cuenta").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $(".menu-mi-cuenta").show();
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $(".menu-mi-cuenta").hide();
        }
    );
});