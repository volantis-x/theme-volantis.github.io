"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(n!==undefined){var a=n.call(e,t||"default");if("object"!==_typeof(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var SearchService=function(){var e,t,n,a={};return a.queryText=null,a.template='<div id="u-search">\n  <div class="modal">\n    <header class="modal-header" class="clearfix">\n      <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit">\n        <span class="fa-solid fa-search"></span>\n      </button>\n      <div id="algolia-search-input"></div>\n      <a id="u-search-btn-close" class="btn-close"> <span class="fa-solid fa-times"></span> </a>\n    </header>\n    <main class="modal-body">\n      <div id="algolia-search-results">\n        <div id="algolia-hits">\n          <div class="search-icon"><i class="fa-sharp fa-solid fa-telescope"></i></i></div>\n        </div>\n      </div>\n    </main>\n    <footer>\n      <div id="algolia-pagination"></div>\n      <hr>\n      <div id="algolia-info">\n        <div class="algolia-stats"></div>\n        <div class="algolia-poweredBy"></div>\n      </div>\n    </footer>\n  </div>\n  <div id="modal-overlay" class="modal-overlay"></div>\n  </div>\n  ',a.init=function(){var e=document.createElement("div");e.innerHTML+=a.template,document.body.append(e),(t=volantis.GLOBAL_CONFIG.search).appId&&t.apiKey&&t.indexName?(a.event(),a.setAlgolia()):(document.querySelector("#u-search main.modal-body").innerHTML="Algolia setting is invalid!",document.querySelector("#u-search main.modal-body").style.textAlign="center",document.querySelector("#u-search .modal").style.maxHeight="128px")},a.event=function(){document.querySelector("#u-search-btn-close").addEventListener("click",a.close,!1),document.querySelector("#modal-overlay").addEventListener("click",a.close,!1),document.querySelectorAll(".u-search-form").forEach((function(e){e.addEventListener("submit",a.onSubmit,!1)})),document.querySelector("#algolia-search-input").addEventListener("input",(function(e){var t=e.target.querySelector(".ais-SearchBox-input");a.queryText=t?t.value:e.target.value}))},a.setAlgolia=function(){var i;e=instantsearch({indexName:t.indexName,searchClient:algoliasearch(t.appId,t.apiKey),searchFunction:function(e){e.state.query&&e.search()}});var r=instantsearch.widgets.configure({hitsPerPage:t.hitsPerPage}),o=instantsearch.widgets.searchBox({container:"#algolia-search-input",autofocus:!0,showReset:!1,showSubmit:!1,showLoadingIndicator:!1,searchAsYouType:t.searchAsYouType,placeholder:t.placeholder,templates:{input:"algolia-input"},queryHook:function(e,t){clearTimeout(n),n=setTimeout((function(){return t(e)}),500)}}),s=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(e){var t=a.queryText?"?keyword=".concat(a.queryText):"",n=e.permalink?e.permalink:"".concat(volantis.GLOBAL_CONFIG.root).concat(e.path),i=e._highlightResult,r=i.contentStripTruncate?a.cutContent(i.contentStripTruncate.value):i.contentStrip?a.cutContent(i.contentStrip.value):i.content?a.cutContent(i.content.value):"";return'\n            <a href="'.concat(n).concat(t,'" class="result">\n            <span class="title">').concat(i.title.value||"no-title",'</span>\n            <span class="digest">').concat(r,"</span>\n            </a>")},empty:function(e){return'<div id="resule-hits-empty"><i class="fa-solid fa-box-open"></i><p>'.concat(volantis.GLOBAL_CONFIG.languages.search.hits_empty.replace(/\$\{query}/,e.query),"</p></div>")}}}),l=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){var t=volantis.GLOBAL_CONFIG.languages.search.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return"".concat(t)}}}),c=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy",theme:"dark"===(null===(i=volantis.dark)||void 0===i?void 0:i.mode)?"dark":"light"}),u=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}});e.addWidgets([r,o,s,l,c,u]),e.start()},a.setQueryText=function(n){var i;a.queryText=n,e||a.init(),null===(i=e)||void 0===i||i.setUiState(_defineProperty({},t.indexName,{query:n}))},a.search=function(){document.querySelector("#u-search").style.display="block",document.addEventListener("keydown",(function(e){"Escape"===e.code&&a.close()}),{once:!0})},a.onSubmit=function(e){e.preventDefault();var t=e.target.querySelector(".u-search-input");a.setQueryText(null!=t&&t.value?t.value:e.target.value),a.search()},a.cutContent=function(e){if(""===e)return"";var t=e.indexOf("<mark>"),n=t-30,a=t+120,i="",r="";return n<=0?(n=0,a=140):i="...",a>e.length?a=e.length:r="...",i+e.substring(n,a)+r},a.close=function(){document.querySelector("#u-search").style.display="none"},{init:a.init,setQueryText:function(e){a.setQueryText(e)},search:a.search,close:a.close}}();Object.freeze(SearchService),SearchService.init();
//# sourceMappingURL=../../maps/js/search/algolia.js.map
