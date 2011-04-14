/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("anim/base",function(g,e,l,f,m,o,a){function p(d,c,b,h,k,q){if(!(d=e.get(d)))return a;if(!(this instanceof p))return new p(d,c,b,h,k,q);var u=g.isPlainObject(b);c=c;this.domEl=d;if(g.isPlainObject(c))c=String(g.param(c,";")).replace(/=/g,":").replace(/%23/g,"#").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var A=c,v=d,x;d={};var B=s.length;v=e.insertAfter(v.cloneNode(true),v);x=v.style;for(i(v,A);B--;){var D=s[B];if(x[D])d[D]=(t[D]||t["*"]).getter(v,D)}A=n(A);for(var E in A)d[E]=(t[E]||
t["*"]).getter(v,E);e.remove(v);this.props=d;this.targetStyle=c;if(u)u=g.merge(C,b);else{u=g.clone(C);if(b)u.duration=parseFloat(b)||1;if(g.isString(h)||g.isFunction(h))u.easing=h;if(g.isFunction(k))u.complete=k;if(q!==a)u.nativeSupport=q}if(!g.isEmptyObject(n(c)))u.nativeSupport=false;this.config=u;if(u.nativeSupport&&z()&&g.isString(h=u.easing))if(/cubic-bezier\([\s\d.,]+\)/.test(h)||(h=f.NativeTimeFunction[h])){u.easing=h;this.transitionName=z()}if(g.isFunction(k))this.callback=k;return a}function y(d,
c){return c}function i(d,c){if(m.ie&&c.indexOf(w)>-1){var b=c.match(/opacity\s*:\s*([^;]+)(;|$)/);b&&e.css(d,w,parseFloat(b[1]))}d.style.cssText+=";"+c;b=n(c);for(var h in b)d[h]=b[h]}function n(d){for(var c={},b=0;b<r.length;b++){var h=r[b].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(h=d.match(RegExp(h+"\\s*:([^;]+)(;|$)")))c[r[b]]=g.trim(h[1])}return c}var s,r,w,C,j;l=l.Target;s="borderBottomWidth borderBottomStyle borderLeftWidth borderLeftStyle borderRightWidth borderRightStyle borderSpacing borderTopWidth borderTopStyle bottom fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
r=[];w="opacity";C={duration:1,easing:"easeNone",nativeSupport:true};p.PROPS=s;p.CUSTOM_ATTRS=r;p.PROP_OPS={"*":{getter:function(d,c){var b=e.css(d,c),h=parseFloat(b);b=(b+"").replace(/^[-\d.]+/,"");if(isNaN(h))return{v:b,u:"",f:y};return{v:h,u:b,f:this.interpolate}},setter:function(d,c,b){return e.css(d,c,b)},interpolate:function(d,c,b){return(d+(c-d)*b).toFixed(3)}}};var t=p.PROP_OPS;g.augment(p,l,{isRunning:false,elapsedTime:0,start:0,finish:0,duration:0,run:function(){var d=this.config,c=this.domEl,
b,h=this.props,k={},q;if(this.fire("start")!==false){this.stop();this.duration=b=d.duration*1E3;if(this.transitionName)this._nativeRun();else{for(q in h)k[q]=(t[q]||t["*"]).getter(c,q);this.source=k;c=g.now();b=c+b;d=d.easing;if(g.isString(d))d=f[d]||f.easeNone;this.start=c;this.finish=b;this.easing=d;o.start(this)}this.isRunning=true;return this}},_complete:function(){this.fire("complete");this.callback&&this.callback()},_runFrame:function(){var d=this.domEl,c=this.finish,b=this.start,h=this.duration,
k=g.now(),q=this.source,u=this.easing,A=this.props,v;b=k-b;h=k>c?1:b/h;var x,B;this.elapsedTime=b;for(v in A){b=q[v];x=A[v];if(x.v==0)x.u=b.u;if(b.u!==x.u){b.v=0;b.u=x.u}b=x.f(b.v,x.v,u(h))+x.u;(t[v]||t["*"]).setter(d,v,b)}if(this.fire("step")===false||(B=k>c)){this.stop();B&&this._complete()}},_nativeRun:function(){var d=this,c=d.domEl,b=d.duration,h=d.config.easing,k=d.transitionName,q={};q[k+"Property"]="all";q[k+"Duration"]=b+"ms";q[k+"TimingFunction"]=h;e.css(c,q);g.later(function(){i(c,d.targetStyle)},
0);g.later(function(){d.stop(true)},b)},stop:function(d){if(this.transitionName)this._nativeStop(d);else{if(d){i(this.domEl,this.targetStyle);this._complete()}o.stop(this)}this.isRunning=false;return this},_nativeStop:function(d){var c=this.domEl,b=this.transitionName,h=this.props,k;if(d){e.css(c,b+"Property","none");this._complete()}else{for(k in h)e.css(c,k,e._getComputedStyle(c,k));e.css(c,b+"Property","none")}}});p.supportTransition=function(){if(j)return j;var d="transition",c,b=document.body;
if(b.style[d]!==a)c=d;else g.each(["Webkit","Moz","O"],function(h){if(b.style[d=h+"Transition"]!==a){c=d;return false}});return j=c};var z=p.supportTransition;return p},{requires:["dom","event","./easing","ua","./manager"]});
KISSY.add("anim/color",function(g,e,l){function f(i){i=i.toLowerCase();var n;if(n=i.match(o))return[parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];else if(n=i.match(a)){for(i=1;i<n.length;i++)if(n[i].length<2)n[i]+=n[i];return[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]}if(m[i])return m[i];return[255,255,255]}var m={black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],
olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},o=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,a=/^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i,p="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),y=l.PROP_OPS;l=l.PROPS;l.push.apply(l,p);y.color={getter:function(i,n){return{v:f(e.css(i,n)),u:"",f:this.interpolate}},setter:y["*"].setter,interpolate:function(i,n,s){var r=
y["*"].interpolate;return"rgb("+[Math.floor(r(i[0],n[0],s)),Math.floor(r(i[1],n[1],s)),Math.floor(r(i[2],n[2],s))].join(", ")+")"}};g.each(p,function(i){y[i]=y.color})},{requires:["dom","./base"]});
KISSY.add("anim/easing",function(){var g=Math,e=g.PI,l=g.pow,f=g.sin,m=1.70158,o={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(l(2,10*(a-=1))*f((a-0.075)*2*e/0.3))},elasticOut:function(a){if(a===
0||a===1)return a;return l(2,-10*a)*f((a-0.075)*2*e/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*l(2,10*(a-=1))*f((a-0.1125)*2*e/0.45);return l(2,-10*(a-=1))*f((a-0.1125)*2*e/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((m+1)*a-m)},backOut:function(a){return(a-=1)*a*((m+1)*a+m)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((m*=1.525)+1)*a-m);return 0.5*((a-=2)*a*(((m*=1.525)+1)*a+m)+2)},bounceIn:function(a){return 1-o.bounceOut(1-a)},bounceOut:function(a){return a<
1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return o.bounceIn(a*2)*0.5;return o.bounceOut(a*2-1)*0.5+0.5}};o.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};return o});
KISSY.add("anim/manager",function(g){function e(f){f[l]=f[l]||g.guid("anim-");return f[l]}var l=g.guid("anim-");return{interval:20,runnings:{},timer:null,start:function(f){var m=e(f);if(!this.runnings[m]){this.runnings[m]=f;this.startTimer()}},stop:function(f){this.notRun(f)},notRun:function(f){delete this.runnings[e(f)];g.isEmptyObject(this.runnings)&&this.stopTimer()},pause:function(f){this.notRun(f)},resume:function(f){this.start(f)},startTimer:function(){var f=this;if(!f.timer)f.timer=setTimeout(function(){if(f.runFrames())f.stopTimer();
else{f.timer=null;f.startTimer()}},f.interval)},stopTimer:function(){var f=this.timer;if(f){clearTimeout(f);this.timer=null}},runFrames:function(){var f=true,m=this.runnings,o;for(o in m)if(m.hasOwnProperty(o)){f=false;m[o]._runFrame()}return f}}});
KISSY.add("anim/node-plugin",function(g,e,l,f,m){function o(j,t,z,d,c){if(t==="toggle"){c=e.css(j,p)===y?1:0;t="show"}if(c)e.css(j,p,e.data(j,p)||"");var b={},h={};g.each(C[t],function(k){if(k===i){b[i]=e.css(j,i);e.css(j,i,n)}else if(k===s){b[s]=e.css(j,s);h.opacity=c?1:0;c&&e.css(j,s,0)}else if(k===r){b[r]=e.css(j,r);h.height=c?e.css(j,r)||j.naturalHeight:0;c&&e.css(j,r,0)}else if(k===w){b[w]=e.css(j,w);h.width=c?e.css(j,w)||j.naturalWidth:0;c&&e.css(j,w,0)}});(new l(j,h,z,"easeOut",function(){if(!c){var k=
j.style,q=k[p];if(q!==y){q&&e.data(j,p,q);k[p]=y}b[r]&&e.css(j,{height:b[r]});b[w]&&e.css(j,{width:b[w]});b[s]&&e.css(j,{opacity:b[s]});b[i]&&e.css(j,{overflow:b[i]})}d&&g.isFunction(d)&&d()})).run()}f=g.require("node/node").prototype;var a=g.require("node/nodelist").prototype,p="display",y="none",i="overflow",n="hidden",s="opacity",r="height",w="width",C={show:[i,s,r,w],fade:[s],slide:[i,r]};g.each([f,a],function(j){j.animate=function(){var t=g.makeArray(arguments);g.each(this,function(z){l.apply(m,
[z].concat(t)).run()});return this};g.each({show:["show",1],hide:["show",0],toggle:["toggle"],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",1],slideUp:["slide",0]},function(t,z){j[z]=function(d,c){e[z]&&arguments.length===0?e[z](this):g.each(this,function(b){o(b,t[0],d,c,t[1])});return this}})})},{requires:["dom","anim/base","node"]});
KISSY.add("anim/scroll",function(g,e,l){var f=l.PROP_OPS;l.CUSTOM_ATTRS.push("scrollLeft","scrollTop");f.scrollLeft=f.scrollTop={getter:function(m,o){return{v:m[o],u:"",f:f["*"].interpolate}},setter:function(m,o,a){m[o]=a}}},{requires:["dom","./base"]});KISSY.add("anim",function(g,e,l){e.Easing=l;return e},{requires:["anim/base","anim/easing","anim/node-plugin","anim/color","anim/scroll"]});
