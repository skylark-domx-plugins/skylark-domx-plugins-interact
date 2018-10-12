/**
 * skylark-utils-interact - The interact features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./interact","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/geom","skylark-utils/eventer","skylark-utils/styler"],function(e,t,o,n,r,i,a){function s(e,t){function n(e){var t,o;if(e.changedTouches)for(t="screenX screenY pageX pageY clientX clientY".split(" "),o=0;o<t.length;o++)e[t[o]]=e.changedTouches[0][t[o]]}t=t||{};var s,u,c,l,m,f,d,p,v=t.handle||e,h=t.auto!==!1,g=t.constraints,y=t.document||document,k=t.started,X=t.moving,Y=t.stopped,c=function(t){var c,h=r.getDocumentSize(y);n(t),t.preventDefault(),u=t.button,m=t.screenX,f=t.screenY,d=r.relativePosition(e),p=r.size(e),c=a.css(v,"curosr"),s=o.createElement("div"),a.css(s,{position:"absolute",top:0,left:0,width:h.width,height:h.height,zIndex:2147483647,opacity:1e-4,cursor:c}),o.append(y.body,s),i.on(y,"mousemove touchmove",x).on(y,"mouseup touchend",l),k&&k(t)},x=function(t){if(n(t),0!==t.button)return l(t);if(t.deltaX=t.screenX-m,t.deltaY=t.screenY-f,h){var o=d.left+t.deltaX,i=d.top+t.deltaY;g&&(o<g.minX&&(o=g.minX),o>g.maxX&&(o=g.maxX),i<g.minY&&(i=g.minY),i>g.maxY&&(i=g.maxY))}r.relativePosition(e,{left:o,top:i}),t.preventDefault(),X&&X(t)},l=function(e){n(e),i.off(y,"mousemove touchmove",x).off(y,"mouseup touchend",l),o.remove(s),Y&&Y(e)};return i.on(v,"mousedown touchstart",c),{remove:function(){i.off(v)}}}function u(){return u}i.on,i.off,n.attr,n.removeAttr,r.pagePosition,a.addClass,r.height,Array.prototype.some,Array.prototype.map;return t.mixin(u,{movable:s}),e.mover=u});
//# sourceMappingURL=sourcemaps/mover.js.map
