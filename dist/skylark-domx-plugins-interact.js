/**
 * skylark-domx-plugins-interact - The interact features enhancement for dom.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var t=r.define,require=r.require,a="function"==typeof t&&t.amd,n=!a&&"undefined"!=typeof exports;if(!a&&!t){var o={};t=r.define=function(e,r,t){"function"==typeof t?(o[e]={factory:t,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var t=r.split("/"),a=e.split("/");t.pop();for(var n=0;n<a.length;n++)"."!=a[n]&&(".."==a[n]?t.pop():t.push(a[n]));return t.join("/")}(r,e)}),resolved:!1,exports:null},require(e)):o[e]={factory:null,resolved:!0,exports:t}},require=r.require=function(e){if(!o.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=o[e];if(!module.resolved){var t=[];module.deps.forEach(function(e){t.push(require(e))}),module.exports=module.factory.apply(r,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-domx-plugins-interact/polyfill",[],function(){}),e("skylark-domx-plugins-interact/interact",["skylark-langx/skylark","./polyfill"],function(e){return e.attach("domx.interact",{})}),e("skylark-domx-plugins-interact/ddmanager",["./interact","skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-finder","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler"],function(e,r,t,a,n,o,i,s){i.on,i.off,a.attr,a.removeAttr,o.pagePosition,s.addClass,o.height;var l=e.DndManager=r.Evented.inherit({klassName:"DndManager",init:function(){},prepare:function(e){var r=i.create("preparing",{dragSource:e.dragSource,dragHandle:e.dragHandle});e.trigger(r),e.dragSource=r.dragSource},start:function(e,t){var a=o.pagePosition(e.dragSource);this.draggingOffsetX=parseInt(t.pageX-a.left),this.draggingOffsetY=parseInt(t.pageY-a.top);var n=i.create("started",{elm:e.elm,dragSource:e.dragSource,dragHandle:e.dragHandle,ghost:null,transfer:{}});e.trigger(n),this.dragging=e,e.draggingClass&&s.addClass(e.dragSource,e.draggingClass),this.draggingGhost=n.ghost,this.draggingGhost||(this.draggingGhost=e.elm),this.draggingTransfer=n.transfer,this.draggingTransfer&&r.each(this.draggingTransfer,function(e,r){t.dataTransfer.setData(e,r)}),t.dataTransfer.setDragImage(this.draggingGhost,this.draggingOffsetX,this.draggingOffsetY),t.dataTransfer.effectAllowed="copyMove";var l=i.create("dndStarted",{elm:n.elm,dragSource:n.dragSource,dragHandle:n.dragHandle,ghost:n.ghost,transfer:n.transfer});this.trigger(l)},over:function(){},end:function(e){var r=this.dragging;r&&r.draggingClass&&s.removeClass(r.dragSource,r.draggingClass);var t=i.create("dndEnded",{});this.trigger(t),this.dragging=null,this.draggingTransfer=null,this.draggingGhost=null,this.draggingOffsetX=null,this.draggingOffsetY=null}}),d=new l;return d}),e("skylark-domx-plugins-interact/Draggable",["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-finder","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-plugins","./interact","./ddmanager"],function(e,r,t,a,n,o,i,s,l,d){o.on,o.off,t.attr,t.removeAttr,n.pagePosition,i.addClass,n.height;var g=s.Plugin.inherit({klassName:"Draggable",pluginName:"lark.draggable",options:{draggingClass:"dragging"},_construct:function(r,n){this.overrided(r,n);var i=this,n=this.options;i.draggingClass=n.draggingClass,["preparing","started","ended","moving"].forEach(function(r){e.isFunction(n[r])&&i.on(r,n[r])}),o.on(r,{mousedown:function(e){var r=i.options;r.handle&&(i.dragHandle=a.closest(e.target,r.handle),!i.dragHandle)||(r.source?i.dragSource=a.closest(e.target,r.source):i.dragSource=i._elm,d.prepare(i),i.dragSource&&t.attr(i.dragSource,"draggable","true"))},mouseup:function(e){i.dragSource&&(i.dragSource=null,i.dragHandle=null)},dragstart:function(e){t.attr(i.dragSource,"draggable","false"),d.start(i,e)},dragend:function(e){o.stop(e),d.dragging&&d.end(!1)}})}});return s.register(g,"draggable"),l.Draggable=g}),e("skylark-domx-plugins-interact/Droppable",["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-finder","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-plugins","./interact","./ddmanager"],function(e,r,t,a,n,o,i,s,l,d){o.on,o.off,t.attr,t.removeAttr,n.pagePosition,i.addClass,n.height;var g=s.Plugin.inherit({klassName:"Droppable",pluginName:"lark.droppable",options:{draggingClass:"dragging"},_construct:function(r,t){this.overrided(r,t);var a,n,s=this,t=s.options,l=(t.draggingClass,!0);["started","entered","leaved","dropped","overing"].forEach(function(r){e.isFunction(t[r])&&s.on(r,t[r])}),o.on(r,{dragover:function(e){if(e.stopPropagation(),l){var r=o.create("overing",{overElm:e.target,transfer:d.draggingTransfer,acceptable:!0});s.trigger(r),r.acceptable&&(e.preventDefault(),e.dataTransfer.dropEffect="copyMove")}},dragenter:function(e){s.options;var r=s._elm,t=o.create("entered",{transfer:d.draggingTransfer});s.trigger(t),e.stopPropagation(),a&&l&&i.addClass(r,a)},dragleave:function(e){s.options;var r=s._elm;if(!l)return!1;var t=o.create("leaved",{transfer:d.draggingTransfer});s.trigger(t),e.stopPropagation(),a&&l&&i.removeClass(r,a)},drop:function(e){s.options;var r=s._elm;if(o.stop(e),d.dragging){a&&l&&i.addClass(r,a);var t=o.create("dropped",{transfer:d.draggingTransfer});s.trigger(t),d.end(!0)}}}),d.on("dndStarted",function(e){var t=o.create("started",{transfer:d.draggingTransfer,acceptable:!1});s.trigger(t),l=t.acceptable,a=t.hoverClass,(n=t.activeClass)&&l&&i.addClass(r,n)}).on("dndEnded",function(e){var t=o.create("ended",{transfer:d.draggingTransfer,acceptable:!1});s.trigger(t),a&&l&&i.removeClass(r,a),n&&l&&i.removeClass(r,n),l=!1,n=null,a=null})}});return s.register(g,"droppable"),l.Droppable=g}),e("skylark-domx-plugins-interact/Movable",["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-plugins","./interact"],function(e,r,t,a,n,o,i,s){n.on,n.off,t.attr,t.removeAttr,a.pagePosition,o.addClass,a.height,Array.prototype.some,Array.prototype.map;var l=i.Plugin.inherit({klassName:"Movable",pluginName:"lark.movable",_construct:function(e,t){function i(e){var r,t;if(e.changedTouches)for(r="screenX screenY pageX pageY clientX clientY".split(" "),t=0;t<r.length;t++)e[r[t]]=e.changedTouches[0][r[t]]}this.overrided(e,t);var s,l,d,g,c=(t=this.options).handle||e,u=!1!==t.auto,p=t.constraints,f=t.document||document,m=t.started,h=t.moving,k=t.stopped,v=function(r){if(i(r),0!==r.button)return y(r);if(r.deltaX=r.screenX-l,r.deltaY=r.screenY-d,u){var t=g.left+r.deltaX,n=g.top+r.deltaY;p&&(t<p.minX&&(t=p.minX),t>p.maxX&&(t=p.maxX),n<p.minY&&(n=p.minY),n>p.maxY&&(n=p.maxY))}a.relativePosition(e,{left:t,top:n}),r.preventDefault(),h&&h(r)},y=function(e){i(e),n.off(f,"mousemove touchmove",v).off(f,"mouseup touchend",y),r.remove(s),k&&k(e)};n.on(c,"mousedown touchstart",function(t){var u,p=a.getDocumentSize(f);i(t),t.preventDefault(),t.button,l=t.screenX,d=t.screenY,g=a.relativePosition(e),a.size(e),u=o.css(c,"curosr"),s=r.createElement("div"),o.css(s,{position:"absolute",top:0,left:0,width:p.width,height:p.height,zIndex:2147483647,opacity:1e-4,cursor:u}),r.append(f.body,s),n.on(f,"mousemove touchmove",v).on(f,"mouseup touchend",y),m&&m(t)}),this._handleEl=c},remove:function(){n.off(this._handleEl)}});return i.register(l,"movable"),s.Movable=l}),e("skylark-domx-plugins-interact/Resizable",["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-finder","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-query","skylark-domx-plugins","./interact","./Movable"],function(e,r,t,a,n,o,i,s,l,d,g){o.on,o.off,t.attr,t.removeAttr,n.pagePosition,i.addClass,n.height,Array.prototype.some,Array.prototype.map;var c=l.Plugin.inherit({klassName:"Resizable",pluginName:"lark.resizable",options:{touchActionNone:!0,direction:{top:!1,left:!1,right:!0,bottom:!0},handle:{border:!0,grabber:"",selector:!0}},_construct:function(r,t){this.overrided(r,t);var o,i,s,l=(t=this.options).handle||{},d=t.direction,c=t.started,u=t.moving,p=t.stopped;e.isString(l)?o=a.find(r,l):e.isHtmlNode(l)&&(o=l),g(o,{auto:!1,started:function(e){i=n.size(r),c&&c(e)},moving:function(e){s={},d.left||d.right?s.width=i.width+e.deltaX:s.width=i.width,d.top||d.bottom?s.height=i.height+e.deltaY:s.height=i.height,n.size(r,s),u&&u(e)},stopped:function(e){p&&p(e)}}),this._handleEl=o},remove:function(){o.off(this._handleEl)}});return l.register(c,"resizable"),d.Resizable=c}),e("skylark-domx-plugins-interact/Selectable",["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-query","./interact","./Movable"],function(e,r,t,a,n,o,i,s,l){n.on,n.off,t.attr,t.removeAttr,a.pagePosition,o.addClass,a.height,Array.prototype.some,Array.prototype.map;var d,g,c,u,p,f,m,h,k="",v={left:!0,right:!0,top:!0,bottom:!0};function y(e){e.target;u=a.size(c),f&&f(e)}function x(e){p={},v.left||v.right?p.width=u.width+e.deltaX:p.width=u.width,v.top||v.bottom?p.height=u.height+e.deltaY:p.height=u.height,a.size(c,p),a.pageRect(d,a.pageRect(c)),m&&m(e)}function b(e){h&&h(e)}function C(){return C}return e.mixin(C,{init:function(e){k=(e=e||{}).classPrefix||"";var t=e.appendTo||document.body;for(var a in d=r.createElement("div",{class:k+"resizer-c"}),r.append(t,d),g={},["tl","tc","tr","cl","cr","bl","bc","br"].forEach(function(e){return g[e]=r.createElement("i",{class:k+"resizer-h "+k+"resizer-h-"+e,"data-resize-handler":e})}),g){var n=g[a];r.append(d,n),l(n,{auto:!1,started:y,moving:x,stopped:b})}},select:function(e,r){if(e&&e===c)return;c=e,startDim=rectDim=startPos=null,a.pageRect(d,a.pageRect(c)),o.show(d)},unselect:function(e){d&&o.hide(d);c=null}}),s.Selectable=C}),e("skylark-domx-plugins-interact/Sortable",["./interact","skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-query","skylark-domx-plugins","./Draggable","./Droppable","./Movable","./Resizable"],function(e,r,t,a,n,o,i,s,l,d,g,c,u){o.on,o.off,a.attr,a.removeAttr,n.pagePosition,i.addClass,n.height,Array.prototype.some,Array.prototype.map,l.Plugin.inherit({klassName:"Sorter",enable:function(){},disable:function(){},destory:function(){}});var p,f=s(),m=l.Plugin.inherit({klassName:"Sortable",pluginName:"lark.sortable",options:{connectWith:!1,placeholder:null,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",items:null},_construct:function(e,r){this.overrided(e,r),r=this.options;var a,n=s(e),o=n.children(r.items),i=s(r.placeholder||t.createElement(/^(ul|ol)$/i.test(e.tagName)?"li":"div",{class:r.placeholderClass}));d(e,{source:r.items,handle:r.handle,draggingClass:r.draggingClass,preparing:function(e){},started:function(e){e.ghost=e.dragSource,e.transfer={text:"dummy"},a=(p=s(e.dragSource)).index()},ended:function(e){p&&(p.show(),f.detach(),a!=p.index()&&p.parent().trigger("sortupdate",{item:p}),p=null)}}),g(e,{started:function(e){e.acceptable=!0,e.activeClass="active",e.hoverClass="over"},overing:function(e){o.is(e.overElm)?(r.forcePlaceholderSize&&i.height(p.outerHeight()),p.hide(),s(e.overElm)[i.index()<s(e.overElm).index()?"after":"before"](i),f.not(i).detach()):f.is(e.overElm)||s(e.overElm).children(r.items).length||(f.detach(),s(e.overElm).append(i))},dropped:function(e){f.filter(":visible").after(p),p.show(),f.detach(),p=null}}),n.data("items",r.items),f=f.add(i),r.connectWith&&s(r.connectWith).add(this).data("connectWith",r.connectWith)}});return l.register(m,"sortable"),e.Sortable=m}),e("skylark-domx-plugins-interact/main",["./interact","./Draggable","./Droppable","./Movable","./Resizable","./Selectable","./Sortable"],function(e){return e}),e("skylark-domx-plugins-interact",["skylark-domx-plugins-interact/main"],function(e){return e})}(t),!a){var i=require("skylark-langx-ns");n?module.exports=i:r.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-plugins-interact.js.map
