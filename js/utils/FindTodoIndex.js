function FindTodoIndex(todoUnique, arrTodo) {
    for (const index in arrTodo) {
        if (arrTodo[index].todoUnique === todoUnique) {
            return index;
        }
    }

    return -1;
}

export { FindTodoIndex };