// Author: Zane Bliss
// Purpose: To provide task manipulation functions

import tasksAPI from "./tasksData.js";
import taskComponent from "./tasksComponent.js"
import tasksDOM from  "./tasksDOM.js"

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
        completed,
        userId: parseInt(sessionStorage.getItem("activeUser"))
    }
    console.log(taskObject);
    
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
    tasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate))
    tasks.forEach(task => {
        if (task.completed == false && task.userId == sessionStorage.getItem("activeUser")) {
            element.innerHTML += taskComponent.createTask(task)
        }
    });
}
 
export default { createTaskObject, editTask, renderTasks }