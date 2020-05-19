const makeMessageComponent = (username, message) => {
  return `<p class="message">${username}: ${message}</p>
  <button id="edit--${message.id}" class="editBtn">Edit</button>`
}

export default makeMessageComponent