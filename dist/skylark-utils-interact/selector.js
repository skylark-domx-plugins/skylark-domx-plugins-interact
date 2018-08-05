/**
 * skylark-utils-interact - The interact features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-utils/skylark","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/geom","skylark-utils/eventer","./mover","skylark-utils/styler","skylark-utils/query"],function(t,e,r,i,a,s,l,n,o){function c(t){t=t||{},R=t.classPrefix||"";var e=t.appendTo||document.body;g=r.createElement("div",{"class":R+"resizer-c"}),r.append(e,g),y={},["tl","tc","tr","cl","cr","bl","bc","br"].forEach(function(t){return y[t]=r.createElement("i",{"class":R+"resizer-h "+R+"resizer-h-"+t,"data-resize-handler":t})});for(var i in y){var a=y[i];r.append(g,a),l.movable(a,{auto:!1,started:u,moving:d,stopped:h})}}function u(t){t.target;v=a.size(m),z&&z(t)}function d(t){b={},A.left||A.right?b.width=v.width+t.deltaX:b.width=v.width,A.top||A.bottom?b.height=v.height+t.deltaY:b.height=v.height,a.size(m,b),a.pageRect(g,a.pageRect(m)),w&&w(t)}function h(t){x&&x(t)}function p(t,e){t&&t===m||(m=t,startDim=rectDim=startPos=null,a.pageRect(g,a.pageRect(m)),n.show(g))}function k(t){g&&n.hide(g),m=null}function f(){return f}var g,y,m,v,b,z,w,x,R=(s.on,s.off,i.attr,i.removeAttr,a.pagePosition,n.addClass,a.height,Array.prototype.some,Array.prototype.map,""),A={left:!0,right:!0,top:!0,bottom:!0};return e.mixin(f,{init:c,select:p,unselect:k}),t.selector=f});
//# sourceMappingURL=sourcemaps/selector.js.map
