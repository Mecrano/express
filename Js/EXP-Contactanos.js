//mensaje1
$("textarea#contact-message").focusout(function(){
    if($("textarea#contact-message").val()==""){
      $("textarea#contact-message").css("border","1px solid red")
      $("label#error-message").text("Por favor, introduzca un mensaje válido.")
    }    
  })
  $("textarea#contact-message").focusin(function(){
    $("textarea#contact-message").css("border","1px solid rgb(191,191,191)")
    $("label#error-message").text("")
  })
  
  
  //E-mail
  $("input#contact-email-address").focusout(function(){
    if($("input#contact-email-address").val()==""){
      $("input#contact-email-address").css("border","1px solid red")
      $("label#error-email").text("Por favor, introduzca un E-mail válido.")
    }    
  })
  $("input#contact-email-address").focusin(function(){
    $("input#contact-email-address").css("border","1px solid rgb(191,191,191)")
    $("label#error-email").text("")
  })
  
  //Nombre
  $("input#contact-first-name").focusout(function(){
    if($("input#contact-first-name").val()==""){
      $("input#contact-first-name").css("border","1px solid red")
      $("label#error-fname").text("Por favor, introduzca su nombre.")
    }    
  })
  $("input#contact-first-name").focusin(function(){
    $("input#contact-first-name").css("border","1px solid rgb(191,191,191)")
    $("label#error-fname").text("")
  })
  
  //Apellido
  $("input#contact-last-name").focusout(function(){
    if($("input#contact-last-name").val()==""){
      $("input#contact-last-name").css("border","1px solid red")
      $("label#error-lname").text("Por favor, introduzca su apellido.")
    }    
  })
  $("input#contact-last-name").focusin(function(){
    $("input#contact-last-name").css("border","1px solid rgb(191,191,191)")
    $("label#error-lname").text("")
  })
  
  //Selecciones
  $("select#contact-subject").focusout(function(){
    if($("select#contact-subject").val()==""){
      $("select#contact-subject").css("border","1px solid red")
      $("select#contact-subject").css("background-color","#f9e6e6")
      $("select#contact-subject").css("color","red")
      $("label#error-select").text("Por favor, introduzca un asunto.")
    }    
  })
  $("select#contact-subject").focusin(function(){
    $("select#contact-subject").css("border","1px solid rgb(191,191,191)")
    $("select#contact-subject").css("color","black")
    $("label#error-select").text("")
  })
  
  function createDocumentContact(email, firstName, lastName, message, orderId, subject) {
    return new Promise(function (resolve, reject) {
      var settings = {
        url: "/api/dataentities/CT/documents",
        type: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          message: message,
          orderId: orderId,
          subject: subject,
        }),
      };
      
      $.ajax(settings)
      .done(function (response) {
        resolve(response);
      })
      .fail(function (error) {
        reject(error);
      });
    });
  }
  
  $(document).ready(function(){
    $("form#envio-formulario").submit(async function(e){
      e.preventDefault();
      var email = $("input#contact-email-address").val();
      var firstName = $("input#contact-first-name").val();
      var lastName = $("input#contact-last-name").val();
      var message = $("textarea#contact-message").val();
      var orderId = $("input#contact-order-number").val();
      var subject = $("select#contact-subject option:selected").val();
      const response = await createDocumentContact(email, firstName, lastName, message, orderId, subject)
      console.log(response)
    })
  })