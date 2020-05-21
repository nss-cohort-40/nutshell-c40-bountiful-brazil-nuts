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

export default { renderMessage, renderChatBox, renderAllMessages }