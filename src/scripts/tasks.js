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

// Render task list to DOM
function listTasks () {
    let tasksDiv = document.querySelector("#tasks")
    tasksDiv.innerHTML = ""
    tasksAPI.getTasks().then( tasks => {
        tasks.forEach(task => {
            // If task object completed is false then render
            if (task.completed == false)
            tasksDiv.innerHTML += taskComponent.createTask(task)
        });
    })
}

// Prepopulate task fields for editing 
const getTaskFields = taskId => {
    let hiddenTagId = document.querySelector("#taskId")
    let taskName = document.querySelector("#task")
    let dueDate = document.querySelector("#dueDate")

    tasksAPI.getTask(taskId).then(task => {
        hiddenTagId.value = task.id
        taskName.value = task.task
        dueDate.value = task.dueDate
    })
}

// Editing a task 
const editTask = taskId => {
    let updatedTask = {
        task: document.querySelector("#task").value,
        dueDate: document.querySelector("#dueDate").value,
        completed: false
    }
    tasksAPI.editTask(taskId, updatedTask).then(
        document.querySelector("#taskId").value = ""
    )
}
 
export default { createTaskObject, listTasks, getTaskFields, editTask }