/**
 * skylark-domx-plugins-interact - The interact features enhancement for dom.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-noder","skylark-domx-data","skylark-domx-geom","skylark-domx-eventer","skylark-domx-styler","skylark-domx-query","skylark-domx-plugins-base","./interact"],function(a,r,t,e,o,s,l,n,i){o.on,o.off,t.attr,t.removeAttr,e.pagePosition,s.addClass,e.height,Array.prototype.some,Array.prototype.map;function c(a,r){l(a).forEach(function(a){let t=l(a);var e=t.data("originalTransform");e||(e=t.css("transform"),t.data("originalTransform",e)),t.css("transform",e+" translateZ("+r+"px")})}var k=n.Plugin.inherit({klassName:"Scalable",pluginName:"lark.interact.scalable",_construct:function(a,r){n.Plugin.prototype._construct.call(this,a,r);let t=this.options.radius||0,e=this.options.targets||a;o.on(a,"mousewheel",function(a){var r=a.wheelDelta/20||-a.detail;c(e,t+=r)}),c(e,t)}});return n.register(k,"scalable"),i.Scalable=k});
//# sourceMappingURL=sourcemaps/scalable.js.map
