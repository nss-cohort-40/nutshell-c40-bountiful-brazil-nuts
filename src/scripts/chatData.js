// Authors: Tanner & Zane Bliss
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