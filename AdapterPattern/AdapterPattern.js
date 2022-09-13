var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.fly = function () {
        console.log("MallardDuck fly");
    };
    MallardDuck.prototype.quack = function () {
        console.log("MallardDuck quack");
    };
    return MallardDuck;
}());
var MallardTurkey = /** @class */ (function () {
    function MallardTurkey() {
    }
    MallardTurkey.prototype.gobble = function () {
        console.log("MallardTuckey gobble");
    };
    MallardTurkey.prototype.fly = function () {
        console.log("MallardTuckey quack");
    };
    return MallardTurkey;
}());
var TurkeyAdapter = /** @class */ (function () {
    function TurkeyAdapter(turkey) {
        this.turkey = turkey;
    }
    TurkeyAdapter.prototype.fly = function () {
        this.turkey.fly();
        console.log("adapter");
    };
    TurkeyAdapter.prototype.quack = function () {
        this.turkey.gobble();
        console.log("adapter");
    };
    return TurkeyAdapter;
}());
var newturk = new MallardTurkey();
var newdurk = new MallardDuck();
newdurk.fly();
newdurk.quack();
newturk.fly();
newturk.gobble();
var turkAda = new TurkeyAdapter(newturk);
turkAda.fly();
turkAda.quack();
