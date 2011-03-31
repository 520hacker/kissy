/*
Copyright 2011, KISSY UI Library v1.1.8dev
MIT Licensed
build time: ${build.time}
*/
(function(f,o,w){var x={mix:function(k,l,m,b){if(!l||!k)return k;if(m===w)m=true;var h,j,n;if(b&&(n=b.length))for(h=0;h<n;h++){j=b[h];j in l&&t(j,k,l,m)}else for(j in l)t(j,k,l,m);return k}},t=function(k,l,m,b){if(b||!(k in l))l[k]=m[k]},r=f&&f[o]||{},v=0;f=r.__HOST||(r.__HOST=f||{});o=f[o]=x.mix(r,x,false);o.mix(o,{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.1.8dev",merge:function(){var k={},l,m=arguments.length;for(l=0;l<m;l++)o.mix(k,arguments[l]);return k},augment:function(){var k=
arguments,l=k.length-2,m=k[0],b=k[l],h=k[l+1],j=1;if(!o.isArray(h)){b=h;h=w;l++}if(!o.isBoolean(b)){b=w;l++}for(;j<l;j++)o.mix(m.prototype,k[j].prototype||k[j],b,h);return m},extend:function(k,l,m,b){if(!l||!k)return k;var h=Object.create?function(q,a){return Object.create(q,{constructor:{value:a}})}:function(q,a){function c(){}c.prototype=q;q=new c;q.constructor=a;return q},j=l.prototype,n;n=h(j,k);k.prototype=o.mix(n,k.prototype);k.superclass=h(j,l);m&&o.mix(n,m);b&&o.mix(k,b);return k},__init:function(){this.Config=
this.Config||{};this.Env=this.Env||{};this.Config.debug="@DEBUG@"},namespace:function(){var k=arguments,l=k.length,m=null,b,h,j,n=k[l-1]===true&&l--;for(b=0;b<l;b++){j=(""+k[b]).split(".");m=n?f:this;for(h=f[j[0]]===m?1:0;h<j.length;++h)m=m[j[h]]=m[j[h]]||{}}return m},app:function(k,l){var m=o.isString(k),b=m?f[k]||{}:k,h=0,j=o.__APP_INIT_METHODS.length;for(o.mix(b,this,true,o.__APP_MEMBERS);h<j;h++)o[o.__APP_INIT_METHODS[h]].call(b);o.mix(b,o.isFunction(l)?l():l);m&&(f[k]=b);return b},log:function(k,
l,m){if(o.Config.debug){if(m)k=m+": "+k;if(f.console!==w&&console.log)console[l&&console[l]?l:"log"](k)}},error:function(k){if(o.Config.debug)throw k;},guid:function(k){return(k||"")+v++}});o.__init();return o})(this,"KISSY");
(function(f,o){var w=f.__HOST,x=Object.prototype.toString,t=Array.prototype.indexOf,r=Array.prototype.lastIndexOf,v=Array.prototype.filter,k=String.prototype.trim,l=/^\s+|\s+$/g,m={};f.mix(f,{type:function(b){return b==null?String(b):m[x.call(b)]||"object"},isNull:function(b){return b===null},isUndefined:function(b){return b===o},isEmptyObject:function(b){for(var h in b)return false;return true},isPlainObject:function(b){return b&&x.call(b)==="[object Object]"&&"isPrototypeOf"in b},clone:function(b,
h,j){var n=b,q,a,c=j||{};if(b&&((q=f.isArray(b))||f.isPlainObject(b))){if(b["__~ks_cloned"])return c[b["__~ks_cloned"]];b["__~ks_cloned"]=n=f.guid();c[n]=b;if(q)n=h?f.filter(b,h):b.concat();else{n={};for(a in b)if(a!=="__~ks_cloned"&&b.hasOwnProperty(a)&&(!h||h.call(b,b[a],a,b)!==false))n[a]=f.clone(b[a],h,c)}}if(!j){f.each(c,function(d){if(d["__~ks_cloned"])try{delete d["__~ks_cloned"]}catch(e){d["__~ks_cloned"]=o}});c=o}return n},trim:k?function(b){return b==o?"":k.call(b)}:function(b){return b==
o?"":b.toString().replace(l,"")},substitute:function(b,h,j){if(!f.isString(b)||!f.isPlainObject(h))return b;return b.replace(j||/\\?\{([^{}]+)\}/g,function(n,q){if(n.charAt(0)==="\\")return n.slice(1);return h[q]!==o?h[q]:""})},each:function(b,h,j){var n,q=0,a=b.length,c=a===o||f.type(b)==="function";j=j||w;if(c)for(n in b){if(h.call(j,b[n],n,b)===false)break}else for(n=b[0];q<a&&h.call(j,n,q,b)!==false;n=b[++q]);return b},indexOf:t?function(b,h){return t.call(h,b)}:function(b,h){for(var j=0,n=h.length;j<
n;++j)if(h[j]===b)return j;return-1},lastIndexOf:r?function(b,h){return r.call(h,b)}:function(b,h){for(var j=h.length-1;j>=0;j--)if(h[j]===b)break;return j},unique:function(b,h){h&&b.reverse();b=b.slice();for(var j=0,n,q;j<b.length;){for(q=b[j];(n=f.lastIndexOf(q,b))!==j;)b.splice(n,1);j+=1}h&&b.reverse();return b},inArray:function(b,h){return f.indexOf(b,h)>-1},filter:v?function(b,h,j){return v.call(b,h,j||this)}:function(b,h,j){var n=[];f.each(b,function(q,a,c){if(h.call(j||this,q,a,c))n.push(q)});
return n},now:function(){return(new Date).getTime()}});f.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b,h){m["[object "+b+"]"]=h=b.toLowerCase();f["is"+b]=function(j){return f.type(j)==h}})})(KISSY);
(function(f,o){function w(a){var c=typeof a;return a===null||c!=="object"&&c!=="function"}function x(a){return Array.prototype.slice.call(a)}var t=f.__HOST,r=t.document,v=r.documentElement,k=encodeURIComponent("[]"),l=false,m=[],b=false,h=/^#?([\w-]+)$/,j=/^(\w+)\[\]$/,n=/\S/;f.mix(f,{isWindow:function(a){return f.type(a)==="object"&&"setInterval"in a},makeArray:function(a){if(a===null||a===o)return[];if(f.isArray(a))return a;if(typeof a.length!=="number"||f.isString(a)||f.isFunction(a))return[a];
return x(a)},param:function(a,c){if(!f.isPlainObject(a))return"";c=c||"&";var d=[],e,g;for(e in a){g=a[e];e=encodeURIComponent(e);if(w(g))d.push(e,"=",encodeURIComponent(g+""),c);else if(f.isArray(g)&&g.length)for(var i=0,p=g.length;i<p;++i)w(g[i])&&d.push(e,k+"=",encodeURIComponent(g[i]+""),c)}d.pop();return d.join("")},unparam:function(a,c){if(typeof a!=="string"||(a=f.trim(a)).length===0)return{};var d={};a=a.split(c||"&");for(var e,g,i,p=0,s=a.length;p<s;++p){c=a[p].split("=");e=decodeURIComponent(c[0]);
try{g=decodeURIComponent(c[1]||"")}catch(u){g=c[1]||""}if((i=e.match(j))&&i[1]){d[i[1]]=d[i[1]]||[];d[i[1]].push(g)}else d[e]=g}return d},globalEval:function(a){if(a&&n.test(a)){var c=r.getElementsByTagName("head")[0]||v,d=r.createElement("script");d.text=a;c.insertBefore(d,c.firstChild);c.removeChild(d)}},later:function(a,c,d,e,g){c=c||0;e=e||{};var i=a,p=f.makeArray(g),s;if(f.isString(a))i=e[a];i||f.error("method undefined");a=function(){i.apply(e,p)};s=d?setInterval(a,c):setTimeout(a,c);return{id:s,
interval:d,cancel:function(){this.interval?clearInterval(s):clearTimeout(s)}}},ready:function(a){b||this._bindReady();l?a.call(t,this):m.push(a);return this},_bindReady:function(){var a=this,c=r.documentElement.doScroll,d=c?"onreadystatechange":"DOMContentLoaded",e=function(){a._fireReady()};b=true;if(r.readyState==="complete")return e();if(r.addEventListener){var g=function(){r.removeEventListener(d,g,false);e()};r.addEventListener(d,g,false);t.addEventListener("load",e,false)}else{var i=function(){if(r.readyState===
"complete"){r.detachEvent(d,i);e()}};r.attachEvent(d,i);t.attachEvent("onload",e);var p=false;try{p=t.frameElement==null}catch(s){}if(c&&p){var u=function(){try{c("left");e()}catch(z){setTimeout(u,1)}};u()}}},_fireReady:function(){if(!l){l=true;if(m){for(var a,c=0;a=m[c++];)a.call(t,this);m=null}}},available:function(a,c){if((a=(a+"").match(h)[1])&&f.isFunction(c))var d=1,e=f.later(function(){if(r.getElementById(a)&&(c()||1)||++d>500)e.cancel()},40,true)}});try{x(v.childNodes)}catch(q){x=function(a){for(var c=
[],d=a.length-1;d>=0;d--)c[d]=a[d];return c}}if(location&&(location.search||"").indexOf("ks-debug")!==-1)f.Config.debug=true})(KISSY);
(function(f,o){function w(a){var c=a.src,d=a.getAttribute("data-combo-prefix")||"??";a=a.getAttribute("data-combo-sep")||",";a=c.split(a);var e=a[0];d=e.indexOf(d);if(d==-1)c=c.replace(n,"$1");else{c=e.substring(0,d);d=e.substring(d+2,e.length);if(d.match(q))c+=d.replace(n,"$1");else for(d=1;d<a.length;d++){e=a[d];if(e.match(q)){c+=e.replace(n,"$1");break}}}if(!x(c,"/")&&!c.match(/^(http(s)?)|(file):/i))c=window.location.href.replace(/[^/]*$/,"")+c;return c}function x(a,c){return a.lastIndexOf(c,
0)==0}var t=f.__HOST.document,r=t.getElementsByTagName("head")[0]||t.documentElement,v=2,k=3,l=4,m=f.mix,b=t.createElement("script").readyState?function(a,c){var d=a.onreadystatechange;a.onreadystatechange=function(){var e=a.readyState;if(e==="loaded"||e==="complete"){a.onreadystatechange=null;d&&d();c.call(this)}}}:function(a,c){a.addEventListener("load",c,false)},h=/\.css(?:\?|$)/i,j;j={add:function(a,c,d){var e=this.Env.mods,g;if(f.isString(a)&&!d&&f.isPlainObject(c)){g={};g[a]=c;a=g}if(f.isPlainObject(a)){f.each(a,
function(i,p){i.name=p;e[p]&&m(i,e[p],false)});m(e,a)}else{d=d||{};g=e[a]||{};a=d.host||g.host||a;g=e[a]||{};m(g,{name:a,status:v});if(!g.fns)g.fns=[];c&&g.fns.push(c);m(e[a]=g,d);g.attach!==false&&this.__isAttached(g.requires)&&this.__attachMod(g)}return this},use:function(a,c,d){a=a.replace(/\s+/g,"").split(",");d=d||{};var e=this,g;d=(d||0).global;var i,p=a.length,s;d&&e.__mixMods(d);if(e.__isAttached(a))c&&c(e);else{for(i=0;i<p&&(g=a[i]);i++)e.__attachModByName(g,function(){if(!s&&e.__isAttached(a)){s=
true;c&&c(e)}},d);return e}},__attachModByName:function(a,c,d){var e=this.Env.mods,g=a.indexOf("+css")!=-1;a=g?a.replace(/\+css/g,""):a;var i=e[a];if(!i){i=this.Config.componentJsName||function(p){return p+"-pkg-min.js?t=@TIMESTAMP@"};i=f.isFunction(i)?i(a):i;i={path:a+"/"+i,charset:"utf-8"};e[a]=i}if(g){e=this.Config.componentCssName||function(p){return p+"-min.css?t=@TIMESTAMP@"};e=f.isFunction(e)?e(a):e;i.csspath=a+"/"+e}i.name=a;i&&i.status===l||this.__attach(i,c,d)},__attach:function(a,c,d){function e(){if(!C&&
g.__isAttached(a.requires)){a.status===v&&g.__attachMod(a);if(a.status===l){C=true;c()}}}for(var g=this,i=g.Env.mods,p=(a.requires||[]).concat(),s=0,u=p.length;s<u;s++){var z=i[p[s]];z&&z.status===l||g.__attachModByName(p[s],e,d)}g.__buildPath(a);g.__load(a,function(){for(var D=a.requires||[],A=[],B=D.length-1;B>=0;B--){var y=D[B],E=i[y],F=f.inArray(y,p);E&&E.status===l||F||g.__attachModByName(y,e,d);F||A.push(y)}A.length!=0&&A.unshift(a.name);e()},d);var C=false},__mixMods:function(a){var c=this.Env.mods,
d=a.Env.mods,e;for(e in d)this.__mixMod(c,d,e,a)},__mixMod:function(a,c,d,e){var g=a[d]||{},i=g.status;f.mix(g,f.clone(c[d]));if(i)g.status=i;e&&this.__buildPath(g,e.Config.base);a[d]=g},__attachMod:function(a){var c=this;if(a.fns){f.each(a.fns,function(d){d&&d(c)});a.fns=o}a.status=l},__isAttached:function(a){for(var c=this.Env.mods,d,e=(a=f.makeArray(a)).length-1;e>=0;e--){d=a[e].replace(/\+css/,"");d=c[d]||{};if(d.status!==l)return false}return true},__load:function(a,c,d){function e(){g();if(a.status!==
k){d&&i.__mixMod(i.Env.mods,d.Env.mods,a.name,d);if(a.status!==l)a.status=v;c()}}function g(){s[p]=v}var i=this,p=a.fullpath,s=f.Env._loadQueue,u=s[p];a.status=a.status||0;if(a.status<1&&u)a.status=u.nodeName?1:v;if(f.isString(a.cssfullpath)){i.getScript(a.cssfullpath);a.cssfullpath=v}if(a.status<1&&p){a.status=1;u=i.getScript(p,{success:function(){KISSY.log(a.name+" is loaded.","info");e()},error:function(){a.status=k;g()},charset:a.charset});h.test(p)||(s[p]=u)}else a.status===1?b(u,e):c()},__buildPath:function(a,
c){function d(g,i){if(!a[i]&&a[g])a[i]=(c||e.base)+a[g];if(a[i]&&e.debug)a[i]=a[i].replace(/-min/g,"")}var e=this.Config;d("path","fullpath");a.cssfullpath!==v&&d("csspath","cssfullpath")},getScript:function(a,c,d){var e=h.test(a),g=t.createElement(e?"link":"script"),i=c,p,s,u;if(f.isPlainObject(i)){c=i.success;p=i.error;s=i.timeout;d=i.charset}if(e){g.href=a;g.rel="stylesheet"}else{g.src=a;g.async=true}if(d)g.charset=d;if(e)f.isFunction(c)&&c.call(g);else b(g,function(){if(u){u.cancel();u=o}f.isFunction(c)&&
c.call(g);r&&g.parentNode&&r.removeChild(g)});if(f.isFunction(p))u=f.later(function(){u=o;p()},(s||this.Config.timeout)*1E3);r.insertBefore(g,r.firstChild);return g}};m(f,j);var n=/^(.*)(seed|kissy)(-min)?\.js[^/]*/i,q=/(seed|kissy)(-min)?\.js/;f.__initLoader=function(){var a=t.getElementsByTagName("script");a=w(a[a.length-1]);this.Env.mods={};this.Env._loadQueue={};if(!this.Config.base)this.Config.base=a;if(!this.Config.timeout)this.Config.timeout=10};f.__initLoader();f.each(j,function(a,c){f.__APP_MEMBERS.push(c)});
f.__APP_INIT_METHODS.push("__initLoader")})(KISSY);
