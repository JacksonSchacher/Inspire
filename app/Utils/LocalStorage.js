import { ProxyState } from "../AppState.js";

export function saveState() {
    localStorage.setItem('User', JSON.stringify({
        user: ProxyState.user
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('User'))

    if (data != null) {
        ProxyState.user = data.user
    }
    console.log('loaded', data)
}