/**
 * Light
 */
class Light{
    lightName:string;
    switch:boolean;
    preLightStatus:boolean;
    constructor(lightName:string){
        this.lightName=lightName;
    }
    lightStatus(){
        return this.switch;
    }
    on(){
        this.switch=true;
        console.log(this.lightName+" switch:"+this.switch);
    }

    off(){
        this.switch=false;
        console.log(this.lightName+" switch:"+this.switch);
    }
}

/**
 * Command
 */
interface Command{
    execute();
    undo();
}
class LightOnCommand implements Command{
    light:Light;
    constructor(light){
        this.light=light;
    }
    execute() {
        this.light.preLightStatus = this.light.lightStatus();
        this.light.on();
    }
    undo(){
        if(this.light.preLightStatus){
            this.light.on();
        }
        else{
            this.light.off();
        }
    }
}

class LightOffCommand implements Command{
    light:Light;
    constructor(light){
        this.light=light;
    }
    execute() {
        this.light.preLightStatus = this.light.lightStatus();
        this.light.off();
    }
    undo(){
        if(this.light.preLightStatus){
            this.light.on();
        }
        else{
            this.light.off();
        }
    }

}

/**
 * Remote test
 */
class SimpleRemoteControl{
    cmd:Command;
    setCommand(cmd){
        this.cmd=cmd;
    }
    buttonWasPressed(){
        this.cmd.execute();
    }
}
class NoCommand implements Command{
    execute() {
        console.log("No Command");
    }
    undo() {
        console.log("No Command");
    }
}

class MacroCommand implements Command{
    commands:Command[];
    constructor(commands:Command[]){
        this.commands=commands;
    }
    execute() {
        this.commands.forEach(element => {
            element.execute();
        });
    }
    undo() {
        this.commands.forEach(element => {
            element.undo();
        });
    }

}

class TrueController{
    onCommand:Command[];
    offCommand:Command[];
    preCommand:Command;
    marcoCommand:Command;
    constructor(){
        this.onCommand=new Array(5);
        this.offCommand=new Array(5);
        for(let i=0;i<5;i++){
            this.onCommand[i]=new NoCommand();
            this.offCommand[i]=new NoCommand();
        }
    }
    setCommand(slotNum,OnCommand,offCommand){
        this.onCommand[slotNum]=OnCommand;
        this.offCommand[slotNum]=offCommand;
    }
    buttonOnPress(slotNum){
        this.preCommand=this.onCommand[slotNum];
        this.onCommand[slotNum].execute();
    }
    buttonOffPress(slotNum){
        this.preCommand=this.onCommand[slotNum];
        this.offCommand[slotNum].execute();
    }
    buttonUndoPress(){
        this.preCommand.undo();
    }
}

const controller = new SimpleRemoteControl();
const light1 = new Light("light1");
const light2 = new Light("light2");
const light3 = new Light("light3");
const light4 = new Light("light4");
const light5 = new Light("light5");

const Controller1 = new TrueController();
Controller1.setCommand(0,new LightOnCommand(light1),new LightOffCommand(light1));
Controller1.setCommand(1,new LightOnCommand(light2),new LightOffCommand(light2));
Controller1.setCommand(2,new LightOnCommand(light3),new LightOffCommand(light3));
Controller1.setCommand(3,new LightOnCommand(light4),new LightOffCommand(light4));
Controller1.setCommand(4,new LightOnCommand(light5),new LightOffCommand(light5));
Controller1.buttonOnPress(0);
Controller1.buttonOffPress(0);
Controller1.buttonOnPress(2);



Controller1.buttonOnPress(1);
Controller1.buttonOnPress(1);
Controller1.buttonUndoPress();


const microOnCommand = new MacroCommand([
    new LightOnCommand(light1)
    ,new LightOnCommand(light2)
    ,new LightOnCommand(light3)
    ,new LightOnCommand(light4)
    ,new LightOnCommand(light5)
]);
const microOffCommand = new MacroCommand([
    new LightOffCommand(light1)
    ,new LightOffCommand(light2)
    ,new LightOffCommand(light3)
    ,new LightOffCommand(light4)
    ,new LightOffCommand(light5)
]);
Controller1.setCommand(4,microOnCommand,microOffCommand);
Controller1.buttonOnPress(4);
Controller1.buttonOffPress(4);
Controller1.buttonOffPress(4);
Controller1.buttonUndoPress();