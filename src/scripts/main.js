import tasksAPI from "./tasksData.js"
import tasks from "./tasks.js"
import tasksDOM from "./tasksDOM.js"

// TASKS EVENT LISTENERS
// Loading list content
tasksDOM.writeDOM()
tasksDOM.writeTasks()

const newTaskBtn = document.querySelector("#newTaskBtn")
const formView = document.querySelector("#formView")

// Hide button and reveal form
newTaskBtn.addEventListener("click", () => {
    newTaskBtn.style.display = "none"
    formView.style.display = "block"
})

// Task submit event listener for new task
document.querySelector("#submitBtn").addEventListener("click", event => {
    // Edit an existing task
    let taskObject = tasks.createTaskObject()
    tasksAPI.saveTask(taskObject)
    
    newTaskBtn.style.display = "block"
    formView.style.display = "none"
})


// Task complete button event listener
document.querySelector("#tasks").addEventListener("click", event => {
    if (event.target.id.startsWith("completeTask--")) {
        let tagId = event.target.id.split("--")[1]
        tasksAPI.getTask(tagId).then(task => {
            task.completed = true;
            tasksAPI.editTask(task.id, task)
        }).then(tasksDOM.writeTasks())
        
    }
})


// Editing a task
document.querySelector("#tasks").addEventListener("keypress", event => {
    if (event.target.id.startsWith("taskName--")) {
        let taskToEdit = event.target.id.split("--")[1]
        if (event.charCode == 13) {
            event.preventDefault()
            tasks.editTask(taskToEdit)
        }
    }
})
