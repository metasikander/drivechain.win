(()=>{var d=20;(function(){"use strict";let i=new FlexSearch.Document({document:{id:"id",index:["title","tags","content","date"],store:["title","summary","date","permalink"]},tokenize:"forward"});function l(e){let t=document.querySelector("template").content,n=document.createDocumentFragment(),c=document.querySelector(".search-results");c.textContent="";for(let r in e){let o=e[r],s=t.cloneNode(!0),a=s.querySelector("a"),f=s.querySelector("time"),y=s.querySelector(".content");a.innerHTML=o.title,a.href=o.permalink,f.innerText=o.date,y.innerHTML=o.summary,n.appendChild(s)}c.appendChild(n)}function u(){let e=document.querySelector(".search-text").value.trim(),t=i.search({query:e,enrich:!0,limit:d}),n={};t.forEach(function(c){c.result.forEach(function(r){n[r.id]=r.doc})}),l(n)}function m(){let e=document.querySelector(".search-form");e.addEventListener("submit",function(t){t.preventDefault(),u()}),e.addEventListener("input",function(){u()}),document.querySelector(".search-loading").classList.add("hidden"),document.querySelector(".search-input").classList.remove("hidden"),document.querySelector(".search-text").focus()}function h(){document.querySelector(".search-loading").classList.remove("hidden"),fetch("/searchindex.json").then(function(e){return e.json()}).then(function(e){e.forEach(function(t){i.add(t)})})}h(),m()})();})();
