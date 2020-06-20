define([], function() {
    "use strict";

    var version = "1.0.0";

    class Tools {
        constructor(selector, context) {
            return new Tools.fn.init(selector, context);
        }
    }

    Tools.fn = Tools.prototype = {
        tools: version,
        constructor: Tools,
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
    }

    return Tools;
});