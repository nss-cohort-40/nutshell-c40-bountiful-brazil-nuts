// Authors: Tanner Brainard & Zane Bliss

const makeMessageComponent = (message) => {
  console.log(message)
  return `
  <p class="message">${message.user["username"]}: <span id="message--${message.id}">${message.content}</span></p>
  <button id="messageEdit--${message.id}" class="editBtn">Edit</button>`
}

const makeChatContainer = () => {
  return `
  <div id="chatWrapper">
  <section id="chatbox">
  <input type="hidden" id="chatId" value=""></input>
  <input type="text" id="messageInput"></input>
  <p class="messages"></p>
  </section>
  </div>
  `
}

export default { makeMessageComponent, makeChatContainer }