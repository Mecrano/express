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
