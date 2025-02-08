document.addEventListener("DOMContentLoaded", function () {
    // লগইন ইউজারের তথ্য লোকাল স্টোরেজ থেকে আনো
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // যদি ইউজার লগইন না করে, তাহলে লগইন পেজে রিডাইরেক্ট করবে
    if (!loggedInUser) {
        window.location.href = "https://nahidxsr.github.io/login/";
        return;
    }

    // ব্যালেন্স সেটআপ করা হচ্ছে
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

        // "Active Now" বাটন ক্লিক করলে আইডি অ্যাক্টিভেশন পেজে যাবে
        let activateBtn = document.querySelector(".activate-btn");
        if (activateBtn) {
            activateBtn.addEventListener("click", function () {
                localStorage.setItem("isActivated", "true");
                window.location.href = "https://nahidxsr.github.io/account-active-/"; // রিডিরেক্ট আইডি অ্যাক্টিভেশনে
            });
        }

        // পপআপ ক্লোজ করার ইভেন্ট (ইচ্ছা করলে ইউজার ক্লোজ করতে পারবে)
        document.querySelector(".close-btn")?.addEventListener("click", function () {
            popup.style.display = "none";
        });
    } else {
        console.warn("⚠️ পপআপ এলিমেন্ট পাওয়া যায়নি!");
    }
});
