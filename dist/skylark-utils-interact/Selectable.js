/**
 * skylark-utils-interact - The interact features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/noder","skylark-utils-dom/datax","skylark-utils-dom/geom","skylark-utils-dom/eventer","skylark-utils-dom/styler","skylark-utils-dom/query","./interact","./Movable"],function(t,e,r,a,i,o,n,l,s){function c(t){t=t||{},R=t.classPrefix||"";var r=t.appendTo||document.body;g=e.createElement("div",{"class":R+"resizer-c"}),e.append(r,g),k={},["tl","tc","tr","cl","cr","bl","bc","br"].forEach(function(t){return k[t]=e.createElement("i",{"class":R+"resizer-h "+R+"resizer-h-"+t,"data-resize-handler":t})});for(var a in k){var i=k[a];e.append(g,i),s(i,{auto:!1,started:d,moving:u,stopped:h})}}function d(t){t.target;v=a.size(y),z&&z(t)}function u(t){b={},A.left||A.right?b.width=v.width+t.deltaX:b.width=v.width,A.top||A.bottom?b.height=v.height+t.deltaY:b.height=v.height,a.size(y,b),a.pageRect(g,a.pageRect(y)),w&&w(t)}function h(t){x&&x(t)}function p(t,e){t&&t===y||(y=t,startDim=rectDim=startPos=null,a.pageRect(g,a.pageRect(y)),o.show(g))}function m(t){g&&o.hide(g),y=null}function f(){return f}var g,k,y,v,b,z,w,x,R=(i.on,i.off,r.attr,r.removeAttr,a.pagePosition,o.addClass,a.height,Array.prototype.some,Array.prototype.map,""),A={left:!0,right:!0,top:!0,bottom:!0};return t.mixin(f,{init:c,select:p,unselect:m}),l.Selectable=f});
//# sourceMappingURL=sourcemaps/Selectable.js.map
