// Author: Zane Bliss
// Purpose: To expose database resources to other modules.

const API = {
    // Get functions from the API
    getUsers() {
        return fetch("http://localhost:8088/users")
            .then(response => response.json())
    },
    getArticles() {
        return fetch("http://localhost:8088/articles")
            .then(response => response.json())
    },
    getEvents() {
        return fetch("http://localhost:8088/events")
            .then(response => response.json())
    },
    getTasks() {
        return fetch("http://localhost:8088/tasks")
            .then(response => response.json())
    },
    getFriends() {
        return fetch("http://localhost:8088/friends")
            .then(response => response.json())
    },
    getMessages() {
        return fetch("http://localhost:8088/messages")
        .then(response => response.json())
    }
}

export default API