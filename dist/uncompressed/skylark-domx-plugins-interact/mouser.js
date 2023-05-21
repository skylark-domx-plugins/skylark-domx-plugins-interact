define( [
	"skylark-domx-data",
	"skylark-domx-plugins-base",
    "./interact"
],function(datax,plugins, interact) {

	var Mouser = plugins.Plugin.inherit({
		klassName : "Mouser",

		pluginName : "lark.interact.mouser",

		options: {
			cancel: "input, textarea, button, select, option",
			distance: 1,
			delay: 0,

			// These are placeholder methods, to be overriden by caller
			started: function( /* event */ ) {},
			moving: function( /* event */ ) {},
			stopped: function( /* event */ ) {},
			capture: function( /* event */ ) { return true; }
		},

        _construct : function (elm, options) {
            plugins.Plugin.prototype._construct.call(this,elm,options);

            options = this.options;
            this._startedCallback = options.started; 
            this._movingCallback = options.moving;
            this._stoppedCallback = options.stopped;
            this._captureCallback = options.capture;

			this.listenTo({
				"mousedown" : this._mouseDown,
				"click" : this._click
			});

			this.started = false;

        },

		_click : function(event) {
			if ( true === datax.data( event.target, this.pluginName + ".preventClickEvent" ) ) {
				datax.removeData( event.target, this.pluginName + ".preventClickEvent" );
				event.stopImmediatePropagation();
				return false;
			}
		},

		_mouseDown: function( event ) {
    		this._mouseMoved = false;

			// We may have missed mouseup (out of window)
			if (this._mouseStarted) {
				this._mouseUp(event);	
			} 

			this._mouseDownEvent = event;

			var that = this,
				btnIsLeft = ( event.which === 1 );

				// event.target.nodeName works around a bug in IE 8 with
				// disabled inputs (#7620)
				////elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				///$( event.target).closest( this.options.cancel ).length : false );
			///if ( !btnIsLeft || elIsCancel || !this._captureCallback( event )) {
			if ( !btnIsLeft  || !this._captureCallback( event )) {
				return true;
			}

			this.mouseDelayMet = !this.options.delay;
			if ( !this.mouseDelayMet ) {
				this._mouseDelayTimer = setTimeout( function() {
					that.mouseDelayMet = true;
				}, this.options.delay );
			}

			if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
				this._mouseStarted = ( this._startedCallback( event ) !== false );
				if ( !this._mouseStarted ) {
					event.preventDefault();
					return true;
				}
			}

			// Click event may never have fired (Gecko & Opera)
			if ( true === datax.data( event.target, this.pluginName + ".preventClickEvent" ) ) {
				datax.removeData( event.target, this.pluginName + ".preventClickEvent" );
			}

			// These delegates are required to keep context
			/*
			this._mouseMoveDelegate = function( event ) {
				return that._mouseMove( event );
			};
			this._mouseUpDelegate = function( event ) {
				return that._mouseUp( event );
			};

			$doc
				.on( "mousemove." + this.pluginName, this._mouseMoveDelegate )
				.on( "mouseup." + this.pluginName, this._mouseUpDelegate );
			*/

			this._startX = event.screenX;
            this._startY = event.screenY;

			this.listenTo(document,{
				mousemove : this._mouseMove,
				mouseup : this._mouseUp
			})

			this._domx.eventer.stop(event);

			return true;
		},

		_mouseMove: function( event ) {
            event.deltaX = event.screenX - this._startX;
            event.deltaY = event.screenY - this._startY;

			if ( event.which || event.button ) {
				this._mouseMoved = true;
			}

			if ( this._mouseStarted ) {
				this._movingCallback( event );
				return event.preventDefault();
			}

			if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
				this._mouseStarted =
					( this._startedCallback( this._mouseDownEvent, event ) !== false );
				if(this._mouseStarted) {
					this._movingCallback( event );	
				}  else {
					this._mouseUp( event )
				};
			}

			return !this._mouseStarted;
		},

		_mouseUp: function( event ) {
			this.unlistenTo(document);

			if ( this._mouseStarted ) {
				this._mouseStarted = false;

				if ( event.target === this._mouseDownEvent.target ) {
					datax.data( event.target, this.pluginName + ".preventClickEvent", true );
				}

				this._stoppedCallback( event );
			}

			if ( this._mouseDelayTimer ) {
				clearTimeout( this._mouseDelayTimer );
				delete this._mouseDelayTimer;
			}

			this._mouseHandled = false;
			event.preventDefault();
		},

		_mouseDistanceMet: function( event ) {
			return ( Math.max(
					Math.abs( this._mouseDownEvent.pageX - event.pageX ),
					Math.abs( this._mouseDownEvent.pageY - event.pageY )
				) >= this.options.distance
			);
		},

		_mouseDelayMet: function( /* event */ ) {
			return this.mouseDelayMet;
		}
	});


	plugins.register(Mouser);

	return interact.Mouser = Mouser;
});
