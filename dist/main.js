!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){const n=0,r=2;let o=0;const u=[5,4,3,3,2],l=[],f=[],i=10,c=["ship","miss","hit"];let d,a;function s(){const t=[];for(let e=0;e<i;e+=1){f[e]=[];for(let n=0;n<i;n+=1)f[e][n]=0,l[n][e]===r&&t.push([n,e])}}function p(t,e,r){const o=t[0],u=t[1],f=r?u:o,c=f+e-1;if(function(t,e,n,r){const o=e[0],u=e[1],f=r?u:o,c=f+n-1;if(c>i-1)return!1;for(let e=f;e<=c;e+=1){if((r?l[o][e]:l[e][u])===t)return!1}return!0}(n,t,e,r)){for(let t=f;t<=c;t+=1)r?l[o][t]=n:l[t][u]=n;return!0}return!1}function m(){let t,e,n;for(let r=0,o=u.length;r<o;r+=1)for(e=!1,n=Math.random()>=.5;!e;)t=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],e=p(t,u[r],n)}function b(t){let e="";for(let t=0;t<i;t+=1){e+="<tr>";for(let n=0;n<i;n+=1){const r=l[n][t];e+='<td id="',null!==r&&(e+=c[r]),e+='">',e+="</td>"}e+="</tr>"}d.innerHTML=e,a.innerHTML=e}d=document.getElementById("board"),a=document.getElementById("player-board"),function(){for(let t=0;t<i;t+=1){l[t]=[];for(let e=0;e<i;e+=1)l[t][e]=null}m(),s(),b(!0)}(),function(){for(let t=0;t<i;t+=1){l[t]=[];for(let e=0;e<i;e+=1)l[t][e]=null}m(),s(),b(!0)}(),document.getElementById("board").addEventListener("click",t=>{if(t.target&&"ship"===t.target.id?(t.target.style.background="red",o+=1):t.target.style.background="blue",17===o){const t=document.getElementById("winner"),e=document.createElement("h1");e.innerHTML="You win!",t.appendChild(e)}})}]);