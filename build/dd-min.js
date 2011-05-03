/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dd/ddm",function(h,k,m,g,i){function b(){b.superclass.constructor.apply(this,arguments);this._init()}function a(c,e,n){n=n||150;if(n===-1)return function(){c.apply(e,arguments)};var s=h.now();return function(){var o=h.now();if(o-s>n){s=o;c.apply(e,arguments)}}}function d(c){var e=c.offset();return{left:e.left,right:e.left+c[0].offsetWidth,top:e.top,bottom:e.top+c[0].offsetHeight}}function f(c,e){return c.left<=e.left&&c.right>=e.left&&c.top<=e.top&&c.bottom>=e.top}function l(c){if(c.top>=
c.bottom||c.left>=c.right)return 0;return(c.right-c.left)*(c.bottom-c.top)}function j(c,e){return{left:Math.max(c.left,e.left),right:Math.min(c.right,e.right),top:Math.max(c.top,e.top),bottom:Math.min(c.bottom,e.bottom)}}var q=document,v=h.require("node/node");b.ATTRS={prefixCls:{value:"ks-dd-"},bufferTime:{value:200},activeDrag:{},activeDrop:{},drops:{value:[]}};h.extend(b,i,{_regDrop:function(c){this.get("drops").push(c)},_unregDrop:function(c){c=h.indexOf(c,this.get("drops"));c!=-1&&this.get("drops").splice(c,
1)},_init:function(){this._showShimMove=a(this._move,this,30)},_move:function(c){var e=this.get("activeDrag");if(e){c.preventDefault();e._move(c);this._notifyDropsMove(c)}},_notifyDropsMove:function(c){var e=this.get("activeDrag"),n=e.get("mode"),s=this.get("drops"),o,t=0,w=d(e.get("node")),r=l(w);h.each(s,function(u){var p=u.getNodeFromTarget(c);if(!(!p||p[0]==e.get("dragNode")[0]))if(n=="point"){if(f(d(p),e.mousePos)){o=u;return false}}else if(n=="intersect"){p=l(j(w,d(p)));if(p>t){t=p;o=u}}else if(n==
"strict"){p=l(j(w,d(p)));if(p==r){o=u;return false}}});(s=this.get("activeDrop"))&&s!=o&&s._handleOut(c);if(o)o._handleOver(c);else{e.get("node").removeClass(this.get("prefixCls")+"drag-over");this.set("activeDrop",null)}},_deactivateDrops:function(){var c=this.get("activeDrag"),e=this.get("activeDrop");c.get("node").removeClass(this.get("prefixCls")+"drag-over");if(e){var n={drag:c,drop:e};e.get("node").removeClass(this.get("prefixCls")+"drop-over");e.fire("drophit",n);c.fire("dragdrophit",n);this.fire("drophit",
n);this.fire("dragdrophit",n)}else{c.fire("dragdropmiss",{drag:c});this.fire("dragdropmiss",{drag:c})}},_start:function(c){var e=this,n=e.get("bufferTime")||0;e._registerEvent();if(n)e._bufferTimer=setTimeout(function(){e._bufferStart(c)},n);else e._bufferStart(c)},_bufferStart:function(c){this.set("activeDrag",c);c.get("shim")&&this._activeShim();c._start();c.get("dragNode").addClass(this.get("prefixCls")+"dragging")},_end:function(c){var e=this.get("activeDrag");this._unregisterEvent();if(this._bufferTimer){clearTimeout(this._bufferTimer);
this._bufferTimer=null}this._shim&&this._shim.css({display:"none"});if(e){e._end(c);e.get("dragNode").removeClass(this.get("prefixCls")+"dragging");this._deactivateDrops(c);this.set("activeDrag",null);this.set("activeDrop",null)}},_activeShim:function(){var c=document;this._shim=(new v("<div style='background-color:red;position:absolute;left:0;width:100%;top:0;cursor:move;z-index:999999;'></div>")).appendTo(c.body);this._shim.css("opacity",0);this._activeShim=this._showShim;this._showShim()},_showShim:function(){this._shim.css({display:"",
height:k.docHeight()})},_registerEvent:function(){m.on(q,"mouseup",this._end,this);m.on(q,"mousemove",this._showShimMove,this)},_unregisterEvent:function(){m.remove(q,"mousemove",this._showShimMove,this);m.remove(q,"mouseup",this._end,this)}});g=new b;g.inRegion=f;g.region=d;return g},{requires:["dom","event","node","base"]});
KISSY.add("dd/draggable",function(h,k,m,g,i){function b(){b.superclass.constructor.apply(this,arguments);this._init()}b.POINT="point";b.INTERSECT="intersect";b.STRICT="strict";b.ATTRS={node:{setter:function(a){return m.one(a)}},dragNode:{},shim:{value:true},handlers:{value:[]},cursor:{value:"move"},mode:{value:"point"}};h.extend(b,g,{_init:function(){var a=this.get("node"),d=this.get("handlers");this.set("dragNode",a);if(d.length==0)d[0]=a;for(var f=0;f<d.length;f++){var l=d[f];l=h.one(l);l.unselectable();
this.get("cursor")&&l.css("cursor",this.get("cursor"))}a.on("mousedown",this._handleMouseDown,this)},destroy:function(){for(var a=this.get("dragNode"),d=this.get("handlers"),f=0;f<d.length;f++){var l=d[f];l.css("cursor")==this.get("cursor")&&l.css("cursor","auto")}a.detach("mousedown",this._handleMouseDown,this);this.detach()},_check:function(a){for(var d=this.get("handlers"),f=0;f<d.length;f++){var l=d[f];if(l.contains(a)||l[0]==a[0])return true}return false},_handleMouseDown:function(a){if(this._check(new m(a.target))){a.preventDefault();
this._prepare(a)}},_prepare:function(a){i._start(this);var d=this.get("node"),f=a.pageX;a=a.pageY;d=d.offset();this.startMousePos=this.mousePos={left:f,top:a};this.startNodePos=d;this._diff={left:f-d.left,top:a-d.top};this.set("diff",this._diff)},_move:function(a){var d=this.get("diff"),f=a.pageX-d.left;d=a.pageY-d.top;this.mousePos={left:a.pageX,top:a.pageY};a={left:f,top:d,pageX:a.pageX,pageY:a.pageY,drag:this};this.fire("drag",a);i.fire("drag",a)},_end:function(){this.fire("dragend",{drag:this});
i.fire("dragend",{drag:this})},_start:function(){this.fire("dragstart",{drag:this});i.fire("dragstart",{drag:this})}});return b},{requires:["ua","node","base","./ddm"]});
KISSY.add("dd/droppable",function(h,k,m,g){function i(){i.superclass.constructor.apply(this,arguments);this._init()}i.ATTRS={node:{setter:function(b){if(b){b=k.one(b);b.addClass(g.get("prefixCls")+"drop");return b}}}};h.extend(i,m,{getNodeFromTarget:function(){return this.get("node")},_init:function(){g._regDrop(this)},_handleOut:function(){var b=g.get("activeDrag");this.get("node").removeClass(g.get("prefixCls")+"drop-over");var a={drop:this,drag:b};this.fire("dropexit",a);g.fire("dropexit",a);b.get("node").removeClass(g.get("prefixCls")+
"drag-over");b.fire("dragexit",a);g.fire("dragexit",a)},_handleOver:function(b){var a=g.get("activeDrop");g.set("activeDrop",this);var d=g.get("activeDrag");this.get("node").addClass(g.get("prefixCls")+"drop-over");b=h.mix({drag:d,drop:this},b);if(this!=a){d.get("node").addClass(g.get("prefixCls")+"drag-over");d.fire("dragenter",b);this.fire("dropenter",b);g.fire("dragenter",b);g.fire("dropenter",b)}else{d.fire("dragover",b);this.fire("dropover",b);g.fire("dragover",b);g.fire("dropover",b)}},destroy:function(){g._unregDrop(this)}});
return i},{requires:["node","base","./ddm"]});
KISSY.add("dd/proxy",function(h,k){function m(){m.superclass.constructor.apply(this,arguments);this[g]={}}var g="__proxy_destructors",i="__proxy";m.ATTRS={node:{value:function(b){return new k(b.get("node")[0].cloneNode(true))}},destroyOnEnd:{value:false}};h.extend(m,h.Base,{attach:function(b){function a(){var j=f.get("node"),q=b.get("node");if(!f[i]&&h.isFunction(j)){j=j(b);j.addClass("ks-dd-proxy");j.css("position","absolute");f[i]=j}q.parent().append(f[i]);f[i].show();f[i].offset(q.offset());b.set("dragNode",
q);b.set("node",f[i])}function d(){var j=f[i];b.get("dragNode").offset(j.offset());j.hide();if(f.get("destroyOnEnd")){j.remove();f[i]=null}b.set("node",b.get("dragNode"))}if(!b.__proxy_id){var f=this;b.on("dragstart",a);b.on("dragend",d);var l=b.__proxy_id=h.guid("dd-proxyid-");f[g][l]={drag:b,fn:function(){b.detach("dragstart",a);b.detach("dragend",d)}}}},unAttach:function(b){var a=b.__proxy_id;if(a){this[g][a].fn();delete this[g][a];delete b.__proxy_id}},destroy:function(){var b=this.get("node");
b&&!h.isFunction(b)&&b.remove();for(var a in this[g])this.unAttach(this[g][a].drag)}});return m},{requires:["node"]});
KISSY.add("dd/draggable-delegate",function(h,k,m,g){function i(){i.superclass.constructor.apply(this,arguments)}h.extend(i,m,{_init:function(){var b=this.get("handlers"),a=this.get("container");b.length==0&&b.push(this.get("selector"));a.on("mousedown",this._handleMouseDown,this)},_getHandler:function(b){for(var a=this.get("container"),d=this.get("handlers");b&&b[0]!==a[0];){for(var f=0;f<d.length;f++)if(g.test(b[0],d[f],a[0]))return b;b=b.parent()}},_getNode:function(b){for(var a=this.get("container"),
d=this.get("selector");b&&b[0]!=a[0];){if(g.test(b[0],d,a[0]))return b;b=b.parent()}},_handleMouseDown:function(b){var a=b.target;if(a=a&&this._getHandler(a))if(a=this._getNode(a)){b.preventDefault();this.set("node",a);this.set("dragNode",a);this._prepare(b)}},destroy:function(){this.get("container").detach("mousedown",this._handleMouseDown,this);this.detach()}},{ATTRS:{container:{setter:function(b){return h.one(b)}},selector:{}}});return i},{requires:["./ddm","./draggable","dom"]});
KISSY.add("dd/droppable-delegate",function(h,k,m,g,i){function b(){b.superclass.constructor.apply(this,arguments)}h.extend(b,m,{getNodeFromTarget:function(a){a={left:a.pageX,top:a.pageY};var d=this.get("container"),f=this.get("selector");d=d.all(f);for(f=0;f<d.length;f++){var l=new i(d[f]);if(!l.hasClass("ks-dd-proxy")&&k.inRegion(k.region(l),a)){this.set("lastNode",this.get("node"));this.set("node",l);return l}}return null},_handleOut:function(){b.superclass._handleOut.call(this);this.set("node",
null);this.set("lastNode",null)},_handleOver:function(a){var d=k.get("activeDrop");k.set("activeDrop",this);var f=k.get("activeDrag");this.get("node").addClass(k.get("prefixCls")+"drop-over");a=h.mix({drag:f,drop:this},a);var l=this.get("node"),j=this.get("lastNode");if(this!=d||!j||j&&j[0]!==l[0]){if(j){this.set("node",j);b.superclass._handleOut.call(this)}this.set("node",l);f.get("node").addClass(k.get("prefixCls")+"drag-over");f.fire("dragenter",a);this.fire("dropenter",a);k.fire("dragenter",a);
k.fire("dropenter",a)}else{f.fire("dragover",a);this.fire("dropover",a);k.fire("dragover",a);k.fire("dropover",a)}}},{ATTRS:{lastNode:{},selector:{},container:{setter:function(a){return h.one(a)}}}});return b},{requires:["./ddm","./droppable","dom","node"]});
KISSY.add("dd/scroll",function(h,k,m,g){function i(){i.superclass.constructor.apply(this,arguments);this[b]={}}var b="__dd_scrolls";i.ATTRS={node:{setter:function(a){return m.one(a)}},rate:{value:[10,10]},diff:{value:[20,20]}};h.extend(i,k,{getRegion:function(a){return!a||a==window?{width:g.viewportWidth(),height:g.viewportHeight()}:{width:a[0].offsetWidth,height:a[0].offsetHeight}},getOffset:function(a){return!a||a==window?{left:g.scrollLeft(),top:g.scrollTop()}:a.offset()},getScroll:function(a){return!a||
a==window?{left:g.scrollLeft(),top:g.scrollTop()}:{left:a[0].scrollLeft,top:a[0].scrollTop}},setScroll:function(a,d){if(!a||a==window)window.scrollTo(d.left,d.top);else{a[0].scrollLeft=d.left;a[0].scrollTop=d.top}},unAttach:function(a){var d=a["__dd-scroll-id-"];if(d){this[b][d].fn();delete a["__dd-scroll-id-"];delete this[b][d]}},destroy:function(){for(var a in this[b])this.unAttach(this[b][a].drag)},attach:function(a){function d(o){if(!o.fake){var t=j.get("node");c=o;e=h.clone(a.mousePos);o=j.getOffset(t);
e.left-=o.left;e.top-=o.top;n||l()}}function f(){clearTimeout(n);n=null}function l(){var o=j.get("node"),t=j.getRegion(o),w=t.width;t=t.height;var r=j.getScroll(o),u=h.clone(r),p=false;if(e.top-t>=-v[1]){r.top+=q[1];p=true}if(e.top<=v[1]){r.top-=q[1];p=true}if(e.left-w>=-v[0]){r.left+=q[0];p=true}if(e.left<=v[0]){r.left-=q[0];p=true}if(p){j.setScroll(o,r);n=setTimeout(arguments.callee,100);c.fake=true;if(!o||o==window){r=j.getScroll(o);c.left+=r.left-u.left;c.top+=r.top-u.top}a.fire("drag",c)}else n=
null}if(!a["__dd-scroll-id-"]){var j=this,q=j.get("rate"),v=j.get("diff"),c,e,n=null;a.on("drag",d);a.on("dragend",f);var s=a["__dd-scroll-id-"]=h.guid("__dd-scroll-id-");j[b][s]={drag:a,fn:function(){a.detach("drag",d);a.detach("dragend",f)}}}}});return i},{requires:["base","node","dom"]});
KISSY.add("dd",function(h,k,m,g,i,b,a,d){k={Draggable:m,Droppable:g,DDM:k,Proxy:i,DraggableDelegate:b,DroppableDelegate:a,Scroll:d};h.mix(h,k);return k},{requires:["dd/ddm","dd/draggable","dd/droppable","dd/proxy","dd/draggable-delegate","dd/droppable-delegate","dd/scroll"]});
