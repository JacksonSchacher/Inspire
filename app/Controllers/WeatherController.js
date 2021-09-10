import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather() {
    document.getElementById('weather').innerHTML = ProxyState.weather.Template
    console.log('draw weather')
}
export class WeatherController {
    constructor() {
        ProxyState.on('weather', _drawWeather)
        weatherService.getWeather()
    }
    toggleTemp() {
        let fTemp = document.getElementById('f-temp')
        let cTemp = document.getElementById('c-temp')
        cTemp.classList.toggle('visually-hidden')
        fTemp.classList.toggle('visually-hidden')
    }
}