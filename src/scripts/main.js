import tasksAPI from "./tasksData.js"
import tasks from "./tasks.js"
import tasksDOM from "./tasksDOM.js"

// TASKS EVENT LISTENERS
// Loading list content
tasksDOM.writeDOM()
tasks.listTasks()

const newTaskBtn = document.querySelector("#newTaskBtn")
const formView = document.querySelector("#formView")

// Task submit event listener for new task
document.querySelector("#submitBtn").addEventListener("click", event => {
    event.preventDefault()
    // Edit an existing task
    
    const hiddenTaskId = document.querySelector("#taskId").value
    if (hiddenTaskId != "") {
        tasks.editTask(hiddenTaskId)
        
    // Creating a new task
    } else {
        let taskObject = tasks.createTaskObject()
        tasksAPI.saveTask(taskObject)
    }
    // Hide form and reveal button
    newTaskBtn.style.display = "block"
    formView.style.display = "none"
})

// Hide button and reveal form
newTaskBtn.addEventListener("click", () => {
    newTaskBtn.style.display = "none"
    formView.style.display = "block"
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
