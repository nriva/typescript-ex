"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pair = /** @class */ (function () {
    function Pair(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Pair;
}());
;
var TwoArrays = /** @class */ (function (_super) {
    __extends(TwoArrays, _super);
    function TwoArrays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TwoArrays;
}(Pair));
;
var ta = new TwoArrays([], []);
