// ==UserScript==
// @name         Fix Content for Element
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix nội dung div và ngăn thay đổi
// @author       Your Name
// @match        https://www.binance.com/vi/my/dashboard
// @updateURL    https://github.com/lengocphan2001/cryptotool/blob/master/crypto.user.js
// @downloadURL  https://github.com/lengocphan2001/cryptotool/blob/master/crypto.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const targetElement = document.getElementById("btn-EstimatedBalanceV2-balanceToFiat");

    // Khóa nội dung ban đầu
    const lockContent = () => {
        if (targetElement) {
            alert(1);
        }
        targetElement.textContent = "≈ 100 USD";
    };
    lockContent();
    const observer = new MutationObserver(() => {
        lockContent();
    });

    observer.observe(targetElement, { childList: true, subtree: true, characterData: true });
})();
