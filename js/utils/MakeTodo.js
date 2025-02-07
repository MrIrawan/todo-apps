import { CompletedTask } from "./CompletedTask.js";
import { UndoTask, RemoveTask } from "./TaskUtils.js";

function MakeTodo(todoSchema, arrTodo, event) {
    const textTodoTitle = document.createElement('h2');
    textTodoTitle.innerText = todoSchema.todoTask;

    const textTodoTimeStamp = document.createElement('p');
    textTodoTimeStamp.innerText = todoSchema.todoTimeStamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTodoTitle, textTodoTimeStamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    container.setAttribute('id', `todo-${todoSchema.todoUnique}`);

    if (todoSchema.todoStatus) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');

        undoButton.addEventListener('click', () => {
            UndoTask(event, todoSchema.todoUnique, arrTodo);
        });

        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');

        trashButton.addEventListener('click', () => {
            RemoveTask(event, todoSchema.todoUnique, arrTodo);
        });

        container.append(undoButton, trashButton);
    } else {
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');

        checkButton.addEventListener('click', () => {
            CompletedTask(todoSchema.todoUnique, arrTodo, event);
        });

        container.append(checkButton);
    }

    return container;
}

export { MakeTodo };