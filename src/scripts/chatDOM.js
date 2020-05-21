// Author: Tanner Brainard
import chatComp from "./chatComp.js";


// RENDERS CHATBOX TO DOM
function renderChatBox() {
  document.getElementById("container").innerHTML += chatComp.makeChatContainer();
}

// RENDERS ALLMESSAGES ON CHATBOX LOAD
const renderAllMessages = (messages) => {
  let messageHistory = document.querySelector(".messages")
  messages.forEach(message => {
    messageHistory.innerHTML += chatComp.makeMessageComponent(message);
  })
}

// RENDERS NEWMESSAGE TO CHATBOX(ENTERED BY USER)
const renderMessage = (message) => {
  let newMessage = document.querySelector(".messages");
  newMessage.innerHTML += chatComp.makeMessageComponent(message);
}

// FUNC TO TARGET INPUT FIELD FOR THE EDIT(MAYBE PUT IF STATEMENT IN CLICK EVENT?)
function renderEditBox(messageId) {
  let messageToEdit = document.querySelector(".message");

}


export default { renderMessage, renderChatBox, renderAllMessages }