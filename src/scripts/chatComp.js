// Authors: Tanner Brainard & Zane Bliss
// Purpose: 

const makeMessageComponent = (message) => {
  return `
  <p class="message">${message.user["username"]}: <span id="message--${message.id}">${message.content}</span></p>
  <button id="messageEdit--${message.id}" class="editBtn">Edit</button>`
}

const makeChatContainer = () => {
  return `
  <div id="chatWrapper">
  <section id="chatbox">
  <p class="messages"></p>
  <input type="text" id="messageInput"></input>
  </section>
  </div>
  `
}

// HIDES NEW MESSAGE INPUT; APPENDS DIV TO CHATWRAPPER
const makeEditContainer = () => {
  let messageInput = document.querySelector("#messageInput");
  messageInput.style.display = "none";
  let editBoxDiv = document.createElement("div");
  editBoxDiv.setAttribute("id", "editChatContainer")
  document.querySelector("#chatWrapper").appendChild(editBoxDiv)
}

// CREATES EDIT INPUT & SAVE BUTTON
const makeEditInput = (message) => {
  return `<input type="text" id="chatId" value=""></input>
  <button id="messageSave--${message.id}" class="saveBtn">Save</button>`
}

export default { makeMessageComponent, makeChatContainer, makeEditContainer, makeEditInput }