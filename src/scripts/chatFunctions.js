// Author: Zane Bliss
// Purpose: Functions for edit-message features

import API from "./chatData.js"

// CREATES MESSAGE OBJ, "PUT" IT TO API, THEN "GET"
function editMessage(id) {
  const updatedMessage = {
    userId: parseInt(id),
    content: document.querySelector("#chatId").value
  }
  return API.editMessage(id, updatedMessage)
}

// POPULATE EDITBOX INPUT WITH SELECTED MESSAGE'S CONTENT
function preloadMessage(messageId) {
  let message = document.querySelector(`#message--${messageId}`).innerHTML
  document.querySelector("#chatId").value = message
}

export default { editMessage, preloadMessage }