// Registration imports
import regDOM from "./regDOM.js"
import Data from "./regData.js"
import makeRegistrationForm from "./regComp.js"

// Tasks imports
import tasksAPI from "./tasksData.js"
import tasks from "./tasks.js"
import tasksDOM from "./tasksDOM.js"

const container = document.getElementById("container")

// regDOM.renderForm();


// EVENT LISTENER TO CREATE ACCOUNT AFTER COMPLETING REGISTRATION FORM
container.addEventListener("click", event => {
    if (event.target.id.startsWith("register--")) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("emailAddress").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let newAccount = regDOM.createAccount(username, email, password);
    if (username !== "" && email !== "" && password !== "" && confirmPassword !== "") {
        // DO THIS IS IF ALL FORM FIELDS ARE FILLED
        Data.getAccounts()
        .then(users => {
            // MAKE USER EMAILS ARRAY
            let userEmails = users.map(user => user.email)
            if (userEmails.some((element) => element === email)) {
            //     // DO THIS IF USER EMAILS ARRAY INCLUDES EMAIL ALREADY
                window.alert("Email address already in use");
            } else {
            //     // DO THIS IF EMAIL NOT INCLUDED IN USER EMAIL ARRAY
                if (password === confirmPassword) {
            //         // DO THIS IF ALL VALIDATION PASSES
                    return Data.addNewAccount(newAccount);
                } else {
            //         // DO THIS IF PASSWORD AND CONFIRM PASSWORD DON'T MATCH
                    window.alert("Passwords do not match")
                }
            }
        })
    } else {
        // DO THIS IS IF ANY FORM FIELD IS BLANK
        window.alert("Please complete your registration")
    }
}
})
    


// TASKS EVENT LISTENERS
// Loading list content
tasksDOM.writeDOM()
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