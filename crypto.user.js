// ==UserScript==
// @name         Fix Content for Element
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix nội dung div và ngăn thay đổi
// @author       Your Name
// @match        *://*.example.com/*  // Thay bằng URL của trang web bạn muốn áp dụng
// @updateURL    https://github.com/lengocphan2001/cryptotool/blob/master/crypto.user.js
// @downloadURL  https://github.com/lengocphan2001/cryptotool/blob/master/crypto.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const targetElement = document.getElementById("btn-EstimatedBalanceV2-balanceToFiat");

    // Khóa nội dung ban đầu
    const lockContent = () => {
        targetElement.textContent = "≈ 100 USD";
    };
    lockContent();
    const observer = new MutationObserver(() => {
        lockContent();
    });

    observer.observe(targetElement, { childList: true, subtree: true, characterData: true });
})();
