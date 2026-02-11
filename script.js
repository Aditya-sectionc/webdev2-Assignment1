const eventList = document.getElementById("eventList");
const emptyMessage = document.getElementById("emptyMessage");

function addEvent() {
    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();

    if (!title || !date) {
        alert("Please fill in required fields!");
        return;
    }

    emptyMessage.style.display = "none";

    const eventDiv = document.createElement("div");
    eventDiv.className = "event-item";

    eventDiv.innerHTML = `
        <strong>${title}</strong><br>
        Date: ${date}<br>
        Category: ${category}<br>
        ${description}
    `;

    eventList.appendChild(eventDiv);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function clearEvents() {
    eventList.innerHTML = "";
    eventList.appendChild(emptyMessage);
    emptyMessage.style.display = "block";
}

function addSampleEvents() {
    const samples = [
        { title: "Tech Conference", date: "2026-02-20", category: "Conference" },
        { title: "JS Workshop", date: "2026-03-10", category: "Workshop" }
    ];

    samples.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.className = "event-item";

        eventDiv.innerHTML = `
            <strong>${event.title}</strong><br>
            Date: ${event.date}<br>
            Category: ${event.category}
        `;

        eventList.appendChild(eventDiv);
    });

    emptyMessage.style.display = "none";
}

document.addEventListener("keydown", function (event) {
    document.getElementById("keyDisplay").textContent =
        "You Pressed: " + event.key;
});
