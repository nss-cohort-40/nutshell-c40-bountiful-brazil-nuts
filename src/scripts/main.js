import tasksAPI from "./tasksData.js"
import tasks from "./tasks.js"


// TASKS EVENT LISTENERS
// Loading list content
tasks.listTasks()
// Task submit event listener for new task
document.querySelector("#submitBtn").addEventListener("click", event => {
    event.preventDefault()

    // Edit an existing task
    const hiddenTaskId = document.querySelector("#taskId").value
    if (hiddenTaskId.value != "") {
        tasks.editTask(hiddenTaskId)

        // Creating a new task
    } else {
        let taskObject = tasks.createTaskObject()
        tasksAPI.saveTask(taskObject)
    }
})

// Tasks submit event listener for edit task
document.querySelector("#submitBtn").addEventListener("click", event => {
    event.preventDefault()

})

// Task complete button event listener
document.querySelector("#tasks").addEventListener("click", event => {
    if (event.target.id.startsWith("completeTask--")) {
        let tagId = event.target.id.split("--")[1]
        tasksAPI.getTask(tagId).then(task => {
            task.completed = true;
            tasksAPI.editTask(task.id, task)
        })
    }
})

// Task edit button event listener 
document.querySelector("#tasks").addEventListener("click", event => {
    if (event.target.id.startsWith("editTask--")) {
        let taskToEdit = event.target.id.split("--")[1]
        tasks.getTaskFields(taskToEdit)

    }
})
