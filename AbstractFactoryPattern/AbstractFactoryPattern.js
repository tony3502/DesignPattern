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
    function cheesePizza(setIngredientFactory) {
        var _this = _super.call(this) || this;
        _this.name = "cheesePizza";
        _this.ingredientFactory = setIngredientFactory;
        return _this;
    }
    cheesePizza.prototype.prepare = function () {
        var cheese = this.ingredientFactory.createCheese();
        var Bread = this.ingredientFactory.createBread();
        var Tomato = this.ingredientFactory.createTomato();
        var Sauce = this.ingredientFactory.createSauce();
    };
    return cheesePizza;
}(Pizza));
var bubblePizza = /** @class */ (function (_super) {
    __extends(bubblePizza, _super);
    function bubblePizza(setIngredientFactory) {
        var _this = _super.call(this) || this;
        _this.name = "bubblePizza";
        _this.ingredientFactory = setIngredientFactory;
        return _this;
    }
    bubblePizza.prototype.prepare = function () {
        var cheese = this.ingredientFactory.createCheese();
        var Bread = this.ingredientFactory.createBread();
        var Sauce = this.ingredientFactory.createSauce();
    };
    return bubblePizza;
}(Pizza));
var PineApplePizza = /** @class */ (function (_super) {
    __extends(PineApplePizza, _super);
    function PineApplePizza(setIngredientFactory) {
        var _this = _super.call(this) || this;
        _this.name = "PineApplePizza";
        _this.ingredientFactory = setIngredientFactory;
        return _this;
    }
    PineApplePizza.prototype.prepare = function () {
        var Bread = this.ingredientFactory.createBread();
        var Sauce = this.ingredientFactory.createSauce();
    };
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
        var _this = _super.call(this) || this;
        _this.ingredientFactory = new TWIngredientFacory();
        return _this;
    }
    TWPizzaFactory.prototype.createPizza = function (pizzaType) {
        if (pizzaType === "bubblePizza") {
            var pizza = new bubblePizza(this.ingredientFactory);
            return pizza;
        }
        else if (pizzaType === "cheesePizza") {
            var pizza = new cheesePizza(this.ingredientFactory);
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
        var _this = _super.call(this) || this;
        _this.ingredientFactory = new USIngredientFacory();
        return _this;
    }
    USPizzaFactory.prototype.createPizza = function (pizzaType) {
        if (pizzaType === "PineApplePizza") {
            var pizza = new PineApplePizza(this.ingredientFactory);
            return pizza;
        }
        else if (pizzaType === "cheesePizza") {
            var pizza = new cheesePizza(this.ingredientFactory);
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
var TWIngredientFacory = /** @class */ (function () {
    function TWIngredientFacory() {
    }
    TWIngredientFacory.prototype.createBread = function () {
        console.log("TWBread");
        return new TWBread();
    };
    TWIngredientFacory.prototype.createTomato = function () {
        console.log("TWTomato");
        return new TWTomato();
    };
    TWIngredientFacory.prototype.createSauce = function () {
        console.log("TWSauce");
        return new TWSauce();
    };
    TWIngredientFacory.prototype.createCheese = function () {
        console.log("TWCheese");
        return new TWCheese();
    };
    return TWIngredientFacory;
}());
var USIngredientFacory = /** @class */ (function () {
    function USIngredientFacory() {
    }
    USIngredientFacory.prototype.createBread = function () {
        console.log("USBread");
        return new USBread();
    };
    USIngredientFacory.prototype.createTomato = function () {
        console.log("USTomato");
        return new USTomato();
    };
    USIngredientFacory.prototype.createSauce = function () {
        console.log("USSauce");
        return new USSauce();
    };
    USIngredientFacory.prototype.createCheese = function () {
        console.log("USCheese");
        return new USCheese();
    };
    return USIngredientFacory;
}());
var TWBread = /** @class */ (function () {
    function TWBread() {
        this.BreadName = "TWBread";
        this.BreadSize = 12;
    }
    return TWBread;
}());
var USBread = /** @class */ (function () {
    function USBread() {
        this.BreadName = "USBread";
        this.BreadSize = 10;
    }
    return USBread;
}());
var TWTomato = /** @class */ (function () {
    function TWTomato() {
        this.TomatoName = "TWTomato";
        this.TomatoOrigin = "Taiwan";
    }
    return TWTomato;
}());
var USTomato = /** @class */ (function () {
    function USTomato() {
        this.TomatoName = "USTomato";
        this.TomatoOrigin = "Tomato";
    }
    return USTomato;
}());
var TWSauce = /** @class */ (function () {
    function TWSauce() {
        this.SauceName = "TWSauce";
        this.SauceTaste = "TWVer";
    }
    return TWSauce;
}());
var USSauce = /** @class */ (function () {
    function USSauce() {
        this.SauceName = "USSauce";
        this.SauceTaste = "USVer";
    }
    return USSauce;
}());
var TWCheese = /** @class */ (function () {
    function TWCheese() {
        this.CheeseName = "TWCheese";
        this.CheeseOrigin = "TW";
    }
    return TWCheese;
}());
var USCheese = /** @class */ (function () {
    function USCheese() {
        this.CheeseName = "USCheese";
        this.CheeseOrigin = "US";
    }
    return USCheese;
}());
var pizzafactory = new TWPizzaFactory();
var pizzahot = new PizzaStore(pizzafactory);
pizzahot.orderPizza("bubblePizza");
pizzafactory = new USPizzaFactory();
var McDalond = new PizzaStore(pizzafactory);
McDalond.orderPizza("PineApplePizza");
McDalond.orderPizza("cheesePizza");
pizzahot.orderPizza("cheesePizza");
