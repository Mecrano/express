var idsku = 0;
var qtydisponible;
var i = 1;
var cloneselecsku;

//Funcion Imagenes Primera Carga
async function loadImages() {
  var productInfo = await $.get('/api/catalog_system/pub/products/search/?fq=productId:' + skuJson.productId)
  var cant = 0;
  if (productInfo.length > 0) {
    productInfo = productInfo[0]
  }
  $(".titulosku").empty();
  $(".titulosku").append(productInfo.productId)
  
  if($(window).width() < 700 ){
    
    
      if (productInfo.items[0].images.length == 1) {
    if($(".product-images-container").hasClass("single")){}
    else{
  	$(".product-images-container").addClass("single");
    cant = 1;
      }
    
  } else if (productInfo.items[0].images.length == 2) {
    if($(".product-images-container").hasClass("duo")){}
    else{
    $(".product-images-container").addClass("duo");
    cant=2;
    }
    
  } else {
    if(	$(".product-images-container").hasClass("triplete")){}
    else{
  	$(".product-images-container").addClass("triplete");
    cant=3;
    }
  }
  if (productInfo.items[0].images.length >= 1) {
    if ( $("#thumbnails").length > 0 ) {
      $("#thumbnails").empty();
    }else{
       $(".product-images-container").before("<div id='thumbnails'></div>")
    }
   }
     $(".product-images-container").empty();
  productInfo.items[0].images.forEach(function(element) {
    $(".product-images-container").append("<img id='a"+x+"' src='" + element.imageUrl + "'/>");
    $("div#thumbnails").append("<img src='" + element.imageUrl + "'/>");
  })
    
    
    
    if( $('.product-images-container').hasClass("triplete")){
        $('.product-images-container.triplete.slick-initialized').slick('unslick');
         $('.product-images-container.triplete').slick({
        infinite: true,
    slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>' 
      });
      
      
      
      
       }else if ($('.product-images-container').hasClass("duo")){
       $('.product-images-container.duo.slick-initialized').slick('unslick');
           $('.product-images-container.duo').slick({
        infinite: true,
    slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>' 
      }); 
        
         
         
         
    }else if($('.product-images-container').hasClass("single")){
          $('.product-images-container.single.slick-initialized').slick('unslick');
         $('.product-images-container.single').slick({
        infinite: true,
    slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>' 
      });
      
      }
   
 
   
    
  } else{
    
  
  if (productInfo.items[0].images.length == 1) {
    if($(".product-images-container").hasClass("single")){
     $('.product-images-container.single.slick-initialized').slick('unslick');
    }
    else{
  	$(".product-images-container").addClass("single");
    cant = 1;
      }
    
  } else if (productInfo.items[0].images.length == 2) {
    if($(".product-images-container").hasClass("duo")){
     $('.product-images-container.duo.slick-initialized').slick('unslick');
    }
    else{
    $(".product-images-container").addClass("duo");
    cant=2;
    }
    
  } else {
    if(	$(".product-images-container").hasClass("triplete")){
     $('.product-images-container.triplete.slick-initialized').slick('unslick');
    }
    else{
  	$(".product-images-container").addClass("triplete");
    cant=3;
    }
  }
   
    
    
 if (productInfo.items[0].images.length >= 1) {
   if ( $("#thumbnails").length > 0 ) {
 		$("#thumbnails").empty();
   }else{
      $(".product-images-container").before("<div id='thumbnails'></div>")
   }
  }
    
 
  var x = 0;
     $(".product-images-container").empty();
  productInfo.items[0].images.forEach(function(element) {
    $(".product-images-container").append("<img id='a"+x+"' src='" + element.imageUrl + "'/>")
    $("div#thumbnails").append("<img src='" + element.imageUrl + "' data-index="+ x +"/>")
      $('#a'+x).after("<div class='contenedor-img"+x+"'></div>");
    $('#a'+x).appendTo(".contenedor-img"+x)
      $(".contenedor-img"+x).addClass("zoom");
			x=x+1;
  })
  
 if (productInfo.items[0].images.length <=2)
 {
    $("#thumbnails").removeClass("active")
 }else{
   $("#thumbnails").addClass("active")
 }
  
  $('.product-images-container.triplete').slick({
    infinite: true,
    slidesToShow: 2,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>'
    
  });
  
   $('.product-images-container.duo').slick({
    infinite: true,
    slidesToShow: 2,
  	slidesToScroll: 1,
     nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>'
    
  });
  
   $('.product-images-container.single').slick({
    infinite: true,
    slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>'
   
  });

$("#thumbnails img").click(function(){
             var di = $(this).data("index");
  $('.slick-slider').slick('slickGoTo', di);
});
  
    $(".zoom").zoom(); 
  }
}
//Termina Funcion Imagenes Primera Carga

//Funcion Carga Colores
async function loadColors() {
 var productInfoColor = await $.get('/api/catalog_system/pub/products/search/?fq=productId:' + skuJson.productId)
  
 var colors = {}
$(".productDescription div ul li").each(function(){
    colors[$(this).find("span:first-child").text().toLowerCase()] = $(this).find("span:last-child").text();
})
 
 productInfoColor[0].items.forEach(function(element){

   var imagen = "https://images.express.com/is/image/expressfashion/" + colors[element.Color[0].toLowerCase()] + "_s?cache=on&wid=30&hei=30&qlt=70&defaultImage=Photo-Coming-Soon";

var color =element.Color[0].replace(/ /g,"");
var colormin = color.toLowerCase();
var colorcap = colormin.charAt(0).toUpperCase() + colormin.slice(1);      
   console.log(colorcap);
$(".item-dimension-Color span .skuespec_"+colorcap).css("background-image","url('"+ imagen+"')")                                                 })

}//Termina Funcion Carga Colores



$(document).ready(function() {
  //loadImages();
  loadColors(); 
  /*$("div#ex1").zoom();*/
   
 $(".sku-selector-container.sku-selector-container-0 label").after("&nbsp;");
$(".product-name a ").after("</br>");
  
  $(".paneldetalles").slideToggle();
  $(".panelenvios").slideToggle();
  
  
  $(".accordiondetalles").click( function(event) {
     
    
    $(".paneldetalles").slideToggle();
    
    if ($(".accordiondetalles").hasClass('active')) {
      $(".accordiondetalles").removeClass("active");
    }
    else{
      $(".accordiondetalles").addClass("active"); 
    }
  
    
  });
  
  
  
    $(".accordionenvios").click(  function(event) {
     
    
    $(".panelenvios").slideToggle();
    
    if ($(".accordionenvios").hasClass('active')) {
      $(".accordionenvios").removeClass("active");
    }
    else{
      $(".accordionenvios").addClass("active"); 
    }
  
    
  });
  
      $(".boton-comprar").click( function(event) {
      var item = {
    id: idsku,
   		 quantity: $(".buy-in-page-quantity").val(),
		seller: "1",
}

      
      if (idsku > 0){
 vtexjs.checkout.addToCart([item], null, 1).done(function(orderForm){
   $(".msgconfirmacion").addClass("active");
      $(".msgconfirmacion").css("right", "0");
  setInterval(function() {
   
    $(".msgconfirmacion").css("right", "-250px");
     $(".msgconfirmacion").removeClass("active");

}, 2000);
  
})
}else{

  window.alert('Seleccione el articulo');
}
      
       
    });
  
  

  
  $(window).on('vtex.sku.selected', function(evt, productId, sku){
    console.log(sku);
    idsku =sku.sku;
    qtydisponible =sku.availablequantity;
      loadImagesSku(sku.sku);
    if($(".buy-in-page-quantity").val()>qtydisponible){
     	i=qtydisponible;
      $(".buy-in-page-quantity").val(i); 
    }else if ($(".buy-in-page-quantity").val() == 0){
      if (qtydisponible >0){
        i=1;
        $(".buy-in-page-quantity").val(i); 
      }
    }  
    
});
  
 $(window).load(function() {
  		loadImages();
   categoriesCarousel()
  $(window).resize(function() {
    	loadImagesSku(idsku);
    categoriesCarousel();
  });
});
  
  
  
  
  
  
 
$(document).on('click','#mas',function(){
  i = i + 1; 
  if(i > qtydisponible){
    
       i=qtydisponible;
     $(".buy-in-page-quantity").val(i);
     }
 else{
	if(i > 10){
      i=10;
      $(".buy-in-page-quantity").val(i);
      
    }
    else{
    $(".buy-in-page-quantity").val(i)

    if($(".buy-in-page-quantity").val() == 1){
            i=1;
            $(".buy-in-page-quantity").val(i);
    } } }
});

$(document).on('click','#menos',function(){
  if(i>=2){
        i = i - 1; 
        $(".buy-in-page-quantity").val(i)
        if($(".buy-in-page-quantity").val() == 1){
            i=1;
           $(".buy-in-page-quantity").val(i)
        }
    }
});

  

$("label.dimension-Color").click(function() {
    $("ul.topic.Color li.specification").text($(this).text())
}); 
 
  if($(window).width() < 700 ){   
 $("#producto-desk > .product-main-container > .product-right-container > .seleccion-sku").insertAfter("#producto-mobile > .producto-price-and-reviews");
        } 
  
  
  
});//Termina Document Ready


function categoriesCarousel() {
  if ($(window).width() < 1000 && $(window).width() > 700 ) {
      $('.exp-vitrina ul.slick-initialized').slick('unslick');
      $('.exp-vitrina ul').slick({
        dots: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false
      });
    
  } else if ($(window).width() < 701) {
      $('.exp-vitrina ul.slick-initialized').slick('unslick');
      $('.exp-vitrina ul').slick({
        dots: false,
        slidesToShow: 1,
        arrows: false,
        infinite: false
      });
    
  } else {
    $('.exp-vitrina ul.slick-initialized').slick('unslick');
  }
}

$(".item-dimension-Talla span input:first-child").click();


async function loadImagesSku(skuseleccion) {
 var productInfo = await $.get('/api/catalog_system/pub/products/search/?fq=productId:' + skuJson.productId)
  var cant = 0;
  if (productInfo.length > 0) {
    productInfo = productInfo[0]
  }
var skuseleccionimg;
  productInfo.items.forEach(function(element){
  
    if(element.itemId == skuseleccion ){
      skuseleccionimg = element.images;
    }
   
  }
  );
  
  $(".titulosku").empty();
  $(".titulosku").append(productInfo.productId)
  
  if($(window).width() < 700 ){
    
    if($("#producto-mobile > .producto-price-and-reviews > .seleccion-sku").lenght > 0){
    
    }else{
        $("#producto-desk > .product-main-container > .product-right-container > .seleccion-sku").insertAfter("#producto-mobile > .producto-price-and-reviews");
    }
    
    
    
      if (skuseleccionimg.length == 1) {
    if($(".product-images-container").hasClass("single")){
    $('.product-images-container.single.slick-initialized').slick('unslick');
    }
    else if($(".product-images-container").hasClass("triplete")){
      $('.product-images-container.triplete.slick-initialized').slick('unslick');
          $(".product-images-container").removeClass("triplete");
          $(".product-images-container").addClass("single");
       }
    else if($(".product-images-container").hasClass("duo")){
      $('.product-images-container.duo.slick-initialized').slick('unslick');
      $(".product-images-container").removeClass("duo");
      $(".product-images-container").addClass("single");
    }
    else{
  	$(".product-images-container").addClass("single");
    cant = 1;
      }
    
  } else if (skuseleccionimg.length == 2) {
    if($(".product-images-container").hasClass("duo")){
    $('.product-images-container.duo.slick-initialized').slick('unslick');
    }
    else if($(".product-images-container").hasClass("triplete")){
      $('.product-images-container.triplete.slick-initialized').slick('unslick');
          $(".product-images-container").removeClass("triplete");
          $(".product-images-container").addClass("duo");
       }
    else if($(".product-images-container").hasClass("single")){
      $('.product-images-container.single.slick-initialized').slick('unslick');
      $(".product-images-container").removeClass("single");
      $(".product-images-container").addClass("duo");
    }
    else{
    $(".product-images-container").addClass("duo");
    cant=2;
    }
    
  } else {
    if(	$(".product-images-container").hasClass("triplete")){
    $('.product-images-container.triplete.slick-initialized').slick('unslick');
    }
    else if($(".product-images-container").hasClass("single")){
      $('.product-images-container.single.slick-initialized').slick('unslick');
          $(".product-images-container").removeClass("single");
          $(".product-images-container").addClass("triplete");
       }
    else if($(".product-images-container").hasClass("duo")){
      $('.product-images-container.duo.slick-initialized').slick('unslick');
      $(".product-images-container").removeClass("duo");
      $(".product-images-container").addClass("triplete");
    }
    else{
  	$(".product-images-container").addClass("triplete");
    cant=3;
    }
  }
   
     $(".product-images-container").empty();
  skuseleccionimg.forEach(function(elementimg) {
    $(".product-images-container").append("<img src='" + elementimg.imageUrl + "'/>");
  })
    
    
    
    if( $('.product-images-container').hasClass("triplete")){
    
         $('.product-images-container.triplete').slick({
        infinite: true,
    slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>' 
      });
      
      
      
      
       }else if ($('.product-images-container').hasClass("duo")){
           $('.product-images-container.duo').slick({
        infinite: true,
    slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>' 
      }); 
        
         
         
         
    }else if($('.product-images-container').hasClass("single")){

         $('.product-images-container.single').slick({
        infinite: true,
    slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>' 
      });
      
      }
   

    
  } else{
    
    
        if($("#producto-desk > .product-main-container > .product-right-container > .seleccion-sku").lenght > 0){
    
    }else{
        $("#producto-mobile >.seleccion-sku").insertAfter(" #producto-desk > .product-main-container > .product-right-container > .producto-price-and-reviews");
    }
    
  
    
     if (skuseleccionimg.length == 1) {
    if($(".product-images-container").hasClass("single")){
    $('.product-images-container.single.slick-initialized').slick('unslick');
    }
    else if($(".product-images-container").hasClass("triplete")){
      $('.product-images-container.triplete.slick-initialized').slick('unslick');
          $(".product-images-container").removeClass("triplete");
          $(".product-images-container").addClass("single");
       }
    else if($(".product-images-container").hasClass("duo")){
      $('.product-images-container.duo.slick-initialized').slick('unslick');
      $(".product-images-container").removeClass("duo");
      $(".product-images-container").addClass("single");
    }
    else{
  	$(".product-images-container").addClass("single");
    cant = 1;
      }
    
  } else if (skuseleccionimg.length == 2) {
    if($(".product-images-container").hasClass("duo")){
    $('.product-images-container.duo.slick-initialized').slick('unslick');
    }
    else if($(".product-images-container").hasClass("triplete")){
      $('.product-images-container.triplete.slick-initialized').slick('unslick');
          $(".product-images-container").removeClass("triplete");
          $(".product-images-container").addClass("duo");
       }
    else if($(".product-images-container").hasClass("single")){
      $('.product-images-container.single.slick-initialized').slick('unslick');
      $(".product-images-container").removeClass("single");
      $(".product-images-container").addClass("duo");
    }
    else{
    $(".product-images-container").addClass("duo");
    cant=2;
    }
    
  } else {
    if(	$(".product-images-container").hasClass("triplete")){
    $('.product-images-container.triplete.slick-initialized').slick('unslick');
    }
    else if($(".product-images-container").hasClass("single")){
      $('.product-images-container.single.slick-initialized').slick('unslick');
          $(".product-images-container").removeClass("single");
          $(".product-images-container").addClass("triplete");
       }
    else if($(".product-images-container").hasClass("duo")){
      $('.product-images-container.duo.slick-initialized').slick('unslick');
      $(".product-images-container").removeClass("duo");
      $(".product-images-container").addClass("triplete");
    }
    else{
  	$(".product-images-container").addClass("triplete");
    cant=3;
    }
  }
   
 if (skuseleccionimg.length >= 1) {
   if ( $("#thumbnails").length > 0 ) {
 		$("#thumbnails").empty();
   }else{
      $(".product-images-container").before("<div id='thumbnails'></div>")
   }
   
   
   
    
  }
  var x = 0;
     $(".product-images-container").empty();
  skuseleccionimg.forEach(function(element) {
    $(".product-images-container").append("<img id='a"+x+"' src='" + element.imageUrl + "'/>")
     $("div#thumbnails").append("<img src='" + element.imageUrl + "' data-index="+ x +"/>")
      $('#a'+x).after("<div class='contenedor-img"+x+"'></div>");
    $('#a'+x).appendTo(".contenedor-img"+x)
      $(".contenedor-img"+x).addClass("zoom");
			x=x+1;
  });
  
 if (skuseleccionimg.length <=2)
 {
    $("#thumbnails").removeClass("active")
 }else{
   $("#thumbnails").addClass("active")
 }
 
  
  $('.product-images-container.triplete').slick({
    infinite: true,
    slidesToShow: 2,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>'
    
  });
  
   $('.product-images-container.duo').slick({
    infinite: true,
    slidesToShow: 2,
  	slidesToScroll: 1,
     nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>'
    
  });
  
   $('.product-images-container.single').slick({
    infinite: true,
    slidesToShow: 1,
  	slidesToScroll: 1,
    nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180)"></path></svg></button>', 
    prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><svg viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button>' 
   
  });

    $("#thumbnails img").click(function(){
             var di = $(this).data("index");
  $('.slick-slider').slick('slickGoTo', di);
});
  

  
    $(".zoom").zoom(); 
  }
}

