const RightMenuAplayer=(()=>{let e;const a={},l={checkAPlayer:()=>{void 0===e||void 0===a.player?l.setAPlayerObject():void 0===a.observer&&l.setAPlayerObserver()},setAPlayerObject:()=>{let e=document.querySelectorAll(".footer meting-js");0==e.length&&(e=document.querySelectorAll("meting-js")),a.player=void 0,e.forEach(((e,t)=>{e.meta.id==volantis.THEMECONFIG.plugins.aplayer.id&&e.aplayer&&void 0===a.player&&(a.player=e.aplayer,l.setAPlayerObserver(),l.updateTitle())}))},setAPlayerObserver:()=>{try{a.player.on("play",(function(e){l.updateAPlayerControllerStatus(e),a.status="play"})),a.player.on("pause",(function(e){l.updateAPlayerControllerStatus(e),a.status="pause"})),a.player.on("volumechange",(function(e){l.onUpdateAPlayerVolume(e),a.status="volumechange"})),a.player.on("loadstart",(function(e){l.updateTitle(e),a.status="loadstart"})),a.volumeBarWrap=document.getElementsByClassName("nav volume")[0].children[0],a.volumeBar=a.volumeBarWrap.children[0];const e=e=>{l.updateAPlayerVolume(e)},t=r=>{a.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"),document.removeEventListener("mouseup",t),document.removeEventListener("mousemove",e),l.updateAPlayerVolume(r)};a.volumeBarWrap.addEventListener("mousedown",(l=>{l.stopPropagation(),a.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"),document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)})),a.volumeBarWrap.addEventListener("click",(e=>{e.stopPropagation()})),l.updateAPlayerControllerStatus(),l.onUpdateAPlayerVolume(),a.observer=!0}catch(e){console.log(e),a.observer=void 0}},updateAPlayerVolume:e=>{let l=((e.clientX||e.changedTouches[0].clientX)-a.volumeBar.getBoundingClientRect().left)/a.volumeBar.clientWidth;l=Math.max(l,0),l=Math.min(l,1),a.player.volume(l)},onUpdateAPlayerVolume:()=>{try{a.volumeBar.children[0].style.width=100*a.player.audio.volume+"%"}catch(e){console.log(e)}},updateAPlayerControllerStatus:()=>{try{a.player.audio.paused?(e="pause",document.getElementsByClassName("nav toggle")[0].children[0].classList.add("fa-play"),document.getElementsByClassName("nav toggle")[0].children[0].classList.remove("fa-pause")):(e="play",document.getElementsByClassName("nav toggle")[0].children[0].classList.remove("fa-play"),document.getElementsByClassName("nav toggle")[0].children[0].classList.add("fa-pause"))}catch(e){console.log(e)}},aplayerToggle:()=>{event.stopPropagation(),l.checkAPlayer();try{a.player.toggle()}catch(e){console.log(e)}},aplayerBackward:()=>{event.stopPropagation(),l.checkAPlayer();try{a.player.skipBack(),a.player.play()}catch(e){console.log(e)}},aplayerForward:()=>{event.stopPropagation(),l.checkAPlayer();try{a.player.skipForward(),a.player.play()}catch(e){console.log(e)}},aplayerVolume:e=>{l.checkAPlayer();try{a.player.volume(e)}catch(e){console.log(e)}},updateTitle:()=>{l.checkAPlayer();try{const e=a.player.list.index,l=a.player.list.audios[e];document.getElementsByClassName("nav music-title")[0].innerHTML=l.title}catch(e){}}};return{checkAPlayer:l.checkAPlayer,aplayerBackward:l.aplayerBackward,aplayerToggle:l.aplayerToggle,aplayerForward:l.aplayerForward,APlayer:a}})();Object.freeze(RightMenuAplayer),volantis.requestAnimationFrame((()=>{RightMenuAplayer.checkAPlayer()}));