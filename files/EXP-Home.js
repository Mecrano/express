$(document).ready(function () {
    // Generar slider
    $("#mainBanners").slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: "linear",
    });
});
