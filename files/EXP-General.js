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
