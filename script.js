document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Validate Contact (Email or Phone)
    let phoneRegex = /^[0-9]{10,15}$/; 
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!phoneRegex.test(contact) && !emailRegex.test(contact)) {
        alert("Please enter a valid Email or Phone Number.");
        return;
    }

    // Validate Password Match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Show Success Popup
    document.getElementById("successPopup").style.display = "block";
});

// Open Login Popup on Success
document.getElementById("openLoginPopup").addEventListener("click", function() {
    document.getElementById("successPopup").style.display = "none";
    document.getElementById("loginPopup").style.display = "block";
});

// Login Validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let loginContact = document.getElementById("loginContact").value.trim();
    let loginPassword = document.getElementById("loginPassword").value;

    if (loginContact === "" || loginPassword === "") {
        alert("Please enter valid login credentials.");
        return;
    }

    alert("Login Successful!");

    // Redirect or close popup (Optional)
    document.getElementById("loginPopup").style.display = "none";
});

// Close Login Popup
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("loginPopup").style.display = "none";
});
