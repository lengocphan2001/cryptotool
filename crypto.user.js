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

    // Hàm để kiểm tra và khóa nội dung phần tử
    const lockContent = () => {
        const targetElement = document.getElementById("btn-EstimatedBalanceV2-balanceToFiat");
        if (targetElement) {
            targetElement.textContent = "≈ 100 USD";
            const observer = new MutationObserver(() => {
                targetElement.textContent = "≈ 100 USD";
            });
            observer.observe(targetElement, { childList: true, subtree: true, characterData: true });
        }
    };

    // Sử dụng polling nếu phần tử chưa xuất hiện ngay lập tức
    const waitForElement = (selector, callback) => {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval); // Ngừng kiểm tra khi tìm thấy phần tử
                callback(element);
            }
        }, 100); // Kiểm tra mỗi 100ms
    };

    // Đợi trang tải xong
    window.addEventListener('load', () => {
        waitForElement("#btn-EstimatedBalanceV2-balanceToFiat", lockContent);
    });
})();