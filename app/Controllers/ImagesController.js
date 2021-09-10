import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawImg() {
    let imgUrl = ProxyState.image.url
    let root = document.getElementById('bg-img');
    root.style.setProperty('--bg-img', `url(${imgUrl})`)

    document.getElementById('img-details').innerHTML = ProxyState.image.Template
}
export class ImagesController {
    constructor() {
        ProxyState.on('image', _drawImg)
        imagesService.getImg()
    }
}