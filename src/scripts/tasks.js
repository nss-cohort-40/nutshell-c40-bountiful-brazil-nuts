// Author: Zane Bliss
// Purpose: To provide task manipulation functions.

import tasksAPI from "./tasksData.js";
import taskComponent from "./tasksComponent.js"

// Create and return a new task object
const createTaskObject = () => {
    // Get userId
    let task = document.querySelector("#task").value
    let dueDate = document.querySelector("#dueDate").value
    let completed = false;
    let taskObject = {
        // Implement user Id
        task,
        dueDate,
        completed
    }
    return taskObject
}

// Editing a task 
const editTask = taskId => {
    let updatedTask = {
        task: document.querySelector(`#taskName--${taskId}`).innerHTML,
        dueDate: document.querySelector(`#dueDate--${taskId}`).innerHTML,
        completed: false
    }
    tasksAPI.editTask(taskId, updatedTask)
}

// Rendering tasks to the DOM
const renderTasks = tasks => {
    let element = document.querySelector("#tasks");
    tasks.forEach(task => {
        if (task.completed == false)
        element.innerHTML += taskComponent.createTask(task)
    });
}
 
export default { createTaskObject, editTask, renderTasks }