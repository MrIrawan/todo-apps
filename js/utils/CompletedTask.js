function CompletedTask(todoUnique, event) {
    const todoTarget = FindTodo(todoUnique);

    if (todoTarget == null) return;

    todoTarget.todoStatus = true;
    document.dispatchEvent(new Event(event));
}

export { CompletedTask };