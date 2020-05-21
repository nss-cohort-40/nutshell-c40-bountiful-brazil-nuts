// Author: Felipe Moura
// Propose: 1 - Render array of events in the DOM; 2 - function factory of event obj; 3 - render/organizer of event arrays;
// 4 - render information in the form to edit/creat event

import APIevents from "./eventsData.js"


const eventsDOM = {

    // Render array in the DOM, parameters: array, DOM Element target where the childs will be append
    renderEvent(array, target) {
        target.textContent = ""
        let fragment = document.createDocumentFragment();

        for (let i in array) {

            let event = array[i]

            let id = +event.id
            let name = event.name
            let date = event.date
            let location = event.location

            let newDiv = document.createElement("div")
            newDiv.classList.add("events")
            newDiv.setAttribute("id", `event--main--id--${id}`)

            // Check if it's the first event of multiple to change the bg-color with the CSS class first-event
            i == 0 && array.length > 1 ? newDiv.classList.add("first-event") : +id

            let titleDOM = document.createElement("h3")
            titleDOM.textContent = name;
            newDiv.appendChild(titleDOM)


            let dateDOM = document.createElement("h4")
            dateDOM.textContent = date;
            newDiv.appendChild(dateDOM)


            let locationDOM = document.createElement("h4")
            locationDOM.textContent = location;
            newDiv.appendChild(locationDOM)

            //Edit button
            let buttonE = document.createElement("button")
            buttonE.classList.add("btn", "btn-primary", "mr-2")
            buttonE.setAttribute("id", `event--edit--id--${id}`)
            buttonE.textContent = "Edit"
            newDiv.appendChild(buttonE)

            // Delete button 
            let buttonD = document.createElement("button")
            buttonD.classList.add("btn", "btn-primary")
            buttonD.setAttribute("id", `event--delete--id--${id}`)
            buttonD.textContent = "Delete"
            newDiv.appendChild(buttonD)

            fragment.appendChild(newDiv)
        }

        target.appendChild(fragment)
    },


    //Factory event
    createEventObjec(userID, name, date, location) {
        return {
            userID,
            name,
            date,
            location
        }
    },

    // Sort events by date and so render them
    async renderOrganizedEvents (id, target) {
        let events = await APIevents.getEvents(id)

        events.sort((a, b) => {
            let dateA = new Date(a.date)
            let dateB = new Date(b.date)
            return dateA - dateB
        })
        eventsDOM.renderEvent(events, target)
    },

    

// UPDATE FORM FIELD
updateFormField(data = null){
    let eventName = document.getElementById("eventName")
    let eventDate = document.getElementById("eventDate")
    let eventLocation = document.getElementById("eventLocation")
    let eventHiddenId = document.getElementById("eventHiddenId")

    if (!!data) {
        eventName.value = data["name"]
        eventDate.value = data["date"]
        eventLocation.value = data["location"]
        eventHiddenId.value = data["id"]
    }
    else {
        eventName.value = ""
        eventDate.value = ""
        eventLocation.value = ""
        eventHiddenId.setAttribute("value", "")
    }
}

}
export default eventsDOM