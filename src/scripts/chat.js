import API from "./chatData.js"
import renderMessage from "./chatDOM.js"

document.querySelector("#newMessage").addEventListener("keypress", event => {
  if (event.charCode == 13) {
    // let currentUser =  ?? SORT HOW TO TARGET USERID FROM LOGGED-IN USER
    let newMessage = { content: event.target.value }
    let messageId
    if (newMessage.content != "") {
      API.submitMessage(newMessage).then(response => {
        debugger
        messageId = response.id;
        API.getMessage(messageId).then(renderMessage)
      })
    }
  }
}
)