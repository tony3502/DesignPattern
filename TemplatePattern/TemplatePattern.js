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
var CaffeineBeverage = /** @class */ (function () {
    function CaffeineBeverage() {
    }
    CaffeineBeverage.prototype.boilWater = function () {
        console.log("boiling water");
    };
    CaffeineBeverage.prototype.pourInCup = function () {
        console.log("pouring in cup");
    };
    return CaffeineBeverage;
}());
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coffee.prototype.prepare = function () {
        this.boilWater();
        this.brewCoffeeGrinds();
        this.pourInCup();
        this.addSugarAndMilk();
    };
    Coffee.prototype.brewCoffeeGrinds = function () {
        console.log("brewing Coffee grinds");
    };
    Coffee.prototype.addSugarAndMilk = function () {
        console.log("adding sugar and milk");
    };
    return Coffee;
}(CaffeineBeverage));
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tea.prototype.prepare = function () {
        this.boilWater();
        this.steepTeaBag();
        /**
         * Hook, let low level class can control some part of high level class
         */
        if (this.costomerWantsComdiments()) {
            this.addLemon();
        }
        this.pourInCup();
    };
    Tea.prototype.steepTeaBag = function () {
        console.log("steeping tea bag");
    };
    Tea.prototype.addLemon = function () {
        console.log("adding lemon");
    };
    Tea.prototype.costomerWantsComdiments = function () {
        return true;
    };
    return Tea;
}(CaffeineBeverage));
var Coffe = new Coffee();
var Teaa = new Tea();
Coffe.prepare();
Teaa.prepare();
