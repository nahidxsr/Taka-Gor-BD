document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // যদি ইউজার লগইন না করে, তাহলে লগইন পেজে রিডাইরেক্ট করবে
    if (!loggedInUser) {
        window.location.href = "https://nahidxsr.github.io/login/";
        return;
    }

    // ব্যালেন্স সেটআপ
    let balance = loggedInUser.balance || 0;
    let takaBalance = (balance / 100).toFixed(2); // দশমিক সহ দেখাবে

    document.getElementById("userBalance").innerText = balance;
    document.getElementById("userTaka").innerText = takaBalance;

    // ID Activation Popup
    let popup = document.getElementById("activationPopup");

    if (popup) {
        let isActivated = localStorage.getItem("isActivated");

        if (!isActivated) {
            popup.style.display = "block";
        }

        // পপআপ ক্লোজ করার ইভেন্ট
        document.querySelector(".close-btn")?.addEventListener("click", function () {
            popup.style.display = "none";
        });
    } else {
        console.warn("⚠️ পপআপ এলিমেন্ট পাওয়া যায়নি!");
    }
});
