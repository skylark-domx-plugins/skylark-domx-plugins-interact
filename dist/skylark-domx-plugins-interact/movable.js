/**
 * skylark-domx-plugins-interact - The interact features enhancement for dom.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-plugins-base","./interact","./mouser"],function(t,e,o,n,a,i,r,s,l){a.on,a.off,o.attr,o.removeAttr,n.pagePosition,i.addClass,n.height,Array.prototype.some,Array.prototype.map;var m=r.Plugin.inherit({klassName:"Movable",pluginName:"lark.interact.movable",_construct:function(o,a){function r(t){t.movable=d,t.moveEl=o,t.handleEl=u}this.overrided(o,a);var s,m,d=this,u=(a=this.options).handle||o,p=!1!==a.auto,v=a.constraints,c=a.document||document,h=a.starting,f=a.started,g=a.moving,k=a.stopped,y=function(t){e.remove(s),k&&k(t)};this._handleEl=u,this._mouser=new l(this._handleEl,{started:function(a){var l,d=n.getDocumentSize(c);if(r(a),h){var p=h(a);if(!1===p)return;t.isPlainObject(p)&&(p.constraints&&(v=p.constraints),p.started&&(f=p.started),p.moving&&(g=p.moving),p.stopped&&(k=p.stopped))}a.preventDefault(),a.button,m=n.relativePosition(o),n.size(o),l=i.css(u,"cursor"),s=e.createElement("div"),i.css(s,{position:"absolute",top:0,left:0,width:d.width,height:d.height,zIndex:2147483647,opacity:1e-4,cursor:l}),e.append(c.body,s),f&&f(a)},moving:function(t){if(r(t),0!==t.button)return y(t);if(p){var e=m.left+t.deltaX,a=m.top+t.deltaY;v&&(e<v.minX&&(e=v.minX),e>v.maxX&&(e=v.maxX),a<v.minY&&(a=v.minY),a>v.maxY&&(a=v.maxY))}n.relativePosition(o,{left:e,top:a}),t.preventDefault(),g&&g(t)},stopped:y})},remove:function(){this._mouser.destroy(),this._mouser=null}});return r.register(m,"movable"),s.Movable=m});
//# sourceMappingURL=sourcemaps/movable.js.map
