var home = function (e) {
    function r(o) {
        if (t[o])return t[o].exports;
        var n = t[o] = {exports: {}, id: o, loaded: !1};
        return e[o].call(n.exports, n, n.exports, r), n.loaded = !0, n.exports
    }

    var t = {};
    return r.m = e, r.c = t, r.p = "", r(0)
}([function (e, r, t) {
    "use strict";
    var o = t(1);
    o("home"), r.welcome = o
}, function (e, r, t) {
    "use strict";
    e.exports = function (e) {
        alert("welcome " + e)
    }
}]);