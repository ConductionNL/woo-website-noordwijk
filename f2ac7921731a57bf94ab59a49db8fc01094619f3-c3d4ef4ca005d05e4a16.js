"use strict";(self.webpackChunkproduct_website_template=self.webpackChunkproduct_website_template||[]).push([[634],{5587:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);const r=a.createContext({}),i=!0;function d(e){let{baseColor:t,highlightColor:n,width:a,height:r,borderRadius:d,circle:l,direction:s,duration:o,enableAnimation:u=i}=e;const c={};return"rtl"===s&&(c["--animation-direction"]="reverse"),"number"==typeof o&&(c["--animation-duration"]=`${o}s`),u||(c["--pseudo-element-display"]="none"),"string"!=typeof a&&"number"!=typeof a||(c.width=a),"string"!=typeof r&&"number"!=typeof r||(c.height=r),"string"!=typeof d&&"number"!=typeof d||(c.borderRadius=d),l&&(c.borderRadius="50%"),void 0!==t&&(c["--base-color"]=t),void 0!==n&&(c["--highlight-color"]=n),c}function l(e){let{count:t=1,wrapper:n,className:l,containerClassName:s,containerTestId:o,circle:u=!1,style:c,...m}=e;var h,f,y;const j=a.useContext(r),v={...m};for(const[a,r]of Object.entries(m))void 0===r&&delete v[a];const g={...j,...v,circle:u},p={...c,...d(g)};let b="react-loading-skeleton";l&&(b+=` ${l}`);const x=null!==(h=g.inline)&&void 0!==h&&h,T=[],D=Math.ceil(t);for(let r=0;r<D;r++){let e=p;if(D>t&&r===D-1){const n=null!==(f=e.width)&&void 0!==f?f:"100%",a=t%1,r="number"==typeof n?n*a:`calc(${n} * ${a})`;e={...e,width:r}}const n=a.createElement("span",{className:b,style:e,key:r},"‌");x?T.push(n):T.push(a.createElement(a.Fragment,{key:r},n,a.createElement("br",null)))}return a.createElement("span",{className:s,"data-testid":o,"aria-live":"polite","aria-busy":null!==(y=g.enableAnimation)&&void 0!==y?y:i},n?T.map(((e,t)=>a.createElement(n,{key:t},e))):T)}},4348:function(e,t,n){n.d(t,{K:function(){return d}});var a=n(7294),r=n(686),i=n(7177);const d=e=>{const t=a.useContext(i.Z);return{getAll:(e,n)=>(0,r.useQuery)(["OpenWoo",e,n],(()=>null==t?void 0:t.OpenWoo.getAll(e,n)),{onError:e=>{console.warn(e.message)}}),getOne:n=>(0,r.useQuery)(["OpenWoo",n],(()=>null==t?void 0:t.OpenWoo.getOne(n)),{initialData:()=>{var t;return null===(t=e.getQueryData("OpenWoo"))||void 0===t?void 0:t.find((e=>e.id===n))},onError:e=>{throw new Error(e.message)},enabled:!!n})}}},7207:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a="WOOItemDetailTemplate-module--tableRow--d28f2",r=n(1800),i=n(2616),d=n(5019),l=n(1082),s=n(7606),o=n(3168),u=n(686),c=n(4348),m=n(5587);const h=e=>{if(!e)return;const t=e.lastIndexOf("/");return e.substring(t+1)},f=(e,t)=>{var n;if(void 0!==t)return null===(n=t.find((t=>t.URL_Bijlage===e)))||void 0===n?void 0:n.Titel_Bijlage};var y=n(5893);const j=e=>{var t,n,j,v,g,p,b,x,T,D,M,N,S,C,U,O,_,w,R,A;let{wooItemId:L}=e;const{t:k,i18n:B}=(0,d.$)(),H=new u.QueryClient,F=(0,c.K)(H).getOne(L);return(0,y.jsx)(r.T3,{children:(0,y.jsxs)(r.JH,{className:"WOOItemDetailTemplate-module--container--ccf27",children:[(0,y.jsx)("div",{children:(0,y.jsxs)(r.rU,{className:"WOOItemDetailTemplate-module--backLink--e33aa",onClick:()=>(0,l.c4)("/"),children:[(0,y.jsx)(s.G,{icon:o.acZ})," ",(0,y.jsx)("span",{children:k("Back to homepage")})]})}),F.isSuccess&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r.nL,{children:""!==F.data.Titel?F.data.Titel:k("No title available")}),(0,y.jsx)(r.iA,{className:"WOOItemDetailTemplate-module--table--d7844",children:(0,y.jsxs)(r.RM,{className:"WOOItemDetailTemplate-module--tableBody--9d96b",children:[F.data.ID&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Feature")}),(0,y.jsx)(r.pj,{children:(I=F.data.ID,/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(I)?F.data.Object_ID:F.data.ID)})]}),F.data.Titel&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Category")}),(0,y.jsx)(r.pj,{children:null!==(t=F.data.Categorie)&&void 0!==t?t:"-"})]}),F.data.Samenvatting&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Summary")}),(0,y.jsx)(r.pj,{children:F.data.Samenvatting})]}),F.data.Beschrijving&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Description")}),(0,y.jsx)(r.pj,{children:F.data.Beschrijving})]}),F.data.Termijnoverschrijding&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Exceeding the term")}),(0,y.jsx)(r.pj,{children:F.data.Termijnoverschrijding})]}),F.data.Publicatiedatum&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Publication date")}),(0,y.jsx)(r.pj,{children:F.data.Publicatiedatum?(0,i.p)(B.language,F.data.Publicatiedatum):"-"})]}),F.data.Ontvangstdatum&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Received date")}),(0,y.jsx)(r.pj,{children:null!==(n=(0,i.p)(B.language,F.data.Ontvangstdatum))&&void 0!==n?n:"-"})]}),F.data.Besluitdatum&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsxs)(r.pj,{children:[k("Decision date")," "]}),(0,y.jsx)(r.pj,{children:null!==(j=(0,i.p)(B.language,F.data.Besluitdatum))&&void 0!==j?j:"-"})]}),(null===(v=F.data)||void 0===v||null===(g=v.embedded)||void 0===g?void 0:g.Themas)&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Themes")}),(0,y.jsx)(r.pj,{children:null===(p=F.data)||void 0===p||null===(b=p.embedded)||void 0===b?void 0:b.Themas.map(((e,t)=>{var n,a;return(0,y.jsx)("span",{children:e.Hoofdthema+(t!==(null===(n=F.data)||void 0===n||null===(a=n.embedded)||void 0===a?void 0:a.Themas.length)-1?", ":"")},t)}))})]}),F.data.URL_informatieverzoek&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Information request")}),(0,y.jsx)(r.pj,{children:(0,y.jsx)(r.rU,{href:F.data.URL_informatieverzoek,target:"blank",children:null!==(x=f(F.data.URL_informatieverzoek,null===(T=F.data)||void 0===T||null===(D=T.embedded)||void 0===D?void 0:D.Bijlagen))&&void 0!==x?x:h(F.data.URL_informatieverzoek)})})]}),(F.data.Besluit||F.data.URL_besluit)&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Decision")}),(0,y.jsxs)(r.pj,{children:[F.data.Besluit,F.data.Besluit&&F.data.URL_besluit&&","," ",F.data.URL_besluit&&(0,y.jsx)(r.rU,{href:F.data.URL_besluit,target:"blank",children:null!==(M=f(F.data.URL_besluit,null===(N=F.data)||void 0===N||null===(S=N.embedded)||void 0===S?void 0:S.Bijlagen))&&void 0!==M?M:h(F.data.URL_besluit)})]})]}),F.data.URL_inventarisatielijst&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Inventory list")}),(0,y.jsx)(r.pj,{children:(0,y.jsx)(r.rU,{href:F.data.URL_inventarisatielijst,target:"blank",children:null!==(C=f(F.data.URL_inventarisatielijst,null===(U=F.data)||void 0===U||null===(O=U.embedded)||void 0===O?void 0:O.Bijlagen))&&void 0!==C?C:h(F.data.URL_inventarisatielijst)})})]}),(null===(_=F.data)||void 0===_||null===(w=_.embedded)||void 0===w?void 0:w.Bijlagen)&&(0,y.jsxs)(r.SC,{className:a,children:[(0,y.jsx)(r.pj,{children:k("Attachments")}),(0,y.jsx)(r.pj,{children:(0,y.jsx)(r.QI,{children:null===(R=F.data)||void 0===R||null===(A=R.embedded)||void 0===A?void 0:A.Bijlagen.map(((e,t)=>{var n,a;return(0,y.jsx)(r.AS,{children:(0,y.jsx)(r.rU,{href:0!==(null===(n=e.URL_Bijlage)||void 0===n?void 0:n.length)?e.URL_Bijlage:"#",target:0!==(null===(a=e.URL_Bijlage)||void 0===a?void 0:a.length)?"blank":"",children:e.Titel_Bijlage})},t)}))})})]})]})})]}),F.isLoading&&(0,y.jsx)(m.Z,{height:"200px"})]})});var I};var v=e=>(0,y.jsx)(j,{wooItemId:e.params.id})},2616:function(e,t,n){n.d(t,{p:function(){return f}});var a=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,r=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,i=/[^-+\dA-Z]/g;function d(e,t,n,r){if(1!==arguments.length||"string"!=typeof e||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var i=(t=String(l[t]||t||l.default)).slice(0,4);"UTC:"!==i&&"GMT:"!==i||(t=t.slice(4),n=!0,"GMT:"===i&&(r=!0));var d=function(){return n?"getUTC":"get"},f=function(){return e[d()+"Date"]()},y=function(){return e[d()+"Day"]()},j=function(){return e[d()+"Month"]()},v=function(){return e[d()+"FullYear"]()},g=function(){return e[d()+"Hours"]()},p=function(){return e[d()+"Minutes"]()},b=function(){return e[d()+"Seconds"]()},x=function(){return e[d()+"Milliseconds"]()},T=function(){return n?0:e.getTimezoneOffset()},D=function(){return c(e)},M={d:function(){return f()},dd:function(){return o(f())},ddd:function(){return s.dayNames[y()]},DDD:function(){return u({y:v(),m:j(),d:f(),_:d(),dayName:s.dayNames[y()],short:!0})},dddd:function(){return s.dayNames[y()+7]},DDDD:function(){return u({y:v(),m:j(),d:f(),_:d(),dayName:s.dayNames[y()+7]})},m:function(){return j()+1},mm:function(){return o(j()+1)},mmm:function(){return s.monthNames[j()]},mmmm:function(){return s.monthNames[j()+12]},yy:function(){return String(v()).slice(2)},yyyy:function(){return o(v(),4)},h:function(){return g()%12||12},hh:function(){return o(g()%12||12)},H:function(){return g()},HH:function(){return o(g())},M:function(){return p()},MM:function(){return o(p())},s:function(){return b()},ss:function(){return o(b())},l:function(){return o(x(),3)},L:function(){return o(Math.floor(x()/10))},t:function(){return g()<12?s.timeNames[0]:s.timeNames[1]},tt:function(){return g()<12?s.timeNames[2]:s.timeNames[3]},T:function(){return g()<12?s.timeNames[4]:s.timeNames[5]},TT:function(){return g()<12?s.timeNames[6]:s.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":h(e)},o:function(){return(T()>0?"-":"+")+o(100*Math.floor(Math.abs(T())/60)+Math.abs(T())%60,4)},p:function(){return(T()>0?"-":"+")+o(Math.floor(Math.abs(T())/60),2)+":"+o(Math.floor(Math.abs(T())%60),2)},S:function(){return["th","st","nd","rd"][f()%10>3?0:(f()%100-f()%10!=10)*f()%10]},W:function(){return D()},WW:function(){return o(D())},N:function(){return m(e)}};return t.replace(a,(function(e){return e in M?M[e]():e.slice(1,e.length-1)}))}var l={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(t,"0")},u=function(e){var t=e.y,n=e.m,a=e.d,r=e._,i=e.dayName,d=e.short,l=void 0!==d&&d,s=new Date,o=new Date;o.setDate(o[r+"Date"]()-1);var u=new Date;u.setDate(u[r+"Date"]()+1);return s[r+"FullYear"]()===t&&s[r+"Month"]()===n&&s[r+"Date"]()===a?l?"Tdy":"Today":o[r+"FullYear"]()===t&&o[r+"Month"]()===n&&o[r+"Date"]()===a?l?"Ysd":"Yesterday":u[r+"FullYear"]()===t&&u[r+"Month"]()===n&&u[r+"Date"]()===a?l?"Tmw":"Tomorrow":i},c=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var a=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-a);var r=(t-n)/6048e5;return 1+Math.floor(r)},m=function(e){var t=e.getDay();return 0===t&&(t=7),t},h=function(e){return(String(e).match(r)||[""]).pop().replace(i,"").replace(/GMT\+0000/g,"UTC")};const f=(e,t)=>{switch(e){case"nl":return d(t,"dd-mm-yyyy");case"en":return d(t,"mm-dd-yyyy")}return d(t,"dd-mm-yyyy")}}}]);
//# sourceMappingURL=f2ac7921731a57bf94ab59a49db8fc01094619f3-c3d4ef4ca005d05e4a16.js.map