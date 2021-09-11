import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandBoxApi } from "./AxiosService.js";

class TodoService {
    async isChecked(id) {
        let todo = ProxyState.todos.find(t => t.id == id)
        console.log("IS CHECKED ID", todo)
        if (todo.completed) {
            todo.completed = false
        } else {
            todo.completed = true
        }
        await sandBoxApi.put(`${ProxyState.user}/todos/${id}`, todo)
    }
    async addTodo(todoData) {
        let res = await sandBoxApi.post(`${ProxyState.user}/todos`, new Todo(todoData))
    }
    async getTodos() {
        let res = await sandBoxApi.get(`${ProxyState.user}/todos`)
        console.log('GET TODOS', res);
        ProxyState.todos = res.data.map(t => new Todo(t))
        console.log(ProxyState.todos)
    }
}
export const todoService = new TodoService();