import tasksAPI from "./tasksData.js"
import taskFunctions from "./tasksFunctions.js"
import tasksDOM from "./tasksDOM.js"
import regDOM from "./regDOM.js"
import makeWelcome from "./welcComp.js"
import renderWelcome from "./welcDOM.js"
import renderForm from "./regDOM.js"
import regData from "./regData.js"
import makeRegistrationForm from "./regComp.js"
import loginForm from "./loginComp.js"

// REGISTRATION

renderWelcome();
tasksDOM.writeDOM()
tasksDOM.writeTasks()
renderForm();

// HTML DOM component variables
const container = document.getElementById("container")
const welcomeWrapper = document.getElementById("welcomeWrapper")
const tasksWrapper = document.getElementById("tasksWrapper")
const registrationWrapper = document.getElementById("registrationWrapper")

// EVENT LISTENER TO POPULATE REGISTRATION FORM - "REGISTER A NEW ACCOUNT" BUTTON
container.addEventListener("click", event => {
    if (event.target.id.startsWith("populate--")) {
        showElement(welcomeWrapper, false)
        showElement(registrationWrapper, true)
    }
})

// FUNCTIONS
// This shows or hides an element based upon passing the element and a true or false
const showElement = (element, boolean) => {
    if (boolean == true) {
        element.style.display = "block"
    } else if (boolean == false) {
        element.style.display = "none"
    }
}

// EVENT LISTENER TO CREATE ACCOUNT AFTER COMPLETING REGISTRATION FORM - "REGISTER" BUTTON
container.addEventListener("click", event => {
    if (event.target.id.startsWith("register--")) {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let email = document.getElementById("emailAddress").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let newAccount = Data.createAccountObj(username, email);
        if (username !== "" && email !== "" && password !== "" && confirmPassword !== "") {
            // DO THIS IS IF ALL FORM FIELDS ARE FILLED
            Data.getAccounts()
                .then(users => {
                    // MAKE USER EMAILS ARRAY
                    let userEmails = users.map(user => user.email)
                    if (userEmails.some((element) => element === email)) {
                        // DO THIS IF USER EMAILS ARRAY INCLUDES EMAIL ALREADY
                        window.alert("Email address already in use");
                    } else {
                        // DO THIS IF EMAIL NOT INCLUDED IN USER EMAIL ARRAY
                        if (password === confirmPassword) {
                            showElement(registrationWrapper, false)
                            // Add showElement functions here to display your section
                            showElement(tasksWrapper, true)
                            // DO THIS IF ALL VALIDATION PASSES
                            return Data.addNewAccount(newAccount)
                        } else {
                            // DO THIS IF PASSWORD AND CONFIRM PASSWORD DON'T MATCH
                            window.alert("Passwords do not match")
                        }
                    }
                }).then ( response => response.json()).then( user => {
                    sessionStorage.setItem('activeUser', user.id)
                })
            } else {
                // DO THIS IS IF ANY FORM FIELD IS BLANK
                window.alert("Please complete your registration")
            }
        }
    })


    
welcomeWrapper.addEventListener("click", event => {
    if (event.target.id == "login") {
        welcomeWrapper.innerHTML += loginForm.loginForm()
        let username = document.getElementById("userName")
        let password = document.getElementById("loginPassword")
        regData.getAccounts().then( accounts => {
            accounts.forEach(account => {
                console.log(account);
            });
        })
        // showElement(welcomeWrapper, false)
        // showElement(registrationWrapper, false)
        // showElement(tasksWrapper, true)
    }
})

// TASKS EVENT LISTENERS


const newTaskBtn = document.querySelector("#newTaskBtn")
const formView = document.querySelector("#formView")

// Hide button and reveal form
newTaskBtn.addEventListener("click", () => {
    event.preventDefault()
    newTaskBtn.style.display = "none"
    formView.style.display = "block"
})

// Task submit event listener for new task
document.querySelector("#submitBtn").addEventListener("click", () => {
    // Edit an existing task
    event.preventDefault()
    let taskObject = taskFunctions.createTaskObject()
    tasksAPI.saveTask(taskObject).then(tasksDOM.writeTasks)

    newTaskBtn.style.display = "block"
    formView.style.display = "none"
})


// Task complete button event listener
document.querySelector("#tasks").addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id.startsWith("completeTask--")) {
        let taskId = event.target.id.split("--")[1]
        tasksAPI.getTask(taskId).then(task => {
            task.completed = true
            tasksAPI.editTask(task.id, task).then(tasksDOM.writeTasks)
        })
    }
})

// Editing a task
document.querySelector("#tasks").addEventListener("keypress", event => {
    if (event.target.id.startsWith("taskName--")) {
        let taskToEdit = event.target.id.split("--")[1]
        if (event.charCode == 13) {
            event.preventDefault()
            taskFunctions.editTask(taskToEdit)
        }
    }
})

// Deleting a task
document.querySelector("#tasks").addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id.startsWith("deleteTask--")) {
        let taskId = event.target.id.split("--")[1]
        tasksAPI.deleteTask(taskId)
        document.querySelector(`#taskDiv--${taskId}`).remove()
    }
})