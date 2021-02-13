window.addEventListener('load', function () {
    const eventName = document.getElementById('event-name');
    const listParticipants = document.getElementById('list-participants');
    const listDays = document.getElementById('list-days');
    const listTime = document.getElementById('list-time');
    const eventBtn = document.getElementById('event-btn');

    eventBtn.addEventListener('click', function () {
        const eventObj = {};
        eventObj.eventName = eventName.value;
        eventObj.listParticipants = listParticipants.value;
        eventObj.listDays = listDays.value;
        eventObj.listTime = listTime.value;
        console.log(eventObj);
    })


    function setEventData() {
        window.localStorage.setItem('event-data', '');
    }

});


// class Storage {
//
//
//     constructor() {
//         this.storage = {
//             days:{},
//             timeSlots:{},
//             users:{}
//         };
//     }
// }
//
//
// class Entity {
//     static sequence = 0;
//
//     constructor() {
//         this.id = Entity.sequence++;
//     }
// }
//
// class Day extends Entity {
//     constructor(name) {
//         super();
//         this.name = name;
//         this.timeSlots = {};
//     }
// }
//
// class TimeSlot extends Entity {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }
//
// class User extends Entity {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }