function FindTodoIndex(todoUnique, arrTodo) {
    for (const index of arrTodo) {
        if (arrTodo[index].todoUnique === todoUnique) {
            return index;
        }
    }

    return -1;
}

export { FindTodoIndex };