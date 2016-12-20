"use strict";

let moduleName = location.pathname.slice(1); // /about

let context = require.context('./routes', false, /\.js$/);

context.keys().forEach(function (path) {
    let module = context(path);
    module();
});


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