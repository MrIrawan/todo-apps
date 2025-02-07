import { AddTodo } from "./utils/AddTodo.js";
import { MakeTodo } from "./utils/MakeTodo.js";

const todos = [];
const RENDER_EVENT = 'render-todo';
const todoTitle = document.getElementById('title');
const todoFinishDate = document.getElementById('date');

document.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        AddTodo(todoTitle, todoFinishDate, false, RENDER_EVENT, todos);
    });
});

document.addEventListener(RENDER_EVENT, () => {
    const uncompletedTODOList = document.getElementById('todos');
    uncompletedTODOList.innerHTML = '';

    const completedTODOList = document.getElementById('completed-todos');
    completedTODOList.innerHTML = '';

    todos.forEach((todo) => {
        const todoElement = MakeTodo(todo, todos, RENDER_EVENT);
        if (!todo.todoStatus) {
            uncompletedTODOList.append(todoElement)
        } else {
            completedTODOList.append(todoElement)
        }
    })
})