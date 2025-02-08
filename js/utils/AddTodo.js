import { GenerateId } from "./GenerateId.js";
import { GenerateTodo } from "./GnerateTodo.js";

function AddTodo(todoTitle, todoFinishDate, isFinished, event, arrTodos = []) {
    const title = todoTitle.value;
    const finishDate = todoFinishDate.value;

    const uniqeId = GenerateId();
    const todoSchema = GenerateTodo(uniqeId, title, finishDate, isFinished);
    arrTodos.push(todoSchema);

    document.dispatchEvent(new Event(event));
    SaveData();
}

export { AddTodo };