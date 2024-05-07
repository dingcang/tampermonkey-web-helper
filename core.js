// ==UserScript==
// @name         web helper
// @namespace    https://github.com/dingcang/tampermonkey-web-helper
// @version      0.0.2
// @description  网页助手
// @author       dc
// @match        *://*/*
// @run-at      document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  if (location.host.includes("csdn")) {
    Object.defineProperty(window, "copyPopSwitch", {
      value: false,
      writable: false,
    });
  }

  if (location.host.includes("9ku")) {
    Object.defineProperty(window, "close", {
      value: () => {
        debugger;
      },
      writable: false,
    });
  }
})();
