var ChocolateBoiler = /** @class */ (function () {
    function ChocolateBoiler() {
        this.empty = true;
        this.boiler = false;
    }
    ChocolateBoiler.getInstance = function () {
        return ChocolateBoiler.chocolateboiler;
    };
    ChocolateBoiler.prototype.fill = function () {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiler = false;
        }
    };
    ChocolateBoiler.prototype.drain = function () {
        if (!this.isEmpty() && this.isBoiler()) {
            this.empty = true;
        }
    };
    ChocolateBoiler.prototype.boil = function () {
        if (!this.isEmpty() && !this.isBoiler()) {
            this.boiler = true;
        }
    };
    ChocolateBoiler.prototype.isEmpty = function () {
        return this.empty;
    };
    ChocolateBoiler.prototype.isBoiler = function () {
        return this.boiler;
    };
    ChocolateBoiler.chocolateboiler = new ChocolateBoiler();
    return ChocolateBoiler;
}());
var choco1 = ChocolateBoiler.getInstance();
console.log("isEmpty:" + choco1.isEmpty() + " isBoil:" + choco1.isBoiler());
choco1.fill();
console.log("isEmpty:" + choco1.isEmpty() + " isBoil:" + choco1.isBoiler());
choco1.boil();
console.log("isEmpty:" + choco1.isEmpty() + " isBoil:" + choco1.isBoiler());
var choco2 = ChocolateBoiler.getInstance();
console.log("isEmpty:" + choco2.isEmpty() + " isBoil:" + choco2.isBoiler());
choco2.drain();
console.log("isEmpty:" + choco1.isEmpty() + " isBoil:" + choco1.isBoiler());
