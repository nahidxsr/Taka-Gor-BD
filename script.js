document.addEventListener("DOMContentLoaded", function () {
    // লোকাল স্টোরেজ থেকে ব্যালেন্স আনো (ডিফল্ট 0)
    let balance = localStorage.getItem("userBalance") || 0;
    let takaBalance = balance / 100; // 100 পয়েন্ট = 1 টাকা

    document.getElementById("userBalance").innerText = balance;
    document.getElementById("userTaka").innerText = takaBalance;

    // পপআপ এলিমেন্ট লোড চেক করা হচ্ছে
    let popup = document.getElementById("activationPopup");

    if (popup) {
        let isActivated = localStorage.getItem("isActivated");

        if (!isActivated) {
            popup.style.display = "block";

            // ৫ সেকেন্ড পর পপআপ অটো বন্ধ হবে
            setTimeout(() => {
                popup.style.display = "none";
            }, 5000);
        }

        // যখন ইউজার "Active Now" ক্লিক করবে
        let activateBtn = document.querySelector(".activate-btn");
        if (activateBtn) {
            activateBtn.addEventListener("click", function () {
                localStorage.setItem("isActivated", "true");
                popup.style.display = "none";
            });
        }
    } else {
        console.error("❌ পপআপ এলিমেন্ট পাওয়া যায়নি!");
    }
});
