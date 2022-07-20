class ChocolateBoiler{
    private static chocolateboiler=new ChocolateBoiler();

    private empty:boolean=true;
    private boiler:boolean=false;

    static getInstance(){
        return ChocolateBoiler.chocolateboiler;
    }

    fill(){
        if(this.isEmpty()){
            this.empty=false;
            this.boiler=false;
        }
    }

    drain(){
        if(!this.isEmpty()&&this.isBoiler()){
            this.empty=true;
        }
    }

    boil(){
        if(!this.isEmpty()&&!this.isBoiler()){
            this.boiler=true;
        }
    }
    isEmpty(){
        return this.empty;
    }

    isBoiler(){
        return this.boiler;
    }
}
let choco1 = ChocolateBoiler.getInstance();

console.log("isEmpty:"+choco1.isEmpty()+" isBoil:"+choco1.isBoiler());

choco1.fill();
console.log("isEmpty:"+choco1.isEmpty()+" isBoil:"+choco1.isBoiler());

choco1.boil();
console.log("isEmpty:"+choco1.isEmpty()+" isBoil:"+choco1.isBoiler());

let choco2 = ChocolateBoiler.getInstance();

console.log("isEmpty:"+choco2.isEmpty()+" isBoil:"+choco2.isBoiler());

choco2.drain();

console.log("isEmpty:"+choco1.isEmpty()+" isBoil:"+choco1.isBoiler());