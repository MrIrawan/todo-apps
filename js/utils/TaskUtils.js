import { FindTodo } from "./FindTodo.js";
import { FindTodoIndex } from "./FindTodoIndex.js";
import { SaveData } from "./SaveData.js";

function UndoTask(event, todoUnique, arrTodo) {
    const todoTarget = FindTodo(todoUnique, arrTodo);

    if (todoTarget == null) return;

    todoTarget.todoStatus = false;
    console.log(todoUnique);
    
    document.dispatchEvent(new Event(event));
    SaveData(arrTodo);
}

function RemoveTask(event, todoUnique, arrTodo) {
    const todoTarget = FindTodoIndex(todoUnique, arrTodo);

    if (todoTarget === -1) return;

    arrTodo.splice(todoTarget, 1);
    document.dispatchEvent(new Event(event));
    SaveData(arrTodo);
}

export { UndoTask, RemoveTask };