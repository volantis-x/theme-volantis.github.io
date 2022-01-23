document.addEventListener("DOMContentLoaded",(function(){volantis.requestAnimationFrame((()=>{VolantisApp.init(),VolantisApp.subscribe(),VolantisFancyBox.init(),highlightKeyWords.startFromURL(),locationHash(),volantis.pjax.push((()=>{VolantisApp.pjaxReload(),VolantisFancyBox.init(),sessionStorage.setItem("domTitle",document.title),highlightKeyWords.startFromURL()}),"app.js"),volantis.pjax.send((()=>{volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()}),"app.js")}))}));const locationHash=()=>{if(window.location.hash){let e=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-"),t=document.getElementById(e);t&&setTimeout((()=>{window.location.hash.startsWith("#fn")?volantis.scroll.to(t,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}):volantis.scroll.to(t,{addTop:5,behavior:"instant"})}),1e3)}};Object.freeze(locationHash);const VolantisApp=(()=>{const e={};let t=80;return e.init=()=>{volantis.dom.header&&(t=volantis.dom.header.clientHeight+16),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(e.setGlobalHeaderMenuEvent(),e.setHeader(),e.setHeaderSearch())},volantis.scroll.push(e.scrollEventCallBack,"scrollEventCallBack")},e.event=()=>{if(volantis.dom.$(document.getElementById("scroll-down")).on("click",(function(){e.scrolltoElement(volantis.dom.bodyAnchor)})),document.getElementById("last-update-show")&&volantis.THEMECONFIG.sidebar.for_page.includes("webinfo")||volantis.THEMECONFIG.sidebar.for_post.includes("webinfo")){const t=volantis.THEMECONFIG.sidebar.widget_library.webinfo.type.lastupd;t.enable&&t.friendlyShow&&(document.getElementById("last-update-show").innerHTML=e.utilTimeAgo(volantis.LASTUPDATE))}volantis.THEMECONFIG.plugins.message.enable&&volantis.THEMECONFIG.plugins.message.copyright.enable&&(document.body.oncopy=function(){VolantisApp.message(volantis.THEMECONFIG.plugins.message.copyright.title,volantis.THEMECONFIG.plugins.message.copyright.message,{icon:volantis.THEMECONFIG.plugins.message.copyright.icon})})},e.restData=()=>{t=volantis.dom.header?volantis.dom.header.clientHeight+16:80},e.setIsMobile=()=>{document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},e.scrolltoElement=(e,o=t)=>{volantis.scroll.to(e,{top:e.offsetTop-o})},e.scrollEventCallBack=()=>{const e=volantis.dom.bodyAnchor.offsetTop-t,o=volantis.scroll.getScrollTop();volantis.dom.topBtn&&(o>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),volantis.scroll.del>0?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl")),volantis.dom.header&&(o-e>-1?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")),pdata.ispage&&volantis.dom.wrapper&&(volantis.scroll.del>0&&o>100?volantis.dom.wrapper.addClass("sub"):volantis.scroll.del<0&&volantis.dom.wrapper.removeClass("sub")),volantis.isMobile&&(pdata.ispage&&volantis.dom.tocTarget&&volantis.dom.toc&&(volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")),volantis.dom.mPhoneList&&volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()})))},e.setScrollAnchor=()=>{volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click((t=>{t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.dom.bodyAnchor),t.stopImmediatePropagation()}))},e.setHeader=()=>{pdata.ispage&&(volantis.dom.wrapper.find(".nav-sub .title").html(pdata.postTitle),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click((t=>{t.preventDefault(),t.stopPropagation(),e.scrolltoElement(volantis.dom.commentTarget),t.stopImmediatePropagation()})):volantis.dom.comment.style.display="none",volantis.isMobile&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click((e=>{e.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")})),volantis.dom.$(document).click((function(e){e.stopPropagation(),volantis.dom.tocTarget&&volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")}))):volantis.dom.toc.style.display="none"))},e.setHeaderMenuSelection=()=>{volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach((e=>{let t=volantis.dom.$(e).find("li a.active");t&&t.removeClass("active");let o=volantis.dom.$(e).find("div a.active");o&&o.removeClass("active")}));var e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var t=e.match(/page\d{0,}$/g);t&&(t=t[0],e=e.split(t)[0]);var o=e.match(/index.html/);o&&(o=o[0],e=e.split(o)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach((t=>{let o=t.querySelector("[active-action=action-"+e+"]");o&&volantis.dom.$(o).addClass("active")}))},e.setGlobalHeaderMenuEvent=()=>{volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach((function(e){e.querySelector(".list-v")&&volantis.dom.$(e).click((function(e){e.stopPropagation(),e.currentTarget.parentElement.childNodes.forEach((function(e){"[object HTMLLIElement]"==Object.prototype.toString.call(e)&&e.childNodes.forEach((function(e){"[object HTMLUListElement]"==Object.prototype.toString.call(e)&&volantis.dom.$(e).hide()}))}));let t=e.currentTarget.children;for(let e=0;e<t.length;e++){const o=t[e];"menu"===volantis.dom.$(o).title?volantis.dom.$(o).display="flex":volantis.dom.$(o).show()}}),0)})):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach((function(e){volantis.dom.$(e.parentElement).click((function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&document.querySelectorAll("#wrapper .m-pc .list-v").forEach((function(e){volantis.dom.$(e).hide()}))}),0)})),e.setPageHeaderMenuEvent()},e.setPageHeaderMenuEvent=()=>{volantis.isMobile&&volantis.dom.$(document).click((function(e){volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()}))}))},e.setHeaderSearch=()=>{volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click((function(e){e.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")}),!1),volantis.dom.$(document).click((function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")}),!1),volantis.dom.search.click((function(e){e.stopPropagation()}),!1))},e.setTabs=()=>{let e=document.querySelectorAll("#l_main .tabs .nav-tabs");e&&e.forEach((function(e){e.querySelectorAll("a").forEach((function(e){volantis.dom.$(e).on("click",(e=>{e.preventDefault(),e.stopPropagation();const t=volantis.dom.$(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find(e.target.className).addClass("active"),!1}))}))}))},e.footnotes=()=>{let e=document.querySelectorAll("#l_main .footnote-backref, #l_main .footnote-ref > a");e.forEach((function(t,o){e[o].click=()=>{},volantis.dom.$(t).on("click",(e=>{e.stopPropagation(),e.preventDefault();let t=decodeURI(e.target.hash.split("#")[1]).replace(/\ /g,"-"),o=document.getElementById(t);o&&volantis.scroll.to(o,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"})}))}))},e.utilCopyCode=t=>{document.querySelectorAll(t).forEach((t=>{t.insertAdjacentHTML("beforebegin",'<button class="btn-copy" data-clipboard-snippet=""><i class="fas fa-copy"></i><span>COPY</span></button>');const o=t.previousSibling;o.onclick=n=>{n.stopPropagation();const s=o.querySelector("i"),a=o.querySelector("span");t.focus();const i=new Range;i.selectNodeContents(t),document.getSelection().removeAllRanges(),document.getSelection().addRange(i);const l=document.getSelection().toString();e.utilWriteClipText(l).then((()=>{e.messageCopyright(),o.classList.add("copied"),s.classList.remove("fa-copy"),s.classList.add("fa-check-circle"),a.innerText="COPIED",setTimeout((()=>{s.classList.remove("fa-check-circle"),s.classList.add("fa-copy"),a.innerText="COPY"}),2e3)})).catch((e=>{VolantisApp.message("系统提示",e,{icon:"fa fa-exclamation-circle red"}),o.classList.add("copied-failed"),s.classList.remove("fa-copy"),s.classList.add("fa-exclamation-circle"),a.innerText="COPY FAILED",setTimeout((()=>{s.classList.remove("fa-exclamation-circle"),s.classList.add("fa-copy"),a.innerText="COPY"}))}))}}))},e.utilWriteClipText=e=>{try{return navigator.clipboard.writeText(e).then((()=>Promise.resolve())).catch((e=>Promise.reject(e||"复制文本失败!")))}catch(t){const o=document.createElement("input");o.setAttribute("readonly","readonly"),document.body.appendChild(o),o.setAttribute("value",e),o.select();try{let e=document.execCommand("copy");return document.body.removeChild(o),e&&"unsuccessful"!==e?Promise.resolve():Promise.reject("复制文本失败!")}catch(e){return document.body.removeChild(o),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}},e.utilTimeAgo=e=>{const t=6e4,o=36e5,n=24*o,s=(new Date).getTime()-e,a=s/t,i=s/o,l=s/n,r=s/6048e5,c=s/2592e6;if(s<0)result="";else if(c>=1&&c<7)result=" "+parseInt(c)+" 月前";else if(r>=1&&r<4)result=" "+parseInt(r)+" 周前";else if(l>=1&&l<7)result=" "+parseInt(l)+" 天前";else if(i>=1&&i<24)result=" "+parseInt(i)+" 小时前";else if(a>=1&&a<60)result=" "+parseInt(a)+" 分钟前";else if(s>=0&&s<=t)result="刚刚";else{const t=new Date;t.setTime(e);const o=t.getFullYear(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,s=t.getDate()<10?"0"+t.getDate():t.getDate();t.getHours()<10?t.getHours():t.getHours(),t.getMinutes()<10?t.getMinutes():t.getMinutes(),t.getSeconds()<10?t.getSeconds():t.getSeconds();result=o+"-"+n+"-"+s}return result},e.message=(e,t,o={},n=null)=>{function s(e,t,o,n){const{icon:s,time:a,position:i,transitionIn:l,transitionOut:r,messageColor:c,titleColor:d,backgroundColor:m,zindex:u,displayMode:g}=o;iziToast.show({layout:"2",icon:"Fontawesome",closeOnEscape:"true",displayMode:g||"replace",transitionIn:l||volantis.THEMECONFIG.plugins.message.transitionIn,transitionOut:r||volantis.THEMECONFIG.plugins.message.transitionOut,messageColor:c||volantis.THEMECONFIG.plugins.message.messageColor,titleColor:d||volantis.THEMECONFIG.plugins.message.titleColor,backgroundColor:m||volantis.THEMECONFIG.plugins.message.backgroundColor,zindex:u||volantis.THEMECONFIG.plugins.message.zindex,icon:s||volantis.THEMECONFIG.plugins.message.icon.default,timeout:a||volantis.THEMECONFIG.plugins.message.time.default,position:i||volantis.THEMECONFIG.plugins.message.position,title:e,message:t,onClosed:()=>{n&&n()}})}"undefined"==typeof iziToast?(volantis.css(volantis.THEMECONFIG.cdn.map.css.message),volantis.js(volantis.THEMECONFIG.cdn.map.js.message,(()=>{s(e,t,o,n)}))):s(e,t,o,n)},e.question=(e,t,o={},n=null,s=null,a=null)=>{function i(e,t,o,n,s,a){const{icon:i,time:l,position:r,transitionIn:c,transitionOut:d,messageColor:m,titleColor:u,backgroundColor:g,zindex:p}=o;iziToast.question({id:"question",icon:"Fontawesome",close:!1,overlay:!0,displayMode:"once",position:"center",messageColor:m||volantis.THEMECONFIG.plugins.message.messageColor,titleColor:u||volantis.THEMECONFIG.plugins.message.titleColor,backgroundColor:g||volantis.THEMECONFIG.plugins.message.backgroundColor,zindex:p||volantis.THEMECONFIG.plugins.message.zindex,icon:i||volantis.THEMECONFIG.plugins.message.icon.quection,timeout:l||volantis.THEMECONFIG.plugins.message.time.quection,title:e,message:t,buttons:[["<button><b>是</b></button>",(e,t)=>{e.hide({transitionOut:d||"fadeOut"},t,"button"),n&&n(e,t)}],["<button><b>否</b></button>",(e,t)=>{e.hide({transitionOut:d||"fadeOut"},t,"button"),s&&s(e,t)}]],onClosed:(e,t,o)=>{a&&a(e,t,o)}})}"undefined"==typeof iziToast?(volantis.css(volantis.THEMECONFIG.cdn.map.css.message),volantis.js(volantis.THEMECONFIG.cdn.map.js.message,(()=>{i(e,t,o,n,s,a)}))):i(e,t,o,n,s,a)},e.hideMessage=(e=null)=>{const t=document.querySelector(".iziToast");function o(e){iziToast.hide({},t),e&&e()}t?"undefined"==typeof iziToast?(volantis.css(volantis.THEMECONFIG.cdn.map.css.message),volantis.js(volantis.THEMECONFIG.cdn.map.js.message,(()=>{o(e)}))):o(e):e&&e()},e.messageCopyright=()=>{volantis.THEMECONFIG.plugins.message.enable&&volantis.THEMECONFIG.plugins.message.copyright.enable&&VolantisApp.message(volantis.THEMECONFIG.plugins.message.copyright.title,volantis.THEMECONFIG.plugins.message.copyright.message,{icon:volantis.THEMECONFIG.plugins.message.copyright.icon})},{init:()=>{e.init(),e.event()},subscribe:()=>{e.setIsMobile(),e.setHeader(),e.setHeaderMenuSelection(),e.setGlobalHeaderMenuEvent(),e.setHeaderSearch(),e.setScrollAnchor(),e.setTabs(),e.footnotes()},pjaxReload:()=>{e.event(),e.restData(),e.setHeader(),e.setHeaderMenuSelection(),e.setPageHeaderMenuEvent(),e.setScrollAnchor(),e.setTabs(),e.footnotes(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach((function(e){e.removeAttribute("style")})),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style")},utilCopyCode:e.utilCopyCode,utilWriteClipText:e.utilWriteClipText,utilTimeAgo:e.utilTimeAgo,message:e.message,question:e.question,hideMessage:e.hideMessage,messageCopyright:e.messageCopyright}})();Object.freeze(VolantisApp);const VolantisFancyBox=(()=>{const e={loadFancyBox:e=>{volantis.css("https://unpkg.com/@fancyapps/ui@4.0.12/dist/fancybox.css"),volantis.js("https://unpkg.com/@fancyapps/ui@4.0.12/dist/fancybox.umd.js").then((()=>{e&&e()}))},init:(t=!0,o=e.groupBind)=>{!document.querySelector(".md .gallery img, .fancybox")&&t||("undefined"==typeof Fancybox?e.loadFancyBox(o):o())},elementHandling:(e,t)=>{document.querySelectorAll(e).forEach((e=>{if(e.hasAttribute("fancybox"))return;e.setAttribute("fancybox","");const o=document.createElement("a");o.setAttribute("href",e.src),o.setAttribute("data-caption",e.alt),o.setAttribute("data-fancybox",t),o.classList.add("fancybox"),o.append(e.cloneNode()),e.replaceWith(o)}))},bind:t=>{e.init(!1,(()=>{Fancybox.bind(t,{groupAll:!0,Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1},caption:function(e,t,o){return o.$trigger.alt||null}})}))},groupBind:(e=null)=>{const t=new Set;document.querySelectorAll(".gallery").forEach((e=>{e.querySelector("img")&&t.add(e.getAttribute("data-group")||"default")})),e&&t.add(e);for(const e of t)Fancybox.unbind('[data-fancybox="'+e+'"]'),Fancybox.bind('[data-fancybox="'+e+'"]',{Hash:!1,hideScrollbar:!1,Thumbs:{autoStart:!1}})}};return{init:e.init,bind:e.bind,groupBind:(t,o="default")=>{try{e.elementHandling(t,o),e.init(!1,(()=>{e.groupBind(o)}))}catch(e){console.error(e)}}}})();Object.freeze(VolantisFancyBox);const highlightKeyWords=(()=>{let e={markNum:0,markNextId:-1,startFromURL:()=>{const t=decodeURI(new URL(location.href).searchParams.get("keyword")),o=t?t.split(" "):[],n=document.querySelector("#l_main");1==o.length&&"null"==o[0]||(e.start(o,n),e.scrollToFirstHighlightKeywordMark())},scrollToFirstHighlightKeywordMark:()=>{e.scrollToNextHighlightKeywordMark("0")||volantis.requestAnimationFrame(e.scrollToFirstHighlightKeywordMark)},scrollToNextHighlightKeywordMark:t=>{let o=t||(e.markNextId+1)%e.markNum;e.markNextId=parseInt(o);let n=document.getElementById("keyword-mark-"+e.markNextId);return n||(e.markNextId=(e.markNextId+1)%e.markNum,n=document.getElementById("keyword-mark-"+e.markNextId)),n&&volantis.scroll.to(n,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),n},scrollToPrevHighlightKeywordMark:t=>{let o=t||(e.markNextId-1+e.markNum)%e.markNum;e.markNextId=parseInt(o);let n=document.getElementById("keyword-mark-"+e.markNextId);return n||(e.markNextId=(e.markNextId-1+e.markNum)%e.markNum,n=document.getElementById("keyword-mark-"+e.markNextId)),n&&volantis.scroll.to(n,{addTop:-volantis.dom.header.offsetHeight-5,behavior:"instant"}),n},start:(t,o)=>{if(e.markNum=0,!t.length||!o||1==t.length&&"null"==t[0])return;console.log(t);const n=document.createTreeWalker(o,NodeFilter.SHOW_TEXT,null),s=[];for(;n.nextNode();)n.currentNode.parentNode.matches("button, select, textarea")||s.push(n.currentNode);s.forEach((o=>{const[n]=e.getIndexByWord(t,o.nodeValue);if(!n.length)return;const s=e.mergeIntoSlice(0,o.nodeValue.length,n);e.highlightText(o,s,"keyword"),e.highlightStyle()}))},getIndexByWord:(e,t,o=!1)=>{const n=[],s=new Set;return e.forEach((e=>{const a=document.createElement("div");a.innerText=e;const i=(e=a.innerHTML).length;if(0===i)return;let l=0,r=-1;for(o||(t=t.toLowerCase(),e=e.toLowerCase());(r=t.indexOf(e,l))>-1;)n.push({position:r,word:e}),s.add(e),l=r+i})),n.sort(((e,t)=>e.position!==t.position?e.position-t.position:t.word.length-e.word.length)),[n,s]},mergeIntoSlice:(e,t,o)=>{let n=o[0],{position:s,word:a}=n;const i=[],l=new Set;for(;s+a.length<=t&&0!==o.length;){l.add(a),i.push({position:s,length:a.length});const e=s+a.length;for(o.shift();0!==o.length&&(n=o[0],s=n.position,a=n.word,e>s);)o.shift()}return{hits:i,start:e,end:t,count:l.size}},highlightText:(t,o,n)=>{const s=t.nodeValue;let a=o.start;const i=[];for(const{position:t,length:l}of o.hits){const o=document.createTextNode(s.substring(a,t));a=t+l;let r=document.createElement("mark");r.className=n,r=e.highlightStyle(r),r.appendChild(document.createTextNode(s.substr(t,l))),i.push(o,r)}t.nodeValue=s.substring(a,o.end),i.forEach((e=>{t.parentNode.insertBefore(e,t)}))},highlightStyle:t=>{if(t)return t.id="keyword-mark-"+e.markNum,e.markNum++,t.style.background="transparent",t.style["border-bottom"]="1px dashed #ff2a2a",t.style.color="#ff2a2a",t.style["font-weight"]="bold",t},cleanHighlightStyle:()=>{document.querySelectorAll(".keyword").forEach((e=>{e.style.background="transparent",e.style["border-bottom"]=null,e.style.color=null,e.style["font-weight"]=null}))}};return{start:(t,o)=>{e.start(t,o)},startFromURL:()=>{e.startFromURL()},scrollToNextHighlightKeywordMark:t=>{e.scrollToNextHighlightKeywordMark(t)},scrollToPrevHighlightKeywordMark:t=>{e.scrollToPrevHighlightKeywordMark(t)},cleanHighlightStyle:()=>{e.cleanHighlightStyle()}}})();Object.freeze(highlightKeyWords);const DOMController={visible:(e,t=!0)=>{e&&(e.style.display=!0===t?"block":"none")},remove:e=>{document.querySelectorAll(e).forEach((e=>{e.remove()}))},setAttribute:(e,t,o)=>{document.querySelectorAll(e).forEach((e=>{e.setAttribute(t,o)}))},setStyle:(e,t,o)=>{document.querySelectorAll(e).forEach((e=>{e.style[t]=o}))},fadeIn:e=>{if(e)return e.style.visibility="visible",e.style.opacity=1,e.style.display="block",e.style.transition="all 0.5s linear",e},fadeOut:e=>{if(e)return e.style.visibility="hidden",e.style.opacity=0,e.style.display="none",e.style.transition="all 0.5s linear",e},fadeToggle:e=>{if(e)return e="hidden"==e.style.visibility?fn.fadeIn(e):fn.fadeOut(e)},hasClass:(e,t)=>{if(e)return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},addClass:(e,t)=>{if(e)return e.classList.add(t),e},removeClass:(e,t)=>{if(e)return e.classList.remove(t),e},toggleClass:(e,t)=>{if(e)return fn.hasClass(e,t)?fn.removeClass(e,t):fn.addClass(e,t),e}};Object.freeze(DOMController);