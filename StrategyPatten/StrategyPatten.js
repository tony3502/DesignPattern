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
console.log("hello world");
var KnifeBehavior = /** @class */ (function () {
    function KnifeBehavior() {
    }
    KnifeBehavior.prototype.useWeapon = function () {
        return "Knife Attack!";
    };
    return KnifeBehavior;
}());
var NoWeaponBehavior = /** @class */ (function () {
    function NoWeaponBehavior() {
    }
    NoWeaponBehavior.prototype.useWeapon = function () {
        return "Can't Attack!";
    };
    return NoWeaponBehavior;
}());
var Character = /** @class */ (function () {
    function Character() {
        this.Weapon = new NoWeaponBehavior;
    }
    Character.prototype.switchWeapon = function (charater, Weapon) {
        charater.Weapon = Weapon;
    };
    return Character;
}());
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Queen.prototype.fight = function () {
        console.log("Queen Attack! " + this.Weapon.useWeapon());
    };
    return Queen;
}(Character));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.fight = function () {
        console.log("King Attack! " + this.Weapon.useWeapon());
    };
    return King;
}(Character));
var queen = new Queen;
var king = new King;
queen.fight();
king.fight();
queen.switchWeapon(queen, new KnifeBehavior);
queen.fight();
king.fight();
var queen2 = new Queen;
queen2.fight();
