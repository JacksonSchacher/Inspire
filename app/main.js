import { ClockController } from "./Controllers/ClockController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { UserController } from "./Controllers/UserController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
    imagesController = new ImagesController();
    weatherController = new WeatherController();
    clockController = new ClockController();
    quoteController = new QuotesController();
    userController = new UserController();
    todoController = new TodoController();
}
loadState()

window["app"] = new App();