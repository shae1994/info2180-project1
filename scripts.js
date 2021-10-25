$(document).ready(function () {
    console.log("True")
    // Listen to submit event on the <form> itself!
    $("form").submit(function(e) {
        e.preventDefault();
    
    var email = $('#email').val();
    console.log(email)
    if(email== ""){
        $('#email').next().show();
        console.log("False")
        $("message").text("Please enter a valid email.")
        return false;
    }else{
        $(".message").text("Thank You! Your email address "+ email+ " has been added to our mailing list!")
    }
    });

    

    

    
    
  });

