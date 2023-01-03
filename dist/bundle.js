(()=>{var e={50:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"/*...heading css...*/\n.Heading h1 {\n  text-align: center;\n  font-family: Fira-Sans;\n}\n\n/*...card css...*/\n.card {\n  width: 30%;\n  height: fit-content;\n  border-radius: 0.2rem;\n  margin: 0% -0.0rem 2.5rem 2rem;\n  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.20);\n  display: inline-block;\n}\n\n/*...card hover...*/\n.card:hover {\n  z-index: 1;\n  transform: scale(1.08);\n  /* border-color: #0E8692; */\n  /* box-shadow: 0rem 0.5rem 0rem; */\n  cursor: pointer;\n\n}\n\n/*...image css...*/\n.card .card-image .imagecn {\n  width: 100%;\n  height: 300px;\n  border-top-right-radius: 0.5rem;\n  border-top-left-radius: 0.5rem;\n}\n\n\n\n/*...title css...*/\n.card-title {\n  font-weight: bold;\n  font-family: Fira-Sans;\n  padding: 5px;\n}\n\n/*...description css...*/\n.card-desc {\n  font-family: Fira-Sans;\n  padding: 4px;\n  height: max-content;\n}\n\n/*...readmore and less css...*/\n.readMoreClassName,\n.readLessClassName {\n  margin-left: 70%;\n  color: #007bff;\n}\n\n/*...readmore hover css...*/\n.readMoreClassName:hover {\n  color: initial;\n}\n\n/*...readless hover css...*/\n.readLessClassName:hover {\n  color: initial;\n}\n\n/*...learnmore btn css...*/\n.morebtn {\n  background: #0E8692;\n  color: #fff;\n  font-family: Fira-Sans;\n  font-size: 1rem;\n  font-weight: bold;\n  border: 0;\n  width: 10rem;\n  padding: 0.6rem;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  border-radius: 0.4rem;\n  cursor: pointer;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform;\n}\n\n.morebtn:hover {\n  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n/*...Cancel btn css...*/\n.cancelbtn {\n  background: #fff;\n  color: #0E8692;\n  font-family: Fira-Sans;\n  font-size: 1rem;\n  font-weight: bold;\n  border-color: #007bff;\n  padding: 0.6rem;\n  margin-right: 1rem;\n  width: 10rem;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  box-shadow: 0 0 0.7rem rgba(0, 0, 0, 0.1);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform;\n}\n\n.cancelbtn:hover{\n  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n/*...loadMore News Btn CSS...*/\n.cardbutton {\n  margin-left: 40%;\n  margin-top: 5%;\n}",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},224:(e,n,t)=>{var r=t(379),a=t(50);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.id,a,""]]);r(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},379:(e,n,t)=>{"use strict";var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function i(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],a=0;a<e.length;a++){var s=e[a],c=n.base?s[0]+n.base:s[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var m=i(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(o[m].references++,o[m].updater(u)):o.push({identifier:d,updater:b(u,n),references:1}),r.push(d)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function m(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function u(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function b(e,n){var t,r,a;if(n.singleton){var o=p++;t=f||(f=c(n)),r=m.bind(null,t,o,!1),a=m.bind(null,t,o,!0)}else t=c(n),r=u.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=i(t[r]);o[a].references--}for(var c=s(e,n),l=0;l<t.length;l++){var d=i(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=c}}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var r={};(()=>{"use strict";t.r(r),t.d(r,{Card:()=>a});const e=require("react");var n=t.n(e);t(224);const a=t=>{const[r,a]=(0,e.useState)(3),o=t.details?.slice(0,r);return n().createElement("div",null,n().createElement("div",{className:"Heading"},n().createElement("h1",null," Image Component")),n().createElement("div",{className:"maindiv"},o?.map(((e,t)=>n().createElement("div",{className:"card",key:t},n().createElement("div",{className:"card-image"},n().createElement("img",{className:"imagecn",src:e.img,alt:""})),n().createElement("div",null,n().createElement("p",{className:"card-title"},e.title),n().createElement("p",{className:"card-desc"},e.description)))))),n().createElement("div",{className:"cardbutton"},n().createElement("button",{type:"button",className:"cancelbtn",onClick:function(){window.location.reload(!1)}},"Cancel"),n().createElement("button",{type:"button",className:"morebtn",onClick:()=>{a(r+r)}},"LoadMore"),n().createElement("br",null),n().createElement("br",null)))}})();var a=exports;for(var o in r)a[o]=r[o];r.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();