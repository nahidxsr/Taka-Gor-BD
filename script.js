document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let referralCode = document.getElementById("referralCode").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Name Validation (Both First & Last Name Required)
    if (firstName === "" || lastName === "") {
        alert("Please enter your First and Last Name.");
        return;
    }

    // Contact Validation (Must be Either Phone or Email)
    let phoneRegex = /^[0-9]{10,15}$/;  // Accepts 10-15 digit numbers
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple Email Validation

    if (!phoneRegex.test(contact) && !emailRegex.test(contact)) {
        alert("Please enter a valid Email or Phone Number.");
        return;
    }

    // Password Match Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Success Message
    alert("Registration Successful!");

    // (Optional) Submit Form to Server
    this.submit();
});
