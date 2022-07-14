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
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.prepare = function () {
        console.log("preparing");
    };
    ;
    Pizza.prototype.bake = function () {
        console.log("baking");
    };
    ;
    Pizza.prototype.cut = function () {
        console.log("cutting");
    };
    ;
    Pizza.prototype.box = function () {
        console.log("boxing");
    };
    ;
    Pizza.prototype.getName = function () {
        console.log(this.name);
    };
    return Pizza;
}());
var cheesePizza = /** @class */ (function (_super) {
    __extends(cheesePizza, _super);
    function cheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = "cheesePizza";
        return _this;
    }
    return cheesePizza;
}(Pizza));
var bubblePizza = /** @class */ (function (_super) {
    __extends(bubblePizza, _super);
    function bubblePizza() {
        var _this = _super.call(this) || this;
        _this.name = "bubblePizza";
        return _this;
    }
    return bubblePizza;
}(Pizza));
var PizzaFactory = /** @class */ (function () {
    function PizzaFactory() {
    }
    PizzaFactory.prototype.createPizza = function (pizzaType) {
        if (pizzaType === "bubblePizza") {
            var pizza = new bubblePizza();
            return pizza;
        }
        else if (pizzaType === "cheesePizza") {
            var pizza = new cheesePizza();
            return pizza;
        }
        return null;
    };
    return PizzaFactory;
}());
var PizzaStore = /** @class */ (function () {
    function PizzaStore(addPizzaFactory) {
        this.pizzafactory = addPizzaFactory;
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var newPizza = this.pizzafactory.createPizza(type);
        newPizza.getName();
        newPizza.prepare();
        newPizza.bake();
        newPizza.cut();
        newPizza.box();
        return newPizza;
    };
    ;
    return PizzaStore;
}());
var pizzafactory = new PizzaFactory();
var pizzahot = new PizzaStore(pizzafactory);
pizzahot.orderPizza("bubblePizza");
