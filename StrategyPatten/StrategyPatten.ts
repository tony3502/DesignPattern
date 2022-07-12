console.log("hello world");

interface WeaponBehavior{
    useWeapon():string;
}
class KnifeBehavior implements WeaponBehavior{
    useWeapon(): string {
        return "Knife Attack!";
    }
}
class NoWeaponBehavior implements WeaponBehavior{
    useWeapon(): string {
        return "Can't Attack!";
    }
}

abstract class Character{
    Weapon:WeaponBehavior=new NoWeaponBehavior;
    abstract fight():any;
    switchWeapon(charater:Character,Weapon:WeaponBehavior){
        charater.Weapon=Weapon;
    }
}
class Queen extends Character{
    Weapon: WeaponBehavior;
    fight():void{
        console.log("Queen Attack! "+this.Weapon.useWeapon());
    }
}
class King extends Character{
    Weapon: WeaponBehavior;
    fight():void{
        console.log("King Attack! "+this.Weapon.useWeapon());
    }
}

let queen:Character= new Queen;
let king:Character= new King;
queen.fight();
king.fight();
queen.switchWeapon(queen,new KnifeBehavior);
queen.fight();
king.fight();
let queen2:Character= new Queen;
queen2.fight();