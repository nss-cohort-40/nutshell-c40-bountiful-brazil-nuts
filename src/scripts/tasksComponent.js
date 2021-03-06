// Author: Zane Bliss
// Purpose: To provide task component creation functions.

const createTask = object => {
    return `
    <div id="taskDiv--${object.id}">
    <p id="taskName--${object.id}" contenteditable="true">${object.task}</p>
    <p id="dueDate--${object.id}">${object.dueDate}</p>
    <button id="completeTask--${object.id}"></button>
    <button id="deleteTask--${object.id}">Delete</button>
</div>
    `
}

const taskDOM = () => {
    return `
    <div id="tasksWrapper" style="display: none;">
    <button type="button" id="newTaskBtn">New task</button>
    <form id="formView">
    <label for="">Task name </label>
    <input type="text" id="task">
    <br>
    <label for="">Due date </label>
    <input type="date" name="" id="dueDate">
    <br>
    <button type="submit" id="submitBtn">Submit</button>
    </form>
    <div id="completedTasks"></div>
    <div id="tasks"></div>
    </div>
    `
}

export default { createTask, taskDOM }