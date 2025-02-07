function CompletedTask(todoUnique, arrTodo, event) {
    const todoTarget = FindTodo(todoUnique, arrTodo);

    if (todoTarget == null) return;

    todoTarget.todoStatus = true;
    document.dispatchEvent(new Event(event));
}

export { CompletedTask };