import { generateId } from "../Utils/generateId.js"

export class Todo {
    constructor(todoData) {
        this.completed = todoData.completed || false
        this.description = todoData.description
        this.id = todoData.id || generateId()
    }

    get Template() {
        return /*html*/ `
        <li class="d-flex justify-content-between align-items-center list-group-item"><input type="checkbox" onclick="app.todoController.isChecked('${this.id}')" ${(this.completed ? 'checked' : '')}>${this.description}
        <button type="button" class="btn btn-secondary justify-self-end" onclick="app.todoController.deleteTodo('${this.id}')">Delete</button></li>
        `
    }
}