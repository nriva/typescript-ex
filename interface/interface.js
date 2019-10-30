"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare.area);
var p1 = { x: 10, y: 20 };
//p1.x = 5; // error!
console.log(p1.x);
var square = {};
square.color = "blue";
square.sideLength = 10;
//# sourceMappingURL=interface.js.map