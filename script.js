document.addEventListener("DOMContentLoaded", function () {
    // ✅ লগইন চেক করা
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        // 🔒 যদি কেউ লগইন না করে ড্যাশবোর্ডে ঢোকার চেষ্টা করে, তাহলে সরাসরি লগইন পেজে পাঠিয়ে দেওয়া হবে
        window.location.href = "https://nahidxsr.github.io/login/";
        return; // নিচের কোড রান বন্ধ করতে
    }

    // ✅ ইউজারের ব্যালেন্স লোড করা
    let balance = loggedInUser.balance || 0;
    let takaBalance = balance / 100; // 100 পয়েন্ট = 1 টাকা

    document.getElementById("userBalance").innerText = balance;
    document.getElementById("userTaka").innerText = takaBalance;

    // ✅ পপআপ চেক করা (ID একটিভ করা হয়েছে কি না)
    let popup = document.getElementById("activationPopup");

    if (popup) {
        let isActivated = localStorage.getItem("isActivated");

        if (!isActivated) {
            popup.style.display = "block"; // 🟢 পপআপ চালু থাকবে যতক্ষণ না অ্যাক্টিভ হয়
        }

        // ✅ "Active Now" বাটন ক্লিক করলে `account-active-` পেজে নিয়ে যাবে
        let activateBtn = document.querySelector(".activate-btn");
        if (activateBtn) {
            activateBtn.addEventListener("click", function () {
                window.location.href = "https://nahidxsr.github.io/account-active-/";
            });
        }
    } else {
        console.error("❌ পপআপ এলিমেন্ট পাওয়া যায়নি!");
    }
});
