import tasksAPI from "./tasksData.js"
import taskFunctions from "./tasksFunctions.js"
import tasksDOM from "./tasksDOM.js"
import regDOM from "./regDOM.js"
import makeWelcome from "./welcComp.js"
import renderWelcome from "./welcDOM.js"
import renderForm from "./regDOM.js"
import regData from "./regData.js"
import makeRegistrationForm from "./regComp.js"
import loginDOM from "./loginDOM.js"
import APIevents from "./eventsData.js"
import eventsDOM from "./eventsDOM.js"
import createEventDom from "./eventsComp.js"
import articlesDOM from "./articlesDOM.js"
import articlesComp from "./articlesComp.js"
import articlesData from "./articlesData.js"
import chatDOM from "./chatDOM.js"
import chatAPI from "./chatData.js"
import chatComp from "./chatComp.js"
import chatFunctions from "./chatFunctions.js"

renderWelcome();
tasksDOM.writeDOM()
tasksDOM.writeTasks()
loginDOM.renderDOM()
articlesDOM.renderArticleContainer();
renderForm();
createEventDom();
chatDOM.renderChatBox()
chatAPI.getAllMessages().then(chatDOM.renderAllMessages)


// HTML DOM component variables
const container = document.getElementById("container")
const welcomeWrapper = document.getElementById("welcomeWrapper")
const tasksWrapper = document.getElementById("tasksWrapper")
const articlesWrapper = document.getElementById("articlesWrapper")
const registrationWrapper = document.getElementById("registrationWrapper")
const loginWrapper = document.getElementById("loginWrapper")
const newEventButton = document.getElementById("newEventButton")
const eventsContainer = document.getElementById("eventsContainer")
const chatWrapper = document.getElementById("chatWrapper")
let activeUser = 0;
let arrayWrap = [welcomeWrapper, articlesWrapper, tasksWrapper, registrationWrapper, eventsContainer]

// REGISTRATION

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
        let newAccount = regData.createAccountObj(username, email, password);
        if (username !== "" && email !== "" && password !== "" && confirmPassword !== "") {
            // DO THIS IS IF ALL FORM FIELDS ARE FILLED
            regData.getAccounts()
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
//                             // Add showElement functions here to display your section
// <<<<<<< HEAD
//                             //>>>>>>>>showElement(tasksWrapper, true)
//                             // >>>>>>>>>>>>>>> showElement(newEventButton, true)
//                             //showElement(articlesWrapper, true)
// =======
//                             showElement(tasksWrapper, true)
//                             showElement(newEventButton, true)
//                             showElement(articlesWrapper, true)
//                             showElement(chatWrapper, true)
// >>>>>>> f96c8aab013710180016857896c66903dc29dd44
                            // DO THIS IF ALL VALIDATION PASSES
                            return regData.addNewAccount(newAccount)
                        } else {
                            // DO THIS IF PASSWORD AND CONFIRM PASSWORD DON'T MATCH
                            window.alert("Passwords do not match")
                        }
                    }
                }).then(response => response.json())
                .then(user => {
                    return sessionStorage.setItem('activeUser', user.id)
                })
        } else {
            // DO THIS IS IF ANY FORM FIELD IS BLANK
            window.alert("Please complete your registration")
        }
    }
})

// Login functionality
welcomeWrapper.addEventListener("click", event => {
    if (event.target.id == "login") {
        showElement(loginWrapper, true)
    }
    if (event.target.id == "submit") {
        activeUser = parseInt(sessionStorage.getItem('activeUser'))
        showElement(welcomeWrapper, false)
        showElement(registrationWrapper, false)
        articlesData.getUsersArticles(activeUser)
        let username = document.querySelector("#loginUsername").value
        let password = document.querySelector("#loginPassword").value
        if (username == "" || password == "") {
            alert("Please enter a username and password.")
        } else {
            regData.getAccounts().then(accounts => {
                if (accounts.length == 0) {
                    alert("No account found.")
                } else if (accounts.length >= 1) {
                    accounts.forEach(account => {
                        if (username == account.username && password == account.password) {
                            sessionStorage.clear()
                            sessionStorage.setItem("activeUser", account.id)
                            activeUser = parseInt(sessionStorage.getItem("activeUser"))
// <<<<<<< HEAD
//                             // showElement(welcomeWrapper, false)
//                             // showElement(registrationWrapper, false)
//                             // showElement(tasksWrapper, true)
//                             // showElement(articlesWrapper, true)
//                             // showElement(newEventButton, true)
// =======
//                             showElement(welcomeWrapper, false)
//                             showElement(registrationWrapper, false)
//                             showElement(tasksWrapper, true)
//                             showElement(articlesWrapper, true)
//                             showElement(newEventButton, true)
//                             showElement(chatWrapper, true)
// >>>>>>> f96c8aab013710180016857896c66903dc29dd44
                            articlesData.getUsersArticles(activeUser)
                        }
                    })
                }
                else {
                    alert("No account found.")
                }
            })
        }
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

// // Task submit event listener for new task
document.querySelector("#submitBtn").addEventListener("click", () => {
    // Edit an existing task
    event.preventDefault()
    let taskObject = taskFunctions.createTaskObject()
    tasksAPI.saveTask(taskObject).then(tasksDOM.writeTasks)

    newTaskBtn.style.display = "block"
    formView.style.display = "none"
})


// // Task complete button event listener
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

// ARTICLES

// ARTICLES EVENT BUBBLER: 
container.addEventListener("click", event => {
    // NEW ARTICLE BUTTON - RENDERS NEW ARTICLE FORM
    if (event.target.id.startsWith("newArtBtn")) {
        articlesDOM.renderArticleForm();

        // EDIT BUTTON - UPDATES ARTICLE FORM FOR EDITING
    } else if (event.target.id.startsWith("editArticle")) {
        const articleId = event.target.id.split("--")[1];
        articlesDOM.renderArticleForm();
        articlesDOM.updateArticleForm(articleId);

        // DELETE BUTTON - DELETES ARTICLE
    } else if (event.target.id.startsWith("deleteArticle")) {
        activeUser = parseInt(sessionStorage.getItem('activeUser'))
        const articleId = event.target.id.split("--")[1];
        articlesData.deleteArticle(articleId)
            .then(() => {
                return articlesData.getUsersArticles(activeUser)
            })

        // SAVE ARTICLE BUTTON - ADDS OR EDITS ARTICLE
    } else if (event.target.id.startsWith("saveArticle")) {
        event.preventDefault();
        activeUser = parseInt(sessionStorage.getItem('activeUser'))
        let hiddenArticleId = document.getElementById("articleId").value;
        let title = document.getElementById("articleTitle").value;
        let synopsis = document.getElementById("articleSynopsis").value;
        let url = document.getElementById("articleURL").value;
        let articleObj = articlesData.createArticleObj(title, synopsis, url);

        // DO THIS IF ALL FORM FIELDS ARE FILLED
        if (title !== "" && synopsis !== "" && url !== "") {
            document.getElementById("articleForm-container").innerHTML = "";

            // EDITS ARTICLE
            if (hiddenArticleId !== "") {
                articlesData.getArticle(hiddenArticleId)
                    .then(articleObj => {
                        return articlesData.editArticle(articleObj, title, synopsis, url)
                    })
                    .then(article => {
                        return articlesData.getUsersArticles(article.userId)
                    });

                // ADDS NEW ARTICLE
            } else if (hiddenArticleId == "") {
                articlesData.addNewArticle(articleObj)
                    .then(() => {
                        return articlesData.getUsersArticles(activeUser)
                    });
            }

            // DO THIS IF ANY FORM FIELD IS BLANK
        } else {
            window.alert("Please complete all fields");
        }
    }
});

/* -------- START Events Part --- Author: Felipe Moura ------- */

// button pressed so show eventsContainer and render the events of the user
newEventButton.addEventListener("click", async (e) => {
    e.preventDefault();
    // showElement(eventsContainer, true);
    toggleContainer(eventsContainer)
    await eventsDOM.renderOrganizedEvents(sessionStorage.getItem("activeUser"), document.getElementById("renderEvents"))
})

// POST/PUT event handler
document.getElementById("submitEventButton").addEventListener("click", async (event) => {
    event.preventDefault();
    let eventName = document.getElementById("eventName").value
    let eventDate = document.getElementById("eventDate").value
    let eventLocation = document.getElementById("eventLocation").value

    // ID in a hidden input on the form
    let eventHiddenId = document.getElementById("eventHiddenId").value

    // Create a new event object
    let newEvent = eventsDOM.createEventObjec(eventName, eventDate, eventLocation)

    // Check IF it is editing an event or creating a new one in the form by the presence of *eventHiddenId*
    // New event
    if (!eventHiddenId) {
        if (!eventName || !eventDate || !eventLocation) {
            alert("Please complete the event's information to register it.")
        }
        else {
            await APIevents.postEvent(newEvent)
            await eventsDOM.renderOrganizedEvents(sessionStorage.getItem("activeUser"), document.getElementById("renderEvents"))

            // Clean Form Fields
            eventsDOM.updateFormField()
        }
    }

    // Editing existing event
    else {
        if (!eventName || !eventDate || !eventLocation) {
            alert("Please complete the event's information to edit it.")
        }
        else {
            await APIevents.editEvent(+eventHiddenId, newEvent)
            await eventsDOM.renderOrganizedEvents(sessionStorage.getItem("activeUser"), document.getElementById("renderEvents"))

            // Clean form fields
            eventsDOM.updateFormField()
        }
    }
})

// EDIT and DELETE event press handler
document.getElementById("container").addEventListener("click", async (e) => {
    if (e.target.id.startsWith("event")) {
        e.preventDefault();
        let action = e.target.id.split("--")[1]
        let eventID = e.target.id.split("--")[3]

        // EDIT Button pressed: send information of the event to the POST/PUT event handler, it will be responsable to send the PUT fetch call
        if (action == "edit") {
            let event = await APIevents.getOneEvent(eventID)
            eventsDOM.updateFormField(event)
        }

        // DELETE Button pressed: actually delete event
        else if (action == "delete") {
            await APIevents.deleteEvent(eventID)
            await eventsDOM.renderOrganizedEvents(sessionStorage.getItem("activeUser"), document.getElementById("renderEvents"))
        }
    }
})

/* -------- END Events Part --- Author: Felipe Moura ------- */


/*  START  DOM integration */

// Task sidebar button
document.getElementById("tasksB").addEventListener("click", (e) => {
    e.preventDefault();
    toggleContainer(tasksWrapper);
    
})

// Articles sidebar button
document.getElementById("articlesB").addEventListener("click", (e) => {
    e.preventDefault();
    toggleContainer(articlesWrapper);
    
})

// toggle the showing wrapper
const toggleContainer = (element) => {
    for (let wrap of arrayWrap) {
        wrap == element ? showElement(wrap, true) : showElement(wrap, false)
    }
}
/*  END  DOM integration */


// CHAT
// var messageBody = document.querySelector('#chatbox');
// messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight

// EVENT LISTENER TO SUBMIT/"POST" NEW MESSAGE & RENDER
document.querySelector("#chatbox").addEventListener("keypress", event => {
    if (event.target.id == "messageInput") {
        if (event.charCode == 13 && event.target.value != "") {
            let newMessage = {
                userId: parseInt(sessionStorage.getItem("activeUser")),
                content: event.target.value
            }
            let messageId
            chatAPI.submitMessage(newMessage).then(response => {
                messageId = response.id;
                chatAPI.getMessage(messageId).then(chatDOM.renderMessage)
                document.getElementById("messageInput").value = "";
            })
        }
    }
}
)

// EVENT LISTENER ON EDIT BTN; PREPOPULATES EDIT BOX WITH MESSAGE CONTENT
document.querySelector("#chatbox").addEventListener("click", event => {
    if (event.target.id.startsWith("messageEdit--")) {
        let messageId = event.target.id.split("--")[1];
        chatComp.makeEditContainer()
        chatAPI.getMessage(messageId)
        document.querySelector("#editChatContainer").innerHTML = chatComp.makeEditInput()
        chatFunctions.preloadMessage(messageId)
        document.querySelector("#messageSave").id = `messageSave--${messageId}`
    }
})

// EVENT LISTENER TO SAVE / "PUT" EDITED MESSAGE & RENDER
document.querySelector("#chatWrapper").addEventListener("click", event => {
    if (event.target.id.startsWith("messageSave")) {
        let messageId = event.target.id.split("--")[1]
        chatFunctions.editMessage(messageId).then(() => {
            let messageContent = document.querySelector("#chatId").value
            document.querySelector(`#message--${messageId}`).innerHTML = messageContent
            messageContent = document.querySelector("#chatId").value = ""
        })
    }
})
