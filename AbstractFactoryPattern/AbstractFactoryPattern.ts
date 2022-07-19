abstract class Pizza{
    name:string;
    ingredientFactory:IngredientFactory;
    abstract prepare();
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
    prepare() {
        let cheese=this.ingredientFactory.createCheese();
        let Bread=this.ingredientFactory.createBread();
        let Tomato=this.ingredientFactory.createTomato();
        let Sauce=this.ingredientFactory.createSauce();
    }
    constructor(setIngredientFactory){
        super();
        this.name="cheesePizza";
        this.ingredientFactory=setIngredientFactory;
    }
}
class bubblePizza extends Pizza{
    prepare() {
        let cheese=this.ingredientFactory.createCheese();
        let Bread=this.ingredientFactory.createBread();
        let Sauce=this.ingredientFactory.createSauce();
    }
    constructor(setIngredientFactory){
        super();
        this.name="bubblePizza";
        this.ingredientFactory=setIngredientFactory;
    }
}
class PineApplePizza extends Pizza{
    prepare() {
        let Bread=this.ingredientFactory.createBread();
        let Sauce=this.ingredientFactory.createSauce();
    }
    constructor(setIngredientFactory){
        super();
        this.name="PineApplePizza";
        this.ingredientFactory=setIngredientFactory;
    }
}
/**
 * Pizza Factory
 */
abstract class PizzaFactory{
    ingredientFactory:IngredientFactory;
    abstract createPizza(pizzaType:string)
}

/**
 * Tainwan Pizza Factory
 */
class TWPizzaFactory extends PizzaFactory{
    constructor(){
        super()
        this.ingredientFactory=new TWIngredientFacory();
    }
    createPizza(pizzaType: string): cheesePizza | bubblePizza |boolean{
        if(pizzaType==="bubblePizza"){
            let pizza=new bubblePizza(this.ingredientFactory);
            return pizza;
        }
        else if(pizzaType==="cheesePizza"){
            let pizza=new cheesePizza(this.ingredientFactory);
            return pizza;
        }
        return false;
    }
}

/**
 * United States Pizza Factory
 */
class USPizzaFactory extends PizzaFactory{
    constructor(){
        super()
        this.ingredientFactory=new USIngredientFacory();
    }
    createPizza(pizzaType: string): cheesePizza | PineApplePizza |boolean{
        if(pizzaType==="PineApplePizza"){
            let pizza=new PineApplePizza(this.ingredientFactory);
            return pizza;
        }
        else if(pizzaType==="cheesePizza"){
            let pizza=new cheesePizza(this.ingredientFactory);
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
/**
 * Ingredient Factory
 */
interface IngredientFactory{
    createBread();
    createTomato();
    createSauce();
    createCheese();
}

class TWIngredientFacory implements IngredientFactory{
    createBread() {
        console.log("TWBread");
        return new TWBread();
    }
    createTomato() {
        console.log("TWTomato");
        return new TWTomato();
    }
    createSauce() {
        console.log("TWSauce");
        return new TWSauce();
    }
    createCheese() {
        console.log("TWCheese");
        return new TWCheese();
    }
}
class USIngredientFacory implements IngredientFactory{
    createBread() {
        console.log("USBread");
        return new USBread();
    }
    createTomato() {
        console.log("USTomato");
        return new USTomato();
    }
    createSauce() {
        console.log("USSauce");
        return new USSauce();
    }
    createCheese() {
        console.log("USCheese");
        return new USCheese();
    }
}
/**
 * Ingredient
 */
/**
 * Bread
 */
interface Bread{
    BreadName:string;
    BreadSize:Number;
}
class TWBread implements Bread{
    BreadName: string;
    BreadSize: Number;
    constructor(){
        this.BreadName="TWBread";
        this.BreadSize=12;
    }
}
class USBread implements Bread{
    BreadName: string;
    BreadSize: Number;
    constructor(){
        this.BreadName="USBread";
        this.BreadSize=10;
    }
}
/**
 * Tomato
 */
interface Tomato{
    TomatoName:string;
    TomatoOrigin:string;
}
class TWTomato implements Tomato{
    TomatoName: string;
    TomatoOrigin: string;
    constructor(){
        this.TomatoName="TWTomato";
        this.TomatoOrigin="Taiwan";
    }
}
class USTomato implements Tomato{
    TomatoName: string;
    TomatoOrigin: string;
    constructor(){
        this.TomatoName="USTomato";
        this.TomatoOrigin="Tomato";
    }
}
/**
 * Sauce
 */
interface Sauce{
    SauceName:string;
    SauceTaste:string;
}
class TWSauce implements Sauce{
    SauceName: string;
    SauceTaste: string;
    constructor(){
        this.SauceName="TWSauce";
        this.SauceTaste="TWVer"
    }
}
class USSauce implements Sauce{
    SauceName: string;
    SauceTaste: string;
    constructor(){
        this.SauceName="USSauce";
        this.SauceTaste="USVer"
    }
}
/**
 * Cheese
 */
interface Cheese{
    CheeseName:string;
    CheeseOrigin:string;
}
class TWCheese implements Cheese{
    CheeseName: string;
    CheeseOrigin: string;
    constructor(){
        this.CheeseName="TWCheese";
        this.CheeseOrigin="TW"
    }
}
class USCheese implements Cheese{
    CheeseName: string;
    CheeseOrigin: string;
    constructor(){
        this.CheeseName="USCheese";
        this.CheeseOrigin="US"
    }
}
let pizzafactory = new TWPizzaFactory();
const pizzahot = new PizzaStore(pizzafactory);

pizzahot.orderPizza("bubblePizza");

pizzafactory = new USPizzaFactory();
const McDalond = new PizzaStore(pizzafactory);

McDalond.orderPizza("PineApplePizza");

McDalond.orderPizza("cheesePizza");
pizzahot.orderPizza("cheesePizza");