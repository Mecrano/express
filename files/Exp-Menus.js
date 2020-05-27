$(document).ready(function() {
  
  $(".logo-lupa").hover(
    // Cuando entra el mouse
    function() {
      console.log("abrir menu slide")
      document.getElementById("menu-slide-lupa").style.width = "30%";
      document.getElementById("background-opaco").style.visibility = "visible";
    },
    // cuando sale el mouse
    function() {
      console.log("cerrar menu slide")
      document.getElementById("menu-slide-lupa").style.width = "0%";
      document.getElementById("background-opaco").style.visibility = "hidden";
    })

    $(".menu-lupa").hover(
      // Cuando entra el mouse
      function() {
        console.log("abrir menu slide")
        document.getElementById("menu-slide-lupa").style.width = "30%";
        document.getElementById("background-opaco").style.visibility = "visible";
      },
      // cuando sale el mouse
      function() {
        console.log("cerrar menu slide")
        document.getElementById("menu-slide-lupa").style.width = "0%";
        document.getElementById("background-opaco").style.visibility = "hidden";
      })


    $(".logo-mi-cuenta").hover(
      // Cuando entra el mouse
      function() {
        console.log("abrir menu slide")
        document.getElementById("menu-slide-cuenta").style.width = "30%";
        document.getElementById("background-opaco").style.visibility = "visible";
      },
      // cuando sale el mouse
      function() {
        console.log("cerrar menu slide")
        document.getElementById("menu-slide-cuenta").style.width = "0%";
        document.getElementById("background-opaco").style.visibility = "hidden";
      })


      $(".menu-mi-cuenta").hover(
        // Cuando entra el mouse
        function() {
          console.log("abrir menu slide")
          document.getElementById("menu-slide-cuenta").style.width = "30%";
          document.getElementById("background-opaco").style.visibility = "visible";
        },
        // cuando sale el mouse
        function() {
          console.log("cerrar menu slide")
          document.getElementById("menu-slide-cuenta").style.width = "0%";
          document.getElementById("background-opaco").style.visibility = "hidden";
        })

      
      
      $(".logo-carrito").hover(
        // Cuando entra el mouse
        function() {
          console.log("abrir menu slide")
          document.getElementById("menu-slide-carrito").style.width = "30%";
          document.getElementById("background-opaco").style.visibility = "visible";
        },
        // cuando sale el mouse
        function() {
          console.log("cerrar menu slide")
          document.getElementById("menu-slide-carrito").style.width = "0%";
          document.getElementById("background-opaco").style.visibility = "hidden";
        })
        $(".menu-carrito").hover(
          // Cuando entra el mouse
          function() {
            console.log("abrir menu slide")
            document.getElementById("menu-slide-carrito").style.width = "30%";
            document.getElementById("background-opaco").style.visibility = "visible";
          },
          // cuando sale el mouse
          function() {
            console.log("cerrar menu slide")
            document.getElementById("menu-slide-carrito").style.width = "0%";
            document.getElementById("background-opaco").style.visibility = "hidden";
          })
  

}) 