const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO_APPS';

function isStorageExist() {
    if (typeof(Storage) === undefined) {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }

    return true;
}

function SaveData(arrTodo) {
    if (isStorageExist()) {
        const parsed = JSON.stringify(arrTodo);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function loadDataFromStorage(arrTodo, event) {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const todo of data) {
            arrTodo.push(todo);
        }
    }

    document.dispatchEvent(new Event(event));
}

export { SaveData, loadDataFromStorage, isStorageExist };