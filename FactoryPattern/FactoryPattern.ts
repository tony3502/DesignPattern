abstract class Pizza{
    name:string;

    prepare(){
        console.log("preparing");
    };
    bake(){
        console.log("baking");
    };
    cut(){
        console.log("cutting");
    };
    box(){
        console.log("boxing");
    };
    getName(){
        console.log(this.name);
    }
}
class cheesePizza extends Pizza{
    constructor(){
        super();
        this.name="cheesePizza";
    }
}
class bubblePizza extends Pizza{
    constructor(){
        super();
        this.name="bubblePizza";
    }
}
class PineApplePizza extends Pizza{
    constructor(){
        super();
        this.name="PineApplePizza";
    }
}
/**
 * Pizza Factory
 */
abstract class PizzaFactory{
    abstract createPizza(pizzaType:string)
}

/**
 * Tainwan Pizza Factory
 */
class TWPizzaFactory extends PizzaFactory{
    createPizza(pizzaType: string): cheesePizza | bubblePizza |boolean{
        if(pizzaType==="bubblePizza"){
            let pizza=new bubblePizza();
            return pizza;
        }
        else if(pizzaType==="cheesePizza"){
            let pizza=new cheesePizza();
            return pizza;
        }
        return false;
    }
}

/**
 * United States Pizza Factory
 */
class USPizzaFactory extends PizzaFactory{
    createPizza(pizzaType: string): cheesePizza | PineApplePizza |boolean{
        if(pizzaType==="PineApplePizza"){
            let pizza=new PineApplePizza();
            return pizza;
        }
        else if(pizzaType==="cheesePizza"){
            let pizza=new cheesePizza();
            return pizza;
        }
        return false;
    }
}

class PizzaStore{
    pizzafactory:PizzaFactory;
    constructor(addPizzaFactory){
        this.pizzafactory=addPizzaFactory;
    }
    orderPizza(type:string){
        let newPizza:Pizza|false = this.pizzafactory.createPizza(type);

        if(newPizza){
            newPizza.getName();
            newPizza.prepare();
            newPizza.bake();
            newPizza.cut();
            newPizza.box();
        }else{
            console.log("newPizza doesn't exist!");
        }
        
        return newPizza;
    };
}

let pizzafactory = new TWPizzaFactory();
const pizzahot = new PizzaStore(pizzafactory);

pizzahot.orderPizza("bubblePizza");

pizzafactory = new USPizzaFactory();
const McDalond = new PizzaStore(pizzafactory);

McDalond.orderPizza("PineApplePizza");