const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

function crearCarrito() {
    vtexjs.checkout.getOrderForm().done(function (orderForm) {
        $(".menu-carrito").append(
            "<p>" +
                "Subtotal: " +
                formatter.format(orderForm.totalizers[0].value / 100) +
                ", Total: " +
                formatter.format(orderForm.value / 100) +
            "</p>"
        );
        orderForm.items.forEach(function (item) {
            $(".menu-carrito").append(
                "<a href='" + item.detailUrl +"'>" +
                    "<img src='" + item.imageUrl + "'>" +
                    "<div>" +
                        "Nombre: " + item.name + 
                        ", Precio: " + formatter.format(item.sellingPrice / 100) +
                        ", Cantidad: " + item.quantity +
                    "</div>" +
                "</a>"
            );
        });
    });
}

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
    );

    $(".nav.navbar .dropdown").hover(
        // Cuando entra el mouse
        function () {
            $(".menu_inferior").css("z-index", "2");
            $("#background-opaco").addClass("active");
            $("#background-opaco").css("top", "13.2rem");
            $(this).addClass("active");
        },
        // cuando sale el mouse
        function () {
            $("#background-opaco").removeClass("active");
            $("#background-opaco").css("top", "6.8rem");
            $(this).removeClass("active");
            $(".menu_inferior").css("z-index", "1");
        }
    );


    // Solo activar en ambiente VTEX
    // crearCarrito()

    //Activa el Banner
    $('#banners-principal').slick({
        "autoplay": true,
        "autoplaySpeed": 1500
    });
}
);