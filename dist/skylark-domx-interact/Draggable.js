/**
 * skylark-domx-interact - The interact features enhancement for dom.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/noder","skylark-utils-dom/datax","skylark-utils-dom/finder","skylark-utils-dom/geom","skylark-utils-dom/eventer","skylark-utils-dom/styler","skylark-utils-dom/plugins","./interact","./ddmanager"],function(a,r,e,n,t,g,s,d,o,l){g.on,g.off,e.attr,e.removeAttr,t.pagePosition,s.addClass,t.height;var i=d.Plugin.inherit({klassName:"Draggable",pluginName:"lark.draggable",options:{draggingClass:"dragging"},_construct:function(r,t){this.overrided(r,t);var s=this;t=this.options;s.draggingClass=t.draggingClass,["preparing","started","ended","moving"].forEach(function(r){a.isFunction(t[r])&&s.on(r,t[r])}),g.on(r,{mousedown:function(a){var r=s.options;r.handle&&(s.dragHandle=n.closest(a.target,r.handle),!s.dragHandle)||(r.source?s.dragSource=n.closest(a.target,r.source):s.dragSource=s._elm,l.prepare(s),s.dragSource&&e.attr(s.dragSource,"draggable","true"))},mouseup:function(a){s.dragSource&&(s.dragSource=null,s.dragHandle=null)},dragstart:function(a){e.attr(s.dragSource,"draggable","false"),l.start(s,a)},dragend:function(a){g.stop(a),l.dragging&&l.end(!1)}})}});return d.register(i,"draggable"),o.Draggable=i});
//# sourceMappingURL=sourcemaps/Draggable.js.map
