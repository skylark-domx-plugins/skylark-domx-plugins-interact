/**
 * skylark-utils-interact - The interact features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-utils/skylark","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/finder","skylark-utils/geom","skylark-utils/eventer","./mover","skylark-utils/styler","skylark-utils/query"],function(t,e,i,r,o,n,s,a,l,d){function u(t,i){var r={touchActionNone:!0,direction:{top:!1,left:!1,right:!0,bottom:!0},handle:{border:!0,grabber:"",selector:!0}};i=i||{};var l,d,u,h=i.handle||{},k=i.direction||r.direction,f=i.started,c=i.moving,y=i.stopped;return e.isString(h)?l=o.find(t,h):e.isHtmlNode(h)&&(l=h),a.movable(l,{auto:!1,started:function(e){d=n.size(t),f&&f(e)},moving:function(e){u={},k.left||k.right?u.width=d.width+e.deltaX:u.width=d.width,k.top||k.bottom?u.height=d.height+e.deltaY:u.height=d.height,n.size(t,u),c&&c(e)},stopped:function(t){y&&y(t)}}),{remove:function(){s.off(l)}}}function h(){return h}s.on,s.off,r.attr,r.removeAttr,n.pagePosition,l.addClass,n.height,Array.prototype.some,Array.prototype.map;return d.fn.resizable=function(t){this.each(function(e){u(this,t)})},e.mixin(h,{resizable:u}),t.resizer=h});
//# sourceMappingURL=sourcemaps/resizer.js.map
