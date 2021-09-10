import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandBoxApi } from "./AxiosService.js"

class WeatherService {

    async getWeather() {
        let res = await sandBoxApi.get('weather')
        ProxyState.weather = new Weather(res.data)
        console.log(ProxyState.weather)
    }
}
export const weatherService = new WeatherService()