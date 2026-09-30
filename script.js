function validateContactForm() {

    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var message = document.getElementById("contactMessage").value;
    var consent = document.getElementById("consent").checked;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
    document.getElementById("consentError").innerHTML = "";

    var valid = true;

    if (name == "") {
        document.getElementById("nameError").innerHTML =
            "Please enter your name.";
        valid = false;
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML =
            "Please enter your email.";
        valid = false;
    }

    if (message == "") {
        document.getElementById("messageError").innerHTML =
            "Please enter your message.";
        valid = false;
    }

    if (consent == false) {
        document.getElementById("consentError").innerHTML =
            "Please agree before submitting.";
        valid = false;
    }

    if (valid == true) {
        document.getElementById("contactSuccess").style.display = "block";
    }

    return false;
}


function submitBooking() {

    var name = document.getElementById("bookingName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("travelDate").value;
    var participants = document.getElementById("participants").value;
    var tourPackage = document.getElementById("package").value;
    var consent = document.getElementById("bookingConsent").checked;

    var error = document.getElementById("bookingError");

    error.innerHTML = "";

    if (name == "" ||
        phone == "" ||
        email == "" ||
        date == "" ||
        participants == "" ||
        tourPackage == "") {

        error.innerHTML = "Please complete all required fields.";
        return false;
    }

    if (consent == false) {
        error.innerHTML =
            "Please agree to the privacy terms.";
        return false;
    }

    document.getElementById("bookingSuccess").style.display = "block";

    return false;
}