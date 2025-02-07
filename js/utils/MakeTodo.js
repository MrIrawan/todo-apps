function MakeTodo(todoSchema) {
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

    return container;
}

export { MakeTodo };