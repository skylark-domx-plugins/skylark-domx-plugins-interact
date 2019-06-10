/**
 * skylark-ui-interact - The interact features enhancement for dom.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/noder","skylark-utils-dom/datax","skylark-utils-dom/geom","skylark-utils-dom/eventer","skylark-utils-dom/styler","skylark-utils-dom/query","./interact","./Movable"],function(t,e,r,a,i,o,n,l,s){i.on,i.off,r.attr,r.removeAttr,a.pagePosition,o.addClass,a.height,Array.prototype.some,Array.prototype.map;var c,d,u,h,p,m,f,g,k="",y={left:!0,right:!0,top:!0,bottom:!0};function v(t){t.target;h=a.size(u),m&&m(t)}function b(t){p={},y.left||y.right?p.width=h.width+t.deltaX:p.width=h.width,y.top||y.bottom?p.height=h.height+t.deltaY:p.height=h.height,a.size(u,p),a.pageRect(c,a.pageRect(u)),f&&f(t)}function z(t){g&&g(t)}function w(){return w}return t.mixin(w,{init:function(t){k=(t=t||{}).classPrefix||"";var r=t.appendTo||document.body;for(var a in c=e.createElement("div",{class:k+"resizer-c"}),e.append(r,c),d={},["tl","tc","tr","cl","cr","bl","bc","br"].forEach(function(t){return d[t]=e.createElement("i",{class:k+"resizer-h "+k+"resizer-h-"+t,"data-resize-handler":t})}),d){var i=d[a];e.append(c,i),s(i,{auto:!1,started:v,moving:b,stopped:z})}},select:function(t,e){t&&t===u||(u=t,startDim=rectDim=startPos=null,a.pageRect(c,a.pageRect(u)),o.show(c))},unselect:function(t){c&&o.hide(c),u=null}}),l.Selectable=w});
//# sourceMappingURL=sourcemaps/Selectable.js.map
