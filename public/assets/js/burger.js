$(document).ready(function() {
  
  
    
    $("#newBurger").on("click", function(event) {
      event.preventDefault();
        
      
      var burgerName = $( "#burg" ).val();

      //Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: {
         name: burgerName
        }

      }).then( 
        function(response) {
            console.log(response);
            location.reload();
          }
          
      );
    
    });

    $(".devoured").on("click", function(event) {
        event.preventDefault();
          
        
        var burgerID = $( this ).data('id');
  
        //Send the POST request.
        $.ajax("/api/devour", {
          type: "POST",
          data: {
           id: burgerID
          }
  
        }).then( 
          function(response) {
              console.log(response);
              location.reload();
          }
        );
      
      });
  
}) 