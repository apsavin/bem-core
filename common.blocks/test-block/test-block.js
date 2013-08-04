/**
 * @module i-bem__dom
 */
modules.define('i-bem__dom', function (provide, DOM) {

    /**
     * @class
     * @extends DOM
     */
    var TestBlock = DOM.decl('test-block', /**@lends TestBlock.prototype*/{
        onSetMod: {
            js: {
                inited: function () {
                    var someAnotherBlock = this.findBlockInside('some-another-block');
                    someAnotherBlock.setMod('finded', 'yes');
                    this.on('event', this._onEvent, this);
                },

                '': function () {
                    this.emit('destroy');
                }
            }
        },

        /**
         * @param {events:Event} e
         * @private
         */
        _onEvent: function (e) {
            console.log(e)
        }

    }, /**@lends TestBlock*/{
        live: function () {
            this.liveBindTo('elem', 'click')
        }
    });

    provide(DOM);

});