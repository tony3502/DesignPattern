var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Beverage = /** @class */ (function () {
    function Beverage() {
    }
    Beverage.prototype.getDescription = function () {
        return this.beverageName;
    };
    return Beverage;
}());
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Beverage));
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.beverageName = "Espresso";
        return _this;
    }
    Espresso.prototype.cost = function () {
        return 50;
    };
    return Espresso;
}(Beverage));
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        var _this = _super.call(this) || this;
        _this.beverageName = "Tea";
        return _this;
    }
    Tea.prototype.cost = function () {
        return 30;
    };
    return Tea;
}(Beverage));
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(addbeverage) {
        var _this = _super.call(this) || this;
        _this.beverage = addbeverage;
        return _this;
    }
    Milk.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Milk";
    };
    Milk.prototype.cost = function () {
        return this.beverage.cost() + 5;
    };
    return Milk;
}(CondimentDecorator));
var Bubble = /** @class */ (function (_super) {
    __extends(Bubble, _super);
    function Bubble(addbeverage) {
        var _this = _super.call(this) || this;
        _this.beverage = addbeverage;
        return _this;
    }
    Bubble.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Bubble";
    };
    Bubble.prototype.cost = function () {
        return this.beverage.cost() + 10;
    };
    return Bubble;
}(CondimentDecorator));
var espresso = new Espresso();
espresso = new Milk(espresso);
console.log(espresso.getDescription());
espresso = new Bubble(espresso);
espresso = new Bubble(espresso);
espresso = new Bubble(espresso);
console.log(espresso.cost());
console.log(espresso.getDescription());
