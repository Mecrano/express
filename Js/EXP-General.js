const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  var topmenusuperior = 0;
  var topmenuinferior = 0;
  
  function crearCarrito(orderForm, itemsQTY, productsId ) {
    $("div#menu-slide-carrito").empty();
    if (orderForm.items.length > 0) {
      $(".menu-carrito").append(
        '<div class="header-carrito">' +
        '<div class="bag-items">' +
        "<div>" +
        itemsQTY +
        " Articulo(s)</div>" +
        "</div>" +
        '<div class="bag-subtotal">' +
        '<div>Subtotal:</div> <div class="subtotal">' +
        formatter.format(orderForm.totalizers[0].value / 100) +
        "</div>" +
        "</div></div>" +
        '<div class="carrito-bag-button">' +
        '<a class="boton-bag" href="/checkout">VER SHOPPING BAG</a>' +
        "</div>"
      );
      orderForm.items.forEach(function (item) {
        
        var urlimg = item.imageUrl.replace("55-55","220-220");
        
        $(".menu-carrito").append(
          '<div class="menu-carrito-detalle">' +
          '<div class="detalle-img">' +
          '<img class="img-menu-detalle"  src="' +
          urlimg +
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
          "<p>Size:" + productsId[item.productId][item.id]["talla"][0] + "</p>" +
          "<p>Color:" + productsId[item.productId][item.id]["color"][0] + "</p>" +
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
    
      if(itemsQTY < 10){
        if($(".logo-carrito > .carritoitems").length > 0){
          $(".carritoitems").remove();
           $(".logo-carrito").append("<p class='carritoitems'>"+itemsQTY +"</p>");
        }
        else{
        $(".logo-carrito").append("<p class='carritoitems'>"+itemsQTY +"</p>");
        }
      }else{
         if($(".logo-carrito > .carritoitems").length > 0){
          $(".carritoitems").remove();
           $(".logo-carrito").append("<p class='carritoitems'>"+itemsQTY +"</p>");
           $(".carritoitems").css("left","57%")
        }
        else{
        $(".logo-carrito").append("<p class='carritoitems'>"+itemsQTY +"</p>");
          $(".carritoitems").css("left","57%")
        }
        
      }
    
    } else {
      $(".menu-carrito").append("<p>Su carrito está vacio.</p>");
    }
  }
  
  function crearCarritoMobile(orderForm, itemsQTY, productsId ) {
    $("div#menu-slide-carrito-mobile").empty();
    if (orderForm.items.length > 0) {
      $(".menu-carrito-mobile").append(
        '<div class="header-carrito">' +
        '<div class="bag-items">' +
        "<div>" +
        itemsQTY +
        " Articulo(s)</div>" +
        "</div>" +
        '<div class="bag-subtotal">' +
        '<div>Subtotal:</div> <div class="subtotal">' +
        formatter.format(orderForm.totalizers[0].value / 100) +
        "</div>" +
        "</div></div>" +
        '<div class="carrito-bag-button">' +
        '<a class="boton-bag" href="/checkout">VER SHOPPING BAG</a>' +
        "</div>"
      );
      orderForm.items.forEach(function (item) {
        $(".menu-carrito-mobile").append(
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
          "<p>Size:" + productsId[item.productId][item.id]["talla"][0] + "</p>" +
          "<p>Color:" + productsId[item.productId][item.id]["color"][0] + "</p>" +
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
      $(".menu-carrito-mobile").append("<p>Su carrito está vacio.</p>");
    }
  }
  
  async function getProductInfoFromOF(orderForm) {
    if (orderForm.items.length > 0) {
      var itemsQTY = 0;
      var productsId = {};
      orderForm.items.forEach(function (item) {
        itemsQTY += item.quantity;
        if (productsId[item.productId] == undefined) {
          productsId[item.productId] = {}
          productsId[item.productId][item.id] = { talla: '', color:''};
        } else {
          productsId[item.productId][item.id] = { talla: '', color:''}
        }
      });
      
      var queryParamCatalog = Object.keys(productsId)
      queryParamCatalog = queryParamCatalog.join("&fq=productId:")
      var productSpecifications = await $.get('/api/catalog_system/pub/products/search/?fq=productId:' + queryParamCatalog)
      
      productSpecifications.forEach(function(specification){
        var skusFind = Object.keys(productsId[specification.productId])
        specification.items.forEach(function(item){
          if(skusFind.contains(item.itemId)) {
            productsId[specification.productId][item.itemId]["color"] = item.Color
            productsId[specification.productId][item.itemId]["talla"] = item.Talla
          }
        })
      })
      
      return [itemsQTY,productsId]
    }
    return ["",""]
  }
  
  var topmenusuperior = 0;
  var topmenuinferior = 0;
  
  function sizeheader(){
    
    
  topmenusuperior =   $(".desktop").height() - $(".menu-inferior").height();
  topmenuinferior =  $(".desktop").height();
  }
  
  $(document).ready(function () {
    
  
    
    Logeo();
    $(window).on("orderFormUpdated.vtex", async function (evt, orderForm) {
      var productInfo = await getProductInfoFromOF(orderForm)
      crearCarrito(orderForm, productInfo[0], productInfo[1]);
      crearCarritoMobile(orderForm, productInfo[0], productInfo[1]);
    });
    vtexjs.checkout.getOrderForm().done(async function (orderForm) {
      var productInfo = await getProductInfoFromOF(orderForm)
      crearCarrito(orderForm, productInfo[0], productInfo[1]);
      crearCarritoMobile(orderForm, productInfo[0], productInfo[1]);
    });
    
    $(".logo-lupa").hover(
      
      // Cuando entra el mouse
      function () {
        sizeheader();
        $("#menu-slide-lupa").css("top", topmenusuperior);
        $("#menu-slide-lupa").css("right", "0");
        $("#background-opaco").css("top", topmenusuperior);
        $("#background-opaco").css("visibility","visible");
        $("body").addClass("blockScroll");
      },
      // cuando sale el mouse
      function () {
        sizeheader();
        /*setTimeout(function(){
            $("#menu-slide-lupa").hide();
          }, 500)*/
        $("#menu-slide-lupa").css("top", topmenusuperior);
        $("#menu-slide-lupa").css("right", "-40%");
        $("body").removeClass("blockScroll");
        $("#background-opaco").css("visibility","hidden");
      }
    );
    
    $(".menu-lupa").hover(
     
      // Cuando entra el mouse
      function () {
         sizeheader();
        $(".logo-lupa").addClass("active");
        $("#menu-slide-lupa").css("top", topmenusuperior);
        $("#menu-slide-lupa").css("right", "0");
        $("#background-opaco").css("top", topmenusuperior);
        $("#background-opaco").css("visibility","visible");
        $("body").addClass("blockScroll");
        $("logo-lupa").toggleClass("hover");
      },
      // cuando sale el mouse
      function () {
        sizeheader();
        $("#menu-slide-lupa").css("top", topmenusuperior);
        $("#menu-slide-lupa").css("right", "-40%");
        $("#background-opaco").css("visibility","hidden");
        $(".logo-lupa").removeClass("active");
        $("body").removeClass("blockScroll");
      }
    );
    
    $(".logo-mi-cuenta").hover(
     
      // Cuando entra el mouse
      function () {
         sizeheader();
        $("#menu-slide-cuenta").css("top", topmenusuperior);
        $("#menu-slide-cuenta").css("right", "0");
        $("#background-opaco").css("top", topmenusuperior);
        $("#background-opaco").css("visibility","visible");
        $("body").addClass("blockScroll");
      },
      // cuando sale el mouse
      function () {
      sizeheader();
        $("#menu-slide-cuenta").css("top", topmenusuperior);
        $("#menu-slide-cuenta").css("right", "-40%");
        $("#background-opaco").css("visibility","hidden");
        $("body").removeClass("blockScroll");
      }
    );
    
    $(".menu-mi-cuenta").hover(
      
      // Cuando entra el mouse
      function () {
        sizeheader();
        $("#menu-slide-cuenta").css("top", topmenusuperior);
        $(".logo-mi-cuenta").addClass("active");
        $("#menu-slide-cuenta").css("right", "0");
        $("#background-opaco").css("top", topmenusuperior);
        $("#background-opaco").css("visibility","visible");
        $("body").addClass("blockScroll");
      },
      // cuando sale el mouse
      function () {
        sizeheader();
        $("#menu-slide-cuenta").css("top", topmenusuperior);
        $("#menu-slide-cuenta").css("right", "-40%");
        $("#background-opaco").css("visibility","hidden");
        $(".logo-mi-cuenta").removeClass("active");
        $("body").removeClass("blockScroll");
      }
    );
    
    $(".logo-carrito").hover(
     
      // Cuando entra el mouse
      function () {
         sizeheader();
        $(".loading").css("display", "none");
        $("#menu-slide-carrito").css("top", topmenusuperior);
        $("#menu-slide-carrito").css("right", "0");
        $("#background-opaco").css("top", topmenusuperior);
        $("#background-opaco").css("visibility","visible");
        $("body").addClass("blockScroll");
      },
      // cuando sale el mouse
      function () {
        sizeheader();
        $("#menu-slide-carrito").css("top", topmenusuperior);
        $("#menu-slide-carrito").css("right", "-40%");
        $("#background-opaco").css("visibility","hidden");
        $("body").removeClass("blockScroll");
      }
    );
    $(".menu-carrito").hover(
    
      // Cuando entra el mouse
      function () {
          sizeheader();
        $(".loading").css("display", "none");
        $(".logo-carrito").addClass("active");
         $("#menu-slide-carrito").css("top", topmenusuperior);
        $("#menu-slide-carrito").css("right", "0");
        $("#background-opaco").css("top", topmenusuperior);
        $("#background-opaco").css("visibility","visible");
        $("body").addClass("blockScroll");
      },
      // cuando sale el mouse
      function () {
        sizeheader();
          $("#menu-slide-carrito").css("top", topmenusuperior);
        $("#menu-slide-carrito").css("right", "-40%");
        $("#background-opaco").css("visibility","hidden");
        $(".logo-carrito").removeClass("active");
        $("body").removeClass("blockScroll");
      }
    );
    
    
    
    $(".nav.navbar .dropdown").hover(
     
      // Cuando entra el mouse
      function () {
         sizeheader();
        $(".menu-inferior").css("z-index", "2");
        $("#background-opaco").css("top", topmenuinferior);
        $("#background-opaco").css("visibility","visible");
        $("#background-opaco").addClass("active");
  
        $(this).addClass("active");
      },
      // cuando sale el mouse
      function () {
        sizeheader();
        $("#background-opaco").removeClass("active");
        $("#background-opaco").css("top",  topmenuinferior);
        $("#background-opaco").css("visibility","hidden");
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
    
    
    
    $("#btnmobile").click( function (event) {
      
      if ($("#menu-slide-lupa-mobile").hasClass('active')) {
        $("#logo-lupa-mobile").removeClass('active');
        $("#menu-slide-lupa-mobile").removeClass("active");
      }
      if ($("#logo-mi-cuenta-mobile").hasClass('active')) {
        $("#logo-mi-cuenta-mobile").removeClass('active');
        $("#menu-slide-cuenta-mobile").removeClass("active");
      }
      if ($("#logo-carrito-mobile").hasClass('active')) {
        $("#logo-carrito-mobile").removeClass('active');
        $("#menu-slide-carrito-mobile").removeClass("active");
      }
      
      
      
      if ($("#btnmobile").hasClass("active")) {
        $("body").removeClass("blockScroll");
        $("#background-opaco").css("visibility", "hidden");
        $("#btnmobile").removeClass("active");
        $('.navegacion .submenu').css({'left':'-100%'});
        $('.navegacion .menu').css({'left':'calc((100% - 4.4rem)*-1)'}); 
        $('.navegacion').css({'z-index':'-2'});
      } else {
        $("#btnmobile").addClass("active");
        $('.navegacion').css({'z-index':'4'});
        $(".navegacion").css("top",$(".mobile").height());
        $('.navegacion .menu').css({'left':'0px'});
        $("#background-opaco").css("top",  $(".mobile").height());
        $("#background-opaco").css("visibility", "visible");
        $("body").addClass("blockScroll");
      }
    });
    
    
    
    $('.item').click(function(){
      var positionMenu = $(this).parent().attr('menu'); // Buscamos el valor del atributo menu y lo guardamos en una variable
      //console.log(positionMenu); 
      var ancho = $(".menu").width();
      $('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'}); 
    });
    $('.navegacion .submenu li.go-back').click(function(){
      $(this).parent().css({'left':'-100%'});
    });
    $(".slideContent").slideToggle();
    $(".item-sub").click(function(){
      
      var target = $(this).parent().children(".slideContent");
      $(target).slideToggle();
      if($(this).hasClass("active")){
        
        $(this).removeClass("active")
        
      }else{
        $(this).addClass("active")
        
      }
      $(target).css({'left':'0px'});
    });
    
    
    
    
    
    
    $("#logo-lupa-mobile").click( function (event) {
      
      if ($("#box").hasClass('active')) {
        $("#btnmobile").removeClass('active');
        $("#box").removeClass('active');
        $("#background-opaco").css("visibility", "hidden");
      }
      if ($("#logo-mi-cuenta-mobile").hasClass('active')) {
        $("#logo-mi-cuenta-mobile").removeClass('active');
        $("#menu-slide-cuenta-mobile").removeClass("active");
      }
      if ($("#logo-carrito-mobile").hasClass('active')) {
        $("#logo-carrito-mobile").removeClass('active');
        $("#menu-slide-carrito-mobile").removeClass("active");
      }
      
      
      if ($("#logo-lupa-mobile").hasClass("active")) {
        $("body").removeClass("blockScroll");
        $("#background-opaco").css("visibility", "hidden");
        $("#logo-lupa-mobile").removeClass("active")
        $("#menu-slide-lupa-mobile").removeClass("active");
        $("#logo-lupa-mobile").removeClass("active");
      } else {
        $("#logo-lupa-mobile").addClass("active")
        $("#logo-lupa-mobile").addClass("active");
        $("#menu-slide-lupa-mobile").css("top", 		$(".mobile").height());
        $("#menu-slide-lupa-mobile").addClass("active");
        $("#background-opaco").css("top",  $(".mobile").height());
        $("#background-opaco").css("visibility", "visible");
        $("body").addClass("blockScroll");
      }
    });
    
    
    $("#logo-mi-cuenta-mobile").click( function (event) {
      
      if ($("#box").hasClass('active')) {
        $("#btnmobile").removeClass('active');
        $("#box").removeClass('active');
        $("#background-opaco").css("visibility", "hidden");
      }
      if ( $("#logo-lupa-mobile").hasClass('active')) {
        $("#logo-lupa-mobile").removeClass('active');
        $("#menu-slide-lupa-mobile").removeClass("active");
      }
      if ($("#logo-carrito-mobile").hasClass('active')) {
        $("#logo-carrito-mobile").removeClass('active');
        $("#menu-slide-carrito-mobile").removeClass("active");
      }
      
      
      if ($("#logo-mi-cuenta-mobile").hasClass("active")) {
        $("body").removeClass("blockScroll");
        $("#background-opaco").css("visibility", "hidden");
        $("#logo-mi-cuenta-mobile").removeClass("active");
        $("#menu-slide-cuenta-mobile").removeClass("active");
        $("#logo-mi-cuenta-mobile").removeClass('active');
      } else {
        $("#logo-mi-cuenta-mobile").addClass("active");
        $("#menu-slide-cuenta-mobile").css("top", $(".mobile").height());
        $("#logo-mi-cuenta-mobile").addClass('active')
        $("#menu-slide-cuenta-mobile").addClass("active");
        $("#background-opaco").css("top",$(".mobile").height());
        $("#background-opaco").css("visibility", "visible");
        $("body").addClass("blockScroll");
      }
    });
    
    
    $("#logo-carrito-mobile").click( function (event) {
      
      if ($("#box").hasClass('active')) {
        $("#btnmobile").removeClass('active')
        $("#box").removeClass('active');
        $("#background-opaco").css("visibility", "hidden");
      }
      if ( $("#logo-lupa-mobile").hasClass('active')) {
        $("#logo-lupa-mobile").removeClass('active');
        $("#menu-slide-lupa-mobile").removeClass("active");
      }
      if ($("#logo-mi-cuenta-mobile").hasClass('active')) {
        $("#logo-mi-cuenta-mobile").removeClass('active')
        $("#menu-slide-cuenta-mobile").removeClass("active");
      }
      
      
      if ($("#logo-carrito-mobile").hasClass("active")) {
        $("body").removeClass("blockScroll");
        $("#background-opaco").css("visibility", "hidden");
        $("#logo-carrito-mobile").removeClass("active");
        $("#menu-slide-carrito-mobile").removeClass("active");
        $("#logo-carrito-mobile").removeClass('active');
      } else {
        $("#logo-carrito-mobile").addClass("active");
        $("#menu-slide-carrito-mobile").css("top", $(".mobile").height());
        $("#logo-carrito-mobile").addClass('active');
        $("#menu-slide-carrito-mobile").addClass("active");
        $("#background-opaco").css("top", $(".mobile").height());
        $("#background-opaco").css("visibility", "visible");
        $("body").addClass("blockScroll");
      }
    });
    
    
    
    $("#background-opaco").click( function(event) {
      
      if ($("#box").hasClass('active')) {
        $("#btnmobile").removeClass('active')
        $("#box").removeClass('active');
        $("#background-opaco").css("visibility", "hidden");
        $("body").removeClass("blockScroll");
      }
      
      if ( $("#logo-lupa-mobile").hasClass('active')) {
        $("#logo-lupa-mobile").removeClass('active');
        $("#background-opaco").css("visibility", "hidden");
        $("#menu-slide-lupa-mobile").removeClass("active");
        $("body").removeClass("blockScroll");
      }
      if ($("#logo-mi-cuenta-mobile").hasClass('active')) {
        $("#logo-mi-cuenta-mobile").removeClass('active')
        $("#menu-slide-cuenta-mobile").removeClass("active");
        $("#background-opaco").css("visibility", "hidden");
        $("body").removeClass("blockScroll");
      }
      
      if ($("#logo-carrito-mobile").hasClass('active')) {
        $("#logo-carrito-mobile").removeClass('active');
        $("#menu-slide-carrito-mobile").removeClass("active");
        $("#background-opaco").css("visibility", "hidden");
        $("body").removeClass("blockScroll");
      }
      
    });
    
    
    window.addEventListener("keydown", function (event) {
      if ($("#box").hasClass('active') && event.keyCode === 27) {
        $("#btnmobile").removeClass('active')
        $("#box").removeClass('active');
      }
    });
    
  
    /*empieza msg superior*/
    $("#detalles-descuento").click( function(event){
      $("#myModal").css("display","block");
    $("#myMensaje-1").text("APROVECHA 40% DE DESCUENTO EN TODA LA TIENDA");
      $("#myMensaje-2").text("No aplica sobre mercancía en SALE ni Final Sale. No es acumulable con otro descuento. Válido en express.pa.");
        
    });
    
    $(".close").click( function(event){
      
       $("#myModal").css("display","none");
    });
     
      window.addEventListener("keydown", function (event) {
            if (event.target == $("myModal")) {
           $("#myModal").css("display","none");
      }
      });
    
    
    /*termina msg superior*/
  });
  
  //Logged
  
  async function Logeo() {
    var Login = await vtexjs.checkout.getOrderForm();
    if (Login.loggedIn) {
      $(".BtnNuevos").css("display", "none");
      $(".ContenedorPerfil").empty();
      $(".ContenedorPerfil").css("display", "block");
      $(".ContenedorPerfil").append(
        "<div class='usuario'> Hola, " +
        Login.clientProfileData.firstName +
        "</div><div class='perfil'><a href='/_secure/account'>Ver perfil</a><span class='Logout'>Salir</span></div>"
      );
      $("span.Logout").click(async function(){
          await $.get(vtexjs.checkout.getLogoutURL())
          window.location.reload()
      })
    } else {
      $(".ContenedorPerfil").css("display", "none");
      $(".BtnNuevos").css("display", "flex");
    }
  }
  