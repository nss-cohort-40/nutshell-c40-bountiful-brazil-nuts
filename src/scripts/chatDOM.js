// Author: Tanner Brainard
// Purpose: Functions to render elemnents to DOM

import chatComp from "./chatComp.js";


// RENDERS CHATBOX TO DOM
function renderChatBox() {
  document.getElementById("chatbar--container").innerHTML += chatComp.makeChatContainer();
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

export default { renderMessage, renderChatBox, renderAllMessages }