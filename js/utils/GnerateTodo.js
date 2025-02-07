function GenerateTodo(id, todoTitle, todoFinishDate, isFinished) {
    return {
        todoUnique : id,
        todoTask : todoTitle,
        todoTimeStamp : todoFinishDate,
        todoStatus : isFinished
    }
}

export { GenerateTodo };