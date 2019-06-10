/**
 * skylark-domx-interact - The interact features enhancement for dom.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/noder","skylark-utils-dom/datax","skylark-utils-dom/finder","skylark-utils-dom/geom","skylark-utils-dom/eventer","skylark-utils-dom/styler","skylark-utils-dom/query","skylark-utils-dom/plugins","./interact","./Movable"],function(t,e,i,o,r,s,l,a,n,d,h){s.on,s.off,i.attr,i.removeAttr,r.pagePosition,l.addClass,r.height,Array.prototype.some,Array.prototype.map;var u=n.Plugin.inherit({klassName:"Resizable",pluginName:"lark.resizable",options:{touchActionNone:!0,direction:{top:!1,left:!1,right:!0,bottom:!0},handle:{border:!0,grabber:"",selector:!0}},_construct:function(e,i){this.overrided(e,i);var s,l,a,n=(i=this.options).handle||{},d=i.direction,u=i.started,k=i.moving,m=i.stopped;t.isString(n)?s=o.find(e,n):t.isHtmlNode(n)&&(s=n),h(s,{auto:!1,started:function(t){l=r.size(e),u&&u(t)},moving:function(t){a={},d.left||d.right?a.width=l.width+t.deltaX:a.width=l.width,d.top||d.bottom?a.height=l.height+t.deltaY:a.height=l.height,r.size(e,a),k&&k(t)},stopped:function(t){m&&m(t)}}),this._handleEl=s},remove:function(){s.off(this._handleEl)}});return n.register(u,"resizable"),d.Resizable=u});
//# sourceMappingURL=sourcemaps/Resizable.js.map
