
$("#enviar").click(function(){
    var settings = {
        "url": "http://worldtimeapi.org/api/timezone/europe/london",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      })})