const contentDiv = document.querySelector("#content")

export function aboutPageLoad() {
    const mainHeader = document.createElement("h1")
    mainHeader.textContent = "Contact us";

    contentDiv.appendChild(mainHeader);

    const contactDiv = document.createElement("div");
    contactDiv.id = "contact-div";

    const restaurantName = document.createElement("h2");
    restaurantName.textContent = "The Other Good Restaurant";

    contactDiv.appendChild(restaurantName);

    const address = document.createElement("p");
    address.textContent = "Address: 123 Forest Drive, Forestville, Maine";
    contactDiv.appendChild(address);

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone Number: 32 54 231 34";
    contactDiv.appendChild(phoneNumber);

    contentDiv.appendChild(contactDiv);
}