!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=0,r=2;let o=0,l=0;const u=[5,4,3,3,2],s=[],c=[],f=[],i=10,a=["ship","miss","hit"];let d,m,p="comp";const g=(()=>{const e=new Set;for(let t=0;t<=500;t+=1){const t=T(),n=`${t[0]}${t[1]}`;e.add(n)}return e})(),y=e=>{const t=document.getElementById("player-board");for(let e=0;e<t.rows.length;e+=1)for(let n=0;n<t.rows[e].cells.length;n+=1){t.rows[e].cells[n].setAttribute("class",`${e}${n}`)}for(;void 0!==b(e);)return b(e)},b=e=>{let t;return void 0!==e&&(t=document.getElementsByClassName(e)[0].id),t},h=e=>{setTimeout(()=>{const t=document.getElementsByClassName(e);for(let e=0;e<=t.length;e+=1)t[e].setAttribute("class","red")},2e3)},v=e=>{setTimeout(()=>{const t=document.getElementsByClassName(e);for(let e=0;e<=t.length;e+=1)t[e].setAttribute("class","green")},2e3)},M=()=>{return(()=>{const e=g.values().next().value;return g.delete(e),e})()};function E(){for(let e=0;e<i;e+=1){s[e]=[];for(let t=0;t<i;t+=1)s[e][t]=null}!function(){let e,t,n;for(let r=0,o=u.length;r<o;r+=1)for(t=!1,n=j();!t;)e=T(),t=B(e,u[r],n)}(),function(){const e=[];for(let t=0;t<i;t+=1){c[t]=[];for(let n=0;n<i;n+=1)c[t][n]=0,s[n][t]===r&&e.push([n,t])}}(),function(e=!1){let t="";for(let e=0;e<i;e+=1){t+="<tr>";for(let n=0;n<i;n+=1){const r=s[n][e];t+='<td id="',null!==r&&(t+=a[r]),t+='">',t+="</td>"}t+="</tr>"}d.innerHTML=t,S()}(!0)}function L(){for(let e=0;e<i;e+=1){s[e]=[];for(let t=0;t<i;t+=1)s[e][t]=null}!function(){let e,t,n;for(let r=0,o=u.length;r<o;r+=1)for(t=!1,n=j();!t;)e=T(),t=B(e,u[r],n)}(),function(){const e=[];for(let t=0;t<i;t+=1){f[t]=[];for(let n=0;n<i;n+=1)f[t][n]=0,s[n][t]===r&&e.push([n,t])}}(),function(e=!1){let t="";for(let e=0;e<i;e+=1){t+="<tr>";for(let n=0;n<i;n+=1){const r=s[n][e];t+='<td id="',null!==r&&(t+=a[r]),t+='">',t+="</td>"}t+="</tr>"}m.innerHTML=t,S()}(!0)}function T(){return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}function j(){return Math.random()>=.5}function B(e,t,r){const o=e[0],l=e[1],u=r?l:o,c=u+t-1;if(function(e,t,n,r){const o=t[0],l=t[1],u=r?l:o,c=u+n-1;if(c>i-1)return!1;for(let t=u;t<=c;t+=1){if((r?s[o][t]:s[t][l])===e)return!1}return!0}(n,e,t,r)){for(let e=u;e<=c;e+=1)r?s[o][e]=n:s[e][l]=n;return!0}return!1}const O=()=>{const e=document.getElementById("winner-h1"),t=("comp"===p?p="user":"user"===p&&(p="comp"),p);"comp"===t&&(e.innerHTML="computer`s turn",function(){const e=M();"ship"===y(e)?(h(e),l+=1):v(e)}(),m.classList.remove("freeze"),d.classList.add("freeze"),console.log("comp")),"user"===t&&(e.innerHTML=" user`s turn",m.classList.add("freeze"),d.classList.remove("freeze"),console.log("user"))};function S(){return document.querySelectorAll("#board td").forEach(e=>e.addEventListener("click",e=>{e.target&&"ship"===e.target.id?(e.target.style.background="red",o+=1):e.target.style.background="blue"})),o}d=document.getElementById("board"),m=document.getElementById("player-board"),E(),L(),setInterval(O,5e3)}]);