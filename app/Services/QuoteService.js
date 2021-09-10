import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandBoxApi } from "./AxiosService.js"

class QuoteService {
    async getQuote() {
        let res = await sandBoxApi.get('quotes')
        ProxyState.quote = new Quote(res.data)
        console.log(res.data);
        console.log(ProxyState.quote)
    }
}
export const quoteService = new QuoteService();