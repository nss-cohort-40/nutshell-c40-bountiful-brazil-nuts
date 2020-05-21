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
// Enable keypress event to submit newMessage(charCode == 13)
// POST newMessage to API
// GET and render newMessage to chatBox(with username prepended)
// TODO: Link userid to username and include in newMessage

const API = {
  getMessage(messageId) {
    return fetch(`http://localhost:8088/messages/${messageId}?_expand=user`).then(response => response.json());
  },
  getAllMessages() {
    return fetch("http://localhost:8088/messages?_expand=user").then(response => response.json())
  },
  submitMessage(message) {
    return fetch("http://localhost:8088/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }).then(response => response.json());
  },
  editMessage(id, obj) {
    return fetch(`http://localhost:8088/messages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  },
  getUsername(userId) {
    return fetch("http://localhost:8088/users?_embed=messages").then(response => response.json());
  }
}

export default API