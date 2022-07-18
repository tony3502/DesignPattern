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
var PineApplePizza = /** @class */ (function (_super) {
    __extends(PineApplePizza, _super);
    function PineApplePizza() {
        var _this = _super.call(this) || this;
        _this.name = "PineApplePizza";
        return _this;
    }
    return PineApplePizza;
}(Pizza));
/**
 * Pizza Factory
 */
var PizzaFactory = /** @class */ (function () {
    function PizzaFactory() {
    }
    return PizzaFactory;
}());
/**
 * Tainwan Pizza Factory
 */
var TWPizzaFactory = /** @class */ (function (_super) {
    __extends(TWPizzaFactory, _super);
    function TWPizzaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TWPizzaFactory.prototype.createPizza = function (pizzaType) {
        if (pizzaType === "bubblePizza") {
            var pizza = new bubblePizza();
            return pizza;
        }
        else if (pizzaType === "cheesePizza") {
            var pizza = new cheesePizza();
            return pizza;
        }
        return false;
    };
    return TWPizzaFactory;
}(PizzaFactory));
/**
 * United States Pizza Factory
 */
var USPizzaFactory = /** @class */ (function (_super) {
    __extends(USPizzaFactory, _super);
    function USPizzaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USPizzaFactory.prototype.createPizza = function (pizzaType) {
        if (pizzaType === "PineApplePizza") {
            var pizza = new PineApplePizza();
            return pizza;
        }
        else if (pizzaType === "cheesePizza") {
            var pizza = new cheesePizza();
            return pizza;
        }
        return false;
    };
    return USPizzaFactory;
}(PizzaFactory));
var PizzaStore = /** @class */ (function () {
    function PizzaStore(addPizzaFactory) {
        this.pizzafactory = addPizzaFactory;
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var newPizza = this.pizzafactory.createPizza(type);
        if (newPizza) {
            newPizza.getName();
            newPizza.prepare();
            newPizza.bake();
            newPizza.cut();
            newPizza.box();
        }
        else {
            console.log("newPizza doesn't exist!");
        }
        return newPizza;
    };
    ;
    return PizzaStore;
}());
var pizzafactory = new TWPizzaFactory();
var pizzahot = new PizzaStore(pizzafactory);
pizzahot.orderPizza("bubblePizza");
pizzafactory = new USPizzaFactory();
var McDalond = new PizzaStore(pizzafactory);
McDalond.orderPizza("PineApplePizza");
