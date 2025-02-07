function FindTodo(todoUnique, arrTodo) {
    for (const todoItem of arrTodo) {
        if (todoItem.todoUnique === todoUnique) {
            return todoItem;
        }
    }
    return null;
}

export { FindTodo };