document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        window.location.href = "https://nahidxsr.github.io/login/";
        return;
    }

    let balance = loggedInUser.balance || 0;
    let takaBalance = balance / 100;

    document.getElementById("userBalance").innerText = balance;
    document.getElementById("userTaka").innerText = takaBalance;

    let popup = document.getElementById("activationPopup");

    if (popup) {
        let isActivated = localStorage.getItem("isActivated");

        if (!isActivated) {
            popup.style.display = "block";
        }

        let closeButton = document.querySelector(".close-btn");
        if (closeButton) {
            closeButton.addEventListener("click", function () {
                popup.style.display = "none";
            });
        }
    } else {
        console.error("❌ পপআপ এলিমেন্ট পাওয়া যায়নি!");
    }
});
