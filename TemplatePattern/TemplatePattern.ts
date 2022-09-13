abstract class CaffeineBeverage {
    abstract prepare();
    boilWater() {
        console.log("boiling water");
    }
    pourInCup() {
        console.log("pouring in cup");
    }
}
class Coffee extends CaffeineBeverage {
    prepare(): void {
        this.boilWater();
        this.brewCoffeeGrinds();
        this.pourInCup();
        this.addSugarAndMilk();
    }
    brewCoffeeGrinds() {
        console.log("brewing Coffee grinds");
    }
    addSugarAndMilk() {
        console.log("adding sugar and milk");
    }
}
class Tea extends CaffeineBeverage {
    prepare(): void {
        this.boilWater();
        this.steepTeaBag();
        /**
         * Hook, let low level class can control some part of high level class
         */
        if (this.costomerWantsComdiments()) {
            this.addLemon();
        }
        this.pourInCup();
    }
    steepTeaBag() {
        console.log("steeping tea bag");
    }
    addLemon() {
        console.log("adding lemon");
    }
    costomerWantsComdiments(): boolean {
        return true;
    }
}
let Coffe: CaffeineBeverage = new Coffee();
let Teaa: CaffeineBeverage = new Tea();

Coffe.prepare();
Teaa.prepare();

