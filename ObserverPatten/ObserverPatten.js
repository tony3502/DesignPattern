var Weather = /** @class */ (function () {
    function Weather() {
        this.observer = [];
    }
    Weather.prototype.addObserver = function (newObserver) {
        this.observer.push(newObserver);
    };
    Weather.prototype.removeObserver = function (removeObserver) {
        var index = this.observer.indexOf(removeObserver);
        this.observer.splice(index, 1);
    };
    Weather.prototype.sendToObserver = function () {
        var _this = this;
        this.observer.forEach(function (obs) {
            obs.update(_this.weatherdata);
        });
    };
    Weather.prototype.changeData = function (newWeatherData) {
        this.weatherdata = newWeatherData;
    };
    return Weather;
}());
var temperatureObserver = /** @class */ (function () {
    function temperatureObserver() {
        this.temperature = 0;
    }
    temperatureObserver.prototype.update = function (data) {
        this.temperature = data.temperature;
    };
    temperatureObserver.prototype.display = function () {
        console.log(this.temperature);
    };
    return temperatureObserver;
}());
var chanceOfRainObserver = /** @class */ (function () {
    function chanceOfRainObserver() {
        this.chanceOfRain = 0;
    }
    chanceOfRainObserver.prototype.update = function (data) {
        this.chanceOfRain = data.chanceOfRain;
    };
    chanceOfRainObserver.prototype.display = function () {
        console.log(this.chanceOfRain);
    };
    return chanceOfRainObserver;
}());
var weather = new Weather;
var broadTemperature = new temperatureObserver;
var broadchanceOfRain = new chanceOfRainObserver;
broadTemperature.display();
broadchanceOfRain.display();
weather.addObserver(broadTemperature);
weather.addObserver(broadchanceOfRain);
broadTemperature.display();
broadchanceOfRain.display();
var newWeatherData1 = {
    temperature: 100,
    chanceOfRain: 1000
};
weather.changeData(newWeatherData1);
weather.sendToObserver();
broadTemperature.display();
broadchanceOfRain.display();
weather.removeObserver(broadchanceOfRain);
var newWeatherData2 = {
    temperature: 50,
    chanceOfRain: 500
};
weather.changeData(newWeatherData2);
weather.sendToObserver();
broadTemperature.display();
broadchanceOfRain.display();
