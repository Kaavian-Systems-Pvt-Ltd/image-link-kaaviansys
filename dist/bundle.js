(()=>{var e={50:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>s});var t=r(81),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([e.id,"/*...default css...*/\n/* *{\n  margin: 0px;\n  padding: 0px;\n} */\n/*...heading css...*/\n.Heading h1{\n   text-align: center;\n   font-family: Fira-Sans;\n}\n/*...card css...*/\n.card{\n  width: 30%;\n  /* position:static; */\n  border-radius: 0.2rem;\n  margin: 1.1rem -1.2rem 0rem 2rem;\n  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.20);\n  display: inline-block;\n\n}\n/*...card hover...*/\n.card:hover{\n  transform: scale(1.05);\n  border-color: #0E8692;\n  box-shadow: 0rem 0.5rem 0rem;\n}\n/*...image css...*/\n.card-image img{\n  width: 100%;\n  border-top-right-radius: 0.5rem;\n  border-top-left-radius: 0.5rem;\n}\n/*...title css...*/\n.card-title{\n  font-weight: bold;\n  font-family: Fira-Sans;\n  padding: 5px;\n}\n/*...description css...*/\n.card-desc{\n  font-family: Fira-Sans;\n  padding: 4px;\n}\n/*...readmore and less css...*/\n.readMoreClassName, .readLessClassName{\n  margin-left: 70%;\n  color: #007bff;\n}\n/*...readmore hover css...*/\n.readMoreClassName:hover {\n  color: initial;\n}\n/*...readless hover css...*/\n.readLessClassName:hover {\n  color: initial;\n}\n/*...learnmore btn css...*/\n.morebtn {\n  background: #0E8692;\n  color: #fff;\n  font-family: Fira-Sans;\n  font-size: 1rem;\n  font-weight: bold;\n  border: 0;\n  margin-top: 45%;\n  margin-right: 2rem;\n  width: 10rem;\n  padding: 0.6rem;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  border-radius: 0.4rem;\n  cursor: pointer;\n  box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.1);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform;\n} \n.morebtn:hover,\n.morebtn:focus,\n.morebtn:active {\n  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n} \n\n/*...Cancel btn css...*/\n .cancelbtn {\n  background: #fff;\n  color: #0E8692;\n  font-family: Fira-Sans;\n  font-size: 1rem;\n  font-weight: bold;\n  border-color: #007bff;\n  margin-right: 2rem;\n  margin-top: 45%;\n  margin-left: 15%;\n  padding: 0.6rem;\n  width: 10rem;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  border-radius: 0.5rem;\n\n  cursor: pointer;\n  box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.1);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform;\n} \n\n.cancelbtn:hover,\n.cancelbtn:focus,\n.cancelbtn:active {\n  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n  /* border-color: #007bff; */\n\n} \n/*...More News Btn CSS...*/\n.cardbutton {\n  margin-right: 30%;\n  margin-left: 25%;\n} ",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},224:(e,n,r)=>{var t=r(379),a=r(50);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);t(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},379:(e,n,r)=>{"use strict";var t,a=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),o=[];function i(e){for(var n=-1,r=0;r<o.length;r++)if(o[r].identifier===e){n=r;break}return n}function s(e,n){for(var r={},t=[],a=0;a<e.length;a++){var s=e[a],c=n.base?s[0]+n.base:s[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var m=i(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(o[m].references++,o[m].updater(u)):o.push({identifier:d,updater:b(u,n),references:1}),t.push(d)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function m(e,n,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function u(e,n,r){var t=r.css,a=r.media,o=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,p=0;function b(e,n){var r,t,a;if(n.singleton){var o=p++;r=f||(f=c(n)),t=m.bind(null,r,o,!1),a=m.bind(null,r,o,!0)}else r=c(n),t=u.bind(null,r,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var a=i(r[t]);o[a].references--}for(var c=s(e,n),l=0;l<r.length;l++){var d=i(r[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}r=c}}}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var t={};(()=>{"use strict";r.r(t),r.d(t,{Card:()=>a});const e=require("react");var n=r.n(e);r(224);const a=r=>{const[t,a]=(0,e.useState)(3),o=r.details?.slice(0,t);return n().createElement("div",null,n().createElement("div",{className:"maindiv"},o?.map(((e,r)=>n().createElement("div",{className:"card",key:r},n().createElement("div",{className:"card-image"},n().createElement("img",{src:e.img,alt:""})),n().createElement("div",null,n().createElement("p",{className:"card-title"},e.title),n().createElement("p",{className:"card-desc"},e.description)))))),n().createElement("div",{className:"cardbutton"},n().createElement("button",{type:"button",className:"cancelbtn",onClick:function(){window.location.reload(!1)}},"Cancel"),n().createElement("button",{type:"button",className:"morebtn",onClick:()=>{a(t+t)}},"LoadMore"),n().createElement("br",null),n().createElement("br",null)))}})();var a=exports;for(var o in t)a[o]=t[o];t.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();