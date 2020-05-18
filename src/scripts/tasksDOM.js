import taskComponent from "./tasksComponent.js"

function writeDOM () {
    document.querySelector("#container").innerHTML = taskComponent.taskDOM()
}

export default { writeDOM }