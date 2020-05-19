import taskComponent from "./tasksComponent.js"
import tasksAPI from "./tasksData.js"
import tasks from "./tasks.js"

function writeDOM () {
    document.querySelector("#container").innerHTML = taskComponent.taskDOM()
}

function writeTasks () {
    document.querySelector("#tasks").innerHTML = ""
    tasksAPI.getTasks().then(taskObjects => tasks.renderTasks(taskObjects))
}

export default { writeDOM, writeTasks }