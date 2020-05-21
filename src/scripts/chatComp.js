// Authors: Tanner Brainard & Zane Bliss

const makeMessageComponent = (message) => {
  return `
  <p class="message">${"Username"}: ${message.content}</p>
  <button id="messageEdit--${message.id}" class="editBtn">Edit</button>`
}

const makeChatContainer = () => {
  return `
  <section id="chatbox">
  <input type="text" id="newMessage"></input>
  <p class="messages"></p>
  </section>
  `
}

const makeEditBox = () => {
  return `<input type="text" id="editBox"></input>
  <button id="saveEditBtn" class="saveBtn">Save</button>`
}

export default { makeMessageComponent, makeChatContainer, makeEditBox }