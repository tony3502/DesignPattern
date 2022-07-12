interface Observer{
    update(data:any):void;
}
interface Subject{
    observer:Observer[];
    addObserver(newObserver:Observer):void;
    removeObserver(removeObserver:Observer):void;
    sendToObserver();
}
interface WeatherData{
    temperature:Number;
    chanceOfRain:Number;
}

class Weather implements Subject{
    observer: Observer[];
    weatherdata:WeatherData;
    
    constructor(){
        this.observer=[];
    }
    addObserver(newObserver:Observer):void{
        this.observer.push(newObserver);
    }
    removeObserver(removeObserver:Observer) {
        const index=this.observer.indexOf(removeObserver);
        this.observer.splice(index,1);
    }
    sendToObserver() {
        this.observer.forEach((obs)=>{
            obs.update(this.weatherdata);
        })
    }
    changeData(newWeatherData:WeatherData){
        this.weatherdata=newWeatherData;
    }
}
class temperatureObserver implements Observer{
    temperature:Number;
    constructor(){
        this.temperature=0;
    }
    update(data:WeatherData): void {
        this.temperature=data.temperature;
    }
    display(){
        console.log(this.temperature);
    }
}
class chanceOfRainObserver implements Observer{
    chanceOfRain:Number;
    constructor(){
        this.chanceOfRain=0;
    }
    update(data:WeatherData): void {
        this.chanceOfRain=data.chanceOfRain;
    }
    display(){
        console.log(this.chanceOfRain);
    }
}
let weather=new Weather;
let broadTemperature = new temperatureObserver;
let broadchanceOfRain = new chanceOfRainObserver;

broadTemperature.display();
broadchanceOfRain.display();

weather.addObserver(broadTemperature);
weather.addObserver(broadchanceOfRain);

broadTemperature.display();
broadchanceOfRain.display();

const newWeatherData1:WeatherData={
    temperature: 100,
    chanceOfRain: 1000
}
weather.changeData(newWeatherData1);
weather.sendToObserver();

broadTemperature.display();
broadchanceOfRain.display();

weather.removeObserver(broadchanceOfRain);

const newWeatherData2:WeatherData={
    temperature: 50,
    chanceOfRain: 500
}
weather.changeData(newWeatherData2);
weather.sendToObserver();

broadTemperature.display();
broadchanceOfRain.display();