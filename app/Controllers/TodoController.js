import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";

function _drawTodos() {
    let template = ''
    ProxyState.todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template
}

function _drawStats() {
    document.getElementById('stats').innerHTML = `Completed ${todoService.getCompleted()}/${todoService.getTotal()}`
}
export class TodoController {
    constructor() {
        ProxyState.on('todos', _drawTodos)
        ProxyState.on('todos', _drawStats)
        todoService.getTodos()
    }
    async addTodo() {
        event.preventDefault()
        let form = event.target

        let todoData = {
            // @ts-ignore
            description: form.description.value
        }
        console.log("Todo Data from form", todoData)
        try {
            await todoService.addTodo(todoData)
        } catch (error) {
            console.error(error)
        }
        // @ts-ignore
        form.reset()
    }

    async isChecked(id) {
        try {
            await todoService.isChecked(id)
            _drawStats()
        } catch (error) {
            console.error(error)
        }
    }

    async deleteTodo(id) {
        // @ts-ignore
        Swal.fire({
            title: 'Delete Task?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete Task'
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    await todoService.deleteTodo(id)
                } catch (error) {
                    console.error(error)
                }
                // @ts-ignore
                Swal.fire(
                    'Deleted!',
                    'Task Deleted.',
                    'success'
                )
            }
        })

    }

}