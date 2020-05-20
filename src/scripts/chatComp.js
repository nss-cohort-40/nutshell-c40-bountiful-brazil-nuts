const makeMessageComponent = (username, message) => {
  return `<p class="message">${username}: ${message}</p>
  <button id="edit--${message.id}" class="editBtn">Edit</button>`
}

function makeChatBoxAppear() {
  let chatBox = document.getElementById("newMessage")
  chatBox.setAttribute("type", "text")
}

export default { makeMessageComponent, makeChatBoxAppear }