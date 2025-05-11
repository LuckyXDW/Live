// ==UserScript==
// @name         SESESHIPIN
// @namespace    http://tampermonkey.net/
// @version      2023-12-11
// @description  try to take over the world!
// @author       You
// @match        *://files.honghufly.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.iconad').remove();
    $('.float-app').remove();
    let bannerMt3 = document.getElementsByClassName("banner mt-3");
    for (let i = 0; i < bannerMt3.length; i++) {
        if (bannerMt3[i] != null)
            bannerMt3[i].parentNode.removeChild(bannerMt3[i]);
    }


    let rowListMt2 = document.getElementsByClassName("row lists mt-2");
    for (let i = 0; i < rowListMt2.length; i++) {
        if (rowListMt2[i] != null)
            rowListMt2[i].parentNode.removeChild(rowListMt2[i]);
    }
    
})();
