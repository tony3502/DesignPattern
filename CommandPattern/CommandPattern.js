/**
 * Light
 */
var Light = /** @class */ (function () {
    function Light(lightName) {
        this.lightName = lightName;
    }
    Light.prototype.lightStatus = function () {
        return this["switch"];
    };
    Light.prototype.on = function () {
        this["switch"] = true;
        console.log(this.lightName + " switch:" + this["switch"]);
    };
    Light.prototype.off = function () {
        this["switch"] = false;
        console.log(this.lightName + " switch:" + this["switch"]);
    };
    return Light;
}());
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.preLightStatus = this.light.lightStatus();
        this.light.on();
    };
    LightOnCommand.prototype.undo = function () {
        if (this.light.preLightStatus) {
            this.light.on();
        }
        else {
            this.light.off();
        }
    };
    return LightOnCommand;
}());
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.execute = function () {
        this.light.preLightStatus = this.light.lightStatus();
        this.light.off();
    };
    LightOffCommand.prototype.undo = function () {
        if (this.light.preLightStatus) {
            this.light.on();
        }
        else {
            this.light.off();
        }
    };
    return LightOffCommand;
}());
/**
 * Remote test
 */
var SimpleRemoteControl = /** @class */ (function () {
    function SimpleRemoteControl() {
    }
    SimpleRemoteControl.prototype.setCommand = function (cmd) {
        this.cmd = cmd;
    };
    SimpleRemoteControl.prototype.buttonWasPressed = function () {
        this.cmd.execute();
    };
    return SimpleRemoteControl;
}());
var NoCommand = /** @class */ (function () {
    function NoCommand() {
    }
    NoCommand.prototype.execute = function () {
        console.log("No Command");
    };
    NoCommand.prototype.undo = function () {
        console.log("No Command");
    };
    return NoCommand;
}());
var MacroCommand = /** @class */ (function () {
    function MacroCommand(commands) {
        this.commands = commands;
    }
    MacroCommand.prototype.execute = function () {
        this.commands.forEach(function (element) {
            element.execute();
        });
    };
    MacroCommand.prototype.undo = function () {
        this.commands.forEach(function (element) {
            element.undo();
        });
    };
    return MacroCommand;
}());
var TrueController = /** @class */ (function () {
    function TrueController() {
        this.onCommand = new Array(5);
        this.offCommand = new Array(5);
        for (var i = 0; i < 5; i++) {
            this.onCommand[i] = new NoCommand();
            this.offCommand[i] = new NoCommand();
        }
    }
    TrueController.prototype.setCommand = function (slotNum, OnCommand, offCommand) {
        this.onCommand[slotNum] = OnCommand;
        this.offCommand[slotNum] = offCommand;
    };
    TrueController.prototype.buttonOnPress = function (slotNum) {
        this.preCommand = this.onCommand[slotNum];
        this.onCommand[slotNum].execute();
    };
    TrueController.prototype.buttonOffPress = function (slotNum) {
        this.preCommand = this.onCommand[slotNum];
        this.offCommand[slotNum].execute();
    };
    TrueController.prototype.buttonUndoPress = function () {
        this.preCommand.undo();
    };
    return TrueController;
}());
var controller = new SimpleRemoteControl();
var light1 = new Light("light1");
var light2 = new Light("light2");
var light3 = new Light("light3");
var light4 = new Light("light4");
var light5 = new Light("light5");
var Controller1 = new TrueController();
Controller1.setCommand(0, new LightOnCommand(light1), new LightOffCommand(light1));
Controller1.setCommand(1, new LightOnCommand(light2), new LightOffCommand(light2));
Controller1.setCommand(2, new LightOnCommand(light3), new LightOffCommand(light3));
Controller1.setCommand(3, new LightOnCommand(light4), new LightOffCommand(light4));
Controller1.setCommand(4, new LightOnCommand(light5), new LightOffCommand(light5));
Controller1.buttonOnPress(0);
Controller1.buttonOffPress(0);
Controller1.buttonOnPress(2);
Controller1.buttonOnPress(1);
Controller1.buttonOnPress(1);
Controller1.buttonUndoPress();
var microOnCommand = new MacroCommand([
    new LightOnCommand(light1),
    new LightOnCommand(light2),
    new LightOnCommand(light3),
    new LightOnCommand(light4),
    new LightOnCommand(light5)
]);
var microOffCommand = new MacroCommand([
    new LightOffCommand(light1),
    new LightOffCommand(light2),
    new LightOffCommand(light3),
    new LightOffCommand(light4),
    new LightOffCommand(light5)
]);
Controller1.setCommand(4, microOnCommand, microOffCommand);
Controller1.buttonOnPress(4);
Controller1.buttonOffPress(4);
Controller1.buttonOffPress(4);
Controller1.buttonUndoPress();
