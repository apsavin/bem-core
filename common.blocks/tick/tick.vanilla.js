/**
 * @module tick
 */
modules.define('tick', ['inherit', 'events'], function(provide, inherit, events) {

var TICK_INTERVAL = 50,
    global = this.global,
    /**
     * @class Tick
     * @extends events:Emitter
     */
    Tick = inherit(events.Emitter, /**@lends Tick.prototype*/{
        __constructor: function() {
            this._timer = null;
            this._isStarted = false;
        },

        start: function() {
            if(!this._isStarted) {
                this._isStarted = true;
                this._scheduleTick();
            }
        },

        stop: function() {
            if(this._isStarted) {
                this._isStarted = false;
                global.clearTimeout(this._timer);
            }
        },

        _scheduleTick: function() {
            this._timer = global.setTimeout(this._onTick.bind(this), TICK_INTERVAL);
        },

        _onTick: function() {
            this
                .emit('tick')
                ._scheduleTick();
        }
    });

provide(new Tick());

});