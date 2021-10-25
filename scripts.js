$(document).ready(function () {
    console.log("True")
    // Listen to submit event on the <form> itself!
    $("form").submit(function(e) {
        e.preventDefault();
        var email = $('#email').val();

    if(email== ''){
        $('#email').next().show();
        console.log("False")
        return false;
        
    }
    if(Email(email)==false){
        $('#message').show();
        console.log("False")
        return false;
    }
      function Email(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            console.log("False")
          return false;
        }else{
            console.log("True")
          return true;
        }
      }
    });

    
  });

