define([
    "./interact",
    "skylark-langx/langx",
    "skylark-utils/noder",
    "skylark-utils/datax",
    "skylark-utils/geom",
    "skylark-utils/eventer",
    "skylark-utils/styler",
    "skylark-utils/dnd",
    "skylark-utils/query",
    "skylark-utils/widgets",
    "./mover",
    "./resizer"
],function(interact, langx,noder,datax,geom,eventer,styler,dnd,$,widgets,mover,resizer){
    var on = eventer.on,
        off = eventer.off,
        attr = datax.attr,
        removeAttr = datax.removeAttr,
        offset = geom.pagePosition,
        addClass = styler.addClass,
        height = geom.height,
        some = Array.prototype.some,
        map = Array.prototype.map;

    var Sorter = widgets.Widget.inherit({
        "klassName" : "Sorter",

        enable : function() {

        },
        
        disable : function() {

        },

        destory : function() {

        }
    });


    var dragging, placeholders = $();


    /*
     * @param {HTMLElement} container  the element to use as a sortable container
     * @param {Object} options  options object
     * @param {String} [options.items = ""] 
     * @param {Object} [options.connectWith =] the selector to create connected lists
     * @param {Object} [options
     * @param {Object} [options
     */
    function sortable(container,options) {
        options = langx.mixin({
            connectWith: false,
            placeholder: null,
            placeholderClass: 'sortable-placeholder',
            draggingClass: 'sortable-dragging',
            items : null

        },options);

        var isHandle, index, 
            $container = $(container), 
            $items = $container.children(options.items);
        var placeholder = $(options.placeholder || noder.createElement(/^(ul|ol)$/i.test(container.tagName) ? 'li' : 'div',{
            "class" : options.placeholderClass
        }));

        dnd.draggable(container,{
            source : options.items,
            handle : options.handle,
            draggingClass : options.draggingClass,
            preparing : function(e) {
                //e.dragSource = e.handleElm;
            },
            started :function(e) {
                e.ghost = e.dragSource;
                e.transfer = {
                    "text": "dummy"
                };
                index = (dragging = $(e.dragSource)).index();
            },
            ended : function(e) {
                if (!dragging) {
                    return;
                }
                dragging.show();
                placeholders.detach();
                if (index != dragging.index()) {
                    dragging.parent().trigger('sortupdate', {item: dragging});
                }
                dragging = null;                
            }

        });

        
        dnd.droppable(container,{
            started: function(e) {
                e.acceptable = true;
                e.activeClass = "active";
                e.hoverClass = "over";
            },
            overing : function(e) {
                if ($items.is(e.overElm)) {
                    if (options.forcePlaceholderSize) {
                        placeholder.height(dragging.outerHeight());
                    }
                    dragging.hide();
                    $(e.overElm)[placeholder.index() < $(e.overElm).index() ? 'after' : 'before'](placeholder);
                    placeholders.not(placeholder).detach();
                } else if (!placeholders.is(e.overElm) && !$(e.overElm).children(options.items).length) {
                    placeholders.detach();
                    $(e.overElm).append(placeholder);
                }                
            },
            dropped : function(e) {
                placeholders.filter(':visible').after(dragging);
                dragging.show();
                placeholders.detach();

                dragging = null;                
              }
        });

        $container.data('items', options.items)
        placeholders = placeholders.add(placeholder);
        if (options.connectWith) {
            $(options.connectWith).add(this).data('connectWith', options.connectWith);
        }
        
        return {
            remove : function() {

            }
        }
    }


    $.fn.sortable = function(options) {
        options = langx.mixin({
            connectWith: false
        }, options);
        return this.each(function() {
            sortable(this,options);
        });
    };

    function sorter(){
      return sorter;
    }

    langx.mixin(sorter, {

        sortable : sortable

    });

    return interact.sorter = sorter;
});
