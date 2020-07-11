// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.
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
    

}

}

$(window).on("hashchange load", function (e) {

  displayCartHash();

  
});


  