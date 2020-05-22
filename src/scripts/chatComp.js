// Authors: Tanner Brainard & Zane Bliss
// Purpose: Dynamically create HTML components

const makeMessageComponent = (message) => {
  return `
  <p class="message--${message.id}">${message.user.username}: <span id="message--${message.id}">${message.content}</span></p>
  <button id="messageEdit--${message.id}" class="editBtn">Edit</button>`
}

const makeChatContainer = () => {
  return `
  <div id="chatWrapper">
  <section id="chatbox">
  <input type="text" id="messageInput"></input>
  <p class="messages"></p>
  </section>
  </div>
  `
}

// HIDES NEW MESSAGE INPUT; APPENDS DIV TO CHATWRAPPER
const makeEditContainer = () => {
  let editBoxDiv = document.createElement("div");
  editBoxDiv.setAttribute("id", "editChatContainer")
  document.querySelector("#chatWrapper").appendChild(editBoxDiv)
}

// CREATES EDIT INPUT & SAVE BUTTON
const makeEditInput = () => {
  return `<input type="text" id="chatId" value=""></input>
  <button id="messageSave" class="saveBtn">Save</button>`
}

export default { makeMessageComponent, makeChatContainer, makeEditContainer, makeEditInput }