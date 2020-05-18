// Author: Zane Bliss
// Purpose: To provide task component creation functions.

const createTask = object => {
    return `
    <p>${object.task}</p>
    <p>${object.dueDate}</p>
    <button id="completeTask--${object.id}">Complete</button>
    <button id="editTask--${object.id}">Edit</button
    `
}

export default { createTask }