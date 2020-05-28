$(document).ready(function () {
    $(".logo-lupa").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $("#menu-slide-lupa").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $("#menu-slide-lupa").css("width", "0%");
            $("#background-opaco").removeClass("active");
        }
    );

    $(".menu-lupa").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $("#menu-slide-lupa").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $("#menu-slide-lupa").css("width", "0%");
            $("#background-opaco").removeClass("active");
        }
    );

    $(".logo-mi-cuenta").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $("#menu-slide-cuenta").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $("#menu-slide-cuenta").css("width", "0%");
            $("#background-opaco").removeClass("active");
        }
    );

    $(".menu-mi-cuenta").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $("#menu-slide-cuenta").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $("#menu-slide-cuenta").css("width", "0%");
            $("#background-opaco").removeClass("active");
        }
    );

    $(".logo-carrito").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $("#menu-slide-carrito").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $("#menu-slide-carrito").css("width", "0%");
            $("#background-opaco").removeClass("active");
        }
    );
    $(".menu-carrito").hover(
        // Cuando entra el mouse
        function () {
            console.log("abrir menu slide");
            $("#menu-slide-carrito").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $("#menu-slide-carrito").css("width", "0%");
            $("#background-opaco").removeClass("active");
        }
    ),

    $(".nav .navbar .dropdown").hover(
        // Cuando entra el mouse
        function () {
            $(".menu-inferior").css("z-index", "2");
            $("#background-opaco").addClass("active");
            $("#background-opaco").css("top", "13.2rem");
            $(this).addClass("active");
        },
        // cuando sale el mouse
        function () {
            $("#background-opaco").removeClass("active");
            $("#background-opaco").css("top", "6.8rem");
            $(this).removeClass("active");
            $(".menu-inferior").css("z-index", "1");
        }
    )
}
);