import taskComponent from "./tasksComponent.js"
import tasksAPI from "./tasksData.js"
import taskFunctions from "./tasksFunctions.js"

function writeDOM () {
    document.querySelector("#container").innerHTML = taskComponent.taskDOM()
}

function writeTasks () {
    document.querySelector("#tasks").innerHTML = ""
    tasksAPI.getTasks().then(tasks => taskFunctions.renderTasks(tasks))
}

export default { writeDOM, writeTasks }