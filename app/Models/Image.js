export class Image {
    constructor(imgData) {
        this.url = imgData.largeImgUrl
        this.tags = imgData.tags
        this.author = imgData.author
    }

    get Template() {
        return /*html*/ `
        <h5>${this.author}</h5>
        <h6>${this.tags}</h6>
        `
    }
}