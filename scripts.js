$(document).ready(function () {
    console.log("True")
    // Listen to submit event on the <form> itself!
    $("submit").submit(function(e) {
        e.preventDefault();
    });

    var email = $('#email').val();

    if(email== ''){
        $('#email').next().show();
        return false;
    }
    if(Email(email)==false){
        $('#invalid_email').show();
        return false;
      }
      function Email(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
          return false;
        }else{
          return true;
        }
      }
  });

