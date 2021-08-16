document.addEventListener("DOMContentLoaded",(function(){VolantisApp.init(),VolantisApp.subscribe(),volantisFancyBox.loadFancyBox(),volantis.pjax.push((()=>{VolantisApp.pjaxReload(),sessionStorage.setItem("domTitle",document.title)}),"app.js"),volantis.pjax.send((()=>{volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()}),"app.js"),volantis.pjax.push(volantisFancyBox.pjaxReload),volantis.pjax.send((()=>{"undefined"!=typeof $&&void 0!==$.fancybox&&$.fancybox.close()}),"fancybox"),locationHas()}));const locationHas=()=>{if(window.location.hash){let e=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-"),o=document.getElementById(e);o&&setTimeout((()=>{window.location.hash.startsWith("#fn")?window.scrollTo({top:o.offsetTop+volantis.dom.bodyAnchor.offsetTop-volantis.dom.header.offsetHeight,behavior:"smooth"}):window.scrollTo({top:o.offsetTop+volantis.dom.bodyAnchor.offsetTop+5,behavior:"smooth"})}),1e3)}},Debounce=(e,o)=>{const t=o||50;let n;return function(){const o=arguments;n&&clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(this,o)}),t)}},VolantisApp=(()=>{const e={};let o=80;return e.init=()=>{volantis.dom.header&&(o=volantis.dom.header.clientHeight+16),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(e.setGlobalHeaderMenuEvent(),e.setHeader(),e.setHeaderSearch())}},e.event=()=>{volantis.dom.$(document.getElementById("scroll-down")).on("click",(function(){e.scrolltoElement(volantis.dom.bodyAnchor)}))},e.restData=()=>{o=volantis.dom.header?volantis.dom.header.clientHeight+16:80},e.setIsMobile=()=>{document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},e.scrolltoElement=(e,t=o)=>{window.scrollTo({top:e.offsetTop-t,behavior:"smooth"})},e.getScrollTop=()=>{let e;return window.pageYOffset?e=window.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},e.setScrollAnchor=()=>{volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click((o=>{o.preventDefault(),o.stopPropagation(),e.scrolltoElement(volantis.dom.bodyAnchor),o.stopImmediatePropagation()}));let t=document.body.scrollTop;volantis.dom.$(document).scroll(Debounce((()=>{const n=volantis.dom.bodyAnchor.offsetTop-o,a=e.getScrollTop(),l=a-t;t=a,a>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),l>0?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl"),a-n>-1?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")})))},e.setHeader=()=>{if(!pdata.ispage)return;volantis.dom.wrapper.find(".nav-sub .title").html(pdata.postTitle);let o=document.body.scrollTop;volantis.dom.$(document).scroll(Debounce((()=>{const t=e.getScrollTop(),n=t-o;n>=50&&t>100?(o=t,volantis.dom.wrapper.addClass("sub")):n<=-50&&(o=t,volantis.dom.wrapper.removeClass("sub"))}))),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click((o=>{o.preventDefault(),o.stopPropagation(),e.scrolltoElement(volantis.dom.commentTarget),o.stopImmediatePropagation()})):volantis.dom.comment.remove(),volantis.isMobile&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click((e=>{e.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")})),volantis.dom.$(document).click((function(e){e.stopPropagation(),volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")})),volantis.dom.$(document).scroll(Debounce((()=>{volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")}),100))):volantis.dom.toc.remove())},e.setHeaderMenuSelection=()=>{volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach((e=>{let o=volantis.dom.$(e).find("li a.active");o&&o.removeClass("active");let t=volantis.dom.$(e).find("div a.active");t&&t.removeClass("active")}));var e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var o=e.match(/page\d{0,}$/g);o&&(o=o[0],e=e.split(o)[0]);var t=e.match(/index.html/);t&&(t=t[0],e=e.split(t)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach((o=>{if(!/^\d/.test(e)){let t=o.querySelector("#"+e);t&&volantis.dom.$(t).addClass("active")}}))},e.setGlobalHeaderMenuEvent=()=>{volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach((function(e){e.querySelector(".list-v")&&volantis.dom.$(e).click((function(e){e.stopPropagation(),e.currentTarget.parentElement.childNodes.forEach((function(e){"[object HTMLLIElement]"==Object.prototype.toString.call(e)&&e.childNodes.forEach((function(e){"[object HTMLUListElement]"==Object.prototype.toString.call(e)&&volantis.dom.$(e).hide()}))}));let o=e.currentTarget.children;for(let e=0;e<o.length;e++){const t=o[e];volantis.dom.$(t).show()}}),0)})):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach((function(e){volantis.dom.$(e.parentElement).click((function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&document.querySelectorAll("#wrapper .m-pc .list-v").forEach((function(e){volantis.dom.$(e).hide()}))}),0)})),e.setPageHeaderMenuEvent()},e.setPageHeaderMenuEvent=()=>{volantis.isMobile&&(volantis.dom.$(document).click((function(e){volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()}))})),volantis.dom.$(document).scroll(Debounce((()=>{volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()}))}))))},e.setHeaderSearch=()=>{volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click((function(e){e.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")})),volantis.dom.$(document).click((function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")})),volantis.dom.search.click((function(e){e.stopPropagation()})))},e.setTabs=()=>{let e=document.querySelectorAll("#l_main .tabs .nav-tabs");e&&e.forEach((function(e){e.querySelectorAll("a").forEach((function(e){volantis.dom.$(e).on("click",(e=>{e.preventDefault(),e.stopPropagation();const o=volantis.dom.$(e.target.parentElement.parentElement.parentElement);return o.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(e.target.parentElement).addClass("active"),o.find(".tab-content .active").removeClass("active"),o.find(e.target.className).addClass("active"),!1}))}))}))},e.footnotes=()=>{let e=document.querySelectorAll(".footnote-backref, .footnote-ref > a");e.forEach((function(o,t){e[t].click=()=>{},volantis.dom.$(o).on("click",(e=>{e.stopPropagation(),e.preventDefault();let o=decodeURI(e.target.hash.split("#")[1]).replace(/\ /g,"-"),t=document.getElementById(o);t&&window.scrollTo({top:t.offsetTop+volantis.dom.bodyAnchor.offsetTop-volantis.dom.header.offsetHeight,behavior:"smooth"})}))}))},e.copyCode=()=>{(document.querySelector(".highlight .code pre")||document.querySelector(".article pre code"))&&document.querySelectorAll(".highlight .code pre, .article pre code").forEach((o=>{o.insertAdjacentHTML("beforebegin",'<button class="btn-copy" data-clipboard-snippet=""><i class="fas fa-copy"></i><span>COPY</span></button>');const t=o.previousSibling;t.onclick=n=>{n.stopPropagation();const a=t.querySelector("i"),l=t.querySelector("span");o.focus();const s=new Range;s.selectNodeContents(o),document.getSelection().removeAllRanges(),document.getSelection().addRange(s);const i=document.getSelection().toString();e.writeClipText(i).then((()=>{volantis.message("复制成功",i.length>120?i.substring(0,120)+"...":i,{icon:"fa fa-copy PETERRIVE"}),t.classList.add("copied"),a.classList.remove("fa-copy"),a.classList.add("fa-check-circle"),l.innerText="COPIED",setTimeout((()=>{a.classList.remove("fa-check-circle"),a.classList.add("fa-copy"),l.innerText="COPY"}),2e3)})).catch((e=>{volantis.message("系统提示",e,{icon:"fa fa-exclamation-circle red"}),t.classList.add("copied-failed"),a.classList.remove("fa-copy"),a.classList.add("fa-exclamation-circle"),l.innerText="COPY FAILED",setTimeout((()=>{a.classList.remove("fa-exclamation-circle"),a.classList.add("fa-copy"),l.innerText="COPY"}))}))}}))},e.writeClipText=e=>{try{return navigator.clipboard.writeText(e).then((()=>Promise.resolve())).catch((e=>Promise.reject(e||"复制文本失败!")))}catch(o){const t=document.createElement("input");t.setAttribute("readonly","readonly"),document.body.appendChild(t),t.setAttribute("value",e),t.select();try{let e=document.execCommand("copy");return document.body.removeChild(t),e&&"unsuccessful"!==e?Promise.resolve():Promise.reject("复制文本失败!")}catch(e){return document.body.removeChild(t),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}},{init:()=>{e.init(),e.event()},subscribe:()=>{e.setIsMobile(),e.setHeader(),e.setHeaderMenuSelection(),e.setGlobalHeaderMenuEvent(),e.setHeaderSearch(),e.setScrollAnchor(),e.setTabs(),e.footnotes(),e.copyCode()},pjaxReload:()=>{e.event(),e.restData(),e.setHeader(),e.setHeaderMenuSelection(),e.setPageHeaderMenuEvent(),e.setScrollAnchor(),e.setTabs(),e.footnotes(),e.copyCode(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach((function(e){e.removeAttribute("style")})),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style"),volantis.dom.switcher&&volantis.dom.$(document).click((function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")}))},writeClipText:e.writeClipText}})();Object.freeze(VolantisApp);const volantisFancyBox=(()=>{const e={initFB:()=>{const e=new Set;if(e.add("default"),e.add("Twikoo"),document.querySelector(".md .gallery img, .fancybox")){document.querySelectorAll(".md .gallery").forEach((function(o){o.querySelector("img")&&e.add(o.getAttribute("data-group")||"default")})),Fancybox.destroy();for(const o of e)o&&Fancybox.bind('[data-fancybox="'+o+'"]',{Hash:!1})}},loadFancyBox:o=>{document.querySelector(".md .gallery img, .fancybox")&&(volantis.css(" https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"),volantis.js("https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js").then((()=>{e.initFB(),o&&o()})))}};return{loadFancyBox:(o=null)=>{e.loadFancyBox(o)},initFancyBox:()=>{e.initFB()},pjaxReload:()=>{"undefined"==typeof Fancybox?e.loadFancyBox():e.initFB()}}})();Object.freeze(volantisFancyBox);