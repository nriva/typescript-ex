"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prova = /** @class */ (function () {
    function Prova() {
        this.lv = { label: "" };
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
    Object.defineProperty(Prova.prototype, "label", {
        set: function (value) {
            this.lv.label = value;
        },
        enumerable: true,
        configurable: true
    });
    Prova.prototype.toString = function () {
        if (this.lv && this.lv.label && this.lv.label != "")
            return this.lv.label + " : " + this._a;
        return this._a;
    };
    return Prova;
}());
var x = new Prova();
x.a = 10;
x.label = "Label";
console.log(x.toString());
