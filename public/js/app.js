$(document).ready(function() { 

    // Save User name and email in a variables
        var firstName = $("#firstName");
        var lastName = $("#lastName");
        var email = $("#email");
        var unsubscribe = false;
        
        // $(".alert-box--success").hide();
        // $(".alert-box--error").hide();
    
    // Submit new Contact and save to the DB
       submitNewContact = (newContact) => {
            $.post("/api/mlist/", newContact, function(){   
    
    // Show Confirmation that email has been added to the List
                showSuccessAlert();
            });
        };
     
    // This function will look up the email in the database and return false if email exists
        lookupEmail = (newContact) => {
            $.get("/api/mlist/", function(data){
                var dbInfo = data;
                for( var i = 0; i < dbInfo.length; i++ ) {
    
                   if ( dbInfo[i].email === newContact.email ) {
                        var contact = dbInfo[i];
                        // console.log("Found ",contact);
    // Show error message if email is already in the database
                    showFailedAlert();
                    return;
                   }
                };
    
    // Submit New Contact to be added to dB & Clear form fields
                submitNewContact(newContact);
    
    // Clear the form fields
                document.getElementById("mailingListForm").reset();
    
            });
        };
    
    // On submit event handler, gets user data and creates new contact object
        $("#mailingListForm").on("submit", handleFormSubmit = (event) => {
            event.preventDefault();
            var newContact = {
                firstName: firstName.val().trim(),
                lastName: lastName.val().trim(),
                email: email.val().toLowerCase().trim()
            };
    
    //      console.log(newContact);
            lookupEmail(newContact);
        });
    
           /* Close Alert Boxes
        * ------------------------------------------------------ */
       var clAlertBoxes = function() {
    
        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        }); 
    
    };
    
    
    // this function creates the Alert shown on success of adding new contact
       showSuccessAlert = () => {
            var alertHere = $("#alertDiv");
            var alertDiv = $('<div>');
            alertDiv.addClass("alert-box alert-box--success hideit");
            var alertmsg = $('<p>').text('Thank You. We received your information.');
            var alertX = $('<i>').addClass('fa fa-times alert-box__close');
            
            alertHere.prepend(alertDiv);
            alertDiv.prepend(alertmsg, alertX);
            $(alertX).on('click', clAlertBoxes);
        };
    
    // this function creates the Alert shown on failure of adding new contact
        showFailedAlert = () => {
            var alertHere = $("#alertDiv");
            var alertDiv = $('<div>');
            alertDiv.addClass("alert-box alert-box--error hideit");
            var alertmsg = $('<p>').text('We already have you in our mailing list.');
            var alertX = $('<i>').addClass('fa fa-times alert-box__close');
    
            alertHere.prepend(alertDiv);
            alertDiv.prepend(alertmsg, alertX);
            $(alertX).on('click', clAlertBoxes);
        };
    
    
    });