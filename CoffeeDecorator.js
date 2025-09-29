"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDecorator = void 0;
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(coffee) {
        this.coffee = coffee;
    }
    CoffeeDecorator.prototype.cost = function () {
        return this.coffee.cost();
    };
    CoffeeDecorator.prototype.description = function () {
        return this.coffee.description();
    };
    return CoffeeDecorator;
}());
exports.CoffeeDecorator = CoffeeDecorator;
