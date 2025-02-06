import { AddTodo } from "./utils/AddTodo.js";

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
    console.log(todos);
    
})