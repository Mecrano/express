function parse_query_string(query) {
    if (query != ""){
      var vars = []
      if (query.indexOf("&") > -1) {
        vars = query.split("&");
      } else {
        vars[0] = query;
      }
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
  
  
  $(document).ready(function(){
      var busqueda = parse_query_string(window.location.search)
      $("label#search-text").text(busqueda.ft)
  })