import makeMessageComponent from "./chatComponent.js";
import API from "./chatData.js"

// TODO: Only render new message after submitMessage called
// TODO: Only render messages sent after time of login

// FUNC TO RENDER MESSAGES TO CHATBOX
const renderMessage = (message) => {
  let chatHistory = document.querySelector("#chatBox");
  // messages.forEach(message => {
  let content = message.content
  let userId = message.userId
  // let username = API.getUsername(userId).then()
  chatHistory.innerHTML += makeMessageComponent(userId, content);
  // })
}


export default renderMessage