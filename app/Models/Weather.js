export class Weather {
    constructor(weatherData) {
        this.name = weatherData.name
        this.description = weatherData.weather[0].description
        this.icon = weatherData.weather[0].icon
        this.f = Math.floor((weatherData.main.temp - 273.15) * (9 / 5) + 32)
        this.c = Math.floor(weatherData.main.temp - 273.15)
    }

    get Template() {
        return /*html*/ `
        <div class="d-flex align-items-center">
        <img src="http://openweathermap.org/img/wn/${this.icon}.png">
        <h5 id="f-temp">${this.f}°F</h5>
        <h5 id="c-temp" class="visually-hidden">${this.c}°C</h5>
        </div>
        <h5>${this.name}</h5>
        <p>${this.description.toLowerCase()}</p>
        `
    }
}