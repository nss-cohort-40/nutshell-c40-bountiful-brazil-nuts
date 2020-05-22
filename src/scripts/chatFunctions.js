// Author: Zane Bliss
// Purpose: Functions for edit message features

import API from "./chatData.js"

// 
function editMessage(id) {
  const updatedMessage = {
    userId: parseInt(id),
    content: document.querySelector("#messageInput").value
  }
  API.editMessage(id, updatedMessage).then(API.getAllMessages)
}


// POPULATE EDITBOX INPUT WITH SELECTED MESSAGE'S CONTENT
function preloadMessage(messageId) {
  let message = document.querySelector(`#message--${messageId}`).innerHTML
  document.querySelector("#chatId").value = message
}

export default { editMessage, preloadMessage }