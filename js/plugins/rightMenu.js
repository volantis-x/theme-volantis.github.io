const RightMenu=(()=>{const e=volantis.THEMECONFIG.rightmenu,t=volantis.THEMECONFIG.plugins.message.enable&&volantis.THEMECONFIG.plugins.message.rightmenu.enable,o={},n=document.getElementById("rightmenu-wrapper"),l=document.getElementById("rightmenu-content"),r=(document.getElementById("menuDarkBtn"),document.getElementById("printHtml")),i=document.getElementById("menuMusic"),a=document.getElementById("readingModel"),c=document.getElementById("read_bkg"),s=document.querySelectorAll(".menuLoad-Content"),d=document.querySelector(".menu-Option"),u=document.querySelector('.menu-Option[data-fn-type="searchWord"]'),m=document.querySelector('.menu-Option[data-fn-type="copyText"]'),g=document.querySelector('.menu-Option[data-fn-type="copyPaste"]'),p=document.querySelector('.menu-Option[data-fn-type="copySelect"]'),M=document.querySelector('.menu-Option[data-fn-type="copyCut"]'),y=document.querySelector('.menu-Option[data-fn-type="copyHref"]'),C=document.querySelector('.menu-Option[data-fn-type="copySrc"]'),v=document.querySelector('.menu-Option[data-fn-type="copyImg"]'),b=document.querySelector('.menu-Option[data-fn-type="openTab"]'),O=/^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;return o.init=()=>{DOMController.visible(i,!1),DOMController.visible(d,!1),c&&c.parentNode.removeChild(c);const e=document.createElement("div");e.className="common_read_bkg common_read_hide",e.id="read_bkg",window.document.body.appendChild(e)},o.initEvent=()=>{window.document.oncontextmenu=e=>e.ctrlKey||document.body.offsetWidth<=500?(o.hideMenu(),!0):o.popMenu(e),n.oncontextmenu=e=>(e.stopPropagation(),e.preventDefault(),!1),window.removeEventListener("blur",o.hideMenu),document.body.removeEventListener("click",o.hideMenu),window.addEventListener("blur",o.hideMenu),document.body.addEventListener("click",o.hideMenu)},o.popMenu=e=>{let t=e.clientX,r=e.clientY,i=document.documentElement.clientWidth||document.body.clientWidth,a=document.documentElement.clientHeight||document.body.clientHeight;try{o.setMenuItem(e),DOMController.visible(n),n.focus(),n.style.zIndex="-2147483648";let c=l.offsetWidth,s=l.offsetHeight,d=t+c>i?t-c+10:t,u=r+s>a?r-s+10:r;u=r+s>a&&u<s&&r<s?u+(a-s-u-10):u,n.style.left=d+"px",n.style.top=u+"px",n.style.zIndex="2147483648",volantis.THEMECONFIG.plugins.message.rightmenu.notice&&o.showMessage()}catch(e){return n.blur(),console.error(e),!0}return!1},o.showMessage=()=>{const o="true"===localStorage.getItem("NoticeRightMenu");t&&!o&&VolantisApp.message("右键菜单","唤醒原系统菜单请使用：<kbd>Ctrl</kbd> + <kbd>右键</kbd>",{icon:e.faicon+" fa-exclamation-square red",time:9e3},(()=>{localStorage.setItem("NoticeRightMenu","true")}))},o.setMenuItem=n=>{let l=!1;const c=n.target,d=window.getSelection().toString();if(DOMController.visible(b,!1),"input"===c.tagName.toLowerCase()||"textarea"===c.tagName.toLowerCase()){const e=c.value;e.length>0?(DOMController.visible(p),p.onclick=()=>{n.preventDefault(),c.select()}):DOMController.visible(p,!1),d?(DOMController.visible(M),M.onclick=()=>{const t=c.selectionStart,n=c.selectionEnd;o.copyString(d),c.value=e.substring(0,t)+e.substring(n,e.length),c.selectionStart=t,c.selectionEnd=t,c.focus()}):DOMController.visible(M,!1),o.readClipboard().then((e=>{e?(DOMController.visible(g),g.onclick=()=>{o.insertAtCaret(c,e)}):DOMController.visible(g,!1)})).catch((e=>{console.error(e),DOMController.visible(g,!1)}))}else DOMController.visible(p,!1),DOMController.visible(g,!1),DOMController.visible(M,!1);const h=c.href;h&&O.test(h)?(l=!0,DOMController.visible(y),DOMController.visible(b),y&&(y.onclick=()=>{o.copyString(h)}),b.onclick=()=>{window.open(h)}):DOMController.visible(y,!1);const D=c.currentSrc;D&&O.test(D)?(l=!0,DOMController.visible(C),DOMController.visible(b),C.onclick=()=>{o.copyString(D)},b.onclick=()=>{window.open(D)}):DOMController.visible(C,!1),D&&O.test(D)&&D.trimEnd().endsWith(".png")?(l=!0,DOMController.visible(v),v.onclick=()=>{o.writeClipImg(n,(o=>{o&&t&&VolantisApp.message("系统提示","图片复制成功！",{icon:e.faicon+" fa-images"})}),(o=>{t&&VolantisApp.message("系统提示","复制失败："+o,{icon:e.faicon+" fa-exclamation-square red"})}))}):DOMController.visible(v,!1),d?(l=!0,DOMController.visible(m),DOMController.visible(u),m.onclick=()=>{o.copyString(d)},u&&(u.onclick=()=>{OpenSearch(d)})):(DOMController.visible(m,!1),DOMController.visible(u,!1));const S=document.querySelector("#post.article")||null,f=window.location.pathname;S?(DOMController.visible(r),DOMController.visible(a),r&&(r.onclick=()=>{if(window.location.pathname===f){const e='是否打印当前页面？<br><em style="font-size: 80%">建议打印时勾选背景图形</em><br>';t&&VolantisApp.question("",e,{},(()=>{o.printHtml()}))}else o.hideMenu()}),a&&(a.onclick=()=>{window.location.pathname,o.readingModel()})):(DOMController.visible(r,!1),DOMController.visible(a,!1)),volantis.THEMECONFIG.plugins.aplayer.enable&&"undefined"!=typeof RightMenuAplayer&&void 0!==RightMenuAplayer.APlayer.player?e.music.alwaysShow?DOMController.visible(i):"play"===RightMenuAplayer.APlayer.status||"undefined"===RightMenuAplayer.APlayer.status?(l=!0,DOMController.visible(i)):DOMController.visible(i,!1):DOMController.visible(i,!1),s.forEach((e=>{DOMController.visible(e,!l)})),volantis.THEMECONFIG.plugins.aplayer.enable&&volantis.THEMECONFIG.rightmenu.layout.includes("music")&&RightMenuAplayer.checkAPlayer()},o.hideMenu=()=>{DOMController.visible(n,!1)},o.copyString=o=>{VolantisApp.utilWriteClipText(o).then((()=>{t&&VolantisApp.messageCopyright()})).catch((o=>{t&&VolantisApp.message("系统提示",o,{icon:e.faicon+" fa-exclamation-square red"})}))},o.writeClipText=e=>{try{return navigator.clipboard.writeText(e).then((()=>Promise.resolve())).catch((e=>Promise.reject(e)))}catch(t){const o=document.createElement("input");o.setAttribute("readonly","readonly"),document.body.appendChild(o),o.setAttribute("value",e),o.select();try{let e=document.execCommand("copy");return document.body.removeChild(o),e&&"unsuccessful"!==e?Promise.resolve():Promise.reject("复制文本失败!")}catch(e){return document.body.removeChild(o),Promise.reject("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作!")}}},o.writeClipImg=async function(t,o,n){const l=e.customPicUrl.enable?t.target.currentSrc.replace(e.customPicUrl.old,e.customPicUrl.new):t.target.currentSrc,r=t.target.parentElement;try{const e=await fetch(l),t=await e.blob();await navigator.clipboard.write([new ClipboardItem({[t.type]:t})]).then((()=>{o(!0)}),(e=>{console.error("图片复制失败：",e),n(e)}))}catch(e){const t=document;try{if(t.body.createTextRange){const e=document.body.createTextRange();e.moveToElementText(r),e.select()}else if(window.getSelection){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(r),e.removeAllRanges(),e.addRange(t)}document.execCommand("copy"),window.getSelection().removeAllRanges(),o(!1)}catch(e){console.error(e),n("不支持复制当前图片！")}}},o.readClipboard=async()=>{const e=await navigator.permissions.query({name:"clipboard-read"});return"granted"===e.state||"prompt"===e.state?navigator.clipboard.readText().then((e=>e)).catch((e=>Promise.reject(e))):Promise.reject(e)},o.insertAtCaret=(e,t)=>{const o=e.selectionStart,n=e.selectionEnd;if(document.selection)e.focus(),document.selection.createRange().text=t,e.focus();else if(o||"0"==o){var l=e.scrollTop;e.value=e.value.substring(0,o)+t+e.value.substring(n,e.value.length),e.focus(),e.selectionStart=o+t.length,e.selectionEnd=o+t.length,e.scrollTop=l}else e.value+=t,e.focus()},o.printHtml=()=>{volantis.isReadModel&&o.readingModel(),e.print.defaultStyles&&(DOMController.setAttribute("details","open","true"),DOMController.remove(".cus-article-bkg"),DOMController.remove(".iziToast-overlay"),DOMController.remove(".iziToast-wrapper"),DOMController.remove(".prev-next"),DOMController.remove("footer"),DOMController.remove("#l_header"),DOMController.remove("#l_cover"),DOMController.remove("#l_side"),DOMController.remove("#comments"),DOMController.remove("#s-top"),DOMController.remove("#BKG"),DOMController.remove("#rightmenu-wrapper"),DOMController.remove(".nav-tabs"),DOMController.remove(".parallax-mirror"),DOMController.remove(".new-meta-item.share"),DOMController.remove("div.footer"),DOMController.setStyle("body","backgroundColor","unset"),DOMController.setStyle("#l_main","width","100%"),DOMController.setStyle("#post","boxShadow","none"),DOMController.setStyle("#post","background","none"),DOMController.setStyle("#post","padding","0"),DOMController.setStyle("h1","textAlign","center"),DOMController.setStyle("h1","fontWeight","600"),DOMController.setStyle("h1","fontSize","2rem"),DOMController.setStyle("h1","marginBottom","20px"),DOMController.setStyle(".tab-pane","display","block"),DOMController.setStyle(".tab-content","borderTop","none"),DOMController.setStyle(".highlight>table pre","whiteSpace","pre-wrap"),DOMController.setStyle(".highlight>table pre","wordBreak","break-all"),DOMController.setStyle(".fancybox img","height","auto"),DOMController.setStyle(".fancybox img","weight","auto")),setTimeout((()=>{window.print(),document.body.innerHTML="",window.location.reload()}),50)},o.readingModel=()=>{if("function"==typeof ScrollReveal&&ScrollReveal().clean("#comments"),DOMController.fadeToggle(document.querySelector("#l_header")),DOMController.fadeToggle(document.querySelector("footer")),DOMController.fadeToggle(document.querySelector("#s-top")),DOMController.fadeToggle(document.querySelector(".article-meta#bottom")),DOMController.fadeToggle(document.querySelector(".prev-next")),DOMController.fadeToggle(document.querySelector("#l_side")),DOMController.fadeToggle(document.querySelector("#comments")),DOMController.toggleClass(document.querySelector("#l_main"),"common_read"),DOMController.toggleClass(document.querySelector("#l_main"),"common_read_main"),DOMController.toggleClass(document.querySelector("#l_body"),"common_read"),DOMController.toggleClass(document.querySelector("#safearea"),"common_read"),DOMController.toggleClass(document.querySelector("#pjax-container"),"common_read"),DOMController.toggleClass(document.querySelector("#read_bkg"),"common_read_hide"),DOMController.toggleClass(document.querySelector("h1"),"common_read_h1"),DOMController.toggleClass(document.querySelector("#post"),"post_read"),DOMController.toggleClass(document.querySelector("#l_cover"),"read_cover"),DOMController.toggleClass(document.querySelector(".widget.toc-wrapper"),"post_read"),volantis.isReadModel=void 0===volantis.isReadModel||!volantis.isReadModel,volantis.isReadModel){const n={backgroundColor:"var(--color-read-post)",icon:e.faicon+" fa-book-reader",time:5e3};t&&VolantisApp.message("系统提示","阅读模式已开启，您可以点击屏幕空白处退出。",n),document.querySelector("#l_body").removeEventListener("click",o.readingModel),document.querySelector("#l_body").addEventListener("click",(e=>{DOMController.hasClass(e.target,"common_read")&&o.readingModel()}))}else document.querySelector("#l_body").removeEventListener("click",o.readingModel),document.querySelector("#post").removeEventListener("click",o.readingModel)},{init:(e=!1)=>{o.init(),o.initEvent(),e&&t&&VolantisApp.message("系统提示","自定义右键注册成功。")},destroy:(e=!1)=>{o.hideMenu(),window.document.oncontextmenu=()=>!0,e&&t&&VolantisApp.message("系统提示","自定义右键注销成功。")},hideMenu:o.hideMenu,readingModel:o.readingModel}})();Object.freeze(RightMenu),volantis.requestAnimationFrame((()=>{"loading"!==document.readyState?(RightMenu.init(),volantis.pjax.send((()=>{RightMenu.hideMenu()}))):document.addEventListener("DOMContentLoaded",(function(){RightMenu.init(),volantis.pjax.send((()=>{RightMenu.hideMenu()}))}))}));