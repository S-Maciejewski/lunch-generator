(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var A,u,ze,L,ce,Ce,Y,Pe,T={},$e=[],je=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z=Array.isArray;function E(t,e){for(var n in e)t[n]=e[n];return t}function Ee(t){var e=t.parentNode;e&&e.removeChild(t)}function U(t,e,n){var o,i,r,c={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?A.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)c[r]===void 0&&(c[r]=t.defaultProps[r]);return N(t,c,o,i,null)}function N(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++ze};return i==null&&u.vnode!=null&&u.vnode(r),r}function V(t){return t.children}function B(t,e){this.props=t,this.context=e}function F(t,e){if(e==null)return t.__?F(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?F(t):null}function xe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return xe(t)}}function ee(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!K.__r++||ce!==u.debounceRendering)&&((ce=u.debounceRendering)||Ce)(K)}function K(){var t,e,n,o,i,r,c,a,l;for(L.sort(Y);t=L.shift();)t.__d&&(e=L.length,o=void 0,i=void 0,r=void 0,a=(c=(n=t).__v).__e,(l=n.__P)&&(o=[],i=[],(r=E({},c)).__v=c.__v+1,oe(l,c,r,n.__n,l.ownerSVGElement!==void 0,c.__h!=null?[a]:null,o,a??F(c),c.__h,i),Me(o,c,i),c.__e!=a&&xe(c)),L.length>e&&L.sort(Y));K.__r=0}function we(t,e,n,o,i,r,c,a,l,y,h){var _,d,f,s,p,$,k,m,C,z=0,g=o&&o.__k||$e,S=g.length,x=S,H=e.length;for(n.__k=[],_=0;_<H;_++)(s=n.__k[_]=(s=e[_])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?N(null,s,null,null,s):Z(s)?N(V,{children:s},null,null,null):s.__b>0?N(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null?(s.__=n,s.__b=n.__b+1,(m=Be(s,g,k=_+z,x))===-1?f=T:(f=g[m]||T,g[m]=void 0,x--),oe(t,s,f,i,r,c,a,l,y,h),p=s.__e,(d=s.ref)&&f.ref!=d&&(f.ref&&_e(f.ref,null,s),h.push(d,s.__c||p,s)),p!=null&&($==null&&($=p),(C=f===T||f.__v===null)?m==-1&&z--:m!==k&&(m===k+1?z++:m>k?x>H-k?z+=m-k:z--:z=m<k&&m==k-1?m-k:0),k=_+z,typeof s.type!="function"||m===k&&f.__k!==s.__k?typeof s.type=="function"||m===k&&!C?s.__d!==void 0?(l=s.__d,s.__d=void 0):l=p.nextSibling:l=He(t,p,l):l=Le(s,l,t),typeof n.type=="function"&&(n.__d=l))):(f=g[_])&&f.key==null&&f.__e&&(f.__e==l&&(l=F(f)),te(f,f,!1),g[_]=null);for(n.__e=$,_=S;_--;)g[_]!=null&&(typeof n.type=="function"&&g[_].__e!=null&&g[_].__e==n.__d&&(n.__d=g[_].__e.nextSibling),te(g[_],g[_]))}function Le(t,e,n){for(var o,i=t.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=t,e=typeof o.type=="function"?Le(o,e,n):He(n,o.__e,e));return e}function Se(t,e){return e=e||[],t==null||typeof t=="boolean"||(Z(t)?t.some(function(n){Se(n,e)}):e.push(t)),e}function He(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function Be(t,e,n,o){var i=t.key,r=t.type,c=n-1,a=n+1,l=e[n];if(l===null||l&&i==l.key&&r===l.type)return n;if(o>(l!=null?1:0))for(;c>=0||a<e.length;){if(c>=0){if((l=e[c])&&i==l.key&&r===l.type)return c;c--}if(a<e.length){if((l=e[a])&&i==l.key&&r===l.type)return a;a++}}return-1}function We(t,e,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in e||G(t,r,null,n[r],o);for(r in e)i&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===e[r]||G(t,r,e[r],n[r],o)}function ae(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||je.test(e)?n:n+"px"}function G(t,e,n,o,i){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||ae(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||ae(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o||t.addEventListener(e,r?le:se,r):t.removeEventListener(e,r?le:se,r);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function se(t){return this.l[t.type+!1](u.event?u.event(t):t)}function le(t){return this.l[t.type+!0](u.event?u.event(t):t)}function oe(t,e,n,o,i,r,c,a,l,y){var h,_,d,f,s,p,$,k,m,C,z,g,S,x,H,P=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=e.__e=n.__e,e.__h=null,r=[a]),(h=u.__b)&&h(e);e:if(typeof P=="function")try{if(k=e.props,m=(h=P.contextType)&&o[h.__c],C=h?m?m.props.value:h.__:o,n.__c?$=(_=e.__c=n.__c).__=_.__E:("prototype"in P&&P.prototype.render?e.__c=_=new P(k,C):(e.__c=_=new B(k,C),_.constructor=P,_.render=Ke),m&&m.sub(_),_.props=k,_.state||(_.state={}),_.context=C,_.__n=o,d=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),P.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=E({},_.__s)),E(_.__s,P.getDerivedStateFromProps(k,_.__s))),f=_.props,s=_.state,_.__v=e,d)P.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(P.getDerivedStateFromProps==null&&k!==f&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(k,C),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(k,_.__s,C)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(_.props=k,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),z=0;z<_._sb.length;z++)_.__h.push(_._sb[z]);_._sb=[],_.__h.length&&c.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(k,_.__s,C),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(f,s,p)})}if(_.context=C,_.props=k,_.__P=t,_.__e=!1,g=u.__r,S=0,"prototype"in P&&P.prototype.render){for(_.state=_.__s,_.__d=!1,g&&g(e),h=_.render(_.props,_.state,_.context),x=0;x<_._sb.length;x++)_.__h.push(_._sb[x]);_._sb=[]}else do _.__d=!1,g&&g(e),h=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++S<25);_.state=_.__s,_.getChildContext!=null&&(o=E(E({},o),_.getChildContext())),d||_.getSnapshotBeforeUpdate==null||(p=_.getSnapshotBeforeUpdate(f,s)),we(t,Z(H=h!=null&&h.type===V&&h.key==null?h.props.children:h)?H:[H],e,n,o,i,r,c,a,l,y),_.base=e.__e,e.__h=null,_.__h.length&&c.push(_),$&&(_.__E=_.__=null)}catch(O){e.__v=null,(l||r!=null)&&(e.__e=a,e.__h=!!l,r[r.indexOf(a)]=null),u.__e(O,e,n)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=qe(n.__e,e,n,o,i,r,c,l,y);(h=u.diffed)&&h(e)}function Me(t,e,n){for(var o=0;o<n.length;o++)_e(n[o],n[++o],n[++o]);u.__c&&u.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){u.__e(r,i.__v)}})}function qe(t,e,n,o,i,r,c,a,l){var y,h,_,d=n.props,f=e.props,s=e.type,p=0;if(s==="svg"&&(i=!0),r!=null){for(;p<r.length;p++)if((y=r[p])&&"setAttribute"in y==!!s&&(s?y.localName===s:y.nodeType===3)){t=y,r[p]=null;break}}if(t==null){if(s===null)return document.createTextNode(f);t=i?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,f.is&&f),r=null,a=!1}if(s===null)d===f||a&&t.data===f||(t.data=f);else{if(r=r&&A.call(t.childNodes),h=(d=n.props||T).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!a){if(r!=null)for(d={},p=0;p<t.attributes.length;p++)d[t.attributes[p].name]=t.attributes[p].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(We(t,f,d,i,a),_)e.__k=[];else if(we(t,Z(p=e.props.children)?p:[p],e,n,o,i&&s!=="foreignObject",r,c,r?r[0]:n.__k&&F(n,0),a,l),r!=null)for(p=r.length;p--;)r[p]!=null&&Ee(r[p]);a||("value"in f&&(p=f.value)!==void 0&&(p!==t.value||s==="progress"&&!p||s==="option"&&p!==d.value)&&G(t,"value",p,d.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==t.checked&&G(t,"checked",p,d.checked,!1))}return t}function _e(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){u.__e(o,n)}}function te(t,e,n){var o,i;if(u.unmount&&u.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||_e(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){u.__e(r,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&te(o[i],e,n||typeof t.type!="function");n||t.__e==null||Ee(t.__e),t.__=t.__e=t.__d=void 0}function Ke(t,e,n){return this.constructor(t,n)}function Ge(t,e,n){var o,i,r,c;u.__&&u.__(t,e),i=(o=typeof n=="function")?null:n&&n.__k||e.__k,r=[],c=[],oe(e,t=(!o&&n||e).__k=U(V,null,[t]),i||T,T,e.ownerSVGElement!==void 0,!o&&n?[n]:i?null:e.firstChild?A.call(e.childNodes):null,r,!o&&n?n:i?i.__e:e.firstChild,o,c),Me(r,t,c)}function ue(t,e,n){var o,i,r,c,a=E({},t.props);for(r in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)r=="key"?o=e[r]:r=="ref"?i=e[r]:a[r]=e[r]===void 0&&c!==void 0?c[r]:e[r];return arguments.length>2&&(a.children=arguments.length>3?A.call(arguments,2):n),N(t.type,a,o||t.key,i||t.ref,null)}function Re(t,e){var n={__c:e="__cC"+Pe++,__:t,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&i.some(function(a){a.__e=!0,ee(a)})},this.sub=function(c){i.push(c);var a=c.componentWillUnmount;c.componentWillUnmount=function(){i.splice(i.indexOf(c),1),a&&a.call(c)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}A=$e.slice,u={__e:function(t,e,n,o){for(var i,r,c;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),c=i.__d),c)return i.__E=i}catch(a){t=a}throw t}},ze=0,B.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof t=="function"&&(t=t(E({},n),this.props)),t&&E(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),ee(this))},B.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ee(this))},B.prototype.render=V,L=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y=function(t,e){return t.__v.__b-e.__v.__b},K.__r=0,Pe=0;var D,b,Q,fe,ne=0,Te=[],W=[],pe=u.__b,he=u.__r,de=u.diffed,me=u.__c,ve=u.unmount;function J(t,e){u.__h&&u.__h(b,t,ne||e),ne=0;var n=b.__H||(b.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:W}),n.__[t]}function Ue(t,e,n){var o=J(D++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):Je(void 0,e),function(a){var l=o.__N?o.__N[0]:o.__[0],y=o.t(l,a);l!==y&&(o.__N=[y,o.__[1]],o.__c.setState({}))}],o.__c=b,!b.u)){var i=function(a,l,y){if(!o.__c.__H)return!0;var h=o.__c.__H.__.filter(function(d){return d.__c});if(h.every(function(d){return!d.__N}))return!r||r.call(this,a,l,y);var _=!1;return h.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(_=!0)}}),!(!_&&o.__c.props===a)&&(!r||r.call(this,a,l,y))};b.u=!0;var r=b.shouldComponentUpdate,c=b.componentWillUpdate;b.componentWillUpdate=function(a,l,y){if(this.__e){var h=r;r=void 0,i(a,l,y),r=h}c&&c.call(this,a,l,y)},b.shouldComponentUpdate=i}return o.__N||o.__}function De(t,e){var n=J(D++,4);!u.__s&&Fe(n.__H,e)&&(n.__=t,n.i=e,b.__h.push(n))}function w(t){return ne=5,ie(function(){return{current:t}},[])}function ie(t,e){var n=J(D++,7);return Fe(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Ne(t){var e=b.context[t.__c],n=J(D++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(b)),e.props.value):t.__}function Ze(){for(var t;t=Te.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(q),t.__H.__h.forEach(re),t.__H.__h=[]}catch(e){t.__H.__h=[],u.__e(e,t.__v)}}u.__b=function(t){b=null,pe&&pe(t)},u.__r=function(t){he&&he(t),D=0;var e=(b=t.__c).__H;e&&(Q===b?(e.__h=[],b.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=W,n.__N=n.i=void 0})):(e.__h.forEach(q),e.__h.forEach(re),e.__h=[],D=0)),Q=b},u.diffed=function(t){de&&de(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Te.push(e)!==1&&fe===u.requestAnimationFrame||((fe=u.requestAnimationFrame)||Ve)(Ze)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==W&&(n.__=n.__V),n.i=void 0,n.__V=W})),Q=b=null},u.__c=function(t,e){e.some(function(n){try{n.__h.forEach(q),n.__h=n.__h.filter(function(o){return!o.__||re(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],u.__e(o,n.__v)}}),me&&me(t,e)},u.unmount=function(t){ve&&ve(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{q(o)}catch(i){e=i}}),n.__H=void 0,e&&u.__e(e,n.__v))};var ye=typeof requestAnimationFrame=="function";function Ve(t){var e,n=function(){clearTimeout(o),ye&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);ye&&(e=requestAnimationFrame(n))}function q(t){var e=b,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),b=e}function re(t){var e=b;t.__c=t.__(),b=e}function Fe(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function Je(t,e){return typeof e=="function"?e(t):e}let M;const Qe=(t,e)=>{if(M=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const n=e.target.closest("a[href]");if(!n||n.origin!=location.origin||/^#/.test(n.getAttribute("href"))||!/^(_?self)?$/i.test(n.target))return t;M=!0,e.preventDefault(),e=n.href.replace(location.origin,"")}else typeof e=="string"?M=!0:e=location.pathname+location.search;return M===!0?history.pushState(null,"",e):M===!1&&history.replaceState(null,"",e),e},Xe=(t,e,n)=>{t=t.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean);for(let o=0,i,r;o<Math.max(t.length,e.length);o++){let[,c,a,l]=(e[o]||"").match(/^(:?)(.*?)([+*?]?)$/);if(i=t[o],!(!c&&a==i)){if(!c&&i&&l=="*"){n.rest="/"+t.slice(o).map(decodeURIComponent).join("/");break}if(!c||!i&&l!="?"&&l!="*")return;if(r=l=="+"||l=="*",r?i=t.slice(o).map(decodeURIComponent).join("/"):i&&(i=decodeURIComponent(i)),n.params[a]=i,a in n||(n[a]=i),r)break}}return n};function I(t){const[e,n]=Ue(Qe,t.url||location.pathname+location.search),o=M===!0,i=ie(()=>{const r=new URL(e,location.origin),c=r.pathname.replace(/(.)\/$/g,"$1");return{url:e,path:c,query:Object.fromEntries(r.searchParams),route:n,wasPush:o}},[e]);return De(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),U(I.ctx.Provider,{value:i},t.children)}const Ye=Promise.resolve();function Ae(t){const[e,n]=Ue(m=>m+1,0),{url:o,query:i,wasPush:r,path:c}=Ie(),{rest:a=c,params:l={}}=Ne(ge),y=w(!1),h=w(c),_=w(0),d=w(),f=w(),s=w(),p=w(!1),$=w();$.current=!1,d.current=ie(()=>{this.__v&&this.__v.__k&&this.__v.__k.reverse(),_.current++,f.current=d.current;let m,C,z;return Se(t.children).some(g=>{if(Xe(a,g.props.path,z={path:a,query:i,params:l,rest:""}))return m=ue(g,z);g.props.default&&(C=ue(g,z))}),U(ge.Provider,{value:z},m||C)},[o]);const k=f.current;return f.current=null,this.__c=m=>{$.current=!0,f.current=k,t.onLoadStart&&t.onLoadStart(o),y.current=!0;let C=_.current;m.then(()=>{C===_.current&&(f.current=null,Ye.then(n))})},De(()=>{const m=this.__v&&this.__v.__e;if($.current){!p.current&&!s.current&&(s.current=m);return}!p.current&&s.current&&(s.current!==m&&s.current.remove(),s.current=null),p.current=!0,h.current!==c&&(r&&scrollTo(0,0),t.onLoadEnd&&y.current&&t.onLoadEnd(o),t.onRouteChange&&t.onRouteChange(o),y.current=!1,h.current=c)},[c,r,e]),[U(ke,{r:d}),U(ke,{r:f})]}const ke=({r:t})=>t.current;Ae.Provider=I;I.ctx=Re({});const ge=Re({}),X=t=>U(t.component,t),Ie=()=>Ne(I.ctx),be=u.__e;u.__e=(t,e,n)=>{if(t&&t.then){let o=e;for(;o=o.__;)if(o.__c&&o.__c.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),e.__k||(e.__k=[]),o.__c.__c(t,e)}be&&be(t,e,n)};var et=0;function v(t,e,n,o,i,r){var c,a,l={};for(a in e)a=="ref"?c=e[a]:l[a]=e[a];var y={type:t,props:l,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--et,__source:i,__self:r};if(typeof t=="function"&&(c=t.defaultProps))for(a in c)l[a]===void 0&&(l[a]=c[a]);return u.vnode&&u.vnode(y),y}function tt(){const{url:t}=Ie();return v("header",{children:v("nav",{children:[v("a",{href:"/",class:t=="/"&&"active",children:"Generator"}),v("a",{href:"/obiady",class:t=="/obiady"&&"active",children:"Obiady"})]})})}class R{constructor(){this.ids=[]}static getInstance(){return R.instance||(R.instance=new R),R.instance}getHistory(){return this.ids}pushToHistory(e){this.ids.push(e)}}const nt=`
id	name	tags
1	Dorsz w sosie pomidorowym z ryżem	ryba,ryż
2	Zupa krem z cukini z grzankami z mozarellą	zupa,ciepłe
3	Zupa krem pomidorowy z makaronem orzo	zupa,ciepłe
4	Makaron z sosem z pieczonej papryki (Cheetos)	makaron
5	Zapiekanki z pieczarkami	Ciepłe
6	Spaghetti z sosem pomidorowym	Makaron
7	Spaghetti z sosem bolońskim	Makaron, seler
8	Lazania	Seler, ciepłe 
9	Pizza	Ciepłe, dużo czasu
10	Tortille z pesto	Rukola
11	Tofu azjatyckie	Tofu, makaron
12	Makaron orzo z pieczonym halloumi	Ciepłe
13	Makaron z kurczakiem z marchewką i groszkiem	Kurczak, makaron
14	Makaron z kurczakiem z suszonymi pomidorami	Kurczak, makaron
15	Ryż z warzywami z klopsikami z indyka	Ryż, indyk
16	Makaron z kurczakiem azjatycki	Makaron, kurczak
17	Zupa warzywna	Zupa, ciepłe
18	Farfalle di concretto	Makaron, kurczak, ciepłe
19	Makaron z szynką i z groszkiem	Makaron
20	Risotto z pieczarkami	Ryż, ciepłe
21	Risotto z porem i pieczonymi pomidorkami	Ryż, ciepłe
22	Makaron ze szparagami	Makaron, szparagi 
23	Risotto ze szparagami	Ryż, szparagi
24	Bułeczki Bao z indykiem	indyk
25	Pity z kurczakiem	kurczak,rukola
`,j=[],Oe=()=>(j.length>0||nt.split(`
`).slice(2,-1).forEach(e=>{const n=e.split("	"),o=n[0],i=n[1],r=n[2].split(",").map(c=>c.trim().toLowerCase());j.push({id:o,name:i,tags:r})}),j),rt=Oe(),ot=R.getInstance(),_t=t=>{const e=Math.floor(Math.random()*t.length);return t[e]},it=()=>{if(ot.getHistory().length===0)return _t(rt)};function ct(){return v("div",{class:"generator",children:["Generator obiadów",v("p",{children:"Czy masz ochotę na..."}),v("p",{children:it().name})]})}function at(){return v("section",{children:v("h1",{children:"404: Not Found"})})}function st(){let t=Oe();return v("div",{class:"meals",children:["Lista obiadów",lt(t)]})}const lt=t=>v("table",{children:[v("thead",{children:v("tr",{children:[v("th",{children:"Nazwa"}),v("th",{children:"Tagi"})]})}),v("tbody",{children:Object.keys(t).map(e=>v("tr",{children:[v("td",{children:t[e].name}),v("td",{children:t[e].tags.join(", ")})]}))})]});function ut(){return v(I,{children:[v(tt,{}),v("main",{children:v(Ae,{children:[v(X,{path:"/",component:ct}),v(X,{path:"/obiady",component:st}),v(X,{default:!0,component:at})]})})]})}Ge(v(ut,{}),document.getElementById("app"));