document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault;
        addTodo();
    });
});

function addTodo() {
    const todoTitle = document.getElementById('title').value;
    const todoFinishDate = document.getElementById('date').value;

    const uniqeId = generateId();
    const todoSchema = generateTodo(uniqeId, todoTitle, todoFinishDate, false);
    todos.push(todoSchema);

    document.dispatchEvent(new Event(RENDER_EVENT));
}