import margherita from './margherita.jpg'
import capriciosa from './capriciosa.jpg'
import hampizza from './ham-pizza.jpg'

import water from './water.jpg'
import cocaCola from './coca-cola.jpg'
import mojito from './mojito.jpg'

const contentDiv = document.querySelector("#content")

export function menuPageLoad(){
    const mainHeader = document.createElement("h1")
    mainHeader.textContent = "Menu";
    contentDiv.appendChild(mainHeader);

    const pizzasDiv = document.createElement("div");
    pizzasDiv.id = "pizzas-div";

    const pizzasHeader = document.createElement("h3");
    pizzasHeader.textContent = "Pizzas";
    pizzasHeader.id = "pizzas-header";
    pizzasDiv.appendChild(pizzasHeader);

    const pizzas = ["Margherita", "Capriciosa", "Vesovio"];
    const pricesPizzas = [10, 13, 15];
    const descriptionsPizzas = ["Good ol' cheesy pizza", "Margherita but with shrooms and ham", "DOUBLE HAM!"];

    const pizzasPhotos = [margherita, capriciosa, hampizza]

    for (let i = 0; i < pizzas.length; i++) {
        const pizzaDiv = document.createElement("div")
        pizzaDiv.id = pizzas[i].toLowerCase();

        pizzaDiv.classList.add("pizza");
        
        const pizzaName = document.createElement("h4");
        pizzaName.textContent = pizzas[i];

        const pizzaPrice = document.createElement("p");
        pizzaPrice.textContent = pricesPizzas[i].toString() + " $";

        const pizzaPhoto = document.createElement("img");
        pizzaPhoto.src = pizzasPhotos[i];
        pizzaPhoto.classList.add("pizza-photo");

        const pizzaDescription = document.createElement("p");
        pizzaDescription.textContent = descriptionsPizzas[i];

        pizzaDiv.appendChild(pizzaName);
        pizzaDiv.appendChild(pizzaPrice);
        pizzaDiv.appendChild(pizzaPhoto);
        pizzaDiv.appendChild(pizzaDescription);

        pizzasDiv.appendChild(pizzaDiv);
    }

    contentDiv.appendChild(pizzasDiv);

    const beveragesMenu = document.createElement("div");
    beveragesMenu.id = "beverages-div";

    const beveragesHeader = document.createElement("h3");
    beveragesHeader.textContent = "Beverages";
    beveragesHeader.id = "beverages-header";
    beveragesMenu.appendChild(beveragesHeader);

    const beverages = ["Water", "Coca-cola", "Mojito"];
    const pricesBeverages = [2, 5, 7];
    const descriptionsBeverages = ["Plain water", "Good old coke", "Refreshing lime, lemon and mint mixed together"];
    const beveragesPhotos = [water, cocaCola, mojito];

    for (let i = 0; i < beverages.length; i++) {
        const beverageDiv = document.createElement("div")
        beverageDiv.id = beverages[i].toLowerCase();

        beverageDiv.classList.add("beverage");

        const beverageName = document.createElement("h4");
        beverageName.textContent = beverages[i];

        const beveragePrice = document.createElement("p");
        beveragePrice.textContent = pricesBeverages[i].toString() + " $";

        const beveragePhoto = document.createElement("img");
        beveragePhoto.src = beveragesPhotos[i];
        beveragePhoto.classList.add("beverage-photo");

        const beverageDescription = document.createElement("p");
        beverageDescription.textContent = descriptionsBeverages[i];

        beverageDiv.appendChild(beverageName);
        beverageDiv.appendChild(beveragePrice);
        beverageDiv.appendChild(beveragePhoto)
        beverageDiv.appendChild(beverageDescription);

        beveragesMenu.appendChild(beverageDiv);
    }

    contentDiv.appendChild(beveragesMenu);

}
