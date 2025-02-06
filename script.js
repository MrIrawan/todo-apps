document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault;
        addTodo();
    });
});