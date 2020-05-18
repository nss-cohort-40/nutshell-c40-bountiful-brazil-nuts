// Author: Zane Bliss
// Purpose: To provide task component creation functions.

const createTask = object => {
    return `
    <p>${object.task}</p>
    <p>${object.dueDate}</p>
    <button id="completeTask--${object.id}">Complete</button>
    <button id="editTask--${object.id}">Edit</button
    `
}

const taskDOM = () => {
    return `
    <form>
    <input type="hidden" id="taskId" value="">
    <label for="">Task name </label>
    <input type="text" id="task">
    <br>
    <label for="">Due date </label>
    <input type="date" name="" id="dueDate">
    <br>
    <button type="submit" id="submitBtn">Submit task</button>
    </form>
    <div id="tasks"></div>
    `
}

export default { createTask, taskDOM }