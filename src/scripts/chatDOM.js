import makeMessageComponent from "./chatComponent.js"

const renderMessages = (messages) => {
  let chatHistory = document.querySelector("#chatBox");
  messages.forEach(message => {
    chatHistory.innerHTML += makeMessageComponent(message);
  })
}

export default renderMessages