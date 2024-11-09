const contentDiv = document.querySelector("#content")

export function menuPageLoad(){
    const mainHeader1 = document.createElement("h1")
    mainHeader1.textContent = "Menu";
    contentDiv.appendChild(mainHeader1);

    const pizzasDiv = document.createElement("div");
    pizzasDiv.id = "pizzas-div";

    const pizzasHeader = document.createElement("h3");
    pizzasHeader.textContent = "Pizzas";
    pizzasHeader.id = "pizzas-header";
    pizzasDiv.appendChild(pizzasHeader);

    const pizzas = ["Margherita", "Capriciosa", "Vesovio"];
    const pricesPizzas = [10, 13, 15];
    const descriptionsPizzas = ["Good ol' cheesy pizza", "Margherita but with shrooms and ham", "DOUBLE HAM!"];

    for (let i = 0; i < pizzas.length; i++) {
        const pizzaDiv = document.createElement("div")
        pizzaDiv.id = pizzas[i].toLowerCase();

        pizzaDiv.classList.add("pizza");
        
        const pizzaName = document.createElement("h4");
        pizzaName.textContent = pizzas[i];

        const pizzaPrice = document.createElement("p");
        pizzaPrice.textContent = pricesPizzas[i].toString();

        const pizzaDescription = document.createElement("p");
        pizzaDescription.textContent = descriptionsPizzas[i];

        pizzaDiv.appendChild(pizzaName);
        pizzaDiv.appendChild(pizzaPrice);
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

    for (let i = 0; i < beverages.length; i++) {
        const beverageDiv = document.createElement("div")
        beverageDiv.id = beverages[i].toLowerCase();

        beverageDiv.classList.add("beverage");

        const beverageName = document.createElement("h4");
        beverageName.textContent = beverages[i];

        const beveragePrice = document.createElement("p");
        beveragePrice.textContent = pricesBeverages[i].toString();

        const beverageDescription = document.createElement("p");
        beverageDescription.textContent = descriptionsBeverages[i];

        beverageDiv.appendChild(beverageName);
        beverageDiv.appendChild(beveragePrice);
        beverageDiv.appendChild(beverageDescription);

        beveragesMenu.appendChild(beverageDiv);
    }

    contentDiv.appendChild(beveragesMenu);

}
