!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const s=()=>{const t=[10];for(let e=0;e<10;e+=1){t[e]=[10];for(let i=0;i<10;i+=1)t[e][i]=0}return t},o=t=>Math.floor(Math.random()*(t+1)),n=t=>document.getElementById(t),r=t=>{const e=t.getBoundingClientRect();return{left:e.left+window.pageXOffset,right:e.right+window.pageXOffset,top:e.top+window.pageYOffset,bottom:e.bottom+window.pageYOffset}},l=n("field_user"),h=(t,e,i,s,o)=>{const n=document.createElement("div");n.className=`icon-field ${o}`,n.style.cssText=`left:${e*s}px; top:${t*s}px;`,i.field.appendChild(n)},a=t=>{const e=n("text_btm");e.innerHTML="",e.innerHTML=t},d=(t,e)=>{Math.trunc||(Math.trunc=function(t){return(t=+t)-t%1||(isFinite(t)&&0!==t?t<0?-0:0:t)});const i={};return i.x=Math.trunc((t.pageY-e.fieldX)/e.shipSide),i.y=Math.trunc((t.pageX-e.fieldY)/e.shipSide),i},c=(t,e)=>{for(let i=0,s=t.length;i<s;i+=1)if(t[i][0]===e.x&&t[i][1]===e.y){t.splice(i,1);break}},p=(t,e)=>({player:t,shipname:e.shipname,decks:e.decks,x0:e.x,y0:e.y,kx:e.kx,ky:e.ky,hits:0,matrix:[],createShip(){let t=0;const e=this.x0,i=this.y0,{kx:s}=this,{ky:o}=this,{decks:r}=this,{player:l}=this;for(;t<r;)l.matrix[e+t*s][i+t*o]=1,this.matrix.push([e+t*s,i+t*o]),t+=1;l.squadron.push(this),l===m&&this.showShip(),10===m.squadron.length&&n("play").setAttribute("data-hidden","false")},getDeck(){return this.deck},showShip(){const t=document.createElement("div"),e=1===this.kx?" vertical":"",i=this.shipname.slice(0,-1),{player:s}=this;t.setAttribute("id",this.shipname),t.className=`ship ${i}${e}`,t.style.cssText=`left:${this.y0*s.shipSide}px; top:${this.x0*s.shipSide}px;`,s.field.appendChild(t)}}),u=t=>{return t>=(()=>{const t=[];for(let e=0,{length:i}=m.squadron;e<i;e+=1)t.push(m.squadron[e].decks);return Math.max.apply(null,t)})()},f=t=>({shipSide:33,shipsData:["",[4,"fourdeck"],[3,"tripledeck"],[2,"doubledeck"],[1,"singledeck"]],field:t,fieldX:t.getBoundingClientRect().top+window.pageYOffset,fieldY:t.getBoundingClientRect().left+window.pageXOffset,fieldRight:t.getBoundingClientRect().left+window.pageXOffset+330,fieldBtm:t.getBoundingClientRect().top+window.pageYOffset+330,squadron:[],startGame:!1,randomLocationShips(){this.matrix=s();for(let t=1,{length:e}=this.shipsData;t<e;t+=1){const e=this.shipsData[t][0];for(let i=0;i<t;i+=1){const s=this.getCoordinatesDecks(e);s.decks=e,s.shipname=this.shipsData[t][1]+String(i+1),p(this,s).createShip()}}},getCoordinatesDecks(t){const e=o(1),i=0===e?1:0;let s,n;return 0===e?(s=o(9),n=o(10-t)):(s=o(10-t),n=o(9)),this.checkLocationShip(s,n,e,i,t)?{x:s,y:n,kx:e,ky:i}:this.getCoordinatesDecks(t)},checkLocationShip(t,e,i,s,o){let n,r;t+i*o===10&&1===i?n=t+i*o:t+i*o<10&&1===i?n=t+i*o+1:9===t&&0===i?n=t+1:t<9&&0===i&&(n=t+2);const l=0===e?e:e-1;if(e+s*o===10&&1===s?r=e+s*o:e+s*o<10&&1===s?r=e+s*o+1:9===e&&0===s?r=e+1:e<9&&0===s&&(r=e+2),void 0===n||void 0===r)return!1;for(let e=0===t?t:t-1;e<n;e+=1)for(let t=l;t<r;t+=1)if(1===this.matrix[e][t])return!1;return!0},cleanField(){const t=this.field,e=t.getAttribute("id"),i=document.querySelectorAll(`#${e} > div`);[].forEach.call(i,e=>{t.removeChild(e)}),this.squadron.length=0}});var m=f(n("field_user"));var x=()=>({pressed:!1,setObserver(){const t=n("field_user"),e=n("ships_collection");t.addEventListener("mousedown",this.onMouseDown.bind(this)),t.addEventListener("contextmenu",this.rotationShip.bind(this)),e.addEventListener("mousedown",this.onMouseDown.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("mouseup",this.onMouseUp.bind(this))},onMouseDown(t){if(1!==t.which||l.startGame)return;const e=t.target.closest(".ship");if(e&&(this.pressed=!0,this.draggable={elem:e,downX:t.pageX,downY:t.pageY,kx:0,ky:1},"field_user"===e.parentElement.getAttribute("id"))){const t=e.getAttribute("id");this.getDirectionShip(t);const i=getComputedStyle(e);this.draggable.left=i.left.slice(0,-2),this.draggable.top=i.top.slice(0,-2),this.cleanShip(e)}},onMouseMove(t){if(!1===this.pressed||!this.draggable.elem)return;let e;if(!this.clone){if(this.clone=this.creatClone(),!this.clone)return;e=r(this.clone),this.shiftX=this.draggable.downX-e.left,this.shiftY=this.draggable.downY-e.top,document.body.appendChild(this.clone),this.clone.style.zIndex="1000",this.decks=this.getCountDecks()}const i=t.pageX-this.shiftX,s=t.pageY-this.shiftY;this.clone.style.left=`${i}px`,this.clone.style.top=`${s}px`,e=r(this.clone);const o=e.bottom,n=e.right;if(i>=m.fieldY-14&&n<=m.fieldRight+14&&s>=m.fieldX-14&&o<=m.fieldBtm+14){e=this.getCoordsClone(this.decks),m.checkLocationShip(e.x,e.y,this.draggable.kx,this.draggable.ky,this.decks)?(this.clone.classList.remove("unsuccess"),this.clone.classList.add("success")):(this.clone.classList.remove("success"),this.clone.classList.add("unsuccess"))}else this.clone.classList.remove("success"),this.clone.classList.add("unsuccess")},onMouseUp(){if(this.pressed=!1,this.clone){if(this.clone.classList.contains("unsuccess"))this.clone.classList.remove("unsuccess"),this.clone.rollback(),void 0!==this.draggable.left&&void 0!==this.draggable.top&&(this.draggable.elem.style.cssText=`left:${this.draggable.left}px; top:${this.draggable.top}px;`);else{const t=this.getCoordsClone(this.decks);m.field.appendChild(this.clone),this.clone.style.left=`${t.left}px`,this.clone.style.top=`${t.top}px`;const e={shipname:this.clone.getAttribute("id"),x:t.x,y:t.y,kx:this.draggable.kx,ky:this.draggable.ky,decks:this.decks},i=p(m,e);i.createShip(),n(i.shipname).style.zIndex=null,n("field_user").removeChild(this.clone)}this.cleanClone()}},creatClone(){const t=this.draggable.elem,e={parent:t.parentNode,nextSibling:t.nextSibling,left:t.left||"",top:t.top||"",zIndex:t.zIndex||""};return t.rollback=function(){e.parent.insertBefore(t,e.nextSibling),t.style.left=e.left,t.style.top=e.top,t.style.zIndex=e.zIndex},t},findDroppable(t){this.clone.hidden=!0;const e=document.elementFromPoint(t.clientX,t.clientY);return this.clone.hidden=!1,e.closest(".ships")},getCountDecks(){const t=this.clone.getAttribute("id").slice(0,-1);for(let e=1,{length:i}=m.shipsData;e<i;e+=1)if(m.shipsData[e][1]===t)return m.shipsData[e][0];return m.shipsData},getCoordsClone(t){const e=this.clone.getBoundingClientRect(),i=e.left-m.fieldY,s=e.right-m.fieldY,o=e.top-m.fieldX,n=e.bottom-m.fieldX,r={};let l=r.top,h=r.left;return o<0?(l=0,n>m.fieldSide&&(l=m.fieldSide-m.shipSide)):l=o,l=Math.round(l/m.shipSide)*m.shipSide,r.x=l/m.shipSide,i<0?(h=0,s>m.fieldSide&&(h=m.fieldSide-m.shipSide*t)):h=i,h=Math.round(h/m.shipSide)*m.shipSide,r.y=h/m.shipSide,r},cleanClone(){delete this.clone,delete this.draggable},rotationShip(t){if(3!==t.which||l.startGame)return void t.preventDefault();t.preventDefault(),t.stopPropagation();const e=t.target.getAttribute("id");for(let i=0,{length:s}=m.squadron;i<s;i+=1){const s=m.squadron[i];if(s.shipname===e&&1!==s.decks){let e=0===s.kx?1:0,i=0===s.ky?1:0;this.cleanShip(t.target),m.field.removeChild(t.target);const o=m.checkLocationShip(s.x0,s.y0,e,i,s.decks);!1===o&&(e=0===e?1:0,i=0===i?1:0);const r={shipname:s.shipname,x:s.x0,y:s.y0,kx:e,ky:i,decks:s.decks},l=p(m,r);if(l.createShip(),!1===o){const t=n(l.shipname);t.classList.add("unsuccess"),setTimeout(()=>{t.classList.remove("unsuccess")},500)}}}},cleanShip(t){const e=t.getBoundingClientRect(),i=Math.round((e.top-m.fieldX)/m.shipSide),s=Math.round((e.left-m.fieldY)/m.shipSide);let o,n;for(let t=0,{length:e}=m.squadron;t<e;t+=1)if(o=m.squadron[t],o.x0===i&&o.y0===s){for(n=0;n<o.decks;)m.matrix[i+n*o.kx][s+n*o.ky]=0,n+=1;return void m.squadron.splice(t,1)}},getDirectionShip(t){let e;for(let i=0,{length:s}=m.squadron;i<s;i+=1)if(e=m.squadron[i],e.shipname===t)return this.draggable.kx=e.kx,void(this.draggable.ky=e.ky)}});(()=>{const t=n("field_comp");let e;const i=(()=>{let i,s,r,l,p;const f=n("text_btm"),x={init(){r=this;const n=o(1);i=0===n?m:e,s=i===m?e:m,e.shootMatrix=[],e.shootMatrixAI=[],e.shootMatrixAround=[],e.startPoints=[[[6,0],[2,0],[0,2],[0,6]],[[3,0],[7,0],[9,2],[9,6]]],r.resetTempShip(),r.setShootMatrix(),i===m?(t.addEventListener("click",r.shoot),t.addEventListener("contextmenu",r.setEmptyCell),a("You shoot first.")):(a("Computer shoots first."),setTimeout(()=>r.shoot(),1e3))},shoot(o){if(void 0!==o){if(1!==o.which)return!1;l=d(o,s)}else l=((t,e)=>{let i=t;e.shootMatrixAround.length>0?(i=e.shootMatrixAround.pop(),e.shootMatrixAI.length>0&&(i=e.shootMatrixAI.pop())):i=e.shootMatrix.pop();const s={x:i[0],y:i[1]};return 0!==e.shootMatrixAI.length&&c(e.shootMatrixAI,s),c(e.shootMatrix,s),s})(l,e);const n=s.field.querySelectorAll(".shaded-cell"),x=s.matrix[l.x][l.y];switch(x){case 0:((t,e,i,s,o)=>{h(t,e,i,s,"dot");let n=i.matrix[t][e];n=3,a(o===m?"You missed. Computer's turn":"Computer missed. Your turn.")})(l.x,l.y,s,s.shipSide,i),i=i===m?e:m,s=i===m?e:m,i===e?(t.removeEventListener("click",r.shoot),t.removeEventListener("contextmenu",r.setEmptyCell),0===e.shootMatrixAround.length&&r.resetTempShip(),setTimeout(()=>r.shoot(),1e3)):(t.addEventListener("click",r.shoot),t.addEventListener("contextmenu",r.setEmptyCell));break;case 1:s.matrix[l.x][l.y]=4,h(l.x,l.y,s,s.shipSide,"red-cross"),p=i===m?"You hit, shoot again.":"Computer hit. Computer shoots again.",a(p);for(let t=s.squadron.length-1;t>=0;t-=1){const o=s.squadron[t],n=o.matrix;for(let r=0,{length:h}=n;r<h;r+=1)if(n[r][0]===l.x&&n[r][1]===l.y){o.hits+=1,o.hits===o.decks&&(i===e&&(e.tempShip.x0=o.x0,e.tempShip.y0=o.y0),s.squadron.splice(t,1));break}}if((t=>0===t.squadron.length)(s)){let s=p;if(s=i===m?"You won!":"You lost",f.innerHTML=s,i===m)t.removeEventListener("click",r.shoot),t.removeEventListener("contextmenu",r.setEmptyCell);else for(let t=0,{length:i}=e.squadron;t<i;t+=1){const i=document.createElement("div"),s=1===e.squadron[t].kx?" vertical":"",o=e.squadron[t].shipname.slice(0,-1);i.className=`ship ${o}${s}`,i.style.cssText=`left:${e.squadron[t].y0*e.shipSide}px; top:${e.squadron[t].x0*e.shipSide}px;`,e.field.appendChild(i)}}else if(i===e){e.tempShip.totalHits+=1;let t=[[l.x-1,l.y-1],[l.x-1,l.y+1],[l.x+1,l.y-1],[l.x+1,l.y+1]];if(r.markEmptyCell(t),u(e.tempShip.totalHits)){if(1===e.tempShip.totalHits)t=[[e.tempShip.x0-1,e.tempShip.y0],[e.tempShip.x0+1,e.tempShip.y0],[e.tempShip.x0,e.tempShip.y0-1],[e.tempShip.x0,e.tempShip.y0+1]];else{t=[[e.tempShip.x0-e.tempShip.kx,e.tempShip.y0-e.tempShip.ky],[e.tempShip.x0+e.tempShip.kx*e.tempShip.totalHits,e.tempShip.y0+e.tempShip.ky*e.tempShip.totalHits]]}r.markEmptyCell(t),r.resetTempShip()}else r.setShootMatrixAround();setTimeout(()=>r.shoot(),1e3)}break;case 2:[].forEach.call(n,t=>{const i=t.style.top.slice(0,-2)/e.shipSide,s=t.style.left.slice(0,-2)/e.shipSide;l.x===i&&l.y===s&&(t.classList.add("shaded-cell_red"),setTimeout(()=>{t.classList.remove("shaded-cell_red")},500))});break;case 3:case 4:p="Can't hit same spot more than once",a(p)}return x},setEmptyCell(t){if(3!==t.which)return!1;t.preventDefault(),l=d(t,e);const i=((t,e,i)=>{const s=t.field.querySelectorAll(".icon-field");let o=!0;return[].forEach.call(s,t=>{const s=t.style.top.slice(0,-2)/i.shipSide,n=t.style.left.slice(0,-2)/i.shipSide;if(e.x===s&&e.y===n){if(t.classList.contains("shaded-cell")){t.parentNode.removeChild(t);let s=i.matrix[e.x][e.y];return s=0,s}o=!1}return o}),o})(s,l,e);return i&&(h(l.x,l.y,s,s.shipSide,"shaded-cell"),e.matrix[l.x][l.y]=2),i},setShootMatrix(){for(let t=0;t<10;t+=1)for(let i=0;i<10;i+=1)e.shootMatrix.push([t,i]);for(let t=0,{length:i}=e.startPoints;t<i;t+=1){const i=e.startPoints[t];for(let s=0,o=i.length;s<o;s+=1){let o=i[s][0],n=i[s][1];switch(t){case 0:for(;o<=9&&n<=9;)e.shootMatrixAI.push([o,n]),o=o<=9?o:9,n=n<=9?n:9,o+=1,n+=1;break;case 1:for(;o>=0&&o<=9&&n<=9;)e.shootMatrixAI.push([o,n]),o>=0&&o<=9?o<0&&(o=0):o=9,n=n<=9?n:9,o-=1,n+=1}}}function t(){return Math.random()-.5}e.shootMatrix.sort(t),e.shootMatrixAI.sort(t)},setShootMatrixAround(){0===e.tempShip.kx&&0===e.tempShip.ky&&(0===Object.keys(e.tempShip.firstHit).length?e.tempShip.firstHit=l:(e.tempShip.nextHit=l,e.tempShip.kx=1===Math.abs(e.tempShip.firstHit.x-e.tempShip.nextHit.x)?1:0,e.tempShip.ky=1===Math.abs(e.tempShip.firstHit.y-e.tempShip.nextHit.y)?1:0)),l.x>0&&0===e.tempShip.ky&&e.shootMatrixAround.push([l.x-1,l.y]),l.x<9&&0===e.tempShip.ky&&e.shootMatrixAround.push([l.x+1,l.y]),l.y>0&&0===e.tempShip.kx&&e.shootMatrixAround.push([l.x,l.y-1]),l.y<9&&0===e.tempShip.kx&&e.shootMatrixAround.push([l.x,l.y+1]);for(let t=e.shootMatrixAround.length-1;t>=0;t-=1){const i=e.shootMatrixAround[t][0],s=e.shootMatrixAround[t][1];0!==m.matrix[i][s]&&1!==m.matrix[i][s]&&(e.shootMatrixAround.splice(t,1),c(e.shootMatrix,l))}0===e.shootMatrixAround.length&&r.resetTempShip()},resetTempShip(){e.shootMatrixAround=[],e.tempShip={totalHits:0,firstHit:{},nextHit:{},kx:0,ky:0}},markEmptyCell(t){let i;for(let o=0,n=t.length;o<n;o+=1)i={x:t[o][0],y:t[o][1]},i.x<0||i.x>9||i.y<0||i.y>9||0===m.matrix[i.x][i.y]&&(h(l.x,l.y,s,s.shipSide,"shaded-cell"),m.matrix[i.x][i.y]=2,c(e.shootMatrix,i),0!==e.shootMatrixAround.length&&c(e.shootMatrixAround,i),0!==e.shootMatrixAI.length&&c(e.shootMatrixAI,i),c(e.shootMatrix,i))},getComp:()=>e};return{battle:x,init:x.init}})();n("type_placement").addEventListener("click",t=>{const e=t.target;if("SPAN"!==e.tagName)return;const i=n("ships_collection");n("play").setAttribute("data-hidden",!0),m.cleanField(),{random(){i.setAttribute("data-hidden",!0),m.randomLocationShips()},manually(){if(m.matrix=s(),"true"===i.getAttribute("data-hidden")){i.setAttribute("data-hidden",!1),x().setObserver()}else i.setAttribute("data-hidden",!0)}}[e.getAttribute("data-target")]()}),n("play").addEventListener("click",()=>{n("instruction").setAttribute("data-hidden",!0),document.querySelector(".field-comp").setAttribute("data-hidden",!1),e=f(t),e.randomLocationShips(),n("play").setAttribute("data-hidden",!0),n("text_top").innerHTML="Let's fight!",l.startGame=!0,i.battle.init()})})()}]);