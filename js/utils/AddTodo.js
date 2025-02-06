import { GenerateId } from "./GenerateId.js";

function AddTodo(todoTitle, todoFinishDate, isFinished) {
    const todoTitle = todoTitle;
    const todoFinishDate = todoFinishDate;

    const uniqeId = GenerateId();
    const todoSchema = generateTodo(uniqeId, todoTitle, todoFinishDate, isFinished);
    todos.push(todoSchema);

    document.dispatchEvent(new Event(RENDER_EVENT));
}

export { AddTodo };