import { ProxyState } from "../AppState.js";

function _drawTime() {
    var date = new Date()
    var time = date.getHours() + ":" + date.getMinutes()
    document.getElementById('clock').innerHTML = `
    <h1 class="clock" >${time}</h1>
    `
}

function _drawDate() {
    var date = new Date()
    var format = date.getMonth() + "-" + date.getDay() + "-" + date.getFullYear()
    document.getElementById('date').innerHTML = `
    <h2 class="date">${format}</h2>
    `
}
export class ClockController {
    constructor() {
        setInterval(_drawTime, 1000)
        setInterval(_drawDate, 10000)
        _drawDate()
        _drawTime()
    }
}