"use strict";

let moduleName = location.pathname.slice(1); // /about

let route = require('./routes/' + moduleName);
route();

/*let handler;
try {
    let context = require.context('bundle!./routes/', true, /^\.\//);
    handler = context('./' + moduleName);
} catch (e) {
    alert("No such path");
}

if (handler) {
    handler(function(route) {

        route();

    });
}*/