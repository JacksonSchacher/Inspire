import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { sandBoxApi } from "./AxiosService.js"

class ImagesService {
    async getImg() {
        let res = await sandBoxApi.get('images')
        ProxyState.image = new Image(res.data)
    }
}

export const imagesService = new ImagesService()