// Author: Zane Bliss
// Purpose: To provide task component creation functions.

const createTask = object => {
    return `
    <p id="taskName--${object.id}">${object.task}</p>
    <p>${object.dueDate}</p>
    <button id="completeTask--${object.id}"></button>
    <button id="deleteTask--${object.id}">Delete</button>
    `
}

const taskDOM = () => {
    return `
    <button type="button" id="newTaskBtn">New task</button>
    <form id="formView">
    <input type="hidden" id="taskId" value="">
    <label for="">Task name </label>
    <input type="text" id="task">
    <br>
    <label for="">Due date </label>
    <input type="date" name="" id="dueDate">
    <br>
    <button type="submit" id="submitBtn">Submit</button>
    </form>
    <div id="tasks"></div>
    `
}

export default { createTask, taskDOM }