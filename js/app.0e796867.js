(function(){"use strict";var e={7576:function(e,t,n){var o=n(9242),r=n(3396),i=n(7139);const s={id:"app"},a={class:"container"},u=(0,r._)("svg",{fill:"#999ea3",xmlns:"http://www.w3.org/2000/svg",id:"bulb",viewBox:"0 0 50 50",width:"25px",height:"25px"},[(0,r._)("path",{d:"M 25 3 C 16.726563 3 10 9.726563 10 18 C 10 23.058594 11.929688 26.066406 13.75 28.15625 C 14.660156 29.203125 15.539063 30.046875 16.125 30.8125 C 16.710938 31.578125 17 32.195313 17 33 L 17 43 C 17 44.644531 18.355469 46 20 46 L 21.15625 46 C 21.601563 47.71875 23.148438 49 25 49 C 26.851563 49 28.398438 47.71875 28.84375 46 L 30 46 C 31.644531 46 33 44.644531 33 43 L 33 33 C 33 31.871094 33.332031 31.089844 33.90625 30.28125 C 34.480469 29.472656 35.34375 28.667969 36.25 27.6875 C 38.058594 25.722656 40 22.964844 40 18 C 40 9.726563 33.273438 3 25 3 Z M 25 5 C 32.191406 5 38 10.808594 38 18 C 38 22.46875 36.441406 24.511719 34.75 26.34375 C 33.90625 27.261719 33.019531 28.089844 32.28125 29.125 C 31.542969 30.160156 31 31.4375 31 33 L 31 38 L 19 38 L 19 33 C 19 31.652344 18.414063 30.539063 17.6875 29.59375 C 16.960938 28.648438 16.089844 27.804688 15.25 26.84375 C 13.570313 24.917969 12 22.574219 12 18 C 12 10.808594 17.808594 5 25 5 Z M 20.90625 17.96875 C 20.863281 17.976563 20.820313 17.988281 20.78125 18 C 20.40625 18.066406 20.105469 18.339844 20 18.703125 C 19.894531 19.070313 20.003906 19.460938 20.28125 19.71875 L 24 23.4375 L 24 36 L 26 36 L 26 23.4375 L 29.71875 19.71875 C 30.117188 19.320313 30.117188 18.679688 29.71875 18.28125 C 29.320313 17.882813 28.679688 17.882813 28.28125 18.28125 L 25 21.5625 L 21.71875 18.28125 C 21.511719 18.058594 21.210938 17.945313 20.90625 17.96875 Z M 19 40 L 31 40 L 31 43 C 31 43.554688 30.554688 44 30 44 L 22.1875 44 C 22.054688 43.972656 21.914063 43.972656 21.78125 44 L 20 44 C 19.445313 44 19 43.554688 19 43 Z M 23.28125 46 L 26.71875 46 C 26.375 46.597656 25.746094 47 25 47 C 24.253906 47 23.625 46.597656 23.28125 46 Z"})],-1),l=[u],c={class:"toolbar"},p=(0,r._)("span",null," | ",-1),d=(0,r._)("span",null," | ",-1),f=(0,r._)("span",null," | ",-1),h={class:"toolbarElement"},v={class:"editor"},g=["value"],m=["innerHTML"];function b(e,t,n,u,b,C){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",a,[(0,r._)("h1",null,[(0,r.Uk)("Чи-та-ем по сло-гам "),(0,r._)("span",{id:"changeTheme",onClick:t[0]||(t[0]=(...e)=>C.changeTheme&&C.changeTheme(...e)),title:"Сменить тему"},l)]),(0,r._)("div",c,[(0,r._)("span",{class:"toolbarBtn",onClick:t[1]||(t[1]=(...e)=>C.clearInput&&C.clearInput(...e)),ref:"clearBtn"},"Очистить",512),p,(0,r._)("span",{class:"toolbarBtn",onClick:t[2]||(t[2]=(...e)=>C.print&&C.print(...e)),ref:"printBtn"},"Печать",512),d,(0,r._)("span",{class:"toolbarBtn",onClick:t[3]||(t[3]=(...e)=>C.copy&&C.copy(...e)),ref:"copyBtn"},"Копировать",512),f,(0,r._)("span",h,[(0,r.Uk)("Шрифт "),(0,r.wy)((0,r._)("input",{class:"fontSizeInput",type:"number","onUpdate:modelValue":t[4]||(t[4]=t=>e.fontSize=t),size:"2",onInput:t[5]||(t[5]=(...e)=>C.changeFontSize&&C.changeFontSize(...e))},null,544),[[o.nr,e.fontSize]])])]),(0,r._)("div",v,[(0,r._)("textarea",{class:"inputTxt",value:e.inputTxt,onInput:t[6]||(t[6]=(...e)=>C.update&&C.update(...e)),autofocus:"",placeholder:"Текст"},null,40,g),(0,r._)("textarea",{class:"output",ref:"output",id:"output",innerHTML:C.output,placeholder:"Текст по слогам",readonly:"",style:(0,i.j5)({"font-size":e.fontSize+"px"})},null,12,m)])])])}var C=n(4806),L=n(3500),y={name:"App",data:()=>({inputTxt:"",fontSize:17}),computed:{output(){return(0,L.q)(this.cleanText(this.inputTxt),{separator:"-"})}},methods:{update:(0,C.debounce)((function(e){this.inputTxt=e.target.value}),100),changeFontSize:function(e){e.target.value>1?this.fontSize=e.target.value:this.fontSize=1},cleanText(e){var t=e.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return t.replace(/(«|»)/g,'"')},clearInput(){this.inputTxt="",this.$refs.clearBtn.classList.add("red"),this.fontSize=17,setTimeout((()=>{this.$refs.clearBtn.classList.remove("red")}),300)},addParagraph(e){return e.replace(/(\r\n|\n\r|\r|\n)/g,"<br>")},print(){var e=this.$refs.output.textContent;if(e){this.$refs.printBtn.classList.add("blue");var t=window.open("","newwin","toolbar=no,location=no,scrollbars=no,status=no,menubar=no");t.document.write(this.addParagraph(e)),t.document.body.setAttribute("style","font-size: "+this.fontSize+"px"),t.document.close(),t.focus(),t.print(),t.close(),setTimeout((()=>{this.$refs.printBtn.classList.remove("blue")}),100)}},copy(){var e=this.$refs.output.innerHTML;e&&(navigator.clipboard.writeText(e),this.$refs.copyBtn.innerHTML="Скопировано",this.$refs.copyBtn.classList.add("blue"),this.$refs.output.classList.add("copyAnimation"),setTimeout((()=>{this.$refs.copyBtn.innerHTML="Копировать",this.$refs.copyBtn.classList.remove("blue"),this.$refs.output.classList.remove("copyAnimation")}),1e3))},changeTheme(){document.body.classList.toggle("dark"),localStorage.theme=document.body.className||""},checkTheme(){localStorage.theme?document.body.className=localStorage.theme:document.body.className=""}},mounted(){this.checkTheme()}},w=n(89);const T=(0,w.Z)(y,[["render",b]]);var x=T,k=n(5431);(0,k.z)("/ris/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,o.ri)(x).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],u=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var c=u(n)}for(t&&t(o);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkreadinsyllables"]=self["webpackChunkreadinsyllables"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7576)}));o=n.O(o)})();
//# sourceMappingURL=app.0e796867.js.map