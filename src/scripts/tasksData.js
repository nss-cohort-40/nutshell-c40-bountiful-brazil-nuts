// Author: Zane Bliss
// Purpose: To expose task database resources to other modules

const tasksAPI = {
    getTasks() {
        return fetch(`http://localhost:8088/tasks`)
            .then(response => response.json())
    },
    getTask(id) {
        return fetch(`http://localhost:8088/tasks/${id}`)
            .then(response => response.json())
    },
    editTask(id, obj) {
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(response => response.json())
    },
    saveTask(object) {
        return fetch(`http://localhost:8088/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
    },
    deleteTask(id) {
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }
}

export default tasksAPI