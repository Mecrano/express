var numberOfPage = 2;

// Cuando el DOM o HTML se ha cargado, pero sin imagenes
async function init() {
  convertFiltersIntoSlideDown();
  makeOrderByCustom();
  clearPage();
  expressView();
  expressViewClose();
  loadMore();
  capitalizeBreadcrumb();
  dropdownFilters();
  //deleteSpecialCharacters();
  // $(".search-single-navigator ul").slideToggle();
  
  /*if($(".search-single-navigator h4 > ul").lenght > 0){
  $(".search-single-navigator h4").next().toggle();
  $(".search-single-navigator h4").toggleClass( "bounce" );
  }*/
  await setColorSelector(1)
  
}

var loadMore = function() {
  if (numberOfPage > $(".pager.bottom .page-number").length) {
    $("#load-more-products").remove()
  }
  
  $("#load-more-products").click(async function(){
    $("#load-more-products div:first-child").addClass("loader");
    var numberPerPage = parse_query_string(window.location.search)["PS"] || 15;
    var urlSearch = getUrlSearch();
    
    var html = await $.get(urlSearch + '&PS='+ numberPerPage +'&sl=fb579d9a-fd84-4d0a-a480-7b27355e0b76&cc='+ numberPerPage +'&sm=0&PageNumber=' + numberOfPage)
    
    $("#draft").html(html)
    
    setTimeout(async function(){
      // Obtenemos solo el html de los productos que queremos
      var htmlToAppend = $("#draft .exp-vitrina ul").html()
      $("#load-more-products div:first-child").removeClass("loader");
      
      // Insertamos los productos en nuestra lista normal de productos
      $("#draft").siblings(".main").find(".exp-vitrina .exp-vitrina ul").append(htmlToAppend)
      await setColorSelector(numberOfPage)
      if (numberOfPage < $(".pager.bottom .page-number").length) {
        numberOfPage += 1;
      } else {
        $("#load-more-products").remove()
      }
      expressView()
    }, 2000)
    
  })
  
}

var getUrlSearch = function() {
  var urlSearch = $(".vitrine.resultItemsWrapper script").text()
  urlSearch = urlSearch.split("').load('")
  urlSearch = urlSearch[1]
  urlSearch = urlSearch.split("&")
  return urlSearch[0]
}
// Abrir el Express View
var expressView = function() {
  $("div#express-view").off("click");
  $("div#express-view").click(function() {
    $("div#menu-slide-express-view").css("right", "0");
    $("#background-opaco-view").css("visibility", "visible");
    $("body").addClass("blockScroll");
    $("div#menu-slide-express-view iframe").attr("src", $(this).siblings(".product-image").attr("href") + "?lid=d3c4c464-935f-4ad4-a5a3-77a57bc27fd3")
  })
}
//Cerrar el Express View
var expressViewClose = function() {
  $("span.close-express-view").click(function(){
    $("div#menu-slide-express-view").css("right", "-40%");
    $("#background-opaco-view").css("visibility", "hidden");
    $("body").removeClass("blockScroll");
  })
}

var clearPage = function() {
  $(".menu-navegue").after('<div class="labelbuscar">'+
                           '<span>Buscar Por: </span> </div>');
  //$(".search-multiple-navigator").remove();
  $(".menu-navegue").remove();
  $(".helperComplement").remove()
  $(".search-single-navigator h4 a").removeAttr("href");
  
}

var convertFiltersIntoSlideDown = function() {
  /* $(".search-single-navigator > ul > li > a").each(function() {
    $(this).text($(this).text().slice(0, -3))
  })
  
  var Slidedownbtn = $(".search-single-navigator h4");
  
 /*  Slidedownbtn.on("click", function (event) {
    
  $(".search-single-navigator ul").slideToggle();
    
    if (Slidedownbtn.hasClass('active')) {
      $(".search-single-navigator h4").removeClass("active");
    }
    else{
      $(".search-single-navigator h4").addClass("active"); 
    }
  }); */
}

var makeOrderByCustom = function() {
  $("button#dropSelected").click(function() {
    $("ul#optionsOrderBy").slideToggle()
  })
  
  $("ul#optionsOrderBy").mouseleave(function() {
    $("ul#optionsOrderBy").slideToggle()
  })
  
  if (parse_query_string(window.location.search)["O"]) {
    switch (parse_query_string(window.location.search)["O"]) {
      case "OrderByTopSaleDESC":
        $("button#dropSelected").text("Relevancia")
        break
        case "OrderByPriceASC":
        $("button#dropSelected").text("Precio: Menor a mayor")
        break;
        
      case "OrderByPriceDESC":
        $("button#dropSelected").text("Precio: Mayor a menor")
        break;
        
      case "OrderByReleaseDateDESC":
        $("button#dropSelected").text("Nuevo")
        break;
        
    }
    $("button#dropSelected").append('<i class="fa fa-angle-down" style="font-size:20px"></i>')
  }
  
  $("ul#optionsOrderBy button").click(function(e) {
    insertParam("O", $(this).attr("data-value"))
  })
}

var insertParam = function(key, value) {
  key = encodeURIComponent(key);
  value = encodeURIComponent(value);
  
  // kvp looks like ['key1=value1', 'key2=value2', ...]
  var kvp = document.location.search.substr(1).split('&');
  let i=0;
  
  for(; i<kvp.length; i++){
    if (kvp[i].startsWith(key + '=')) {
      let pair = kvp[i].split('=');
      pair[1] = value;
      kvp[i] = pair.join('=');
      break;
    }
  }
  
  if(i >= kvp.length){
    kvp[kvp.length] = [key,value].join('=');
  }
  
  // can return this or...
  let params = kvp.join('&');
  
  // reload page with new params
  document.location.search = params;
}

var parse_query_string = function(query) {
  if (query != ""){
    var vars = query.split("&");
    if (vars.length > 0 && vars[0].split("?").length > 0) {
      vars[0] = vars[0].split("?")[1]
    }
    if (vars.length > 0) {
      var query_string = {};
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
          query_string[key] = decodeURIComponent(value);
          // If second entry with this name
        } else if (typeof query_string[key] === "string") {
          var arr = [query_string[key], decodeURIComponent(value)];
          query_string[key] = arr;
          // If third or later entry with this name
        } else {
          query_string[key].push(decodeURIComponent(value));
        }
      }
      return query_string;
    } else {
      return {}
    }
  } else {
    return {}
  }
}

var capitalizeBreadcrumb = function() {
  var breadcrumbLink = $('.bread-crumb ul li a');
  $.each(breadcrumbLink, (i, text) => {
    var breadCrumbText = $(text).text().toLowerCase();
    var breadcrumbTextCapitalize =  breadCrumbText.charAt(0).toUpperCase() + breadCrumbText.slice(1);
    $(text).text(breadcrumbTextCapitalize);
  });
}

/*var deleteSpecialCharacters = function() {
  var searchResult = $('.search-single-navigator ul li a');
  $.each(searchResult, (i, text) => {
    var breadCrumbText = $(text).text().replace('(', '').replace(')', '').replace(new RegExp('[0-9]'), '');
    $(text).text(breadCrumbText);
  });
}*/

var dropdownFilters = function() {
  $('.search-single-navigator h5').on('click',function(){
    $(this).next().toggle();
    $(this).toggleClass( "bounce" );
  });
  
  var regex = /^[a-zA-Z ]+$/;
 
  $(".search-single-navigator h4").on('click',function(){
    if(regex.test($(".search-single-navigator h4").text())){
    $(this).next().toggle();
      $(this).toggleClass( "bounce" );}
  });
}

$(document).ready(function() {
  init()
});

// Get Color and put in shelf
function getProductsId(number) {
  var productIds = []
  var offSet = number * 15 - 15;
  $(".exp-vitrina > ul > li > span.box-item").each(function(index, element) {
    if (index > offSet) {
      productIds.push($(this).attr("data-productid"))
    }
  })
  return productIds;
}

function lookingForImageOfColor(description, colorName) {
  var colorNamewrapper = "<span>" + colorName + "</span><span>"
  var position = description.indexOf(colorNamewrapper)
  position += colorNamewrapper.length
  var styleCode = description.substring(position, position + 18)
  var urlImage = "https://images.express.com/is/image/expressfashion/" + styleCode + "_s?cache=on&wid=30&hei=30&qlt=70&defaultImage=Photo-Coming-Soon"
  return urlImage;
}

async function getColorOfManyProducts(productIds) {
  var queryParam = productIds.join("&fq=productId:")
  var productData = await $.get('/api/catalog_system/pub/products/search/?fq=productId:' + queryParam)
  return productData
}

function lookingForSkuImage(items, specificationName) {
    var imageData = {}
    items.forEach(function(item) {
        if (item.Color.includes(specificationName)) {
             imageData = item.images[0];
        }
    })
    imageData = imageData.imageTag.replace(/#width#/g, "292").replace(/#height#/g, "375").replace("~", "")
    return imageData;
}

var productData = []
async function setColorSelector(number) {
  var productIds = getProductsId(number)
  productData.push(...await getColorOfManyProducts(productIds))
  productData.forEach(function(product) {
    $('[data-productid="' + product.productId + '"]').find(".quickShop > .productColors span").remove()
    if (product.skuSpecifications[0].values.length > 1) {
      $('[data-productid="' + product.productId + '"]').find(".quickShop > .colorQuantity > .numberOfColors").text(product.skuSpecifications[0].values.length)
      product.skuSpecifications[0].values.forEach(function(color) {
        $('[data-productid="' + product.productId + '"]').find(".quickShop > .productColors").append("<span style='background-image: url(" + lookingForImageOfColor(product.description, color.name) + ")'>" + color.name + "</span>")
      })
      $('[data-productid="' + product.productId + '"]').find(".quickShop > .colorQuantity").addClass("active")
    } else {
      $('[data-productid="' + product.productId + '"]').find(".quickShop").remove()
    }
  })
  
  $(".quickShop > .productColors > span").mouseover(function() {
    var self = this;
    productData.forEach(function(productInfo){
      if (productInfo.productId == $(self).parents(".box-item").attr("data-productid")) {
		var imageInfo = lookingForSkuImage(productInfo.items, $(self).text())
		console.log(imageInfo)
        //$(self).parents(".box-item").find(".product-image").append("<img src='" + imageInfo.imageUrl + "' alt='" + imageInfo.imageText + "' style='display: inline;' />")
        $(self).parents(".box-item").find(".product-image").append(imageInfo)
        $(self).parents(".box-item").find(".product-image img:first-child").hide()
      }
	})
  })
  
  $(".quickShop > .productColors > span").mouseleave(function() {
    $(this).parents(".box-item").find(".product-image img:nth-child(2)").remove()
  	$(this).parents(".box-item").find(".product-image img:first-child").show()
  })
}