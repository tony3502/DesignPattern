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
class TWPizzaFactory{
    createPizza(pizzaType: string): cheesePizza | bubblePizza | null {
        if(pizzaType==="bubblePizza"){
            let pizza=new bubblePizza();
            return pizza;
        }
        else if(pizzaType==="cheesePizza"){
            let pizza=new cheesePizza();
            return pizza;
        }
        return null;
    }
}

class PizzaStore{
    pizzafactory:TWPizzaFactory;
    constructor(addPizzaFactory){
        this.pizzafactory=addPizzaFactory;
    }
    orderPizza(type:string){
        let newPizza:Pizza|null = <Pizza>this.pizzafactory.createPizza(type);

        newPizza.getName();
        newPizza.prepare();
        newPizza.bake();
        newPizza.cut();
        newPizza.box();
        
        return newPizza;
    };
}

const pizzafactory = new TWPizzaFactory();
const pizzahot = new PizzaStore(pizzafactory);

pizzahot.orderPizza("bubblePizza");