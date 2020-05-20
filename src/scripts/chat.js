import API from "./chatData.js"
import renderMessage from "./chatDOM.js"
import chat from "./chatComp.js"


chat.makeChatBoxAppear();
let newMessage = document.getElementById("newMessage")

// let container = document.querySelector("#container")

// let chatBox = document.createElement("div");
// chatBox.setAttribute("id", "chatBox");

// let newMessage = document.createElement("input");
// newMessage.type = "text"
// newMessage.setAttribute("id", "newMessage")
// newMessage.setAttribute("placeholder", "New message")

document.querySelector("#newMessage").addEventListener("keypress", event => {
  if (event.charCode == 13) {
    // let currentUser =  ?? SORT HOW TO TARGET USERID FROM LOGGED-IN USER
    let newMessage = { content: event.target.value }
    let messageId
    if (newMessage.content != "") {
      API.submitMessage(newMessage).then(response => {
        messageId = response.id;
        API.getMessage(messageId).then(renderMessage)
      })
    }
  }
}
)


// function prepopulateEdit(message) {
//   messageId: 
//   }

const editMessage = document.querySelector(".editBtn")

// editMessage.addEventListener("click", event => {

// })