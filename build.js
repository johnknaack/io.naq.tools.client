"use strict";

require("../io.naq.spellbook.webpack/index.js")
    .run((defaults, callback) => {
        callback(defaults._forWeb()._entryPoint())
    });
