import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _drawQuote() {
    document.getElementById('quote').innerHTML = ProxyState.quote.Template
}
export class QuotesController {
    constructor() {
        ProxyState.on('quote', _drawQuote)
        quoteService.getQuote()
    }
}