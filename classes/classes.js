"use strict";
var Prova = /** @class */ (function () {
    function Prova() {
    }
    Object.defineProperty(Prova.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: true,
        configurable: true
    });
    return Prova;
}());
var x = new Prova();
x.a = 10;
