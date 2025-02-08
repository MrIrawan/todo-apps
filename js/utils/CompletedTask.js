import { FindTodo } from "./FindTodo.js";
import { SaveData } from "./SaveData.js";

function CompletedTask(todoUnique, arrTodo, event) {
    const todoTarget = FindTodo(todoUnique, arrTodo);

    if (todoTarget == null) return;

    todoTarget.todoStatus = true;
    document.dispatchEvent(new Event(event));
    SaveData(arrTodo);
}

export { CompletedTask };