interface Duck{
    fly();
    quack();
}
interface Turkey{
    gobble();
    fly();
}
class MallardDuck implements Duck{
    fly(){
        console.log("MallardDuck fly");
    }
    quack(){
        console.log("MallardDuck quack");
    }
}
class MallardTurkey implements Turkey{
    gobble() {
        console.log("MallardTuckey gobble");
    }
    fly() {
        console.log("MallardTuckey quack");
    }
}
class TurkeyAdapter implements Duck{
    turkey:Turkey;
    constructor(turkey){
        this.turkey=turkey;
    }
    fly() {
        this.turkey.fly();
        console.log("adapter");
    }
    quack() {
        this.turkey.gobble();
        console.log("adapter");
    }
}
const newturk=new MallardTurkey();
const newdurk=new MallardDuck();
newdurk.fly();
newdurk.quack();
newturk.fly();
newturk.gobble();

const turkAda=new TurkeyAdapter(newturk);
turkAda.fly();
turkAda.quack();
