const contentDiv = document.querySelector("#content")

export function homePageLoad(){
    const mainHeader1 = document.createElement("h1")
    mainHeader1.textContent = "The Other Good Restaurant";
    contentDiv.appendChild(mainHeader1);

    const hoursDiv = document.createElement("div");
    hoursDiv.id = "hours-div";

    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Hours";
    hoursHeader.id = "hours-header";
    hoursDiv.appendChild(hoursHeader);

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const hours = ["6am - 6pm", "6am - 6pm", "6am - 6pm", "6am - 10pm", "6am - 10pm", "8am - 10pm", "8am - 8pm"];

    for (let i = 0; i < weekdays.length; i++) {
        const weekday = document.createElement("p");
        weekday.classList.add("weekday");
        // weekday.id = `${weekdays[i].toLowerCase()}`;
        weekday.textContent = `${weekdays[i]}: ${hours[i]}`;

        hoursDiv.appendChild(weekday);
    }
    contentDiv.appendChild(hoursDiv);

    const locationDiv = document.createElement("div");
    locationDiv.id = "location-div";

    const locationHeader = document.createElement("h3");
    locationHeader.textContent = "Location";
    locationHeader.id = "location-header";
    locationDiv.appendChild(locationHeader);

    const locationText = document.createElement("p");
    locationText.textContent = "123 Forest Drive, Forestville, Maine";
    locationDiv.appendChild(locationText);

    contentDiv.appendChild(locationDiv);

}
