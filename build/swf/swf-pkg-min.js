/*
Copyright 2010, KISSY UI Library v1.0.5
MIT Licensed
build: 676 May 23 14:40
*/
KISSY.add("swf-ua",function(a){function h(){var b=0,e=navigator.mimeTypes["application/x-shockwave-flash"],m;if(e){if(e=e.enabledPlugin)b=i(e.description.replace(/\s[rd]/g,".").replace(/[a-z\s]+/ig,"").split("."))}else{try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");m.AllowScriptAccess="always"}catch(q){if(m!==null)b=6}if(b===0)try{b=i((new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/[A-Za-z\s]+/g,"").split(","))}catch(f){}}return parseFloat(b)}function i(b){var e=
b[0]+".";switch(b[2].toString().length){case 1:e+="00";break;case 2:e+="0";break}return e+b[2]}a.UA.flash=h()});
KISSY.add("swf",function(a){function h(c,d,j){var l="ks-swf-"+b++,o=parseFloat(j.version)||e;o=i.flash>=o;var s=i.flash>=8&&j.useExpressInstall&&!o,r=s?f:d;d="YUISwfId="+l+"&YUIBridgeCallback="+g;var n="<object ";this.id=l;h.instances[l]=this;if((c=a.get(c))&&(o||s)&&r){n+='id="'+l+'" ';n+=i.ie?'classid="'+m+'" ':'type="'+q+'" data="'+r+'" ';n+='width="100%" height="100%">';if(i.ie)n+='<param name="movie" value="'+r+'"/>';for(var p in j.fixedAttributes)if(k.hasOwnProperty(p))n+='<param name="'+p+
'" value="'+j.fixedAttributes[p]+'"/>';for(var t in j.flashVars){p=j.flashVars[t];if(typeof p==="string")d+="&"+t+"="+encodeURIComponent(p)}n+='<param name="flashVars" value="'+d+'"/>';n+="</object>";c.innerHTML=n;this.swf=a.get("#"+l)}}var i=a.UA,b=a.now(),e=10.22,m="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",q="application/x-shockwave-flash",f="http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+b,g="KISSY.SWF.eventHandler",k={align:"",allowNetworking:"",allowScriptAccess:"",
base:"",bgcolor:"",menu:"",name:"",quality:"",salign:"",scale:"",tabindex:"",wmode:""};h.instances=(a.SWF||{}).instances||{};h.eventHandler=function(c,d){h.instances[c]._eventHandler(d)};a.augment(h,a.EventTarget);a.augment(h,{_eventHandler:function(c){var d=c.type;if(d==="log")a.log(c.message);else d&&this.fire(d,c)},callSWF:function(c,d){if(this.swf[c])return this.swf[c].apply(this.swf,d||[])}});a.SWF=h});
KISSY.add("swfstore",function(a,h){function i(f,g,k,c){var d="other",j=e.get(m),l=this;k=(k!==h?k:true)+"";c=(c!==h?c:true)+"";if(b.ie)d="ie";else if(b.gecko)d="gecko";else if(b.webkit)d="webkit";else if(b.opera)d="opera";if(!j||j==="null")e.set(m,j=Math.round(Math.random()*Math.PI*1E5));k={version:9.115,useExpressInstall:false,fixedAttributes:{allowScriptAccess:"always",allowNetworking:"all",scale:"noScale"},flashVars:{allowedDomain:q.location.hostname,shareData:k,browser:j,useCompression:c}};g||
(g=q.body.appendChild(a.DOM.create('<div style="height:0;width:0;overflow:hidden"></div>')));l.embeddedSWF=new a.SWF(g,f||"swfstore.swf",k);l.embeddedSWF._eventHandler=function(o){a.SWF.prototype._eventHandler.call(l,o)}}var b=a.UA,e=a.Cookie,m="swfstore",q=document;a.augment(i,a.EventTarget);a.augment(i,{setItem:function(f,g){g=typeof g==="string"?g.replace(/\\/g,"\\\\"):a.JSON.stringify(g)+"";if(f=a.trim(f+""))try{return this.embeddedSWF.callSWF("setItem",[f,g])}catch(k){this.fire("error",{message:k})}},
getItem:function(f){return this.embeddedSWF.callSWF("getValueOf",[f])}});a.each(["getValueAt","getNameAt","getValueOf","getItems","getLength","removeItem","removeItemAt","clear","calculateCurrentSize","hasAdequateDimensions","setSize","getModificationDate","displaySettings"],function(f){i.prototype[f]=function(){try{return this.embeddedSWF.callSWF(f,a.makeArray(arguments))}catch(g){this.fire("error",{message:g})}}});a.SWFStore=i});
