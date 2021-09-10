import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
    imagesController = new ImagesController();
    weatherController = new WeatherController();
    clockController = new ClockController();
    quoteController = new QuotesController();
}

window["app"] = new App();