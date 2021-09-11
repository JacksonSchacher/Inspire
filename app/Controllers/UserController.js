import { ProxyState } from "../AppState.js";
import { saveState } from "../Utils/LocalStorage.js";

function _drawUser() {
    document.getElementById('user').innerHTML = `<h3>Feeling Inspired, ${ProxyState.user}?</h3><hr><h6 onclick="app.userController.changePlayer()" class="text-center selectable">Change User</h6>`
}
export class UserController {
    constructor() {
        ProxyState.on('user', saveState)
        ProxyState.on('user', _drawUser)
        this.setPlayer()
        _drawUser()
    }

    async setPlayer() {
        if (ProxyState.user != '') {
            return
        } else {
            // @ts-ignore
            let user = await Swal.fire({
                title: "Please Enter Your Name",
                input: 'text',
            })
            ProxyState.user = user.value
            console.log(user.value)
        }
    }
    async changePlayer() {
        // @ts-ignore
        let user = await Swal.fire({
            title: "Please Enter Your Name",
            input: 'text',
        })
        ProxyState.user = user.value
    }
}