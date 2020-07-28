var map, infoWindow;
var addresses = [
  {name:"Multiplaza", info:"informacion de multiplaza", pos:{lat: 8.9851951, lng: -79.5105307}, horario:"10:00 AM", direccion1:"Via Israel",direccion2:"Ciudad de Panamá, Panamá",direccion3:""},		 {name:"Altaplaza", info:"información de altaplaza", pos:{lat: 9.0294561, lng: -79.5348000},horario:"11:00 AM", direccion1:"Corregimiento de Ancón",direccion2:"Via Centenario Altaplaza Mall", direccion3:"Ciudad de Panamá, Panamá"}
]

function initMap() {
  map = new google.maps.Map(
    document.getElementById('map'), {zoom: 12, center: addresses[0].pos, styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]}
    
    ]});
  
  
  
  
  
  var counter= 0;
  addresses.forEach(function(address){
    counter= counter+1;
    new google.maps.Marker({position: address.pos, map: map, icon:"arquivos/icono_mapa_"+ counter +".svg"})
  })
  
  infoWindow = new google.maps.InfoWindow;
}

function centerMap(pos, info, zoom) {
 /* infoWindow.setPosition(pos);
  infoWindow.setContent(info);
  infoWindow.open(map);*/
  map.setCenter(pos);
  map.setZoom(zoom)
}

function initAddress() {
  var counter= 0;
  addresses.forEach(function(address){
     counter= counter+1;
    $("#addresses").append("<div class='contenedor-tiendas'><div class='contador'>"+counter+"</div><div class='botones-tiendas' data-geo='" + JSON.stringify(address.pos) + "' data-info='" + address.info + "'><span class='LocationName-brand'>Express</span><div class='tienda-name'>" + address.name + "</div><div class='horario-text'>Cerrada Temporalmente</div><div class='direccion'>"+address.direccion1 +"</div><div class='direccion'>"+address.direccion2 +"</div><div class='direccion'>"+address.direccion3 +"</div></div></div>")
  })
  
  $("#addresses .botones-tiendas").click(function(){
    var pos = $(this).attr("data-geo")
    pos = JSON.parse(pos)
    
    var info = $(this).attr("data-info")
    
    centerMap(pos, info, 15)    
  });
}

$(document).ready(function () {
  initAddress()
})