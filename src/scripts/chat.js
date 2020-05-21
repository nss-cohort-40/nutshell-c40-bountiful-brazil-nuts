// Author: Tanner Brainard

import chatComp from "./chatComp.js"
import API from "./chatData.js"
import chatDOM from "./chatDOM.js"


document.querySelector("#container").addEventListener("keypress", event => {
  if (event.target.id == "newMessage") {
    if (event.charCode == 13) {
      // SORT HOW TO TARGET USERID FROM LOGGED-IN USER
      let newMessage = { content: event.target.value }
      let messageId
      if (newMessage.content != "") {
        API.submitMessage(newMessage).then(response => {
          messageId = response.id;
          API.getMessage(messageId).then(chatDOM.renderMessage)
          document.getElementById("newMessage").value = "";
        })
      }
    }
  }
}
)


// function prepopulateEdit(message) {
//   messageId: 
//   }

// const editBtn = document.querySelector(".editBtn")

document.querySelector("#container").addEventListener("click", event => {
  // debugger;
  if (event.target.id.startsWith("messageEdit--")) {
    let messageId = event.target.id.split("--")[1];
    chatComp.makeEditBox()
    // debugger
    // chatDOM.renderEditBox()
    // TODO: CREATE EDIT TEXT BOX ON CLICK
    // TODO: PREPOPULATE BOX WITH CURRENT MESSAGE
    // API.getMessage(messageId).then(chatComp.makeEditBox)
    // TODO: CREATE "SAVE" AFFORDANCE
    // TODO: CLICK EVENT ON AFFORDANCE TO "PUT" EDITED TEXT
    // TODO: RENDER EDITED TEXT
    // let editBox = chatComp.makeEditBox(message)
    // editBox.style.display = "block";
  }
})