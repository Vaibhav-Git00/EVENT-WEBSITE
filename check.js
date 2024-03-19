const events = [
    {
        title: "Event 1",
        date: "2023-09-15",
        location: "Venue 1",
        timer: "3 days left",
        image: "https://via.placeholder.com/150", // Example image link
    },
    {
        title: "Event 2",
        date: "2023-10-10",
        location: "Venue 2",
        timer: "5 days left",
        image: "https://imgs.search.brave.com/V5c2n6fFTMDbOZy8E_ufEcXs6zSdSfDFNExYJ384FpQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTk4/MzA0Ni9wZXhlbHMt/cGhvdG8tMTk4MzA0/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA", // Example image link
    },
    {
        title: "Event 3",
        date: "2023-11-20",
        location: "Venue 3",
        timer: "1 day left",
        image: "https://via.placeholder.com/150", // Example image link
    },
];

function addEventCards() {
    const eventList = document.getElementById("event-list");

    events.forEach((event, index) => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");

        eventCard.innerHTML = `
            <h2>${event.title}</h2>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p class="timer">Timer: <span id="timer-${index}">${event.timer}</span></p>
            <img src="${event.image}" alt="Event Image"> <!-- Include image here -->
            <button onclick="registerForEvent(${index})">Register</button>
        `;

        eventList.appendChild(eventCard);

        // Start timer
        startTimer(index, event.timer);
    });
}

function startTimer(index, timerValue) {
    // Extract days from the timer value
    const daysLeft = parseInt(timerValue.split(" ")[0]);

    // Set timer interval
    const timerInterval = setInterval(() => {
        // Update timer value
        const timerElement = document.getElementById(`timer-${index}`);
        if (daysLeft > 0) {
            daysLeft--;
            timerElement.textContent = `${daysLeft} days left`;
        } else {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
            timerElement.textContent = "Event expired";
        }
    }, 86400000); // 86400000 milliseconds = 1 day
}

function registerForEvent(index) {
    alert(`You are registered for ${events[index].title}`);
}

// Call the function to add event cards when the window loads
window.onload = addEventCards;
