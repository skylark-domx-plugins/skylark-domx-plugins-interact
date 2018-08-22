/**
 * skylark-utils-interact - The interact features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./interact","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/geom","skylark-utils/eventer","./mover","skylark-utils/styler","skylark-utils/query"],function(t,e,r,i,a,n,o,s,l){function c(t){t=t||{},R=t.classPrefix||"";var e=t.appendTo||document.body;m=r.createElement("div",{"class":R+"resizer-c"}),r.append(e,m),k={},["tl","tc","tr","cl","cr","bl","bc","br"].forEach(function(t){return k[t]=r.createElement("i",{"class":R+"resizer-h "+R+"resizer-h-"+t,"data-resize-handler":t})});for(var i in k){var a=k[i];r.append(m,a),o.movable(a,{auto:!1,started:u,moving:d,stopped:h})}}function u(t){t.target;v=a.size(y),z&&z(t)}function d(t){b={},A.left||A.right?b.width=v.width+t.deltaX:b.width=v.width,A.top||A.bottom?b.height=v.height+t.deltaY:b.height=v.height,a.size(y,b),a.pageRect(m,a.pageRect(y)),w&&w(t)}function h(t){x&&x(t)}function p(t,e){t&&t===y||(y=t,startDim=rectDim=startPos=null,a.pageRect(m,a.pageRect(y)),s.show(m))}function f(t){m&&s.hide(m),y=null}function g(){return g}var m,k,y,v,b,z,w,x,R=(n.on,n.off,i.attr,i.removeAttr,a.pagePosition,s.addClass,a.height,Array.prototype.some,Array.prototype.map,""),A={left:!0,right:!0,top:!0,bottom:!0};return e.mixin(g,{init:c,select:p,unselect:f}),t.selector=g});
//# sourceMappingURL=sourcemaps/selector.js.map
