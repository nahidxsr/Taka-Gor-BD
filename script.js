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

    // Bottom navigation menu button click events
    document.querySelectorAll('.bottom-nav a').forEach(function (navBtn) {
        navBtn.addEventListener('click', function () {
            // বাটনে ক্লিক করলে স্লাইড এফেক্ট দেখাবে
            navBtn.classList.add('active');
            setTimeout(function () {
                navBtn.classList.remove('active');
            }, 200); // 200ms এর জন্য ইফেক্ট দেখাবে
        });
    });
});
