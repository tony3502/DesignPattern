abstract class Beverage{
    beverageName:string;
    getDescription():string{
        return this.beverageName;
    }
    abstract cost():number;
}

abstract class CondimentDecorator extends Beverage{
    abstract getDescription():string;
}

class Espresso extends Beverage{
    constructor(){
        super();
        this.beverageName="Espresso";
    }
    cost():number{
        return 50;
    }
}
class Tea extends Beverage{
    constructor(){
        super();
        this.beverageName="Tea";
    }
    cost(): number {
        return 30;
    }
}

class Milk extends CondimentDecorator{
    beverage:Beverage;
    constructor(addbeverage:Beverage){
        super();
        this.beverage=addbeverage;
    }
    getDescription(): string {
        return this.beverage.getDescription()+", Milk";
    }
    cost():number{
        return this.beverage.cost()+5;
    }
}
class Bubble extends CondimentDecorator{
    beverage: Beverage;
    constructor(addbeverage:Beverage){
        super();
        this.beverage=addbeverage;
    }
    getDescription(): string {
        return this.beverage.getDescription()+", Bubble";
    }
    cost(): number {
        return this.beverage.cost()+10;
    }
}


let espresso= new Espresso();

espresso=new Milk(espresso);
console.log(espresso.getDescription());
espresso=new Bubble(espresso);
espresso=new Bubble(espresso);
espresso=new Bubble(espresso);

console.log(espresso.cost());
console.log(espresso.getDescription());