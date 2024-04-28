// ==UserScript==
// @name         web helper
// @namespace    dc
// @version      0.0.1
// @description  网页助手
// @author       dc
// @match        *://*/*
// @run-at      document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  if(location.host.includes('csdn')){
      Object.defineProperty(window, "copyPopSwitch", {
          value: false,
          writable: false,
      });
  }
})();