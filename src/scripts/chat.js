// Author: Zane Bliss & Tanner Brainard

import API from "./chatData.js"
import chatDOM from "./chatDOM.js"


document.querySelector("#chatbox").addEventListener("keypress", event => {
  if (event.target.id == "messageInput") {
    if (document.querySelector("#chatId") != "") {
      let messageId = document.querySelector("#chatId").value
      if (event.charCode == 13) {
        debugger
        editMessage(messageId).then(() => {
          document.querySelector(".messages").innerHTML = ""
          chatDOM.renderAllMessages
        })
      }
    }
    else if (event.charCode == 13) {
      // SORT HOW TO TARGET USERID FROM LOGGED-IN USER
      let newMessage = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        content: event.target.value
      }
      let messageId
      if (newMessage.content != "") {
        API.submitMessage(newMessage).then(response => {
          messageId = response.id;
          API.getMessage(messageId).then(chatDOM.renderMessage)
          document.getElementById("messageInput").value = "";
        })
      }
    }
  }
}
)

function editMessage(id) {
  const updatedMessage = {
    userId: parseInt(id),
    content: document.querySelector("#messageInput").value
  }
  API.editMessage(id, updatedMessage).then(API.getAllMessages)
}

document.querySelector("#chatbox").addEventListener("click", event => {
  if (event.target.id.startsWith("messageEdit--")) {
    let messageId = event.target.id.split("--")[1];
    preloadMessage(messageId)
    document.querySelector("#chatId").value = messageId
    // chatDOM.renderEditBox()
    // TODO: PREPOPULATE BOX WITH CURRENT MESSAGE
    // API.getMessage(messageId).then(chatComp.makeEditBox)
    // TODO: CREATE "SAVE" AFFORDANCE
    // TODO: CLICK EVENT ON AFFORDANCE TO "PUT" EDITED TEXT
    // TODO: RENDER EDITED TEXT
    // let editBox = chatComp.makeEditBox(message)
    // editBox.style.display = "block";
  }
})

function preloadMessage(messageId) {
  let message = document.querySelector(`#message--${messageId}`).innerHTML
  document.querySelector("#messageInput").value = message
}