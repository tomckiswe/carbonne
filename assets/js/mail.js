function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function sendMail() {
    message = encodeURIComponent($("#message").val())
    if (message == '') {
        showPopup('assets/images/warn.png', 'Je bericht is leeg.')
        // alert('Gelieve een bericht te schrijven')
        return;
    }
    email = $("#email").val()
    if (! validateEmail(email)) {
        showPopup('assets/images/warn.png', 'Gelieve een geldig adres op te geven.')
        return;
    }
    email = encodeURIComponent(email)
    var params = 'message=' + message + '&emailaddress=' + email
    $.ajax({
        dataType: 'json',
        url: 'https://script.google.com/macros/s/AKfycbzGWdqAgo-9ASx0Ye7m8vxVQtJG89S0_NUq3E5ATn36-byqOcQ/exec?' + params,
        success: function () {
            showPopup('assets/images/send.png', 'Bedankt voor je bericht!')
            $("#message").val('')
            $("#email").val('')
        },
        error: function (error, textStatus, errorThrown) {

        }
    });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function showPopup(img, text) {
    var modal = document.getElementById('modal');
    $("#modaltext").text(text)
    $("#modalimg").attr('src', img)    
    modal.style.display = "block";
    if (span == null) {
        span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }        
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('modal');    
    if (event.target == modal) {
        modal.style.display = "none";
    }
}