// Author: Felipe Moura
// Propose: Lead with server requests referent to Events

const APIevents = {

    // GET all events
    async getEvents(id) {
        let events = await fetch(`http://localhost:8088/events/?userID=${id}`).then(data => data.json())
        console.log(events)
        return events
    },

    // GET one events
    async getOneEvent(id) {
        let event = await fetch(`http://localhost:8088/events/${id}`).then(data => data.json())
        return event
    },

    // POST an event
    async postEvent(obj) {
        let posted = await fetch("http://localhost:8088/events",
            {
                method: "POST",
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(data => data.json())
        return posted
    },

    // EDIT an event 
    async editEvent(id, obj) {
        let posted = await fetch(`http://localhost:8088/events/${id}`,
            {
                method: "PUT",
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            })
        return posted
    },

    // DELETE an event 
    async deleteEvent(id) {
        let posted = await fetch(`http://localhost:8088/events/${id}`,
            {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' }
            })
        return posted
    }
}

export default APIevents