const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

function crearCarrito(orderForm) {
    $("div#menu-slide-carrito").empty();
    if (orderForm.items.length > 0) {
        $(".menu-carrito").append(
            '<div class="header-carrito">' +
                '<div class="bag-items">' +
                "<div>" +
                orderForm.items.length +
                " Items</div>" +
                "</div>" +
                '<div class="bag-subtotal">' +
                '<div>Subtotal:</div> <div class="subtotal">' +
                formatter.format(orderForm.totalizers[0].value / 100) +
                "</div>" +
                "</div></div>" +
                '<div class="carrito-bag-button">' +
                '<button class="button boton-bag" href="/checkout">VER CARRITO</button>' +
                "</div>"
        );
        orderForm.items.forEach(function (item) {
            $(".menu-carrito").append(
                '<div class="menu-carrito-detalle">' +
                    '<div class="detalle-img">' +
                    '<img class="img-menu-detalle"  src="' +
                    item.imageUrl +
                    '">' +
                    "</div>" +
                    '<div class="detalle-carrito">' +
                    '<a href="' +
                    item.detailUrl +
                    '">' +
                    item.name +
                    "</a>" +
                    "<p>" +
                    formatter.format(item.sellingPrice / 100) +
                    "</p>" +
                    "<p>Size:</p>" +
                    "<p>Color:</p>" +
                    '<div class="cantidad-precio">' +
                    "<p>Cantidad:" +
                    item.quantity +
                    "</p>" +
                    '<div class="precio">' +
                    formatter.format(item.sellingPrice / 100) +
                    "</div>" +
                    "</div>" +
                    "</div>"
            );
        });
    } else {
        $(".menu-carrito").append("<p>Su carrito esta vacio.</p>");
    }
}

$(document).ready(function () {
    $(window).on("orderFormUpdated.vtex", function (evt, orderForm) {
        crearCarrito(orderForm)
    });

    //**********Solo Activar en VTEX********

    /*vtexjs.checkout.getOrderForm().done(function(orderForm) {
        crearCarrito(orderForm)
    })*/

    $(".logo-lupa").hover(
        // Cuando entra el mouse
        function () {
            $("#menu-slide-lupa").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            $("#menu-slide-lupa").css("width", "0%");
        //    $("#background-opaco").removeClass("active");
        }
    );

    $(".menu-lupa").hover(
        // Cuando entra el mouse
        function () {
            $(".logo-lupa").addClass("active");
            $("#menu-slide-lupa").css("width", "30%");
            $("#background-opaco").addClass("active");
            $("logo-lupa").toggleClass( "hover" );
        },
        // cuando sale el mouse
        function () {
            $("#menu-slide-lupa").css("width", "0%");
          //  $("#background-opaco").removeClass("active");
            $(".logo-lupa").removeClass("active");
        }
    );

    $(".logo-mi-cuenta").hover(
        // Cuando entra el mouse
        function () {
            $("#menu-slide-cuenta").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            console.log("cerrar menu slide");
            $("#menu-slide-cuenta").css("width", "0%");
          //  $("#background-opaco").removeClass("active");
        }
    );

    $(".menu-mi-cuenta").hover(
        // Cuando entra el mouse
        function () {
            $(".logo-mi-cuenta").addClass("active");
            $("#menu-slide-cuenta").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            $("#menu-slide-cuenta").css("width", "0%");
           // $("#background-opaco").removeClass("active");
            $(".logo-mi-cuenta").removeClass("active");
        }
    );

    $(".logo-carrito").hover(
        // Cuando entra el mouse
        function () {
            $(".loading").css("display", "none");
            $("#menu-slide-carrito").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            $("#menu-slide-carrito").css("width", "0%");
           // $("#background-opaco").removeClass("active");
        }
    );
    $(".menu-carrito").hover(
        // Cuando entra el mouse
        function () {
            $(".loading").css("display", "none");
            $(".logo-carrito").addClass("active");
            $("#menu-slide-carrito").css("width", "30%");
            $("#background-opaco").addClass("active");
        },
        // cuando sale el mouse
        function () {
            $("#menu-slide-carrito").css("width", "0%");
           // $("#background-opaco").removeClass("active");
            $(".logo-carrito").removeClass("active");
        }
    );
  
   $(".background-opaco").hover(
        function () {
            $("#background-opaco").removeClass("active");
        }
        ,
        {

        }

    );
  
     $(".menu-superior").hover(
        function () {
            $("#background-opaco").removeClass("active");
        }
        ,
        {

        }

    );
  

    $(".nav.navbar .dropdown").hover(
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
    );

    var AbrirPopup = $("#show-email-promotion"),
        emergpopup = $("#emerg-popup"),
        popup = $("#popup"),
        CerrarPopup = $("#cerrar-popup");

    AbrirPopup.click(function () {
        emergpopup.addClass("active");
    });

    CerrarPopup.click(function () {
        emergpopup.removeClass("active");
    });
});
