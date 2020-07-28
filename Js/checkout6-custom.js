// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
var options = {
    bocas: ['Almirante', 'Bajo Cedro', 'Bastimentos', 'Bocas Del Toro', 'Cauchero', 'Changuinola', 'Chiriqui', 'Cochigro', 'El Empalme', 'El Valle De Agua Arriba', 'Guabito', 'La Gloria', 'Las Delicias', 'Las Tablas', 'Miramar', 'Nance De Risco', 'Punta Laurel', 'Punta Pena', 'Punta Robalo', 'Rambala', 'Teribe', 'Tierra Oscura', 'Valle Del Risco'],
    chiriqui: ['Alanje', 'Alto Boquete', 'Aserrio De Gariche', 'Baco', 'Bagala', 'Bajo Boquete', 'Barù', 'Bella Vista', 'Bijagual', 'Boca Chica', 'Boca Del Monte', 'Boqueron', 'Boquete', 'Brenon', 'Bugaba', 'Caldera', 'Canas Gordas', 'Canta Gallo', 'Cerro Punta', 'Cerro Viejo', 'Chiriqui', 'Cochea', 'Concepciòn', 'Cordillera', 'David', 'Divala', 'Dolega', 'Dominical', 'Dos Rios', 'El Bongo', 'El Cristo', 'El Nancito', 'El Porvenir', 'El Puerto', 'El Tejar', 'Gomez', 'Guabal', 'Guaca', 'Gualaca', 'Guarumal', 'Guayabal', 'Horconcitos', 'Hornito', 'Jaramillo', 'Juay', 'Justo Fidel Palacios', 'La Concepcion', 'La Estrella', 'Lajas Adentro', 'Lajas De Tole', 'Las Lajas', 'Las Lomas', 'Limones', 'Los Algarrobos', 'Los Anastacios', 'Los Angeles', 'Los Naranjos', 'Monte Lirio', 'Nuevo Mexico', 'Paja De Sombrero', 'Palmira', 'Palo Grande', 'Paraiso', 'Pedregal', 'Plaza Caisan', 'Potrerillos Abajo', 'Potrerillos', 'Potrero De Cana', 'Progreso', 'Puerto Armuellesabecer', 'Quebrada De Piedra', 'Querevalo', 'Remedios', 'Rincon', 'Rio Sereno', 'Rodolfo Aguilar Delgado', 'Rovira', 'San Andres', 'San Carlos', 'San Felix', 'San Juan', 'San Lorenzo', 'San Pablo Nuevo', 'San Pablo Viejo', 'Santa Clara', 'Santa Cruz', 'Santa Lucia', 'Santa Marta', 'Santa Rosa', 'Santo Domingo', 'Santo Tomas', 'Sortova', 'Tijeras', 'Tinajas', 'Tole', 'Veladero', 'Volcan'],
    cocle: ['Aguadulce', 'Anton', 'Barrios Unidos', 'Caballero', 'Cabuya', 'Canaveral', 'Capellania', 'Chiguiri Arriba', 'Cocle', 'El Cano', 'El Chiru', 'El Coco', 'El Cristo', 'El Harino', 'El Potrero', 'El Retiro', 'El Roble', 'El Valle', 'Guzman', 'Juan Diaz', 'La Pintada', 'Las Huacas', 'Las Lomas', 'Llano Grande', 'Nata', 'Ola', 'Pajonal', 'Penonome', 'Piedras Gordas', 'Pocri', 'Rio Grande', 'Rio Hato', 'Rio Indio', 'San Juan De Dios', 'Santa Rita', 'Toabre', 'Toza', 'Tulu'],
    colon: ['Achiote', 'Barrio Norte', 'Barrio Sur', 'Buena Vista', 'Cacique', 'Cativa', 'Ciricito', 'Cocle Del Norte', 'Colon', 'Cristobal', 'Cuango', 'El Guabo', 'El Guasimo', 'Escobal', 'Garrote', 'Gobea', 'Isla Grande', 'La Encantada', 'Limon', 'Maria Chiquita', 'Miguel De La Borda', 'Miramar', 'Nombre De Dios', 'Nueva', 'Nuevo Chagres', 'Palenque', 'Palmas Bellas', 'Palmira', 'Pina', 'Playa Chiquita', 'Portobelo', 'Providencia', 'Puerto Pilon', 'Rio Indio', 'Sabanitas', 'Salamanca', 'Salud', 'San Jose Del General', 'San Juan', 'Santa Isabel', 'Santa Rosa', 'Viento Frio'],
    comarcaembera: ['Cirilo Guainora', 'Jingurudo', 'Lajas Blancas', 'Manuel Ortega', 'Puerto Indio', 'Rio Sabalo', 'Union Chocoe'],
    comarcamandungand: ['Akua Yala'],
    comarcawurgandi: ['Morti'],
    comarcakunayala: ['Ailigandi', 'El Porvenir', 'Puerto Obaldia', 'Tubuala'],
    comarcangobebugle: ['Agua De Salud', 'Alto Caballero', 'Alto De Jesus', 'Bagama', 'Bahia Azul', 'Bisira', 'Boca De Salsa', 'Buenos Aires', 'Buri', 'Calovebora O Santa Catali', 'Camaron Arriba', 'Cascabel', 'Cerro Banco', 'Cerro Cana', 'Cerro Iglesias', 'Cerro Patena', 'Cerro Pelado', 'Cerro Puerco', 'Chichica', 'El Bale', 'El Paredon', 'El Piro', 'Emplanada De Chorcha', 'Guariviara', 'Guayabito', 'Guibale', 'Guoroni', 'Hato Chami', 'Hato Corotu', 'Hato Culantro', 'Hato Jobo', 'Hato Juli', 'Hato Pilon', 'Jadeberi', 'Kankintu', 'Krua', 'Kusapin', 'Lajero', 'Llano Tugri', 'Loma Yuca', 'Man Creek', 'Maraca', 'Mununi', 'Namnoni', 'Niba', 'Nibra', 'Pena Blanca', 'Piedra Roja', 'Quebrada De Loro', 'Rio Chiriqui', 'Roka', 'Salto Dupi', 'Sitio Prado', 'Soloy', 'Susama', 'Tobobe', 'Tuwai', 'Umani', 'Valle Bonito'],
    darien: ['Agua Fria', 'Boca De Cupe', 'Camoganti', 'Chepigana', 'Comarca Kuna', 'Cucunati', 'El Real De Santa Maria', 'Garachine', 'Jaque', 'La Palma', 'Meteti', 'Paya', 'Pinogana', 'Pucuro', 'Puerto Pina', 'Rio Congo Arriba', 'Rio Congo', 'Rio Iglesias', 'Sambu', 'Santa Fe', 'Seteganti', 'Taimati', 'Tucuti', 'Wargandi', 'Yape', 'Yaviza'],
    herrera: ['Cabuya', 'Capuri', 'Cerro Largo', 'Chepo', 'Chitre', 'Chumical', 'Chupampa', 'El Barrero', 'El Calabacito', 'El Cedro', 'El Ciruelo', 'El Limon', 'El Pajaro', 'El Pedregoso', 'El Rincon', 'El Tijera', 'El Toro', 'La Arena', 'La Pitaloza', 'Las Cabras', 'Las Llanas', 'Las Minas', 'Leones', 'Llano Bonito', 'Llano De La Cruz', 'Llano Grande', 'Los Canelos', 'Los Castillos', 'Los Cerritos', 'Los Cerros De Paja', 'Los Llanos', 'Los Pozos', 'Menchaca', 'Monagrillo', 'Ocu', 'Paris', 'Parita', 'Penas Chatas', 'Pese', 'Portobelillo', 'Potuga', 'Quebrada Del Rosario', 'Quebrada El Ciprian', 'Rincon Hondo', 'Sabana Grande', 'San Juan Bautista', 'Santa Maria'],
    kunayala: ['Comarca De Kuna Yala'],
    lossantos: ['Agua Buena', 'Altos De Guerra', 'Bahia Honda', 'Bajo Corral', 'Bajos De Guera', 'Bayano', 'Cambutal', 'Canas Gordas', 'Chupa', 'Corozal', 'El Bebedero', 'El Cacao', 'El Canafistulo', 'El Carate', 'El Cedro', 'El Cocal', 'El Cortezo', 'El Espiral', 'El Guasimo', 'El Hato', 'El Macano', 'El Manantial', 'El Munoz', 'El Pedragoso', 'Espino Amarillo', 'Flores', 'Guanico', 'Guarare Arriba', 'Guarare', 'Isla De Canas', 'La Colorada', 'La Enea', 'La Espigadilla', 'La Laja', 'La Mesa', 'La Miel', 'La Palma', 'La Pasera', 'La Tiza', 'La Tronosa', 'La Villa De Los Santos', 'Lajamina', 'Las Cruces', 'Las Guabas', 'Las Palmas', 'Las Palmitas', 'Las Tablas Abajo', 'Las Tablas', 'Las Trancas', 'Llano Abajo', 'Llano De Piedra', 'Llano Largo', 'Los Angeles', 'Los Asientos', 'Los Olivos', 'Macaracas', 'Mariabe', 'Mogollon', 'Nuario', 'Oria Arriba', 'Palmira', 'Paraiso', 'Paritilla', 'Pedasi', 'Pena Blanca', 'Perales', 'Pocri', 'Purio', 'Rio Hondo', 'Sabana Grande', 'San Jose', 'San Miguel', 'Santa Ana', 'Santo Domingo', 'Sesteadero', 'Tonosi', 'Tres Quebradas', 'Valle Rico', 'Vallerriquito', 'Villa Lourdes'],
    panama: ['24 De Diciembre', 'Amador', 'Amelia Denis De Icazaa', 'Ancon', 'Arnulfo Arias', 'Arosemena', 'Arraijan', 'Barrio Balboa', 'Barrio Colon', 'Bejuco', 'Belisario Frias', 'Belisario Porras', 'Bella Vista', 'Bethania', 'Brujas', 'Buenos Aires', 'Burunga', 'Cabuya', 'Caimito', 'Campana', 'Canita', 'Capira', 'Cermeno', 'Cerro Silvestre', 'Chame', 'Chepillo', 'Chepo', 'Chica', 'Chilibre', 'Chiman', 'Ciri De Los Sotos', 'Ciri Grande', 'Ciudad De Panama Oeste', 'Ciudad De Panama', 'Comarca Kuna De Madugandi', 'Curundu', 'David Chiriqui', 'El Arado', 'El Cacao', 'El Chorrillo', 'El Coco', 'El Espino', 'El Higo', 'El Libano', 'El Llano', 'Feuillet', 'Gonzalo Vasquez', 'Guadalupe', 'Guayabito', 'Herrera', 'Hurtado', 'Iturralde', 'Jose Domingo Espinar', 'Juan Demostenes Arosemena', 'Juan Diaz', 'La Chorrera', 'La Ensenada', 'La Ermita', 'La Esmeralda', 'La Exposicion O Calidonia', 'La Guinea', 'La Laguna', 'La Represa', 'La Trinidad', 'Las Cumbres', 'Las Lajas', 'Las Mananitas', 'Las Margaritas', 'Las Ollas Arriba', 'Las Uvas', 'Lidice', 'Los Diaz', 'Los Llanitos', 'Mateo Iturralde', 'Mendoza', 'Nueva Gorgona', 'Nuevo Emperador', 'Obaldia', 'Omar Torrijos', 'Otoque Occidente', 'Otoque Oriente', 'Pacora', 'Parque Lefevre', 'Pasiga', 'Pedregal', 'Pedro Gonzalez', 'Playa Leona', 'Pueblo Nuevo', 'Puerto Caimito', 'Punta Chame', 'Rio Abajo', 'Rufina Alfaro', 'Saboga', 'Sajalices', 'San Carlos', 'San Felipe', 'San Francisco', 'San Jose', 'San Martin', 'San Miguelito', 'San Miguel', 'Santa Ana', 'Santa Clara', 'Santa Cruz De Chinina', 'Santa Rita', 'Santa Rosa', 'Sora', 'Taboga', 'Tocumen', 'Torti', 'Union Santena', 'Veracruz', 'Victoriano Lorenzo', 'Villa Carmen', 'Villa Rosario', 'Vista Alegre'],
    veraguas: ['Arenas', 'Atalaya', 'Bahia Honda', 'Barnizal', 'Bisvalles', 'Boro', 'Calidonia', 'Calobre', 'Calovebora', 'Canazas', 'Canto Del Llano', 'Carlos Santana Avila', 'Cative', 'Catorce De Noviembre', 'Cebaco', 'Cerro De Casa', 'Cerro De Plata', 'Chitra', 'Corozal', 'Corral Falso', 'Costa Hermosa', 'Edwin Fabrega', 'El Alto', 'El Aromillo', 'El Barrito', 'El Cacao', 'El Cocla', 'El Cuay', 'El Maranon', 'El Maria', 'El Pantano', 'El Picador', 'El Potrero', 'El Prado', 'El Rincon', 'Gatuncito', 'Gobernadora', 'Guarumal', 'La Carrillo', 'La Colorada', 'La Garceana', 'La Laguna', 'La Mesa', 'La Montanuela', 'La Pena', 'La Raya De Calobre', 'La Raya De Santa Maria', 'La Soledad', 'La Tetilla', 'La Yeguada', 'Las Cruces', 'Las Guias', 'Las Huacas', 'Las Palmas', 'Leones', 'Llano De Catival O Mariat', 'Llano Grande', 'Los Algarrobos', 'Los Castillos', 'Los Hatillos', 'Los Milagros', 'Los Valles', 'Monjaras', 'Montijo', 'Ola', 'Pilon', 'Pixvae', 'Ponuga', 'Puerto Vidal', 'Quebrada De Oro', 'Quebro', 'Remance', 'Rio De Jesus', 'Rio Grande', 'Rio Luis', 'Rodeo Viejo', 'Ruben Cantu', 'San Antonio', 'San Bartolo', 'San Francisco', 'San Jose', 'San Juan', 'San Marcelo', 'San Martin De Porres', 'San Pedro Del Espino', 'Santafe', 'Santiago', 'Sona', 'Tebario', 'Union Del Norte', 'Urraca', 'Utira', 'Vigui', 'Zapotillo']
};


var entro = 0;
function displayCartHash(){
if (window.location.hash == "#/cart") {

  
var replaced = $(".product-name a").html().replace(':','</br> Color - ');
$("#product-name4").html(replaced);

var replaced = $(".product-name a").html().replace(':','</br> Talla - ');
$("#product-name4").html(replaced);

if(entro == 0){
     $(".clearfix.pull-right.cart-links.cart-links-bottom.hide").appendTo(".summary-template-holder"); 

$(".link-choose-more-products-wrapper").after("</br>")
  
entro = 1;

}

}else if(window.location.hash == "#/shipping"){



var tmrReady = setInterval(isPageFullyLoaded, 100);

function isPageFullyLoaded() {
 if ($("#ship-city").is(':visible')) {


 $("#ship-city").after('<select id="primary"><option value="bocas">Bocas Del Toro</option><option value="chiriqui">Chiriqui</option><option value="cocle">Cocle</option><option value="colon">Colon</option><option value="comarcaembera">Comarca Embera</option><option value="comarcamandungand">Comarca Kuna De Madungand</option><option value="comarcawurgandi">Comarca Kuna De Wargandi</option><option value="comarcakunayala">Comarca Kuna Yala</option><option value="comarcangobebugle">Comarca Ngobe Bugle</option><option value="darien">Darien</option><option value="herrera">Herrera</option><option value="kunayala">Kuna Yala</option><option value="lossantos">Los Santos</option><option value="panama">Panamá</option><option value="veraguas">Veraguas</option></select>');

$("#ship-state").after('<select id="secondary"></select>');

clearInterval(tmrReady);       
   
$(function () {
    var fillSecondary = function () {
        var selected = $('#primary').val();
      $("#ship-city").attr("value",$('#primary option:selected').text());
      
        $('#secondary').empty();
        options[selected].forEach(function (element, index) {
            $('#secondary').append('<option value="' + element + '">' + element + '</option>');
        });
      $("#ship-state").attr("value",$('#secondary option:selected').text());
    }
    $('#primary').change(fillSecondary);
    fillSecondary();
});
   
   
$(function () {
    var fillSecondary_2 = function () {
        var selected = $('#secondary').val();
      $("#ship-state").val($('#secondary option:selected').text());  
       
    }
    $('#secondary').change(fillSecondary_2);
    fillSecondary_2();
});       
   

   
  }
}




}

}

$(window).on("hashchange load", function (e) {

displayCartHash();

});

$(window).on("load", function (e) {
$(".newsletter").appendTo(".client-email");

$("link-coupon-add").click(function(){


$(".coupon-label").css("display","flex");

$(".cerrar").click(function(){
$(".coupon-fieldset div").css("display","none");
$(".coupon-data").css("display","block");
});

});











});


var tmrReady = setInterval(isPageFullyLoaded, 100);

function isPageFullyLoaded() {
 if ($(".coupon-fieldset > div").is(':visible')) {

       $(".coupon-label label").click(function(){
$(".coupon-fieldset div").css("display","none");
$(".coupon-data").css("display","block");
});
   clearInterval(tmrReady);
   
  }
}


