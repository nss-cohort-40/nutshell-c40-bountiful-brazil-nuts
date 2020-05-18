// Chat Functionality:
// chat container that displays messages from users
// container has text input box to write message
// message sent on enter keypress(charCode == 13)
// message is displayed(username on left, message to right)
// most recent messages displayed at bottom of container
// container has scroll function to see older messages
// edit affordance on each message(only viewable by user that sent it)
// edit box appears(prepopulated) and text editing enabled
// edits are saved by save affordance

// TODO: Create html string template for container(id="chatBox")
// TODO: Create html string template for messages(class="message") ??
// TODO: Create text input for message
// TODO: Enable keypress event to submit newMessage(charCode == 13)
// TODO: POST newMessage to API
// TODO: GET and render newMessage to chatBox(with username prepended)



const apiUrl = "http://localhost:8088/messages";

const API = {
  getMessages() {
    return fetch(`${apiUrl}`).then(response => response.json());
  },
  submitMessage(message) {
    return fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }).then(response => response.json());
  },
}

export default API









// let container = document.querySelector("#container")

// let chatBox = document.createElement("div");
// chatBox.setAttribute("id", "chatBox");

// let newMessage = document.createElement("input");
// newMessage.type = "text"

// document.container.appendChild("chatBox")