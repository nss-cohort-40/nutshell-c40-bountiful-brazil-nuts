function createEventDom () {
    document.getElementById("container").innerHTML +=  `
    <button id="newEventButton" style="display: none;">New Event</button>
    <div id="eventsContainer" style="display: none;">
    <div id="registerEventContainer">
        <input type="hidden" id="eventHiddenId" value="" />
        <div class="form-group">
            <label for="eventName">Event Name</label>
            <input type="text" name="" id="eventName" placeholder="Event Name">
        </div>
        <div class="form-group">
            <label for="eventDate">Event Name</label>
            <input type="date" name="" id="eventDate">
        </div>
        <div class="form-group">
            <label for="eventLocation">Event Location</label>
            <input type="text" name="" id="eventLocation" placeholder="Event's adress">
        </div>
        <div class="form-group">
            <button id="submitEventButton">Register</button>
        </div>
    </div>
    <div id="renderEvents">
        
    </div>
</div>`
}

function createEventButton() {

}


export default createEventDom