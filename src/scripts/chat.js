import API from "./chatData.js"
import renderMessages from "./chatDOM.js"

document.querySelector("#newMessage").addEventListener("keypress", event => {
  if (event.charCode == 13) {
    let newMessage = { message: event.target.value }
    API.submitMessage(newMessage).then(API.getMessages).then(renderMessages)
  }
})