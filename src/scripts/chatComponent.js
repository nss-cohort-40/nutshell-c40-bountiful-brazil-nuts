const makeMessageComponent = (username, message) => {
  return `<p class="message">${username}: ${message}</p>`
}

export default makeMessageComponent