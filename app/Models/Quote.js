export class Quote {
    constructor(quoteData) {
        this.quote = quoteData.content
        this.author = quoteData.author
    }

    get Template() {
        return /*html*/ `
        <cite>${this.quote}</cite>
        `
    }
}