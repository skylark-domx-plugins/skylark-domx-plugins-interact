/**
 * skylark-utils-interact - The interact features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./interact","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/finder","skylark-utils/geom","skylark-utils/eventer","./mover","skylark-utils/styler","skylark-utils/query"],function(t,e,i,r,o,n,s,a,l,d){function u(t,i){var r={touchActionNone:!0,direction:{top:!1,left:!1,right:!0,bottom:!0},handle:{border:!0,grabber:"",selector:!0}};i=i||{};var l,d,u,h=i.handle||{},f=i.direction||r.direction,c=i.started,k=i.moving,g=i.stopped;return e.isString(h)?l=o.find(t,h):e.isHtmlNode(h)&&(l=h),a.movable(l,{auto:!1,started:function(e){d=n.size(t),c&&c(e)},moving:function(e){u={},f.left||f.right?u.width=d.width+e.deltaX:u.width=d.width,f.top||f.bottom?u.height=d.height+e.deltaY:u.height=d.height,n.size(t,u),k&&k(e)},stopped:function(t){g&&g(t)}}),{remove:function(){s.off(l)}}}function h(){return h}s.on,s.off,r.attr,r.removeAttr,n.pagePosition,l.addClass,n.height,Array.prototype.some,Array.prototype.map;return d.fn.resizable=function(t){this.each(function(e){u(this,t)})},e.mixin(h,{resizable:u}),t.resizer=h});
//# sourceMappingURL=sourcemaps/resizer.js.map
